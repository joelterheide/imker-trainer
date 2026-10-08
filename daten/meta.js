/* Imker-Trainer – Themen, Quellen und das Sammeln der Fragen.

   Aufbau einer Frage:
     id   eindeutige, feste Kennung (daran hängt der Lernfortschritt – nie ändern)
     s    Quellen (Schlüssel aus IMKER.sources)
     t    Typ: "s" = eine Antwort, "m" = mehrere Antworten,
               "i" = Antwort eintippen, "f" = offene Frage (selbst bewerten)
     q    Frage
     x    optionaler Einleitungstext (z. B. die Fallbeschreibung aus dem Wettbewerb)
     tbl  optionale Tabelle (erste Zeile = Kopfzeile)
     o, c Antwortmöglichkeiten und Indizes der richtigen Antworten (Typ s und m)
     acc  akzeptierte Eingaben (Typ i); ans = Musterlösung (Typ i und f)
     e    Erklärung, warum die Lösung stimmt
     n    optionaler Hinweis (z. B. Abweichung von einem Lösungsbogen) */
var IMKER = {
  categories: [
    { key: "biologie", name: "Körperbau & Sinne" },
    { key: "volk", name: "Entwicklung & Volksleben" },
    { key: "praxis", name: "Imkerpraxis" },
    { key: "varroa", name: "Varroamilbe" },
    { key: "krankheiten", name: "Krankheiten & Schädlinge" },
    { key: "honig", name: "Honig & Bienenprodukte" },
    { key: "pflanzen", name: "Bienenweide & Umwelt" },
    { key: "recht", name: "Recht, Geschichte & Wirtschaft" }
  ],
  sources: {
    lvbi26: { name: "Meisterschaft 2026", detail: "10. Bayerische Meisterschaft der Jungimker, Fürstenzell 2026 – Varroa-Theorietest (mit offizieller Korrektur)" },
    lvbi17: { name: "Meisterschaft 2017", detail: "3. Bayerische Meisterschaft, Jungimkerwettbewerb 2017 in Fürstenzell" },
    lvbi16: { name: "Meisterschaft 2016", detail: "2. Bayerische Meisterschaft, Jungimkerwettbewerb 2016 in Cham" },
    lvbi15: { name: "Vorentscheid 2015", detail: "Bayerische Vorentscheidung zum Jungimkerwettbewerb 2015 (Ludwigshafen)" },
    imyb: { name: "IMYB-Theorietest", detail: "IMYB-Theorietest (deutschsprachige Fassung, mit Lösungsbogen)" },
    imybx: { name: "IMYB international", detail: "Fragen aus dem internationalen IMYB-Test (übersetzt, mit Lösungsbogen)" },
    wd40: { name: "Internationaler Wettbewerb", detail: "1. Internationaler deutschsprachiger Jungimkerwettbewerb" },
    quiz: { name: "Theoriequiz (50 Fragen)", detail: "Theoriequiz mit 50 Fragen aus der Vorbereitungsmappe" },
    sammlung: { name: "Fragensammlung", detail: "Weitere Theoriefragen aus der Vorbereitungsmappe (ohne Lösungsbogen)" },
    extra: { name: "Zusatzfragen", detail: "Ergänzende Fragen zu den Themen der Honigmacher-Kurse (Schnupperkurs, Anfängerkurs, Honig, Bienenweide, Varroa)" }
  },
  questions: [],
  add: function (category, list) {
    for (var i = 0; i < list.length; i++) {
      list[i].k = category;
      IMKER.questions.push(list[i]);
    }
  }
};
