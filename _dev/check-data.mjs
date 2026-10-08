// Prüft die Fragendateien: node _dev/check-data.mjs
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(daten\/[^"]+)"/g)].map((m) => m[1]);
const onDisk = readdirSync(join(root, "daten")).filter((f) => f.endsWith(".js")).map((f) => "daten/" + f);
const errors = [];
for (const f of onDisk) if (!files.includes(f)) errors.push(`${f} wird in index.html nicht geladen`);

const ctx = vm.createContext({});
for (const f of files) vm.runInContext(readFileSync(join(root, f), "utf8"), ctx, { filename: f });
const { IMKER } = ctx;
const cats = new Set(IMKER.categories.map((c) => c.key));
const ids = new Set();
for (const q of IMKER.questions) {
  const where = q.id || JSON.stringify(q.q).slice(0, 40);
  const err = (msg) => errors.push(`${where}: ${msg}`);
  if (!q.id) err("keine id");
  if (ids.has(q.id)) err("id doppelt");
  ids.add(q.id);
  if (!cats.has(q.k)) err("unbekannte Kategorie " + q.k);
  if (!Array.isArray(q.s) || !q.s.length) err("keine Quelle");
  else for (const s of q.s) if (!IMKER.sources[s]) err("unbekannte Quelle " + s);
  if (!q.q) err("kein Fragetext");
  if (!q.e) err("keine Erklärung");
  if (q.t === "s" || q.t === "m") {
    if (!Array.isArray(q.o) || q.o.length < 2) err("zu wenige Antworten");
    if (!Array.isArray(q.c) || !q.c.length) err("keine richtige Antwort");
    else {
      for (const i of q.c) if (!Number.isInteger(i) || i < 0 || i >= q.o.length) err("Index außerhalb: " + i);
      if (new Set(q.c).size !== q.c.length) err("Index doppelt");
    }
    if (q.t === "s" && q.c && q.c.length !== 1) err("Typ s braucht genau eine richtige Antwort");
    if (new Set(q.o).size !== q.o.length) err("Antwort doppelt");
  } else if (q.t === "i") {
    if (!Array.isArray(q.acc) || !q.acc.length) err("keine akzeptierten Eingaben");
    if (!q.ans) err("keine Musterlösung");
  } else if (q.t === "f") {
    if (!q.ans) err("keine Musterlösung");
  } else err("unbekannter Typ " + q.t);
  if (q.tbl && !q.tbl.every((r) => Array.isArray(r) && r.length === q.tbl[0].length)) err("Tabelle uneinheitlich");
  for (const key of Object.keys(q)) if (!["id", "s", "t", "q", "x", "tbl", "o", "c", "acc", "ans", "e", "n", "k"].includes(key)) err("unbekanntes Feld " + key);
}
const byType = {}, byCat = {};
for (const q of IMKER.questions) { byType[q.t] = (byType[q.t] || 0) + 1; byCat[q.k] = (byCat[q.k] || 0) + 1; }
console.log(`${IMKER.questions.length} Fragen`, byType, byCat);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Alles in Ordnung.");
