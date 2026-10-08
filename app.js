/* Imker-Trainer – Karteikasten (Leitner-System), Testgenerator, Fragenkatalog und Fortschritt.
   Läuft komplett im Browser; der Lernstand liegt in localStorage. Die Fragen kommen aus daten/*.js. */
(function () {
  "use strict";

  const DATA = window.IMKER;
  const QUESTIONS = DATA.questions;
  const BY_ID = new Map(QUESTIONS.map((q) => [q.id, q]));
  const CATS = DATA.categories;
  const CAT_NAME = Object.fromEntries(CATS.map((c) => [c.key, c.name]));
  const SOURCES = DATA.sources;

  const STORAGE_KEY = "imker-trainer-v1";
  const INTERVAL_DAYS = [0, 0, 1, 3, 7, 21]; // Wartezeit nach richtiger Antwort, Index = Fach
  const BOX_COLORS = ["var(--box-0)", "var(--box-1)", "var(--box-2)", "var(--box-3)", "var(--box-4)", "var(--box-5)"];
  const TYPE_HINT = {
    s: "Eine Antwort ist richtig.",
    m: "Eine oder mehrere Antworten sind richtig.",
    i: "Tippe die Antwort ein.",
    f: "Offene Frage: Überlege dir zuerst deine Antwort, dann vergleiche."
  };

  // ---------- Hilfsfunktionen ----------

  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        if (value === null || value === undefined || value === false) continue;
        if (key === "class") el.className = value;
        else if (key === "text") el.textContent = value;
        else if (key === "style") el.setAttribute("style", value);
        else if (key.startsWith("on") && typeof value === "function") el.addEventListener(key.slice(2), value);
        else if (value === true) el.setAttribute(key, "");
        else el.setAttribute(key, String(value));
      }
    }
    append(el, children);
    return el;
  }

  function append(el, children) {
    for (const child of children) {
      if (child === null || child === undefined || child === false) continue;
      if (Array.isArray(child)) append(el, child);
      else el.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
    }
  }

  const $ = (sel) => document.querySelector(sel);

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function today() {
    const d = new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }

  function fold(s) {
    return String(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  }

  function compact(s) {
    return fold(s).trim().replace(/^(der|die|das|ein|eine)\s+/, "").replace(/[^a-z0-9]/g, "");
  }

  function plural(n, one, many) {
    return n + " " + (n === 1 ? one : many);
  }

  function percent(part, whole) {
    return whole ? Math.round((part / whole) * 100) : 0;
  }

  function formatDate(ts) {
    return new Date(ts).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  function letter(i) {
    return String.fromCharCode(65 + i);
  }

  // ---------- Speicher ----------

  let storageOk = true;

  function defaults() {
    return {
      v: 1,
      cards: {},
      flags: {},
      tests: [],
      settings: {
        learnCats: [],
        learnSize: 15,
        learnMode: "faellig",
        shuffle: true,
        test: { n: 20, cats: [], src: "", pick: "zufall", feedback: "sofort", scoring: "punkte", open: true }
      }
    };
  }

  function sanitize(data) {
    const base = defaults();
    if (!data || typeof data !== "object") return base;
    if (data.cards && typeof data.cards === "object") {
      for (const [id, c] of Object.entries(data.cards)) {
        if (!c || typeof c !== "object") continue;
        const b = Math.min(5, Math.max(0, Math.round(Number(c.b) || 0)));
        base.cards[id] = {
          b,
          due: Number.isFinite(Number(c.due)) ? Number(c.due) : 0,
          ok: Math.max(0, Math.round(Number(c.ok) || 0)),
          ko: Math.max(0, Math.round(Number(c.ko) || 0)),
          last: Number(c.last) || 0
        };
      }
    }
    if (data.flags && typeof data.flags === "object") {
      for (const id of Object.keys(data.flags)) if (data.flags[id]) base.flags[id] = true;
    }
    if (Array.isArray(data.tests)) {
      base.tests = data.tests
        .filter((t) => t && typeof t === "object" && Number.isFinite(t.p) && Number.isFinite(t.max))
        .slice(-30);
    }
    const s = data.settings;
    if (s && typeof s === "object") {
      if (Array.isArray(s.learnCats)) base.settings.learnCats = s.learnCats.filter((k) => CAT_NAME[k]);
      if ([10, 15, 25, 40].includes(s.learnSize)) base.settings.learnSize = s.learnSize;
      if (["faellig", "markiert", "schwierig", "alle"].includes(s.learnMode)) base.settings.learnMode = s.learnMode;
      if (typeof s.shuffle === "boolean") base.settings.shuffle = s.shuffle;
      const t = s.test;
      if (t && typeof t === "object") {
        const bt = base.settings.test;
        if ([10, 20, 30, 50].includes(t.n)) bt.n = t.n;
        if (Array.isArray(t.cats)) bt.cats = t.cats.filter((k) => CAT_NAME[k]);
        if (t.src === "" || SOURCES[t.src]) bt.src = t.src;
        if (["zufall", "schwierig", "markiert", "neu", "reihenfolge"].includes(t.pick)) bt.pick = t.pick;
        if (["sofort", "ende"].includes(t.feedback)) bt.feedback = t.feedback;
        if (["punkte", "ganz"].includes(t.scoring)) bt.scoring = t.scoring;
        if (typeof t.open === "boolean") bt.open = t.open;
      }
    }
    return base;
  }

  function load() {
    try {
      const probe = "__imker_probe__";
      localStorage.setItem(probe, "1");
      localStorage.removeItem(probe);
      return sanitize(JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"));
    } catch (e) {
      storageOk = false;
      return defaults();
    }
  }

  function save() {
    if (!storageOk) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      storageOk = false;
      $("#storage-warning").hidden = false;
    }
  }

  let state = load();

  // ---------- Karteikasten-Logik ----------

  function boxOf(id) {
    const c = state.cards[id];
    return c ? c.b : 0;
  }

  function isDue(id, day) {
    const c = state.cards[id];
    return !!c && c.b > 0 && c.due <= (day === undefined ? today() : day);
  }

  function isNew(id) {
    return boxOf(id) === 0;
  }

  function wasWrong(id) {
    const c = state.cards[id];
    return !!c && c.ko > 0;
  }

  function isFlagged(id) {
    return !!state.flags[id];
  }

  function weakness(id) {
    const c = state.cards[id];
    if (!c) return 0;
    return c.ko * 2 - c.ok + (c.b === 1 ? 3 : 0) - c.b;
  }

  function toggleFlag(id) {
    if (state.flags[id]) delete state.flags[id];
    else state.flags[id] = true;
    save();
  }

  // Wohin wandert die Karte? promote = darf aufsteigen (nicht bei Wiederholungen in derselben Runde)
  function planMove(id, correct, promote) {
    const from = boxOf(id);
    let to = from;
    if (!correct) to = 1;
    else if (promote) to = Math.min(5, Math.max(from, 1) + 1);
    else if (from === 0) to = 1;
    const days = correct && promote ? INTERVAL_DAYS[to] : 0;
    return { from, to, days, correct, promote };
  }

  function commit(id, correct, promote) {
    const prev = state.cards[id] ? Object.assign({}, state.cards[id]) : null;
    const c = Object.assign({ b: 0, due: 0, ok: 0, ko: 0, last: 0 }, prev);
    const move = planMove(id, correct, promote);
    if (correct) c.ok += 1;
    else c.ko += 1;
    if (!correct || promote || c.b === 0) {
      c.b = move.to;
      c.due = today() + move.days;
    }
    c.last = Date.now();
    state.cards[id] = c;
    save();
    return Object.assign({ prev }, move);
  }

  function restore(id, prev) {
    if (prev) state.cards[id] = prev;
    else delete state.cards[id];
  }

  function moveText(move, retry) {
    if (!move.correct) {
      if (retry) return "Noch nicht ganz – die Frage kommt in dieser Runde noch einmal.";
      return (move.from > 1 ? "Zurück in Fach 1" : "Fach 1") + " – die Frage kommt in dieser Runde noch einmal.";
    }
    if (retry) return "Diesmal richtig! Die Frage bleibt in Fach 1 und kommt beim nächsten Lernen wieder.";
    const when = move.days === 0 ? "heute noch einmal" : move.days === 1 ? "morgen wieder" : "in " + move.days + " Tagen wieder";
    if (move.to === move.from) return "Bleibt in Fach " + move.to + " · kommt " + when + " dran.";
    return (move.from === 0 ? "Neu" : "Fach " + move.from) + " → Fach " + move.to + " · kommt " + when + " dran.";
  }

  // ---------- Bewertung ----------

  function matchInput(q, value) {
    const given = compact(value || "");
    return !!given && q.acc.some((a) => compact(a) === given);
  }

  function evaluate(q, sel) {
    if (q.t === "s" || q.t === "m") {
      const chosen = new Set(sel || []);
      const right = new Set(q.c);
      let hits = 0, wrong = 0, missed = 0;
      chosen.forEach((i) => (right.has(i) ? hits++ : wrong++));
      right.forEach((i) => { if (!chosen.has(i)) missed++; });
      const correct = wrong === 0 && missed === 0;
      const max = q.t === "s" ? 1 : right.size;
      const points = q.t === "s" ? (correct ? 1 : 0) : Math.max(0, hits - wrong - missed);
      return { correct, points, max, partial: !correct && hits > 0, answered: chosen.size > 0 };
    }
    if (q.t === "i") {
      const ok = matchInput(q, sel);
      return { correct: ok, points: ok ? 1 : 0, max: 1, partial: false, answered: !!(sel && String(sel).trim()) };
    }
    const known = sel === "known";
    return { correct: known, points: known ? 1 : 0, max: 1, partial: false, answered: !!sel };
  }

  function scoreOf(res, scoring) {
    if (scoring === "ganz") return { points: res.correct ? 1 : 0, max: 1 };
    return { points: res.points, max: res.max };
  }

  // ---------- Fragekarte ----------

  function newCardState(q) {
    const perm = q.o ? q.o.map((_, i) => i) : null;
    return {
      q,
      perm: perm && state.settings.shuffle ? shuffle(perm) : perm,
      sel: q.t === "s" || q.t === "m" ? [] : q.t === "i" ? "" : null,
      revealed: false,
      checked: false,
      res: null
    };
  }

  function canCheck(st) {
    const q = st.q;
    if (q.t === "s" || q.t === "m") return st.sel.length > 0;
    if (q.t === "i") return String(st.sel).trim().length > 0;
    return false;
  }

  function sourceTags(q, max) {
    const shown = max ? q.s.slice(0, max) : q.s;
    const rest = q.s.slice(shown.length);
    return shown.map((s) => h("span", { class: "tag", title: SOURCES[s].detail }, SOURCES[s].name))
      .concat(rest.length ? h("span", { class: "tag", title: "Auch in: " + rest.map((s) => SOURCES[s].name).join(", ") }, "+" + rest.length) : []);
  }

  function boxTag(id) {
    const b = boxOf(id);
    return h("span", { class: "tag tag--box", style: "--box-color:" + BOX_COLORS[b], title: "Fach im Karteikasten" }, b ? "Fach " + b : "neu");
  }

  function starButton(id, onToggle) {
    const btn = h("button", {
      class: "star", type: "button", "aria-pressed": isFlagged(id) ? "true" : "false",
      title: "Frage zum Wiederholen markieren"
    });
    const paint = () => {
      const on = isFlagged(id);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.replaceChildren(starIcon(), on ? "Markiert" : "Markieren");
    };
    btn.addEventListener("click", () => {
      toggleFlag(id);
      paint();
      if (onToggle) onToggle();
    });
    paint();
    return btn;
  }

  function starIcon() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
    return svg;
  }

  function contextBlock(q) {
    return [
      q.x ? h("p", { class: "q__context" }, q.x) : null,
      q.tbl ? h("div", { class: "table-wrap" }, h("table", { class: "q-table" },
        h("thead", null, h("tr", null, q.tbl[0].map((c) => h("th", { scope: "col" }, c)))),
        h("tbody", null, q.tbl.slice(1).map((r) => h("tr", null, r.map((c) => h("td", null, c)))))
      )) : null
    ];
  }

  function explanationBlock(q) {
    return [
      h("div", { class: "explain-box" }, h("h3", null, "Erklärung"), h("p", null, q.e)),
      q.n ? h("div", { class: "note-box" }, h("strong", null, "Hinweis zur Lösung"), q.n) : null
    ];
  }

  function verdictBlock(res, scoring, type) {
    const sc = scoreOf(res, scoring || "punkte");
    const pts = res.max > 1 || scoring ? h("small", null, sc.points + " von " + plural(sc.max, "Punkt", "Punkten")) : null;
    if (type === "f") {
      return res.correct ? h("div", { class: "verdict verdict--good" }, "✓ Gewusst", pts) : h("div", { class: "verdict verdict--bad" }, "✗ Nicht gewusst", pts);
    }
    if (res.correct) return h("div", { class: "verdict verdict--good" }, "✓ Richtig!", pts);
    if (res.partial) return h("div", { class: "verdict verdict--part" }, "◐ Teilweise richtig", pts);
    if (!res.answered) return h("div", { class: "verdict verdict--bad" }, "– Nicht beantwortet", pts);
    return h("div", { class: "verdict verdict--bad" }, "✗ Leider falsch", pts);
  }

  /* Baut die Karte einer Frage.
     opt.mode: "learn" | "exam" | "review"
     opt.on: { toggle(i), input(v), check(), next(), reveal(), rate(known), override() } */
  function questionCard(st, opt) {
    const q = st.q;
    const on = opt.on || {};
    const locked = st.checked || opt.mode === "review";
    const showResult = st.checked && opt.mode !== "exam";
    const card = h("article", { class: "q", "aria-label": "Frage" });

    card.appendChild(h("div", { class: "q__meta" },
      h("span", { class: "tag tag--cat" }, CAT_NAME[q.k]),
      sourceTags(q, 1),
      boxTag(q.id),
      starButton(q.id, opt.onFlag)
    ));
    append(card, contextBlock(q));
    card.appendChild(h("p", { class: "q__text" }, q.q));
    if (!locked || q.t !== "f") card.appendChild(h("p", { class: "q__hint" }, TYPE_HINT[q.t]));

    if (q.t === "s" || q.t === "m") {
      const multi = q.t === "m";
      const list = h("div", { class: "opts", role: multi ? "group" : "radiogroup", "aria-label": "Antworten" });
      st.perm.forEach((orig, pos) => {
        const chosen = st.sel.includes(orig);
        const right = q.c.includes(orig);
        let cls = "opt" + (multi ? " opt--multi" : "");
        let mark = "";
        if (showResult) {
          if (chosen && right) { cls += " is-correct"; mark = "✓ richtig"; }
          else if (chosen) { cls += " is-wrong"; mark = "✗ falsch"; }
          else if (right) { cls += " is-missed"; mark = multi ? "fehlte" : "richtig"; }
          else cls += " is-dim";
        }
        list.appendChild(h("button", {
          class: cls, type: "button", role: multi ? "checkbox" : "radio",
          "aria-checked": chosen ? "true" : "false", disabled: locked, "data-fk": "opt" + pos,
          onclick: () => on.toggle && on.toggle(orig)
        },
          h("span", { class: "opt__key", "aria-hidden": "true" }, letter(pos)),
          h("span", { class: "opt__text" }, q.o[orig]),
          mark ? h("span", { class: "opt__mark" }, mark) : null
        ));
      });
      card.appendChild(list);
    } else if (q.t === "i") {
      const cls = "answer-input" + (showResult ? (st.res.correct ? " is-correct" : " is-wrong") : "");
      const input = h("input", {
        class: cls, type: "text", value: st.sel || "", disabled: locked, "aria-label": "Deine Antwort",
        placeholder: "Deine Antwort", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "data-fk": "input"
      });
      input.addEventListener("input", () => on.input && on.input(input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (on.check && input.value.trim()) on.check();
        }
      });
      card.appendChild(input);
    } else if (st.revealed || locked) {
      card.appendChild(h("div", { class: "flash-answer" }, h("strong", null, "Musterlösung: "), "\n" + q.ans));
    }

    if (showResult) {
      const fb = h("div", { class: "feedback", "aria-live": "polite" });
      fb.appendChild(verdictBlock(st.res, opt.scoring, q.t));
      if (q.t === "i") {
        fb.appendChild(h("p", { class: "your-answer" }, "Richtige Antwort: ", h("strong", null, q.ans)));
      }
      if (opt.move) fb.appendChild(h("p", { class: "move" }, opt.move));
      append(fb, explanationBlock(q));
      card.appendChild(fb);
    } else if (q.t === "f" && opt.mode === "exam" && st.checked) {
      card.appendChild(h("p", { class: "move" }, st.sel === "known" ? "Du hast „gewusst“ gewählt." : "Du hast „nicht gewusst“ gewählt."));
    }

    const actions = h("div", { class: "q__actions" });
    if (opt.mode !== "review") {
      if (q.t === "f" && !st.revealed) {
        actions.appendChild(h("button", { class: "button button--primary", type: "button", "data-fk": "primary", onclick: () => on.reveal && on.reveal() }, "Antwort zeigen"));
      } else if (q.t === "f" && !st.checked) {
        actions.appendChild(h("button", { class: "button button--primary", type: "button", "data-fk": "known", onclick: () => on.rate && on.rate(true) }, "✓ Gewusst"));
        actions.appendChild(h("button", { class: "button", type: "button", "data-fk": "unknown", onclick: () => on.rate && on.rate(false) }, "✗ Nicht gewusst"));
      } else if (!st.checked && opt.mode !== "exam") {
        actions.appendChild(h("button", {
          class: "button button--primary", type: "button", "data-fk": "primary", disabled: !canCheck(st),
          onclick: () => on.check && on.check()
        }, "Prüfen"));
        if (q.t === "s" || q.t === "m") actions.appendChild(h("span", { class: "kbd-hint" }, "Tasten 1–" + q.o.length + " wählen, Enter prüft"));
      } else if (st.checked && opt.mode !== "exam") {
        if (q.t === "i" && !st.res.correct && on.override) {
          actions.appendChild(h("button", { class: "button", type: "button", onclick: () => on.override() }, "Ich lag doch richtig"));
        }
        actions.appendChild(h("span", { class: "spacer" }));
        actions.appendChild(h("button", { class: "button button--primary", type: "button", "data-fk": "primary", onclick: () => on.next && on.next() }, opt.nextLabel || "Weiter"));
      }
    } else if (q.t === "i" && !st.res.correct && on.override) {
      actions.appendChild(h("button", { class: "button button--small", type: "button", onclick: () => on.override() }, "Als richtig werten"));
    }
    if (actions.childNodes.length) card.appendChild(actions);
    return card;
  }

  // Tastatur: Ziffern wählen Antworten, Enter löst die Hauptaktion aus
  let keyHandler = null;

  document.addEventListener("keydown", (e) => {
    if (!keyHandler || e.altKey || e.ctrlKey || e.metaKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA")) return;
    if (/^[1-9]$/.test(e.key) && keyHandler.toggle) {
      keyHandler.toggle(Number(e.key) - 1);
      e.preventDefault();
    } else if (e.key === "Enter" && keyHandler.primary && !(t && (t.tagName === "A" || t.tagName === "SUMMARY" || (t.tagName === "BUTTON" && !t.classList.contains("opt"))))) {
      // Auf einer Antwort löst Enter das Prüfen aus; auswählen geht mit Leertaste, Klick oder Ziffer
      keyHandler.primary();
      e.preventDefault();
    }
  });

  function keysFor(st, on) {
    return {
      toggle: (pos) => {
        if (st.checked || !st.perm || pos >= st.perm.length) return;
        on.toggle(st.perm[pos]);
      },
      primary: () => {
        const q = st.q;
        if (q.t === "f" && !st.revealed) on.reveal && on.reveal();
        else if (!st.checked && canCheck(st) && on.check) on.check();
        else if (st.checked && on.next) on.next();
      }
    };
  }

  function selectToggle(st, orig) {
    if (st.q.t === "s") st.sel = [orig];
    else st.sel = st.sel.includes(orig) ? st.sel.filter((i) => i !== orig) : st.sel.concat(orig);
  }

  // Ersetzt den Inhalt und stellt den Fokus wieder her
  function paint(root, nodes, focusKey) {
    const active = document.activeElement;
    const fk = focusKey || (active && root.contains(active) && active.dataset ? active.dataset.fk : null);
    root.replaceChildren(...[].concat(nodes).filter(Boolean));
    if (fk) {
      const el = root.querySelector('[data-fk="' + fk + '"]');
      if (el && !el.disabled) el.focus({ preventScroll: true });
    }
  }

  function scrollToTop(root) {
    const top = root.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.6) root.scrollIntoView({ block: "start" });
  }

  // ---------- Gemeinsame Bausteine ----------

  function chipGroup(label, options, isOn, onClick) {
    return h("fieldset", { class: "setup__group" },
      h("legend", { class: "setup__label" }, label),
      h("div", { class: "chips" }, options.map((o) => h("button", {
        class: "chip", type: "button", "aria-pressed": isOn(o.value) ? "true" : "false",
        onclick: () => onClick(o.value)
      }, o.label, o.count !== undefined ? h("span", { class: "count" }, " · " + o.count) : null)))
    );
  }

  function categoryChips(selected, onChange, countFor) {
    const options = [{ value: "", label: "Alle Themen", count: countFor ? countFor("") : undefined }]
      .concat(CATS.map((c) => ({ value: c.key, label: c.name, count: countFor ? countFor(c.key) : undefined })));
    return chipGroup("Themen", options,
      (v) => (v === "" ? selected.length === 0 : selected.includes(v)),
      (v) => {
        let next;
        if (v === "") next = [];
        else next = selected.includes(v) ? selected.filter((k) => k !== v) : selected.concat(v);
        if (next.length === CATS.length) next = [];
        onChange(next);
      });
  }

  function inCats(q, cats) {
    return !cats.length || cats.includes(q.k);
  }

  function boxCounts(list) {
    const counts = [0, 0, 0, 0, 0, 0];
    for (const q of list) counts[boxOf(q.id)]++;
    return counts;
  }

  function boxesChart(list) {
    const counts = boxCounts(list);
    const max = Math.max(1, ...counts);
    const labels = ["neu", "Fach 1", "Fach 2", "Fach 3", "Fach 4", "Fach 5"];
    const sub = ["", "täglich", "nach 1 Tag", "nach 3 Tagen", "nach 1 Woche", "nach 3 Wochen"];
    return h("div", { class: "boxes", role: "img", "aria-label": labels.map((l, i) => l + ": " + counts[i]).join(", ") },
      counts.map((n, i) => h("div", { class: "box" },
        h("div", { class: "box__num" }, n),
        h("div", { class: "box__bar-wrap" }, h("div", { class: "box__bar", style: "height:" + Math.round((n / max) * 100) + "%;--box-color:" + BOX_COLORS[i] })),
        h("div", { class: "box__label" }, labels[i], sub[i] ? h("br") : null, sub[i])
      ))
    );
  }

  function progressBar(value, label) {
    return h("div", { class: "progress", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(value), "aria-label": label || "Fortschritt" },
      h("div", { class: "progress__bar", style: "width:" + value + "%" }));
  }

  // ---------- Karteikasten ----------

  const learn = { session: null, notice: "" };

  function learnPool(cats) {
    return QUESTIONS.filter((q) => inCats(q, cats));
  }

  function buildLearnQueue(mode, cats, size) {
    const pool = learnPool(cats);
    const day = today();
    let list = [];
    if (mode === "faellig") {
      const due = pool.filter((q) => isDue(q.id, day))
        .sort((a, b) => boxOf(a.id) - boxOf(b.id) || state.cards[a.id].due - state.cards[b.id].due);
      const fresh = shuffle(pool.filter((q) => isNew(q.id)));
      list = shuffle(due.concat(fresh).slice(0, size));
    } else if (mode === "markiert") {
      list = shuffle(pool.filter((q) => isFlagged(q.id))).slice(0, size);
    } else if (mode === "schwierig") {
      list = shuffle(pool.filter((q) => wasWrong(q.id) || boxOf(q.id) === 1)
        .sort((a, b) => weakness(b.id) - weakness(a.id)).slice(0, size));
    } else if (mode === "bald") {
      list = shuffle(pool.filter((q) => !isNew(q.id))
        .sort((a, b) => state.cards[a.id].due - state.cards[b.id].due).slice(0, size));
    } else {
      list = shuffle(pool).slice(0, size);
    }
    return list.map((q) => q.id);
  }

  function startLearn(ids, label) {
    if (!ids.length) return false;
    learn.session = { items: ids.map((id) => ({ id, retry: false })), pos: 0, results: [], label: label || "", st: null };
    learn.notice = "";
    return true;
  }

  function goto(view) {
    if (location.hash === "#" + view) route();
    else location.hash = view;
  }

  function renderLearn() {
    const root = $("#learn-root");
    const s = learn.session;
    if (!s) return renderLearnSetup(root);
    if (s.pos >= s.items.length) return renderLearnSummary(root);
    renderLearnCard(root);
  }

  function renderLearnSetup(root) {
    keyHandler = null;
    const set = state.settings;
    const pool = learnPool(set.learnCats);
    const day = today();
    const due = pool.filter((q) => isDue(q.id, day)).length;
    const fresh = pool.filter((q) => isNew(q.id)).length;
    const flagged = pool.filter((q) => isFlagged(q.id)).length;
    const hard = pool.filter((q) => wasWrong(q.id) || boxOf(q.id) === 1).length;
    const available = { faellig: due + fresh, markiert: flagged, schwierig: hard, alle: pool.length };
    const n = Math.min(set.learnSize, available[set.learnMode]);

    const update = (fn) => { fn(); save(); renderLearnSetup(root); };
    const card = h("div", { class: "card setup" },
      h("p", { class: "hint", style: "margin:0" },
        "Heute fällig: ", h("strong", null, String(due)), " · Neue Fragen: ", h("strong", null, String(fresh)),
        " · Markiert: ", h("strong", null, String(flagged))),
      categoryChips(set.learnCats, (next) => update(() => { set.learnCats = next; }),
        (k) => (k ? QUESTIONS.filter((q) => q.k === k).length : QUESTIONS.length)),
      chipGroup("Was willst du lernen?", [
        { value: "faellig", label: "Fällige & neue Fragen", count: available.faellig },
        { value: "schwierig", label: "Schwierige (oft falsch)", count: available.schwierig },
        { value: "markiert", label: "Nur markierte", count: available.markiert },
        { value: "alle", label: "Bunt gemischt", count: available.alle }
      ], (v) => set.learnMode === v, (v) => update(() => { set.learnMode = v; })),
      chipGroup("Karten pro Runde", [10, 15, 25, 40].map((v) => ({ value: v, label: String(v) })),
        (v) => set.learnSize === v, (v) => update(() => { set.learnSize = v; })),
      h("label", { class: "check" },
        h("input", { type: "checkbox", checked: set.shuffle, onchange: (e) => update(() => { set.shuffle = e.target.checked; }) }),
        "Antworten in zufälliger Reihenfolge zeigen"),
      h("div", { class: "setup-footer" },
        h("p", { class: "hint" }, n ? "Diese Runde: " + plural(n, "Karte", "Karten") + ". Falsch beantwortete Karten kommen in der Runde noch einmal." :
          set.learnMode === "faellig" ? "Für heute ist alles erledigt. Du kannst trotzdem wiederholen." : "Dazu gibt es gerade keine Fragen."),
        n ? h("button", {
          class: "button button--primary", type: "button",
          onclick: () => { startLearn(buildLearnQueue(set.learnMode, set.learnCats, set.learnSize)); renderLearn(); scrollToTop(root); }
        }, "Los geht’s") :
          set.learnMode === "faellig" && pool.some((q) => !isNew(q.id)) ? h("button", {
            class: "button", type: "button",
            onclick: () => { startLearn(buildLearnQueue("bald", set.learnCats, set.learnSize), "Zusätzliche Wiederholung"); renderLearn(); scrollToTop(root); }
          }, "Trotzdem wiederholen") : null)
    );
    paint(root, [learn.notice ? h("p", { class: "storage-warning" }, learn.notice) : null, card, h("div", { class: "card" }, h("h2", { class: "card__title" }, "Fächer in dieser Auswahl"), boxesChart(pool))]);
  }

  function renderLearnCard(root, focusKey) {
    const s = learn.session;
    const item = s.items[s.pos];
    const q = BY_ID.get(item.id);
    if (!s.st || s.st.q !== q || s.st.itemIndex !== s.pos) {
      s.st = newCardState(q);
      s.st.itemIndex = s.pos;
      s.move = null;
    }
    const st = s.st;
    const redraw = (fk) => renderLearnCard(root, fk);
    const on = {
      toggle: (orig) => { selectToggle(st, orig); redraw(); },
      input: (v) => {
        const before = canCheck(st);
        st.sel = v;
        if (before !== canCheck(st)) {
          const btn = root.querySelector('[data-fk="primary"]');
          if (btn) btn.disabled = !canCheck(st);
        }
      },
      check: () => {
        if (!canCheck(st)) return;
        st.checked = true;
        st.res = evaluate(q, st.sel);
        s.move = Object.assign(planMove(q.id, st.res.correct, !item.retry), { correct: st.res.correct });
        redraw("primary");
      },
      reveal: () => { st.revealed = true; redraw("known"); },
      rate: (known) => {
        st.sel = known ? "known" : "unknown";
        st.checked = true;
        st.res = evaluate(q, st.sel);
        s.move = Object.assign(planMove(q.id, st.res.correct, !item.retry), { correct: st.res.correct });
        redraw("primary");
      },
      override: () => {
        st.res = Object.assign({}, st.res, { correct: true, points: 1 });
        s.move = Object.assign(planMove(q.id, true, !item.retry), { correct: true });
        redraw("primary");
      },
      next: () => {
        const move = commit(q.id, st.res.correct, !item.retry);
        s.results.push({ id: q.id, correct: st.res.correct, retry: item.retry, from: move.from, to: move.to });
        if (!st.res.correct) {
          const at = Math.min(s.items.length, s.pos + 4);
          s.items.splice(at, 0, { id: q.id, retry: true });
        }
        s.pos += 1;
        s.st = null;
        renderLearn();
        scrollToTop(root);
        const first = root.querySelector(".opt, .answer-input, [data-fk='primary']");
        if (first) first.focus({ preventScroll: true });
      }
    };
    keyHandler = keysFor(st, on);
    const total = s.items.length;
    const head = h("div", null,
      h("div", { class: "session-head" },
        h("span", null, h("strong", null, "Karte " + (s.pos + 1) + " von " + total), item.retry ? " · Wiederholung" : "", s.label ? " · " + s.label : ""),
        h("button", { class: "button button--small button--ghost", type: "button", onclick: () => { s.items = s.items.slice(0, s.pos); renderLearn(); } }, "Runde beenden")
      ),
      progressBar(percent(s.pos, total), "Fortschritt der Runde")
    );
    const card = questionCard(st, {
      mode: "learn", on,
      move: st.checked && s.move ? moveText(s.move, item.retry) : null,
      nextLabel: s.pos + 1 >= total && st.res && st.res.correct ? "Runde abschließen" : "Weiter"
    });
    paint(root, [head, card], focusKey);
  }

  function renderLearnSummary(root) {
    keyHandler = null;
    const s = learn.session;
    const first = s.results.filter((r) => !r.retry);
    const right = first.filter((r) => r.correct).length;
    const up = first.filter((r) => r.correct && r.to > r.from).length;
    const down = first.filter((r) => !r.correct).length;
    const wrongIds = [...new Set(first.filter((r) => !r.correct).map((r) => r.id))];
    const set = state.settings;
    const pct = percent(right, first.length);
    const card = h("div", { class: "card result-hero" },
      h("div", { class: "result-score" }, right + " / " + first.length),
      h("p", { class: "result-sub" }, first.length ? "beim ersten Versuch richtig (" + pct + " %)" : "Keine Karten beantwortet."),
      progressBar(pct, "Anteil richtig"),
      h("div", { class: "stat-grid", style: "margin-bottom:18px;text-align:left" },
        stat(up, "Fächer aufgestiegen"),
        stat(down, "zurück in Fach 1"),
        stat(s.results.length - first.length, "Wiederholungen"),
        stat(QUESTIONS.filter((q) => isDue(q.id)).length, "noch heute fällig")
      ),
      h("div", { class: "row" },
        h("button", { class: "button button--primary", type: "button", onclick: () => {
          if (!startLearn(buildLearnQueue(set.learnMode, set.learnCats, set.learnSize))) {
            learn.session = null;
            learn.notice = "Für diese Auswahl ist gerade nichts mehr fällig – super! Wähle oben eine andere Auswahl oder wiederhole trotzdem.";
          }
          renderLearn();
        } }, "Nächste Runde"),
        wrongIds.length ? h("button", { class: "button", type: "button", onclick: () => {
          wrongIds.forEach((id) => { state.flags[id] = true; });
          save();
          learn.session = null;
          learn.notice = plural(wrongIds.length, "Frage wurde", "Fragen wurden") + " markiert.";
          renderLearn();
        } }, "Falsche markieren") : null,
        h("button", { class: "button", type: "button", onclick: () => { learn.session = null; renderLearn(); } }, "Einstellungen")
      )
    );
    paint(root, [card]);
  }

  function stat(num, label) {
    return h("div", { class: "stat" }, h("div", { class: "stat__num" }, String(num)), h("div", { class: "stat__label" }, label));
  }

  // ---------- Test ----------

  const test = { run: null, result: null };

  const PICK_LABELS = {
    zufall: "zufällig",
    schwierig: "deine Schwachstellen zuerst",
    markiert: "nur markierte",
    neu: "nur noch nie beantwortete",
    reihenfolge: "in Original-Reihenfolge"
  };

  function testPool(cfg) {
    return QUESTIONS.filter((q) => inCats(q, cfg.cats) && (!cfg.src || q.s.includes(cfg.src)) && (cfg.open || (q.t !== "f" && q.t !== "i")));
  }

  function pickTest(cfg) {
    let pool = testPool(cfg);
    if (cfg.pick === "markiert") pool = pool.filter((q) => isFlagged(q.id));
    if (cfg.pick === "neu") pool = pool.filter((q) => isNew(q.id));
    if (cfg.pick === "schwierig") {
      pool = shuffle(pool).sort((a, b) => weakness(b.id) - weakness(a.id));
      return shuffle(pool.slice(0, cfg.n));
    }
    if (cfg.pick === "reihenfolge") return pool.slice(0, cfg.n);
    return shuffle(pool).slice(0, cfg.n);
  }

  function startTest(questions, cfg, label) {
    if (!questions.length) return false;
    test.result = null;
    test.run = {
      cfg: Object.assign({}, cfg),
      label: label || "",
      pos: 0,
      items: questions.map((q) => ({ st: newCardState(q) }))
    };
    return true;
  }

  function renderTest() {
    const root = $("#test-root");
    if (test.run) return renderTestRun(root);
    if (test.result) return renderTestResult(root);
    renderTestSetup(root);
  }

  function renderTestSetup(root) {
    keyHandler = null;
    const cfg = state.settings.test;
    const update = (fn) => { fn(); save(); renderTestSetup(root); };
    let pool = testPool(cfg);
    if (cfg.pick === "markiert") pool = pool.filter((q) => isFlagged(q.id));
    if (cfg.pick === "neu") pool = pool.filter((q) => isNew(q.id));
    const count = Math.min(cfg.n, pool.length);

    const presets = h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Schnellstart"),
      h("div", { class: "setup-presets" },
        preset("Wettbewerb 2026 nachspielen", "Die 18 Varroa-Fragen der Meisterschaft, Auswertung am Ende, Punkte wie im Wettbewerb", () => {
          const qs = QUESTIONS.filter((q) => q.s.includes("lvbi26") && q.id.startsWith("va26-"));
          launchTest(qs, { n: qs.length, cats: [], src: "lvbi26", pick: "reihenfolge", feedback: "ende", scoring: "punkte", open: true }, "Meisterschaft 2026");
        }),
        preset("Schnelltest", "10 zufällige Fragen aus allen Themen, Rückmeldung nach jeder Frage", () => {
          const c = { n: 10, cats: [], src: "", pick: "zufall", feedback: "sofort", scoring: "punkte", open: true };
          launchTest(pickTest(c), c, "Schnelltest");
        }),
        preset("Schwächen-Test", "20 Fragen, die du bisher oft falsch hattest oder noch nicht kennst", () => {
          const c = { n: 20, cats: [], src: "", pick: "schwierig", feedback: "sofort", scoring: "punkte", open: true };
          launchTest(pickTest(c), c, "Schwächen-Test");
        })
      )
    );

    const sourceSelect = h("select", { onchange: (e) => update(() => { cfg.src = e.target.value; }) },
      h("option", { value: "" }, "Alle Quellen"),
      Object.entries(SOURCES).map(([key, s]) => h("option", { value: key, selected: cfg.src === key }, s.name + " (" + QUESTIONS.filter((q) => q.s.includes(key)).length + ")")));
    const pickSelect = h("select", { onchange: (e) => update(() => { cfg.pick = e.target.value; }) },
      Object.entries(PICK_LABELS).map(([key, label]) => h("option", { value: key, selected: cfg.pick === key }, label)));

    const custom = h("div", { class: "card setup" },
      h("h2", { class: "card__title", style: "margin:0" }, "Eigener Test"),
      chipGroup("Anzahl Fragen", [10, 20, 30, 50].map((v) => ({ value: v, label: String(v) })), (v) => cfg.n === v, (v) => update(() => { cfg.n = v; })),
      categoryChips(cfg.cats, (next) => update(() => { cfg.cats = next; })),
      h("div", { class: "filters", style: "padding:0" },
        h("label", { class: "field" }, h("span", null, "Quelle"), sourceSelect),
        h("label", { class: "field" }, h("span", null, "Auswahl der Fragen"), pickSelect)
      ),
      chipGroup("Rückmeldung", [
        { value: "sofort", label: "Nach jeder Frage" },
        { value: "ende", label: "Erst am Ende (wie in der Prüfung)" }
      ], (v) => cfg.feedback === v, (v) => update(() => { cfg.feedback = v; })),
      chipGroup("Wertung", [
        { value: "punkte", label: "Punkte wie im Wettbewerb" },
        { value: "ganz", label: "Nur ganz richtig zählt" }
      ], (v) => cfg.scoring === v, (v) => update(() => { cfg.scoring = v; })),
      h("label", { class: "check" },
        h("input", { type: "checkbox", checked: cfg.open, onchange: (e) => update(() => { cfg.open = e.target.checked; }) }),
        "Eingabe- und offene Fragen einbeziehen"),
      h("p", { class: "hint", style: "margin:0" }, "Wettbewerbs-Wertung bei Mehrfachauswahl: +1 Punkt für jedes richtige Kreuz, −1 für jedes falsche oder fehlende Kreuz, mindestens 0 Punkte – so wurde der Test 2026 korrigiert."),
      h("div", { class: "setup-footer" },
        h("p", { class: "hint" }, count ? plural(count, "Frage", "Fragen") + " passen zu deiner Auswahl." : "Keine Fragen passen zu dieser Auswahl."),
        h("button", { class: "button button--primary", type: "button", disabled: !count, onclick: () => launchTest(pickTest(cfg), cfg, "Eigener Test") }, "Test starten")
      )
    );
    paint(root, [presets, custom]);
  }

  function preset(title, text, onclick) {
    return h("button", { class: "preset", type: "button", onclick }, h("strong", null, title), h("span", null, text));
  }

  function launchTest(questions, cfg, label) {
    if (startTest(questions, cfg, label)) {
      renderTest();
      scrollToTop($("#test-root"));
    }
  }

  function renderTestRun(root, focusKey) {
    const run = test.run;
    const item = run.items[run.pos];
    const st = item.st;
    const q = st.q;
    const exam = run.cfg.feedback === "ende";
    const total = run.items.length;
    const redraw = (fk) => renderTestRun(root, fk);
    const last = run.pos + 1 >= total;

    const goTo = (pos) => {
      run.pos = pos;
      renderTestRun(root);
      scrollToTop(root);
    };
    const advance = () => {
      if (last) finishTest();
      else goTo(run.pos + 1);
    };
    const on = {
      toggle: (orig) => { selectToggle(st, orig); redraw(); },
      input: (v) => {
        st.sel = v;
        const btn = root.querySelector('[data-fk="primary"]');
        if (btn && !exam) btn.disabled = !canCheck(st);
        const dot = root.querySelector('.navdot[data-pos="' + run.pos + '"]');
        if (dot) dot.classList.toggle("is-answered", !!v.trim());
      },
      check: () => {
        if (exam || !canCheck(st)) return;
        st.checked = true;
        st.res = evaluate(q, st.sel);
        redraw("primary");
      },
      reveal: () => { st.revealed = true; redraw("known"); },
      rate: (known) => {
        st.sel = known ? "known" : "unknown";
        st.checked = true;
        st.res = evaluate(q, st.sel);
        redraw(exam ? "next" : "primary");
      },
      override: () => {
        st.res = Object.assign({}, st.res, { correct: true, points: 1 });
        st.overridden = true;
        redraw("primary");
      },
      next: () => advance()
    };
    keyHandler = exam ? {
      toggle: (pos) => { if (st.perm && pos < st.perm.length) on.toggle(st.perm[pos]); },
      primary: () => { if (q.t === "f" && !st.revealed) on.reveal(); else advance(); }
    } : keysFor(st, on);

    const answeredCount = run.items.filter((it) => isAnswered(it.st)).length;
    const head = h("div", null,
      h("div", { class: "session-head" },
        h("span", null, h("strong", null, "Frage " + (run.pos + 1) + " von " + total), run.label ? " · " + run.label : "", exam ? " · " + answeredCount + " beantwortet" : ""),
        h("button", { class: "button button--small button--ghost", type: "button", onclick: () => {
          if (window.confirm("Test abbrechen? Deine Antworten in diesem Test gehen verloren.")) { test.run = null; renderTest(); }
        } }, "Abbrechen")
      ),
      progressBar(percent(exam ? answeredCount : run.pos, total), "Fortschritt im Test")
    );

    const card = questionCard(st, {
      mode: exam ? "exam" : "learn", on, scoring: run.cfg.scoring,
      nextLabel: last ? "Auswertung" : "Nächste Frage"
    });

    const nodes = [head, card];
    if (exam) {
      nodes.push(h("div", { class: "card" },
        h("div", { class: "row", style: "justify-content:space-between" },
          h("button", { class: "button", type: "button", disabled: run.pos === 0, onclick: () => goTo(run.pos - 1) }, "← Zurück"),
          last ? h("button", { class: "button button--primary", type: "button", "data-fk": "next", onclick: () => finishTest() }, "Test abgeben") :
            h("button", { class: "button button--primary", type: "button", "data-fk": "next", onclick: () => goTo(run.pos + 1) }, "Weiter →")
        ),
        h("p", { class: "hint" }, "Springe zu einer Frage:"),
        h("div", { class: "navdots" }, run.items.map((it, i) => h("button", {
          class: "navdot" + (isAnswered(it.st) ? " is-answered" : "") + (i === run.pos ? " is-current" : ""),
          type: "button", "data-pos": i, "aria-label": "Frage " + (i + 1) + (isAnswered(it.st) ? " (beantwortet)" : ""),
          "aria-current": i === run.pos ? "step" : null,
          onclick: () => goTo(i)
        }, String(i + 1)))),
        last ? null : h("div", { class: "row", style: "margin-top:14px" },
          h("button", { class: "button button--small", type: "button", onclick: () => finishTest() }, "Jetzt abgeben"))
      ));
    }
    paint(root, nodes, focusKey);
  }

  function isAnswered(st) {
    if (st.q.t === "s" || st.q.t === "m") return st.sel.length > 0;
    if (st.q.t === "i") return String(st.sel).trim().length > 0;
    return !!st.sel;
  }

  function finishTest() {
    const run = test.run;
    const exam = run.cfg.feedback === "ende";
    if (exam) {
      const open = run.items.filter((it) => !isAnswered(it.st)).length;
      if (open && !window.confirm(plural(open, "Frage ist", "Fragen sind") + " noch unbeantwortet. Trotzdem abgeben?")) return;
    }
    const day = today();
    const items = run.items.map((it) => {
      const st = it.st;
      if (!st.res || !st.checked) st.res = evaluate(st.q, st.sel);
      if (st.overridden) st.res = Object.assign({}, st.res, { correct: true, points: 1 });
      st.checked = true;
      const promote = isNew(st.q.id) || isDue(st.q.id, day);
      const move = commit(st.q.id, st.res.correct, promote);
      return { st, prev: move.prev, promote };
    });
    const result = { items, cfg: run.cfg, label: run.label, date: Date.now() };
    tally(result);
    state.tests.push({ d: result.date, label: run.label, n: items.length, ok: result.ok, p: result.points, max: result.max });
    state.tests = state.tests.slice(-30);
    save();
    test.run = null;
    test.result = result;
    renderTest();
    window.scrollTo(0, 0);
  }

  function tally(result) {
    let points = 0, max = 0, ok = 0;
    for (const it of result.items) {
      const sc = scoreOf(it.st.res, result.cfg.scoring);
      points += sc.points;
      max += sc.max;
      if (it.st.res.correct) ok += 1;
    }
    Object.assign(result, { points, max, ok });
  }

  function renderTestResult(root) {
    keyHandler = null;
    const r = test.result;
    const pct = percent(r.points, r.max);
    const praise = pct >= 90 ? "Hervorragend – das sitzt!" : pct >= 75 ? "Sehr gut!" : pct >= 50 ? "Solide – da geht noch was." : "Weiter üben – die falschen Fragen liegen jetzt in Fach 1.";
    const wrong = r.items.filter((it) => !it.st.res.correct);
    const hero = h("div", { class: "card result-hero" },
      h("div", { class: "result-score" }, r.points + " / " + r.max),
      h("p", { class: "result-sub" }, (r.cfg.scoring === "ganz" ? "Fragen" : "Punkte") + " · " + pct + " % · " + r.ok + " von " + r.items.length + " Fragen ganz richtig"),
      progressBar(pct, "Ergebnis"),
      h("p", { style: "margin:0 0 16px;font-weight:600" }, praise),
      h("div", { class: "row" },
        wrong.length ? h("button", { class: "button button--primary", type: "button", onclick: () => {
          startLearn(shuffle(wrong.map((it) => it.st.q.id)), "Fehler aus dem Test");
          goto("lernen");
        } }, "Falsche Fragen üben") : null,
        h("button", { class: "button", type: "button", onclick: () => launchTest(shuffle(r.items.map((it) => it.st.q)), r.cfg, r.label) }, "Gleiche Fragen nochmal"),
        h("button", { class: "button", type: "button", onclick: () => { test.result = null; renderTest(); } }, "Neuer Test")
      )
    );

    const byCat = new Map();
    for (const it of r.items) {
      const k = it.st.q.k;
      const e = byCat.get(k) || { p: 0, max: 0 };
      const sc = scoreOf(it.st.res, r.cfg.scoring);
      e.p += sc.points;
      e.max += sc.max;
      byCat.set(k, e);
    }
    const cats = byCat.size > 1 ? h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Nach Themen"),
      h("div", { class: "cat-rows" }, CATS.filter((c) => byCat.has(c.key)).map((c) => {
        const e = byCat.get(c.key);
        return h("div", null,
          h("div", { class: "cat-row__head" }, h("span", null, c.name), h("span", null, e.p + " / " + e.max)),
          progressBar(percent(e.p, e.max), c.name));
      }))
    ) : null;

    const review = h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Alle Fragen mit Lösung"),
      h("div", { class: "review" }, r.items.map((it, i) => reviewItem(it, i, r)))
    );
    paint(root, [hero, cats, review]);
  }

  function reviewItem(it, i, r) {
    const st = it.st;
    const res = st.res;
    const sc = scoreOf(res, r.cfg.scoring);
    const kind = res.correct ? "good" : res.partial || sc.points > 0 ? "part" : "bad";
    const details = h("details", { class: "review-item", open: !res.correct });
    details.appendChild(h("summary", null,
      h("span", { class: "review-item__status review-item__status--" + kind, "aria-label": res.correct ? "richtig" : "falsch" }, res.correct ? "✓" : kind === "part" ? "◐" : "✗"),
      h("span", { class: "review-item__q" }, (i + 1) + ". " + st.q.q),
      h("span", { class: "review-item__pts" }, sc.points + "/" + sc.max)
    ));
    const on = {
      override: () => {
        restore(st.q.id, it.prev);
        const move = commit(st.q.id, true, it.promote);
        it.prev = move.prev;
        st.res = Object.assign({}, st.res, { correct: true, points: 1 });
        tally(r);
        const entry = state.tests[state.tests.length - 1];
        if (entry && entry.d === r.date) Object.assign(entry, { ok: r.ok, p: r.points, max: r.max });
        save();
        renderTestResult($("#test-root"));
      }
    };
    details.appendChild(questionCard(st, { mode: "review", on, scoring: r.cfg.scoring }));
    return details;
  }

  // ---------- Katalog ----------

  const catalog = { open: false, filtered: [] };

  function initCatalog() {
    const topic = $("#cat-topic");
    topic.appendChild(h("option", { value: "" }, "alle Themen"));
    CATS.forEach((c) => topic.appendChild(h("option", { value: c.key }, c.name)));
    const src = $("#cat-source");
    src.appendChild(h("option", { value: "" }, "alle Quellen"));
    Object.entries(SOURCES).forEach(([key, s]) => src.appendChild(h("option", { value: key }, s.name)));
    let timer = null;
    $("#cat-search").addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(renderCatalog, 120);
    });
    ["#cat-topic", "#cat-source", "#cat-status"].forEach((sel) => $(sel).addEventListener("change", renderCatalog));
    $("#cat-toggle").addEventListener("click", () => {
      catalog.open = !catalog.open;
      document.querySelectorAll("#cat-list details").forEach((d) => { d.open = catalog.open; });
      $("#cat-toggle").textContent = catalog.open ? "Alle Lösungen verbergen" : "Alle Lösungen zeigen";
    });
    $("#cat-learn").addEventListener("click", () => {
      const ids = shuffle(catalog.filtered.map((q) => q.id)).slice(0, 60);
      if (startLearn(ids, "Auswahl aus dem Katalog")) goto("lernen");
    });
    $("#cat-test").addEventListener("click", () => {
      const cfg = Object.assign({}, state.settings.test, { pick: "zufall" });
      const qs = shuffle(catalog.filtered).slice(0, 50);
      if (startTest(qs, cfg, "Test aus dem Katalog")) goto("test");
    });
  }

  function searchText(q) {
    return fold([q.q, q.x || "", (q.o || []).join(" "), q.ans || "", q.e, q.n || ""].join(" "));
  }

  const SEARCH_CACHE = new Map();

  function matchesStatus(q, status) {
    switch (status) {
      case "flag": return isFlagged(q.id);
      case "wrong": return wasWrong(q.id);
      case "new": return isNew(q.id);
      case "": return true;
      default: return boxOf(q.id) === Number(status.slice(1));
    }
  }

  function renderCatalog() {
    const term = fold($("#cat-search").value.trim());
    const topic = $("#cat-topic").value;
    const src = $("#cat-source").value;
    const status = $("#cat-status").value;
    const words = term.split(/\s+/).filter(Boolean);
    const list = QUESTIONS.filter((q) => {
      if (topic && q.k !== topic) return false;
      if (src && !q.s.includes(src)) return false;
      if (!matchesStatus(q, status)) return false;
      if (!words.length) return true;
      if (!SEARCH_CACHE.has(q.id)) SEARCH_CACHE.set(q.id, searchText(q));
      const text = SEARCH_CACHE.get(q.id);
      return words.every((w) => text.includes(w));
    });
    catalog.filtered = list;
    $("#cat-count").textContent = plural(list.length, "Frage", "Fragen");
    $("#cat-learn").disabled = !list.length;
    $("#cat-test").disabled = !list.length;
    const root = $("#cat-list");
    if (!list.length) {
      root.replaceChildren(h("p", { class: "empty" }, "Keine Fragen gefunden. Probier einen anderen Suchbegriff oder Filter."));
      return;
    }
    root.replaceChildren(...list.map(catalogItem));
  }

  const TYPE_LABEL = { s: "eine Antwort", m: "Mehrfachauswahl", i: "Eingabe", f: "offene Frage" };

  function catalogItem(q) {
    const item = h("article", { class: "qitem" },
      h("div", { class: "qitem__head" }, h("p", { class: "qitem__q" }, q.q), starButton(q.id, () => {
        if ($("#cat-status").value === "flag") renderCatalog();
      })),
      h("div", { class: "q__meta" },
        h("span", { class: "tag tag--cat" }, CAT_NAME[q.k]),
        sourceTags(q),
        h("span", { class: "tag" }, TYPE_LABEL[q.t]),
        boxTag(q.id))
    );
    const details = h("details", { open: catalog.open });
    details.appendChild(h("summary", null, "Lösung anzeigen"));
    const sol = h("div", { class: "solution" });
    append(sol, contextBlock(q));
    if (q.o) {
      sol.appendChild(h("ul", { class: "sol-opts" }, q.o.map((o, i) => {
        const right = q.c.includes(i);
        return h("li", { class: right ? "is-right" : "" }, h("span", { class: "sym", "aria-label": right ? "richtig" : "falsch" }, right ? "✓" : "✗"), h("span", null, o));
      })));
    } else {
      sol.appendChild(h("div", { class: "flash-answer" }, h("strong", null, "Lösung: "), (q.t === "f" ? "\n" : "") + q.ans));
    }
    append(sol, explanationBlock(q));
    details.appendChild(sol);
    item.appendChild(details);
    return item;
  }

  // ---------- Fortschritt ----------

  function renderProgress() {
    const root = $("#prog-root");
    const seen = QUESTIONS.filter((q) => state.cards[q.id] && state.cards[q.id].ok + state.cards[q.id].ko > 0);
    let ok = 0, ko = 0;
    for (const q of seen) { ok += state.cards[q.id].ok; ko += state.cards[q.id].ko; }
    const solid = QUESTIONS.filter((q) => boxOf(q.id) >= 4).length;
    const flagged = QUESTIONS.filter((q) => isFlagged(q.id)).length;

    const overview = h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Überblick"),
      h("div", { class: "stat-grid" },
        stat(seen.length + " / " + QUESTIONS.length, "Fragen schon beantwortet"),
        stat((ok + ko ? percent(ok, ok + ko) : 0) + " %", "Trefferquote"),
        stat(solid, "sicher (Fach 4–5)"),
        stat(flagged, "markiert")
      ),
      h("div", { style: "margin-top:18px" }, boxesChart(QUESTIONS))
    );

    const cats = h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Nach Themen"),
      h("div", { class: "cat-rows" }, CATS.map((c) => {
        const qs = QUESTIONS.filter((q) => q.k === c.key);
        const boxes = qs.reduce((sum, q) => sum + boxOf(q.id), 0);
        const done = qs.filter((q) => !isNew(q.id)).length;
        const level = percent(boxes, qs.length * 5);
        return h("div", null,
          h("div", { class: "cat-row__head" }, h("span", null, c.name), h("span", null, done + "/" + qs.length + " gesehen · " + level + " %")),
          progressBar(level, c.name));
      })),
      h("p", { class: "hint" }, "Der Balken zeigt, wie weit die Fragen eines Themas im Karteikasten gewandert sind (100 % = alle in Fach 5).")
    );

    const worst = QUESTIONS.filter((q) => wasWrong(q.id))
      .sort((a, b) => state.cards[b.id].ko - state.cards[a.id].ko || weakness(b.id) - weakness(a.id)).slice(0, 8);
    const hard = worst.length ? h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Am häufigsten falsch"),
      h("ol", { class: "top-wrong" }, worst.map((q) => h("li", null, q.q, " ", h("span", { class: "count" }, "(" + plural(state.cards[q.id].ko, "× falsch", "× falsch") + ")")))),
      h("div", { class: "row", style: "margin-top:14px" },
        h("button", { class: "button button--primary", type: "button", onclick: () => {
          if (startLearn(shuffle(worst.map((q) => q.id)), "Häufigste Fehler")) goto("lernen");
        } }, "Diese üben"))
    ) : null;

    const tests = state.tests.slice(-10).reverse();
    const history = tests.length ? h("div", { class: "card" },
      h("h2", { class: "card__title" }, "Letzte Tests"),
      h("div", { class: "table-wrap" }, h("table", { class: "history" },
        h("thead", null, h("tr", null, h("th", null, "Datum"), h("th", null, "Test"), h("th", null, "Ergebnis"))),
        h("tbody", null, tests.map((t) => h("tr", null,
          h("td", null, formatDate(t.d)),
          h("td", null, (t.label || "Test") + " · " + plural(t.n, "Frage", "Fragen")),
          h("td", null, t.p + " / " + t.max + " (" + percent(t.p, t.max) + " %)"))))))
    ) : null;

    paint(root, [overview, cats, hard, history]);
  }

  function initProgressActions() {
    const msg = (text) => { $("#prog-msg").textContent = text; };
    $("#prog-export").addEventListener("click", () => {
      const payload = Object.assign({ app: "imker-trainer", exportiert: new Date().toISOString() }, state);
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const d = new Date();
      const name = "imker-trainer-" + d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0") + ".json";
      const a = h("a", { href: url, download: name });
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      msg("Sicherung „" + name + "“ wurde heruntergeladen.");
    });
    $("#prog-import").addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      e.target.value = "";
      if (!file) return;
      file.text().then((text) => {
        let data;
        try { data = JSON.parse(text); } catch (err) { data = null; }
        if (!data || data.app !== "imker-trainer" || typeof data.cards !== "object") {
          msg("Diese Datei ist keine Sicherung des Imker-Trainers.");
          return;
        }
        if (!window.confirm("Deinen aktuellen Fortschritt durch die Sicherung ersetzen?")) return;
        state = sanitize(data);
        save();
        msg("Sicherung geladen: " + plural(Object.keys(state.cards).length, "Frage", "Fragen") + " mit Lernstand.");
        renderProgress();
      });
    });
    $("#prog-reset").addEventListener("click", () => {
      if (!window.confirm("Wirklich den gesamten Lernstand, alle Markierungen und Testergebnisse löschen?")) return;
      const settings = state.settings;
      state = defaults();
      state.settings = settings;
      learn.session = null;
      test.run = null;
      test.result = null;
      save();
      msg("Alles zurückgesetzt.");
      renderProgress();
    });
  }

  // ---------- Start ----------

  function renderStart() {
    keyHandler = null;
    const day = today();
    const due = QUESTIONS.filter((q) => isDue(q.id, day)).length;
    const fresh = QUESTIONS.filter((q) => isNew(q.id)).length;
    const flagged = QUESTIONS.filter((q) => isFlagged(q.id)).length;
    const wrong = QUESTIONS.filter((q) => wasWrong(q.id) && boxOf(q.id) <= 2).length;
    $("#start-lead").textContent = QUESTIONS.length + " Fragen aus den bayerischen Jungimker-Meisterschaften, IMYB-Tests und Zusatzfragen zu den Honigmacher-Themen – jede mit Erklärung, warum die Antwort stimmt.";
    $("#start-due").textContent = due
      ? plural(due, "Frage ist", "Fragen sind") + " heute fällig, " + fresh + " noch neu."
      : fresh ? "Heute ist nichts fällig. " + plural(fresh, "Frage wartet", "Fragen warten") + " noch darauf, das erste Mal gelernt zu werden." : "Alles erledigt – komm morgen wieder!";
    $("#start-hard").textContent = flagged || wrong
      ? plural(flagged, "markierte Frage", "markierte Fragen") + " und " + plural(wrong, "Frage", "Fragen") + ", die du zuletzt falsch hattest."
      : "Markiere Fragen mit dem Stern oder beantworte ein paar – dann sammeln sich hier deine schwierigen Fragen.";
    $("#start-hard-btn").disabled = !(flagged || wrong);
    $("#start-boxes").replaceChildren(boxesChart(QUESTIONS));
    const sources = $("#start-sources");
    if (!sources.childNodes.length) {
      for (const [key, s] of Object.entries(SOURCES)) {
        const n = QUESTIONS.filter((q) => q.s.includes(key)).length;
        sources.appendChild(h("li", null, h("strong", null, s.name), " – " + s.detail + " ", h("span", { class: "count" }, "(" + plural(n, "Frage", "Fragen") + ")")));
      }
    }
  }

  $("#start-hard-btn").addEventListener("click", () => {
    const ids = QUESTIONS.filter((q) => isFlagged(q.id) || (wasWrong(q.id) && boxOf(q.id) <= 2))
      .sort((a, b) => weakness(b.id) - weakness(a.id)).slice(0, 30).map((q) => q.id);
    if (startLearn(shuffle(ids), "Markiert & schwierig")) goto("lernen");
  });

  // ---------- Navigation ----------

  const VIEWS = ["start", "lernen", "test", "fragen", "fortschritt"];
  const TITLES = { start: "Imker-Trainer", lernen: "Karteikasten · Imker-Trainer", test: "Test · Imker-Trainer", fragen: "Alle Fragen · Imker-Trainer", fortschritt: "Fortschritt · Imker-Trainer" };
  let currentView = null;

  function route() {
    const name = VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "start";
    const changed = name !== currentView;
    currentView = name;
    document.querySelectorAll(".view").forEach((v) => { v.hidden = v.dataset.view !== name; });
    document.querySelectorAll(".tabs a").forEach((a) => {
      if (a.dataset.tab === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.title = TITLES[name];
    keyHandler = null;
    if (name === "start") renderStart();
    if (name === "lernen") renderLearn();
    if (name === "test") renderTest();
    if (name === "fragen") renderCatalog();
    if (name === "fortschritt") renderProgress();
    if (changed) window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);

  if (!storageOk) $("#storage-warning").hidden = false;
  initCatalog();
  initProgressActions();
  route();
})();
