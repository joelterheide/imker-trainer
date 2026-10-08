// Klickt den Imker-Trainer im Browser durch.
// Aufruf (Repo-Wurzel muss unter http://localhost:8765/ laufen, z. B. `python3 -m http.server 8765`):
//   NODE_PATH="$(npm root -g)" node _dev/browser-test.mjs [Ordner für Screenshots]
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const BASE = process.env.BASE_URL || "http://localhost:8765/";
const shots = process.argv[2] || null;
const errors = [];
let step = "";
const check = (cond, msg) => {
  if (!cond) throw new Error(`[${step}] ${msg}`);
  console.log("  ✓ " + msg);
};

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const context = await browser.newContext({ viewport: { width: 1200, height: 900 }, acceptDownloads: true });
const page = await context.newPage();
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
page.on("dialog", (d) => d.accept());

async function tab(name) {
  await page.click(`.tabs a[data-tab="${name}"]`);
  await page.waitForSelector(`[data-view="${name}"]:not([hidden])`);
}

// Klickt bei der aktuell angezeigten Frage die richtigen Antworten an (Daten aus window.IMKER)
async function answerCurrent(correct) {
  return page.evaluate((wantCorrect) => {
    const card = document.querySelector(".view:not([hidden]) .q");
    const text = card.querySelector(".q__text").textContent;
    const q = window.IMKER.questions.find((x) => x.q === text);
    if (!q) throw new Error("Frage nicht gefunden: " + text);
    if (q.t === "s" || q.t === "m") {
      // Jeder Klick zeichnet die Karte neu – deshalb die Knöpfe jedes Mal frisch suchen
      const right = q.c.map((i) => q.o[i]);
      const targets = wantCorrect ? right : [q.o.find((o) => !right.includes(o))];
      for (const t of targets) {
        const b = [...document.querySelectorAll(".view:not([hidden]) .q .opt")].find((x) => x.querySelector(".opt__text").textContent === t);
        b.click();
      }
    } else if (q.t === "i") {
      const input = card.querySelector(".answer-input");
      input.value = wantCorrect ? q.acc[0] : "falsch";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      card.querySelector('[data-fk="primary"]').click();
      const btn = document.querySelector(wantCorrect ? '.view:not([hidden]) [data-fk="known"]' : '.view:not([hidden]) [data-fk="unknown"]');
      btn.click();
    }
    return q.t;
  }, correct);
}

step = "Start";
await page.goto(BASE);
check((await page.title()) === "Imker-Trainer", "Titel stimmt");
const lead = await page.textContent("#start-lead");
check(/^\d+ Fragen/.test(lead), "Startseite nennt die Fragenzahl: " + lead.split(" ").slice(0, 2).join(" "));
check((await page.locator("#start-boxes .box").count()) === 6, "Karteikasten-Grafik hat 6 Fächer");
if (shots) await page.screenshot({ path: `${shots}/1-start.png`, fullPage: true });

step = "Karteikasten";
await tab("lernen");
await page.getByRole("button", { name: "Los geht’s" }).click();
check(await page.locator(".view:not([hidden]) .q").isVisible(), "Fragekarte erscheint");
const total = Number((await page.textContent(".view:not([hidden]) .session-head strong")).match(/von (\d+)/)[1]);
check(total === 15, "Runde hat 15 Karten");
// erste Karte falsch beantworten
let type = await answerCurrent(false);
if (type !== "f") await page.click('.view:not([hidden]) [data-fk="primary"]');
check(await page.locator(".view:not([hidden]) .verdict--bad, .view:not([hidden]) .verdict--part").isVisible(), "Falsche Antwort wird als falsch erkannt");
check(await page.locator(".view:not([hidden]) .explain-box").isVisible(), "Erklärung wird angezeigt");
check((await page.textContent(".view:not([hidden]) .move")).includes("Fach 1"), "Hinweis: zurück in Fach 1");
if (shots) await page.screenshot({ path: `${shots}/2-falsch.png`, fullPage: true });
await page.click('.view:not([hidden]) [data-fk="primary"]');
const total2 = Number((await page.textContent(".view:not([hidden]) .session-head strong")).match(/von (\d+)/)[1]);
check(total2 === 16, "Falsche Karte wurde zur Wiederholung eingereiht (16 Karten)");
// zweite Karte richtig, per Tastatur weiter
type = await answerCurrent(true);
if (type !== "f") await page.keyboard.press("Enter");
check(await page.locator(".view:not([hidden]) .verdict--good").isVisible(), "Richtige Antwort wird als richtig erkannt");
check((await page.textContent(".view:not([hidden]) .move")).includes("Fach 2"), "Karte steigt in Fach 2 auf");
if (shots) await page.screenshot({ path: `${shots}/3-richtig.png`, fullPage: true });
await page.keyboard.press("Enter");
check((await page.textContent(".view:not([hidden]) .session-head strong")).startsWith("Karte 3"), "Enter springt zur nächsten Karte");
// Rest der Runde richtig beantworten
for (let i = 0; i < 40; i++) {
  if (!(await page.locator(".view:not([hidden]) .q").count())) break;
  type = await answerCurrent(true);
  if (type !== "f") await page.click('.view:not([hidden]) [data-fk="primary"]');
  await page.click('.view:not([hidden]) [data-fk="primary"]');
}
check(await page.locator(".view:not([hidden]) .result-score").isVisible(), "Runde endet mit Zusammenfassung");
const summary = await page.textContent(".view:not([hidden]) .result-score");
check(summary.trim() === "14 / 15", "Zusammenfassung zählt den ersten Versuch: " + summary.trim());

step = "Test (Prüfungsmodus)";
await tab("test");
await page.getByRole("button", { name: /Wettbewerb 2026 nachspielen/ }).click();
check((await page.textContent(".view:not([hidden]) .session-head strong")) === "Frage 1 von 18", "Wettbewerbstest hat 18 Fragen");
if (shots) await page.screenshot({ path: `${shots}/4-pruefung.png`, fullPage: true });
for (let i = 0; i < 18; i++) {
  await answerCurrent(i !== 2); // Frage 3 absichtlich falsch
  const next = page.locator('.view:not([hidden]) [data-fk="next"]');
  await next.click();
}
check(await page.locator(".view:not([hidden]) .result-score").isVisible(), "Auswertung erscheint");
const score = (await page.textContent(".view:not([hidden]) .result-score")).trim();
const [got, max] = score.split(" / ").map(Number);
check(max >= 18 && got < max && got >= max - 3, "Punkte plausibel: " + score);
check((await page.locator(".view:not([hidden]) .review-item").count()) === 18, "Alle 18 Fragen in der Auswertung");
if (shots) await page.screenshot({ path: `${shots}/5-auswertung.png`, fullPage: true });
await page.getByRole("button", { name: "Falsche Fragen üben" }).click();
check((await page.textContent(".view:not([hidden]) .session-head")).includes("Fehler aus dem Test"), "Falsche Fragen landen im Karteikasten");

step = "Test (sofortige Rückmeldung)";
await tab("test");
await page.getByRole("button", { name: "Neuer Test" }).click();
await page.getByRole("button", { name: /Schnelltest/ }).click();
for (let i = 0; i < 10; i++) {
  type = await answerCurrent(true);
  if (type !== "f") await page.click('.view:not([hidden]) [data-fk="primary"]');
  check(await page.locator(".view:not([hidden]) .verdict--good").isVisible(), `Frage ${i + 1} sofort als richtig bewertet`);
  await page.click('.view:not([hidden]) [data-fk="primary"]');
}
check((await page.textContent(".view:not([hidden]) .result-score")).trim().split(" / ")[0] === (await page.textContent(".view:not([hidden]) .result-score")).trim().split(" / ")[1], "Alles richtig = volle Punktzahl");

step = "Katalog";
await tab("fragen");
const allCount = await page.textContent("#cat-count");
check(/^\d+ Fragen$/.test(allCount), "Katalog zeigt alle Fragen: " + allCount);
await page.fill("#cat-search", "oxalsäure");
await page.waitForTimeout(250);
const found = Number((await page.textContent("#cat-count")).split(" ")[0]);
check(found > 3 && found < 40, "Suche nach Oxalsäure findet " + found + " Fragen");
await page.locator(".qitem .star").first().click();
await page.fill("#cat-search", "");
await page.selectOption("#cat-status", "flag");
await page.waitForTimeout(250);
const flaggedCount = Number((await page.textContent("#cat-count")).split(" ")[0]);
check(flaggedCount >= 1, "Markierte Frage taucht im Filter auf (" + flaggedCount + ")");
await page.selectOption("#cat-status", "");
await page.click("#cat-toggle");
check(await page.locator("#cat-list details[open]").count() > 100, "„Alle Lösungen zeigen“ klappt alles auf");
if (shots) await page.screenshot({ path: `${shots}/6-katalog.png` });

step = "Fortschritt";
await tab("fortschritt");
check((await page.locator("#prog-root .stat").count()) === 4, "Kennzahlen werden angezeigt");
check((await page.locator(".history tbody tr").count()) === 2, "Zwei Tests in der Historie");
const [download] = await Promise.all([page.waitForEvent("download"), page.click("#prog-export")]);
check(/^imker-trainer-\d{4}-\d{2}-\d{2}\.json$/.test(download.suggestedFilename()), "Sicherung wird heruntergeladen");
if (shots) await page.screenshot({ path: `${shots}/7-fortschritt.png`, fullPage: true });

step = "Speicherung";
await page.reload();
await tab("fortschritt");
const seen = await page.textContent("#prog-root .stat__num");
check(!seen.startsWith("0 "), "Lernstand bleibt nach Neuladen erhalten (" + seen + ")");

step = "Mobil & dunkel";
const mobile = await browser.newContext({ viewport: { width: 375, height: 760 }, colorScheme: "dark", isMobile: true, hasTouch: true });
const m = await mobile.newPage();
m.on("pageerror", (e) => errors.push("mobile pageerror: " + e.message));
await m.goto(BASE + "#lernen");
await m.getByRole("button", { name: "Los geht’s" }).click();
const overflow = await m.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
check(overflow <= 0, "Kein waagrechtes Scrollen auf dem Handy");
if (shots) await m.screenshot({ path: `${shots}/8-mobil-dunkel.png`, fullPage: true });

await browser.close();
if (errors.length) {
  console.error("Fehler im Browser:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("Alle Browser-Tests bestanden.");
