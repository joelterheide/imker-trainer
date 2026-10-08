# Imker-Trainer

Lerntool für den Jungimkerwettbewerb: über 300 Theoriefragen mit Erklärung zu jeder Antwort, ein Karteikasten zum Wiederholen schwieriger Fragen, ein Testgenerator mit Wettbewerbs-Wertung und ein durchsuchbarer Fragenkatalog.

Website: https://joelterheide.github.io/imker-trainer/

## Funktionen

- **Karteikasten (Leitner-System):** fünf Fächer, richtige Antworten wandern ein Fach weiter (wieder fällig nach 1, 3, 7 und 21 Tagen), falsche fallen zurück in Fach 1 und kommen in derselben Runde noch einmal. Fragen lassen sich mit einem Stern markieren.
- **Test:** Anzahl, Themen, Quelle und Auswahl (zufällig, Schwachstellen zuerst, markierte, neue, Original-Reihenfolge) frei wählbar; Rückmeldung nach jeder Frage oder erst am Ende wie in der Prüfung. Wertung wahlweise „nur ganz richtig zählt“ oder wie im Wettbewerb: +1 für jedes richtige Kreuz, −1 für jedes falsche oder fehlende Kreuz, mindestens 0 Punkte.
- **Alle Fragen:** Suche, Filter nach Thema, Quelle und Lernstand, Lösungen und Erklärungen zum Aufklappen.
- **Fortschritt:** Fächer, Stand pro Thema, häufigste Fehler, letzte Tests. Der Lernstand liegt nur im Browser (localStorage) und lässt sich als Datei sichern und auf einem anderen Gerät wieder laden.

## Fragen

Die Fragen stammen aus den Theorietests der Bayerischen Jungimker-Meisterschaften (2015, 2016, 2017, 2026), dem IMYB-Theorietest, dem internationalen deutschsprachigen Jungimkerwettbewerb und einer Vorbereitungsmappe. Dazu kommen Zusatzfragen zu den Themen der Honigmacher-Kurse. Wo ein Lösungsbogen fachlich falsch war, steht bei der Frage ein Hinweis.

Jedes Thema hat eine eigene Datei in `daten/`; der Aufbau einer Frage ist in `daten/meta.js` beschrieben. Die `id` einer Frage nie ändern – daran hängt der Lernstand.

## Entwicklung

Statische Seite ohne Build-Schritt: `index.html`, `app.js`, `style.css` und die Fragen in `daten/`.

```sh
python3 -m http.server 8765                      # dann http://localhost:8765/ öffnen
node _dev/check-data.mjs                          # Fragendaten prüfen
NODE_PATH="$(npm root -g)" node _dev/browser-test.mjs   # Klicktest mit Playwright (Server muss laufen)
```

## Veröffentlichung

Der Workflow `.github/workflows/pages.yml` prüft bei jedem Pull Request die Fragendaten und veröffentlicht den Stand von `main` auf GitHub Pages. Einmalig einstellen: **Settings → Pages → Build and deployment → Source: „GitHub Actions“**.
