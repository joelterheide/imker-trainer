IMKER.add("honig", [
  {
    id: "ho-wassergehalt-dib", s: ["lvbi17"], t: "m",
    q: "Welcher Wassergehalt ist im Honig nach den Qualitätsrichtlinien des Deutschen Imkerbundes (D.I.B.) noch zulässig, wenn er unter dessen Warenzeichen verkauft werden soll?",
    o: ["20 % Wasser", "21,4 % beim Heidehonig", "80 % Wasser", "18 % Wasser", "0,9 % Wasser"], c: [1, 3],
    e: "D.I.B.: höchstens 18 % Wasser, beim Heidehonig höchstens 21,4 %. Zum Vergleich die gesetzliche Honigverordnung: allgemein höchstens 20 %, Heidehonig 23 %. Der D.I.B. ist also strenger. Je weniger Wasser, desto geringer die Gefahr, dass der Honig gärt."
  },
  {
    id: "ho-heidehonig-wasser", s: ["lvbi15", "imyb"], t: "i",
    x: "Ein reifer Honig, der in den Verkauf kommt, darf nach der Qualitätsrichtlinie des Deutschen Imkerbundes einen Wassergehalt von 18 % nicht überschreiten. Eine Ausnahme gibt es für Heidehonig.",
    q: "Wie hoch darf der Wassergehalt beim Heidehonig sein? (Angabe in Prozent)",
    acc: ["21,4", "21,4 %", "21.4"], ans: "21,4 %",
    e: "Heidehonig (Besenheide) ist geleeartig und enthält von Natur aus mehr Wasser – deshalb erlaubt der D.I.B. 21,4 %. Die Honigverordnung erlaubt beim Heidehonig sogar 23 %."
  },
  {
    id: "ho-fehlerquellen", s: ["lvbi15", "imyb"], t: "m",
    q: "Welche Fehlerquellen können bei der Honigproduktion auftreten?",
    o: ["Kontamination des Honigs mit verschiedenen Verunreinigungen", "Überhitzung des Honigs", "Zu hoher Wassergehalt des Honigs"], c: [0, 1, 2],
    e: "Alle drei: Verunreinigungen (Wachs, Bienenteile, Schmutz, Rückstände) durch unsauberes Arbeiten; Überhitzung zerstört Enzyme und erhöht den HMF-Wert; zu viel Wasser (unreif geschleudert oder feucht gelagert) lässt Honig gären."
  },
  {
    id: "ho-schleudertypen", s: ["lvbi15", "imyb"], t: "m",
    q: "Welches sind die beiden gebräuchlichen Schleudertypen?",
    o: ["Tangentialschleuder", "Radialschleuder", "Zentrifugalpresse", "Diagonalschleuder"], c: [0, 1],
    e: "Tangentialschleuder: Die Waben stehen wie Sehnen im Kreis, es wird immer eine Seite geschleudert, dann gewendet. Radialschleuder: Die Waben stehen wie Speichen eines Rads, beide Seiten werden gleichzeitig geschleudert – bequem für viele Waben."
  },
  {
    id: "ho-entdeckeln", s: ["imyb", "quiz"], t: "s",
    q: "Als Entdeckeln bezeichnet man das …",
    o: ["Öffnen von leeren oder vollen Honiggläsern", "„Entdecken“ kleiner Naturgesetze im Bienenvolk", "Entfernen der Wachsdeckel von den Honigwaben"], c: [2],
    e: "Reifer Honig wird von den Bienen mit Wachs verdeckelt. Vor dem Schleudern hebt man die Deckel mit Entdeckelungsgabel oder -messer ab. Das Entdeckelungswachs ist sehr hell und rein."
  },
  {
    id: "ho-nach-schleudern", s: ["imyb", "quiz"], t: "s",
    q: "Nach dem Schleudern soll der frische Honig …",
    o: ["sofort in Gläser abgefüllt werden", "gesiebt und in Gläser abgefüllt werden", "gesiebt, abgeschäumt und (bei kristallisierenden Sorten) gerührt werden"], c: [2],
    e: "Über Grob- und Feinsieb kommen Wachsteilchen heraus. Im Klärbehälter steigen Luftbläschen und feine Teilchen als Schaum nach oben und werden abgeschöpft. Sorten, die schnell kristallisieren, rührt man, damit sie cremig werden. Erst dann wird abgefüllt."
  },
  {
    id: "ho-erhitzen", s: ["imyb", "wd40"], t: "s",
    q: "Über welche Temperatur sollte Honig nicht erhitzt werden?",
    o: ["37 °C", "40 °C", "45 °C", "60 °C"], c: [1],
    e: "Ab etwa 40 °C werden die wertvollen Enzyme (Invertase, Diastase) geschädigt und der HMF-Gehalt steigt. Kandierten Honig deshalb nur schonend im Wasserbad bei höchstens 40 °C verflüssigen."
  },
  {
    id: "ho-nektar-kg", s: ["wd40", "imyb"], t: "s",
    q: "Wie viel Nektar braucht man für 1 kg Honig?",
    o: ["1 kg", "2,5 kg", "3 kg", "5 kg"], c: [2],
    e: "Nektar enthält oft nur 20–50 % Zucker, reifer Honig rund 80 %. Je nach Nektar brauchen die Bienen etwa 2–3 kg (Lösung: 3 kg) für 1 kg Honig; das überschüssige Wasser wird im Stock durch Fächeln verdunstet."
  },
  {
    id: "ho-saccharose-nektar", s: ["imybx"], t: "s",
    q: "Welche Zuckerart herrscht in vielen Nektaren vor?",
    o: ["Saccharose (Rohrzucker)", "Stärke", "Laktose (Milchzucker)", "Zellulose"], c: [0],
    e: "Nektar enthält vor allem Saccharose sowie Glucose und Fructose – je nach Pflanze unterschiedlich. Die Bienen spalten die Saccharose mit dem Enzym Invertase in Glucose und Fructose, die Hauptzucker des Honigs."
  },
  {
    id: "ho-bestandteile", s: ["extra"], t: "s",
    q: "Woraus besteht Honig hauptsächlich?",
    o: ["Aus Fructose und Glucose (zusammen rund 70–75 %) und etwa 15–20 % Wasser", "Aus Eiweiß und Fett", "Aus Saccharose und Stärke", "Aus mehr als 50 % Wasser und Mineralstoffen"], c: [0],
    e: "Honig ist zu rund 80 % Zucker, vor allem Fructose (Fruchtzucker) und Glucose (Traubenzucker). Dazu kommen Wasser, etwas Saccharose und andere Zucker sowie in kleinen Mengen Säuren, Enzyme, Mineralstoffe, Aromastoffe und Pollen."
  },
  {
    id: "ho-enzyme", s: ["extra"], t: "m",
    q: "Welche Enzyme geben die Bienen dem Honig bei?",
    o: ["Invertase", "Diastase (Amylase)", "Glucoseoxidase", "Pepsin"], c: [0, 1, 2],
    e: "Invertase spaltet Saccharose, Diastase spaltet Stärke, Glucoseoxidase bildet aus Glucose Gluconsäure und Wasserstoffperoxid – das schützt unreifen Honig vor Keimen. Pepsin ist ein Verdauungsenzym aus dem Magen von Säugetieren."
  },
  {
    id: "ho-konservierung", s: ["lvbi17"], t: "m",
    q: "Wie schützen Bienen ihre Nahrungsreserve Honig davor, dass Bakterien und Pilze darin wachsen?",
    o: ["Bienen nutzen UV-Strahlung, um die Oberfläche der Honigwaben zu sterilisieren.", "Die Arbeiterinnen mischen Gift aus ihrer Giftdrüse in den unreifen Honig; gegen ihr eigenes Gift sind sie immun.", "Bienen erhöhen den osmotischen Wert des Honigs und verhindern so, dass Mikroorganismen Wasser aufnehmen können.", "Die Bienen heizen die Honigwaben mit ihrer Flugmuskulatur periodisch auf über 58 °C auf; Keime sind nach 2 Stunden abgetötet.", "Bereits der unreife Honig wird durch Spuren von Wasserstoffperoxid vor dem Verderb durch Bakterien und Pilze geschützt."], c: [2, 4],
    e: "Reifer Honig enthält so viel Zucker und so wenig Wasser, dass er Mikroorganismen Wasser entzieht (hoher osmotischer Wert). Im unreifen Honig bildet das Bienenenzym Glucoseoxidase Wasserstoffperoxid, das Keime hemmt. Im dunklen Stock gibt es kein UV-Licht, Gift wird nicht beigemischt, und bei über 58 °C würden die Wachswaben weich und brächen zusammen – das Brutnest hat nur etwa 35 °C."
  },
  {
    id: "ho-rueckstaende", s: ["lvbi17"], t: "m",
    q: "Kann es im Honig wasserlösliche und fettlösliche Rückstände geben? Welche Aussagen treffen zu?",
    o: ["Kunststoffe nicht zugelassener Lagerbehälter können Weichmacher, Schwermetalle und Farbstoffe abgeben.", "Wasserlösliche Stoffe können sich direkt im Honig einlagern.", "Fettlösliche Stoffe können sich im Bienenwachs der Waben anreichern.", "Geringe Spuren fettlöslicher Stoffe, über Monate und Jahre eingetragen, sind wegen der geringen Menge unbedenklich."], c: [0, 1, 2],
    e: "Wasserlösliche Stoffe gehen in den Honig, fettlösliche ins Wachs – und reichern sich dort über die Jahre an (sie summieren sich, statt zu verschwinden). Vorbeugen: nur lebensmittelechte Behälter, keine fettlöslichen Varroamittel, regelmäßige Wabenerneuerung, Wachskreislauf sauber halten."
  },
  {
    id: "ho-lagerbehaelter", s: ["sammlung"], t: "s",
    q: "In Behältern aus welchem Material sollte Honig nicht gelagert werden?",
    o: ["Kupfer", "Edelstahl", "lebensmittelechter Kunststoff"], c: [0],
    e: "Honig ist sauer (pH etwa 3,5–4,5) und löst Metalle wie Kupfer, Zink oder Eisen an – das verdirbt Geschmack und Qualität. Geeignet sind Edelstahl, Glas und lebensmittelechter Kunststoff."
  },
  {
    id: "ho-lagerung", s: ["extra"], t: "s",
    q: "Wie lagert man Honig richtig?",
    o: ["Kühl (unter ca. 15 °C), dunkel, trocken und gut verschlossen", "Warm und hell auf der Fensterbank", "Offen im Kühlschrank neben Zwiebeln", "Im Gefrierfach mit offenem Deckel"], c: [0],
    e: "Honig zieht Feuchtigkeit und Gerüche an. Wärme und Licht lassen den HMF-Wert steigen und die Enzyme abnehmen. Kühl, dunkel und dicht verschlossen hält er sich sehr lange."
  },
  {
    id: "ho-kristallisation", s: ["extra"], t: "s",
    q: "Warum wird Honig mit der Zeit fest (er kristallisiert bzw. „kandiert“)?",
    o: ["Honig ist eine übersättigte Zuckerlösung – vor allem die Glucose kristallisiert aus", "Weil er verdirbt", "Weil Wasser eindringt", "Weil die Bienen Wachs untermischen"], c: [0],
    e: "Kristallisieren ist natürlich und kein Qualitätsmangel. Honige mit viel Glucose (z. B. Raps, Löwenzahn) werden schnell fest, Honige mit viel Fructose (Akazie/Robinie, viele Waldhonige) bleiben lange flüssig."
  },
  {
    id: "ho-glucose-fructose", s: ["imybx"], t: "s",
    q: "Bei welchem Verhältnis von Glucose zu Fructose kristallisiert Honig am langsamsten?",
    o: ["1 : 2 (viel mehr Fructose)", "2 : 1 (viel mehr Glucose)"], c: [0],
    e: "Glucose ist schlechter löslich als Fructose und bildet die Kristalle. Je mehr Fructose im Verhältnis, desto länger bleibt der Honig flüssig."
  },
  {
    id: "ho-akazie", s: ["sammlung"], t: "s",
    q: "Welcher Honig kristallisiert nur sehr langsam?",
    o: ["Raps", "Akazie (Robinie)", "Buchweizen"], c: [1],
    e: "Akazienhonig (von der Robinie) hat besonders viel Fructose und bleibt oft jahrelang flüssig. Rapshonig kristallisiert dagegen schon nach wenigen Tagen bis Wochen."
  },
  {
    id: "ho-raps", s: ["extra"], t: "s",
    q: "Was musst du bei Rapshonig beachten?",
    o: ["Er kristallisiert sehr schnell, teils schon in der Wabe – deshalb bald nach der Verdeckelung schleudern", "Er muss ein Jahr in der Wabe reifen", "Er darf nie gerührt werden", "Er hat immer über 20 % Wasser"], c: [0],
    e: "Rapshonig ist reich an Glucose. Wird er zu spät geschleudert, ist er in der Wabe fest und lässt sich nicht mehr schleudern. Durch Rühren wird er zu feinem, cremigem Honig."
  },
  {
    id: "ho-ruehren", s: ["extra"], t: "s",
    q: "Warum rührt man kristallisierenden Honig, z. B. Rapshonig?",
    o: ["Damit sich viele feine Kristalle bilden und der Honig cremig und streichfähig wird", "Damit er flüssig bleibt", "Um Wasser einzurühren", "Um Wachsreste aufzulösen"], c: [0],
    e: "Ungerührt bilden sich grobe, harte Kristalle. Durch regelmäßiges Rühren in der Kristallisationsphase (oder Impfen mit feinem Honig) entsteht eine feine, cremige Konsistenz."
  },
  {
    id: "ho-heide-thixotrop", s: ["extra"], t: "s",
    q: "Welcher Honig ist geleeartig (thixotrop) und lässt sich nur schleudern, wenn man die Zellen vorher auflockert („stippt“)?",
    o: ["Heidehonig (Besenheide)", "Akazienhonig", "Rapshonig", "Lindenhonig"], c: [0],
    e: "Heidehonig ist in Ruhe fest wie Gelee und wird beim Rühren flüssig (Thixotropie). Er wird mit einem Lösgerät (Stippgerät) in den Zellen aufgelockert oder gepresst. Er darf auch mehr Wasser enthalten."
  },
  {
    id: "ho-honigtau", s: ["sammlung"], t: "s",
    q: "Was ist Honigtau?",
    o: ["Früh morgens gesammelter Honig", "Zuckerhaltige Ausscheidung von Pflanzensaugern wie Blatt-, Rinden- oder Schildläusen", "Honig aus anderen Ländern"], c: [1],
    e: "Pflanzensaugende Insekten zapfen den zuckerreichen Siebröhrensaft an, nutzen vor allem das Eiweiß und scheiden den überschüssigen Zucker als Honigtau aus. Bienen sammeln ihn, z. B. auf Fichte, Tanne, Lärche oder Eiche."
  },
  {
    id: "ho-honigtauhonig", s: ["lvbi16"], t: "s",
    q: "Wie wird Honigtauhonig noch bezeichnet?",
    o: ["Sommertrachthonig", "Waldhonig", "Frühjahrshonig"], c: [1],
    e: "Honig aus Honigtau stammt meist aus dem Wald (z. B. Tannen-, Fichten- oder Eichenhonig) und heißt deshalb Waldhonig. Er ist dunkler, würzig, mineralstoffreich und bleibt lange flüssig."
  },
  {
    id: "ho-melezitose", s: ["lvbi16"], t: "s",
    q: "Melezitose ist ein spezieller Dreifachzucker. Woraus besteht er?",
    o: ["drei Moleküle Fructose", "zwei Moleküle Glucose und ein Molekül Fructose", "ein Molekül Glucose und zwei Moleküle Fructose"], c: [1],
    e: "Melezitose = 2 × Glucose + 1 × Fructose. Sie kristallisiert schon in der Wabe zu hartem „Zementhonig“, der sich nicht schleudern lässt. Als Winterfutter ist er für die Bienen schwer verdaulich (Gefahr von Ruhr)."
  },
  {
    id: "ho-melezitose-tracht", s: ["imyb"], t: "s",
    q: "Welche Tracht ist für Melezitose anfällig?",
    o: ["Linde", "Kornblume", "Heide", "Wald"], c: [3],
    e: "Melezitose kommt im Honigtau vor, besonders von Lärche und Fichte – also in der Waldtracht. Blütentrachten wie Linde, Kornblume oder Heide liefern keinen Melezitosehonig.",
    n: "Im IMYB-Lösungsbogen war zuerst „Heide“ angekreuzt und wurde zu „Wald“ korrigiert."
  },
  {
    id: "ho-sortenhonig", s: ["imyb"], t: "s",
    q: "Wie viel Prozent Nektar bzw. Honigtau einer Pflanze muss ein Honig enthalten, um als Sortenhonig bezeichnet werden zu dürfen?",
    o: ["40 %", "50 %", "60 %", "80 %"], c: [2],
    e: "Ein Sortenhonig muss überwiegend aus einer Pflanze stammen und deren typische Eigenschaften in Geschmack, Farbe und Pollenbild zeigen. Im Lösungsbogen steht dafür 60 %. Genau festgestellt wird die Sorte im Labor über Pollenanalyse und Sensorik."
  },
  {
    id: "ho-fermentation", s: ["imybx"], t: "s",
    q: "Was ist die Hauptursache dafür, dass gelagerter Honig gärt?",
    o: ["Ein zu hoher Wassergehalt (über ca. 18 %)", "Zu viel Pollen", "Zu kühle Lagerung", "Zu viel Fructose"], c: [0],
    e: "Natürlich vorkommende Hefen vermehren sich, sobald genug Wasser vorhanden ist. Gärender Honig riecht säuerlich, schäumt und ist nicht mehr verkehrsfähig. Deshalb nur reifen, verdeckelten Honig schleudern und den Wassergehalt messen."
  },
  {
    id: "ho-refraktometer", s: ["imybx"], t: "s",
    q: "Womit misst man typischerweise den Wassergehalt von Honig?",
    o: ["Mit einem Refraktometer", "Mit einem Thermometer", "Mit einer Waage", "Mit dem Geschmack"], c: [0],
    e: "Das Refraktometer misst die Lichtbrechung eines Honigtropfens – je mehr Zucker, desto stärker die Brechung. Die Skala zeigt direkt den Wassergehalt an (bzw. den Zuckergehalt in °Brix, der sich in g/100 g umrechnen lässt)."
  },
  {
    id: "ho-codex-wasser", s: ["imybx"], t: "s",
    q: "Was ist nach dem internationalen Codex-Standard der maximal zulässige Wassergehalt von Honig (allgemein, ohne Heidehonig)?",
    o: ["höchstens 21 g/100 g", "höchstens 20 g/100 g"], c: [1],
    e: "Codex Alimentarius und EU-Honigrichtlinie: höchstens 20 % Wasser (Heidehonig 23 %). Der D.I.B. verlangt für sein Glas sogar höchstens 18 %.",
    n: "Im IMYB-Lösungsbogen war „21 g/100 g“ angekreuzt. Der Codex-Grenzwert liegt aber bei 20 g/100 g."
  },
  {
    id: "ho-hmf", s: ["imybx"], t: "s",
    q: "Was zeigt der Gehalt an HMF (Hydroxymethylfurfural) im Honig an?",
    o: ["Die Frische des Honigs und ob er erhitzt oder lange/warm gelagert wurde", "Wie viel Pollen er enthält", "Aus welcher Pflanze er stammt", "Wie viel Wasser er enthält"], c: [0],
    e: "HMF entsteht langsam aus Fructose – schneller bei Wärme und Säure. Frischer Honig hat kaum HMF. Gesetzlich erlaubt sind höchstens 40 mg/kg, der D.I.B. verlangt höchstens 15 mg/kg."
  },
  {
    id: "ho-diastase", s: ["imybx"], t: "s",
    q: "Was sagt die Diastasezahl über die Qualität des Honigs aus?",
    o: ["Sie zeigt die Enzymaktivität – und damit, ob der Honig naturbelassen, frisch und nicht überhitzt ist", "Sie zeigt den Zuckergehalt", "Sie zeigt die Farbe", "Sie zeigt den Pollenanteil"], c: [0],
    e: "Diastase ist ein hitzeempfindliches Bienenenzym. Wird Honig erhitzt oder lange gelagert, sinkt die Diastasezahl – ein wichtiger Qualitätsnachweis neben HMF und Invertase."
  },
  {
    id: "ho-gcc-1", s: ["imybx"], t: "m",
    x: "Laborwerte von Honig 1 im Vergleich zu den Grenzwerten der Golfstaaten (GCC):",
    tbl: [["Parameter", "Ergebnis", "GCC-Grenzwert"], ["Säure (Acidität)", "23,7 meq/kg", "≤ 50 meq/kg"], ["HMF", "92 mg/kg", "≤ 80 mg/kg"], ["Gesamtzucker", "52,9 %", "≥ 60 %"], ["Feuchtigkeit", "18,2 %", "≤ 20 %"]],
    q: "Welche Ergebnisse verletzen den GCC-Grenzwert?",
    o: ["Säure", "HMF", "Gesamtzucker", "Feuchtigkeit"], c: [1, 2],
    e: "HMF 92 mg/kg liegt über dem Höchstwert von 80 mg/kg (Hinweis auf Erhitzung oder Überlagerung), der Gesamtzucker liegt mit 52,9 % unter dem Mindestwert von 60 %. Säure und Feuchtigkeit sind in Ordnung."
  },
  {
    id: "ho-gcc-2", s: ["imybx"], t: "m",
    x: "Laborwerte von Honig 2 im Vergleich zu den Grenzwerten der Golfstaaten (GCC):",
    tbl: [["Parameter", "Ergebnis", "GCC-Grenzwert"], ["Säure (Acidität)", "23,7 meq/kg", "≤ 50 meq/kg"], ["HMF", "24,6 mg/kg", "≤ 80 mg/kg"], ["Gesamtzucker", "61,2 %", "≥ 60 %"], ["Feuchtigkeit", "22 %", "≤ 20 %"]],
    q: "Welche Ergebnisse verletzen den GCC-Grenzwert?",
    o: ["Säure", "HMF", "Gesamtzucker", "Feuchtigkeit"], c: [3],
    e: "Nur die Feuchtigkeit: 22 % liegt über 20 % – dieser Honig ist zu feucht und könnte gären."
  },
  {
    id: "ho-gcc-3", s: ["imybx"], t: "m",
    x: "Laborwerte von Honig 3 im Vergleich zu den Grenzwerten der Golfstaaten (GCC):",
    tbl: [["Parameter", "Ergebnis", "GCC-Grenzwert"], ["Säure (Acidität)", "52 meq/kg", "≤ 50 meq/kg"], ["HMF", "24,6 mg/kg", "≤ 80 mg/kg"], ["Gesamtzucker", "58 %", "≥ 60 %"], ["Feuchtigkeit", "18,2 %", "≤ 20 %"]],
    q: "Welche Ergebnisse verletzen den GCC-Grenzwert?",
    o: ["Säure", "HMF", "Gesamtzucker", "Feuchtigkeit"], c: [0, 2],
    e: "Die Säure liegt mit 52 meq/kg über 50 und der Gesamtzucker mit 58 % unter 60 %. HMF und Feuchtigkeit sind in Ordnung. Tipp: Bei „≤“ darf der Wert höchstens so groß sein, bei „≥“ mindestens so groß."
  },
  {
    id: "ho-manuka", s: ["imybx"], t: "s",
    q: "Welche Pflanze liefert den Honig, der für seine besonders starke antibakterielle Wirkung bekannt ist?",
    o: ["Manuka", "Akazie", "Raps", "Linde"], c: [0],
    e: "Manukahonig aus Neuseeland enthält viel Methylglyoxal (MGO), das zusätzlich zu den normalen Schutzstoffen des Honigs antibakteriell wirkt."
  },
  {
    id: "ho-met", s: ["sammlung"], t: "s",
    q: "Was kann aus Honig hergestellt werden?",
    o: ["Wein (Met)", "Seife", "Bleiche"], c: [0],
    e: "Met (Honigwein) entsteht durch Vergären von verdünntem Honig mit Hefe – eines der ältesten alkoholischen Getränke. Seife mit Honigzusatz gibt es zwar, sie wird aber nicht aus Honig hergestellt."
  },
  {
    id: "ho-etikett", s: ["extra"], t: "m",
    q: "Welche Angaben gehören auf das Etikett eines Honigglases, das du verkaufst?",
    o: ["Die Bezeichnung „Honig“ (ggf. mit Sorte)", "Die Füllmenge", "Das Mindesthaltbarkeitsdatum", "Name und Anschrift des Imkers", "Das Ursprungsland (z. B. Deutschland)", "Der Name der Königin", "Die Anzahl der Bienenvölker"], c: [0, 1, 2, 3, 4],
    e: "Pflicht sind u. a. Verkehrsbezeichnung, Füllmenge, Mindesthaltbarkeitsdatum, Name/Anschrift und Herkunftsland – dazu ggf. eine Losnummer. Angaben zu Königin oder Völkerzahl gehören nicht dazu."
  },
  {
    id: "ho-dib-glas", s: ["extra"], t: "s",
    q: "Was bedeutet das Imker-Honigglas des Deutschen Imkerbundes mit Gewährverschluss?",
    o: ["Der Honig stammt aus Deutschland und erfüllt die strengeren Qualitätsrichtlinien des D.I.B. (z. B. höchstens 18 % Wasser)", "Der Honig ist bio-zertifiziert", "Der Honig wurde importiert", "Der Honig wurde pasteurisiert"], c: [0],
    e: "Das D.I.B.-Glas („Echter Deutscher Honig“) dürfen nur Imker nutzen, die sich an die Qualitätsrichtlinien des Verbandes halten. Diese sind strenger als die Honigverordnung."
  },
  {
    id: "ho-wachs-gewinnen", s: ["imyb", "quiz"], t: "m",
    q: "Bienenwachs gewinnt man …",
    o: ["beim Schleudern von Honig (Entdeckelungswachs)", "durch Einschmelzen von Altwaben und/oder Wachsresten", "durch Naturwabenbau im Bienenvolk"], c: [0, 1, 2],
    e: "Alle drei: Das Entdeckelungswachs ist das hellste und reinste Wachs, Altwaben werden im Dampf- oder Sonnenwachsschmelzer ausgeschmolzen, und Naturbau (z. B. aus dem Baurahmen) liefert frisches Wachs."
  },
  {
    id: "ho-wachs-schmelzpunkt", s: ["imybx"], t: "s",
    q: "Bei welcher Temperatur schmilzt Bienenwachs?",
    o: ["bei ca. 35 °C", "bei ca. 45 °C", "bei ca. 62–64 °C", "bei ca. 100 °C"], c: [2],
    e: "Bienenwachs schmilzt bei etwa 62–64 °C, wird aber schon ab etwa 35–40 °C weich und formbar – ideal für den Wabenbau bei Brutnesttemperatur."
  },
  {
    id: "ho-propolis-was", s: ["imyb"], t: "s",
    q: "Was ist Propolis?",
    o: ["Kittharz", "Wachs", "Nektar"], c: [0],
    e: "Propolis (Kittharz) ist eine harzige Masse, mit der die Bienen Ritzen abdichten, das Flugloch verengen und alles im Stock desinfizieren."
  },
  {
    id: "ho-propolis-woraus", s: ["imyb"], t: "s",
    q: "Woraus besteht Propolis hauptsächlich?",
    o: ["aus Harz von Bäumen (vor allem Knospenharz)", "aus Wachs", "aus Nektar", "aus Pollen"], c: [0],
    e: "Etwa die Hälfte ist Pflanzenharz, das die Bienen von Knospen (z. B. Pappel, Birke, Kastanie) sammeln; dazu kommen Wachs, ätherische Öle und Pollen."
  },
  {
    id: "ho-propolis-sammeln", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Wo sammeln die Bienen Propolis?",
    o: ["auf Blättern", "an Knospen", "am Stamm von Bäumen"], c: [1],
    e: "Die Bienen nagen das klebrige Harz vor allem von Knospen und tragen es wie Pollen in den Körbchen der Hinterbeine nach Hause."
  },
  {
    id: "ho-propolis-zweck", s: ["imyb", "quiz"], t: "s",
    q: "Wozu verwenden die Bienen Propolis?",
    o: ["zum Abdichten und Desinfizieren", "als Nahrung für die Larven", "zur Herstellung von Gelée royale"], c: [0],
    e: "Propolis wirkt antibakteriell und pilzhemmend. Die Bienen dichten damit Spalten ab, glätten Zellwände und überziehen sogar Eindringlinge (z. B. eine tote Maus), die sie nicht hinaustragen können."
  },
  {
    id: "ho-honig-propolis", s: ["imyb"], t: "s",
    q: "Welche Wirkung haben Honig und Propolis gemeinsam?",
    o: ["schützend", "antibakteriell", "desinfizierend"], c: [1],
    e: "Beide hemmen Bakterien: Honig durch hohen Zuckergehalt, Säure und Wasserstoffperoxid, Propolis durch Harzinhaltsstoffe wie Flavonoide."
  },
  {
    id: "ho-gelee-royale", s: ["imyb", "quiz"], t: "m",
    q: "Wozu verwenden die Bienen Gelée royale?",
    o: ["zum Abdichten und Desinfizieren", "als Nahrung für die (jungen) Larven", "zur Aufzucht junger Königinnen"], c: [1, 2],
    e: "Alle jungen Larven bekommen in den ersten Tagen Futtersaft, Königinnenlarven bis zur Verdeckelung reichlich davon. Auch die Königin selbst wird ihr Leben lang mit Gelée royale gefüttert."
  },
  {
    id: "ho-bienenbrot", s: ["extra"], t: "s",
    q: "Was ist Bienenbrot?",
    o: ["In Zellen eingestampfter, mit Honig und Drüsensekreten vermischter und fermentierter Pollen", "Ein Gebäck mit Honig", "Verdeckelter Honig", "Futterteig aus dem Imkereibedarf"], c: [0],
    e: "Stockbienen stampfen den eingetragenen Pollen in Zellen fest und mischen Honig und Speichel unter. Durch Milchsäuregärung wird er haltbar – das Bienenbrot ist die Eiweißreserve des Volkes."
  },
  {
    id: "ho-kein-produkt", s: ["imyb", "wd40"], t: "s",
    q: "Was ist kein Bienenprodukt?",
    o: ["Honig", "Bienenwachs", "Blütennektar", "Bienengift"], c: [2],
    e: "Nektar erzeugt die Pflanze, die Bienen sammeln ihn nur. Bienenprodukte sind Honig, Wachs, Propolis, Pollen (gesammelt), Gelée royale und Bienengift."
  }
]);
