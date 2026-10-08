IMKER.add("volk", [
  {
    id: "vo-dauer-arbeiterin", s: ["imyb", "quiz", "lvbi15"], t: "s",
    q: "Wie lange dauert die Entwicklung einer Arbeiterin vom Ei bis zur fertigen Biene?",
    o: ["16 Tage", "21 Tage", "24 Tage", "27 Tage"], c: [1],
    e: "21 Tage: 3 Tage Ei, 6 Tage offene Made, 12 Tage verdeckelt (Streckmade, Vorpuppe, Puppe). Merkhilfe für alle drei Wesen: Königin 16 – Arbeiterin 21 – Drohn 24."
  },
  {
    id: "vo-dauer-koenigin", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Wie lange dauert die Entwicklung einer Königin vom Ei bis zum Schlupf?",
    o: ["10 Tage", "16 Tage", "21 Tage", "24 Tage"], c: [1],
    e: "16 Tage: 3 Tage Ei, 5 (bis 5½) Tage offene Made, 8 Tage verdeckelt. Die Königinnenlarve wird reichlich mit Gelée royale versorgt und entwickelt sich deshalb am schnellsten."
  },
  {
    id: "vo-dauer-drohn", s: ["imyb", "quiz", "wd40", "lvbi15"], t: "s",
    q: "Nach wie vielen Tagen schlüpft der Drohn (Entwicklung vom Ei zum Drohn)?",
    o: ["16 Tage", "21 Tage", "24 Tage", "25 Tage"], c: [2],
    e: "24 Tage: 3 Tage Ei, gut 6 Tage offene Made, rund 15 Tage verdeckelt. Weil die Drohnenbrut so lange verdeckelt ist, vermehrt sich die Varroamilbe dort besonders stark."
  },
  {
    id: "vo-eistadium", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Wie lange dauert das Eistadium bei der Entwicklung der Bienen?",
    o: ["10 Stunden", "2 Tage", "3 Tage", "5 Tage"], c: [2],
    e: "Bei allen drei Bienenwesen 3 Tage. Am ersten Tag steht das Ei („Stift“) senkrecht am Zellboden, dann neigt es sich, am dritten Tag liegt es flach und die Larve schlüpft."
  },
  {
    id: "vo-made-koenigin", s: ["imyb", "quiz"], t: "s",
    q: "Wie lange dauert das offene Madenstadium bei der Entwicklung einer Königin?",
    o: ["3 Tage", "5 Tage", "8 Tage"], c: [1],
    e: "Etwa 5 Tage (genauer 5–5½), dann wird die Weiselzelle verdeckelt. Zum Vergleich: Arbeiterin 6 Tage, Drohn gut 6 Tage."
  },
  {
    id: "vo-stadien-arbeiterin", s: ["imyb"], t: "s",
    q: "Wie lange dauern die Brutstadien (Ei – offene Made – verdeckelt) bei einer Arbeiterin?",
    o: ["3 – 5 – 8", "3 – 6 – 12", "3 – 6 – 15"], c: [1],
    e: "3 + 6 + 12 = 21 Tage. Königin: 3 + 5 + 8 = 16 Tage. Drohn: 3 + 6 + 15 = 24 Tage."
  },
  {
    id: "vo-stadien-drohn", s: ["imyb"], t: "s",
    q: "Wie lange dauern die Brutstadien (Ei – offene Made – verdeckelt) bei einem Drohn?",
    o: ["3 – 5 – 8", "3 – 6 – 12", "3 – 6 – 15"], c: [2],
    e: "3 + 6 + 15 = 24 Tage (oft auch als 3 + 6½ + 14½ angegeben)."
  },
  {
    id: "vo-stadien-koenigin", s: ["imyb"], t: "s",
    q: "Wie lange dauern die Brutstadien (Ei – offene Made – verdeckelt) bei der Königin?",
    o: ["3 – 5 – 8", "3 – 6 – 12", "3 – 6 – 15"], c: [0],
    e: "3 + 5 + 8 = 16 Tage – die kürzeste Entwicklung aller drei Bienenwesen."
  },
  {
    id: "vo-puppe-drohn", s: ["lvbi16"], t: "s",
    q: "Wie lange dauert das Puppenstadium (die verdeckelte Zeit) des Drohns?",
    o: ["8 Tage", "12 Tage", "14 Tage"], c: [2],
    e: "Der Drohn bleibt rund 14–15 Tage verdeckelt. 8 Tage gelten für die Königin, 12 Tage für die Arbeiterin."
  },
  {
    id: "vo-tabelle", s: ["lvbi17"], t: "f",
    q: "Vom Ei zur fertigen Biene: Fülle die Tabelle aus – wie viele Tage dauern bei Königin, Arbeiterin und Drohn das Eistadium, die Larvenzeit und die Verpuppung, und wie lange insgesamt?",
    ans: "Königin: Ei 3 · Larve 5 · verdeckelt 8 → 16 Tage\nArbeiterin: Ei 3 · Larve 6 · verdeckelt 12 → 21 Tage\nDrohn: Ei 3 · Larve 6 · verdeckelt 15 → 24 Tage",
    e: "Merkhilfe 16 – 21 – 24. Das Eistadium ist bei allen gleich (3 Tage); die Unterschiede entstehen in der Larvenzeit und vor allem in der verdeckelten Zeit."
  },
  {
    id: "vo-histolyse", s: ["imyb"], t: "f",
    q: "Was versteht man unter der Histolyse in der Entwicklung der Biene?",
    ans: "Den Abbau (die Auflösung) der Larvengewebe nach der Verdeckelung, in der Vorpuppenphase. Aus den Bausteinen werden in der Puppe die Organe der fertigen Biene neu aufgebaut (Histogenese).",
    e: "Histolyse und Histogenese sind zusammen der Kern der vollständigen Verwandlung (Metamorphose). Der IMYB-Lösungsbogen nennt als Zeitpunkte: Königin am 7., Arbeiterin am 9., Drohn am 13. Tag."
  },
  {
    id: "vo-lebensdauer-koenigin", s: ["imyb", "quiz"], t: "s",
    q: "Wie lange lebt eine Königin?",
    o: ["6 Monate", "1 Jahr", "3 Jahre", "7 Jahre"], c: [2],
    e: "Eine Königin kann 3 bis 5 Jahre alt werden. Im Wirtschaftsvolk lässt die Legeleistung meist nach 2–3 Jahren nach; viele Imker erneuern Königinnen deshalb regelmäßig."
  },
  {
    id: "vo-lebensdauer-sommer", s: ["imyb", "quiz"], t: "s",
    q: "Wie lange lebt eine Arbeiterin im Sommer?",
    o: ["3 Wochen", "2 Monate", "6 Monate"], c: [1],
    e: "Sommerbienen leben nur gut 5–7 Wochen – von den Antworten passt „2 Monate“ am besten. Rund 3 Wochen verbringen sie im Innendienst, danach verschleißen sie sich in wenigen Wochen als Sammlerinnen. 6 Monate erreichen nur Winterbienen."
  },
  {
    id: "vo-lebensdauer-winter", s: ["imyb", "wd40"], t: "s",
    q: "Wie lange lebt eine Arbeiterin im Winter?",
    o: ["3 Wochen", "2 Monate", "6 Monate"], c: [2],
    e: "Winterbienen schlüpfen ab Spätsommer, ziehen kaum Brut auf und haben einen großen Fettkörper als Reserve. Sie leben bis ins Frühjahr – etwa 6 Monate."
  },
  {
    id: "vo-koeniginnen-zahl", s: ["imyb", "quiz"], t: "s",
    q: "Wie viele Königinnen leben normalerweise in einem Bienenvolk?",
    o: ["eine Königin", "zwei Königinnen", "mehrere Königinnen"], c: [0],
    e: "Ein Volk hat normalerweise genau eine Königin. Nur kurzzeitig, z. B. bei der stillen Umweiselung, können Mutter und Tochter nebeneinander leben."
  },
  {
    id: "vo-eier-tag", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Wie viele Eier kann eine Königin maximal pro Tag legen?",
    o: ["500", "1000", "1500", "2000"], c: [3],
    e: "Zur Hochsaison bis zu etwa 2.000 Eier pro Tag – zusammen mehr als ihr eigenes Körpergewicht. Dafür wird sie ständig vom Hofstaat gefüttert."
  },
  {
    id: "vo-eier-saison", s: ["imyb"], t: "s",
    q: "Wie viele Eier kann eine Königin pro Legesaison (Februar bis September) legen?",
    o: ["bis 80.000", "100.000", "bis 150.000", "200.000"], c: [3],
    e: "Bis zu rund 200.000 Eier pro Saison. Rechnung zur Probe: bei bis zu 2.000 Eiern pro Tag im Frühsommer und weniger am Anfang und Ende der Saison kommt man in diese Größenordnung."
  },
  {
    id: "vo-volksstaerke", s: ["imyb"], t: "s",
    q: "Wie viele Bienen leben im Sommer ungefähr in einem Bienenstock?",
    o: ["10.000", "30.000", "45.000", "60.000"], c: [2],
    e: "Zur Saisonspitze rechnet man mit rund 40.000–50.000 Bienen pro Volk (Lösung: 45.000). Im Winter sind es nur etwa 10.000–20.000."
  },
  {
    id: "vo-bienen-kilo", s: ["imyb"], t: "s",
    q: "Wie viele Arbeitsbienen ergeben ungefähr 1 Kilogramm?",
    o: ["32.000 Bienen", "24.000 Bienen", "17.000 Bienen", "11.000 Bienen"], c: [3],
    e: "Eine Arbeiterin wiegt rund 0,1 g – also kommen etwa 10.000 Bienen auf ein Kilo (Lösung: 11.000). Ein Schwarm von 2 kg hat demnach rund 20.000 Bienen."
  },
  {
    id: "vo-temp-brutnest", s: ["imyb", "quiz"], t: "s",
    q: "Wie hoch ist die Temperatur im Brutnest des Bienenvolkes?",
    o: ["28 °C", "35 °C", "39 °C", "42 °C"], c: [1],
    e: "Das Brutnest wird sehr genau auf etwa 34–35 °C gehalten – im Sommer durch Fächeln und Wasserverdunstung, bei Kälte durch Muskelzittern. Schon wenige Grad zu viel oder zu wenig führen zu Missbildungen der Brut.",
    n: "Im IMYB-Lösungsbogen war 39 °C angekreuzt. Das ist zu hoch – 35 °C ist der Lehrbuchwert."
  },
  {
    id: "vo-temp-wintertraube", s: ["imyb", "wd40"], t: "s",
    q: "Wie hoch ist die Temperatur in der Wintertraube?",
    o: ["10 °C", "20 °C", "28 °C", "39 °C"], c: [2],
    e: "Im Kern der Wintertraube halten die Bienen ohne Brut etwa 20–30 °C (Lösungsbogen: 28 °C), sobald wieder gebrütet wird um 35 °C. Die äußeren „Mantelbienen“ kühlen bis etwa 10 °C ab und wechseln immer wieder nach innen."
  },
  {
    id: "vo-wintertraube-aufloesen", s: ["sammlung"], t: "s",
    q: "Ab welcher Außentemperatur lösen die Bienen die Wintertraube auf und beginnen wieder zu fliegen bzw. zu sammeln?",
    o: ["6 °C", "12 °C", "17 °C"], c: [1],
    e: "Unter etwa 10 °C ziehen sich die Bienen zur Traube zusammen. Ab rund 10–12 °C lockert sie sich, und an sonnigen Tagen gibt es Reinigungs- und erste Sammelflüge."
  },
  {
    id: "vo-ueberwintern", s: ["imyb"], t: "s",
    q: "Wie überwintern die Bienen?",
    o: ["als Sommerkugel", "als Wintertraube", "als Winterball", "als Schwarm"], c: [1],
    e: "Die Bienen sitzen eng als Wintertraube auf den Waben und erzeugen durch Muskelzittern Wärme. Die Traube wandert langsam über die Futtervorräte – meist nach oben."
  },
  {
    id: "vo-erste-aufgabe", s: ["imyb", "quiz"], t: "s",
    q: "Welche Aufgabe hat eine junge Arbeiterin als Erstes nach dem Schlüpfen?",
    o: ["Sammelbiene", "Baubiene", "Wächterbiene", "Putzbiene"], c: [3],
    e: "In den ersten Tagen putzt sie Zellen, damit die Königin wieder hineinlegen kann. Die Aufgaben folgen dem Alter: Putzen → Brutpflege (Ammenbiene) → Bauen/Vorräte → Wache → Sammeln."
  },
  {
    id: "vo-letzte-aufgabe", s: ["imyb", "wd40"], t: "s",
    q: "Welche Aufgabe hat eine Arbeiterin als Letztes in ihrem Leben?",
    o: ["Sammelbiene", "Baubiene", "Wächterbiene", "Putzbiene"], c: [0],
    e: "Etwa ab der dritten Lebenswoche fliegt die Arbeiterin als Sammlerin aus – der gefährlichste und letzte Lebensabschnitt."
  },
  {
    id: "vo-aufgabe-tag3", s: ["imyb"], t: "s",
    q: "Welche Aufgabe hat eine Arbeiterin ab dem 3. Tag nach dem Schlupf?",
    o: ["putzen", "Stock bewachen", "Vorräte einlagern", "Jungmaden füttern"], c: [3],
    e: "Ab etwa dem 3. Tag wird die Arbeiterin zur Ammenbiene: Sie füttert erst ältere Larven mit Honig und Pollen und, sobald ihre Futtersaftdrüsen entwickelt sind, die jüngsten Maden mit Futtersaft."
  },
  {
    id: "vo-aufgabe-tag12", s: ["imyb"], t: "s",
    q: "Welche Aufgabe hat eine Arbeiterin ab dem 12. Tag nach dem Schlupf?",
    o: ["Waben bauen", "Stock bewachen", "Vorräte einlagern", "Jungmaden füttern"], c: [0],
    e: "Etwa vom 12. bis 18. Tag sind die Wachsdrüsen am leistungsfähigsten – die Arbeiterin ist Baubiene. In dieser Zeit übernimmt sie auch Nektar von Sammlerinnen und lagert Vorräte ein."
  },
  {
    id: "vo-altersfolge", s: ["extra"], t: "s",
    q: "In welcher Reihenfolge übernimmt eine Arbeiterin im Sommer typischerweise ihre Aufgaben?",
    o: ["Putzbiene → Ammenbiene → Baubiene/Stockbiene → Wächterbiene → Sammelbiene", "Sammelbiene → Wächterbiene → Ammenbiene → Putzbiene", "Ammenbiene → Putzbiene → Sammelbiene → Baubiene", "Wächterbiene → Baubiene → Putzbiene → Sammelbiene"], c: [0],
    e: "Die Aufgaben richten sich nach dem Alter und den Drüsen: zuerst Zellen putzen, dann Brut füttern (Futtersaftdrüsen), Waben bauen und Nektar verarbeiten (Wachsdrüsen), Flugloch bewachen und schließlich sammeln. Die Arbeitsteilung ist flexibel – fehlen z. B. Sammlerinnen, fliegen auch jüngere Bienen aus."
  },
  {
    id: "vo-hofstaat", s: ["imyb"], t: "s",
    q: "Aus wie vielen Bienen besteht der ständig wechselnde Hofstaat der Königin?",
    o: ["10", "ca. 12", "15"], c: [1],
    e: "Etwa ein Dutzend Arbeiterinnen umringen die Königin, füttern, putzen und belecken sie – und verteilen dabei die Königinnensubstanz im Volk. Die Bienen des Hofstaats wechseln ständig."
  },
  {
    id: "vo-drohnen-liefern", s: ["imyb", "quiz"], t: "s",
    q: "Die Drohnen liefern …?",
    o: ["wertvollen Manukahonig", "besonders verträgliches Bienengift", "Sperma"], c: [2],
    e: "Die einzige Aufgabe der Drohnen ist die Begattung junger Königinnen. Honig sammeln sie nicht, und einen Stachel (also Gift) haben sie auch nicht."
  },
  {
    id: "vo-drohnen-nektar", s: ["imyb", "wd40"], t: "s",
    q: "Sammeln Drohnen auch Nektar?",
    o: ["ja", "nein"], c: [1],
    e: "Nein. Drohnen haben einen zu kurzen Rüssel, keine Pollenkörbchen und keine Wachsdrüsen. Sie lassen sich von Arbeiterinnen füttern oder nehmen Honig aus den Zellen."
  },
  {
    id: "vo-drohn-aussagen", s: ["lvbi15", "imyb"], t: "m",
    x: "Alles an der Biologie eines Drohns ist darauf ausgerichtet, eine Königin zu begatten. Seine Entwicklung dauert länger als die von Königin und Arbeiterin.",
    q: "Was wisst ihr über den Drohn? Welche Aussagen sind richtig?",
    o: ["Drohnen sind schlechte Flieger. Sie haben kein Training, da sie die meiste Zeit nur untätig im Stock abhängen.", "Drohnen haben einen hoch entwickelten Geruchssinn. Sie riechen eine unbegattete, stockfremde Königin auf große Entfernung.", "Ein Drohn wird 3–4 Jahre alt. Er steht für die Beständigkeit im Volk."], c: [1],
    e: "Drohnen sind große, kräftige Flieger mit riesigen Augen und besonders vielen Riechporen auf den Fühlern – sie müssen eine Königin hoch in der Luft finden und einholen. Sie leben nur wenige Wochen; spätestens bei der Drohnenschlacht im Spätsommer werden sie aus dem Volk gedrängt. Die Entwicklung dauert 24 Tage."
  },
  {
    id: "vo-drohnenschlacht", s: ["imyb", "wd40"], t: "s",
    q: "Bei welchem Ereignis im Bienenstock werden die Drohnen aus dem Volk geworfen?",
    o: ["Drohnenschlacht", "Schwärmen", "Hochzeitsflug", "Begattung"], c: [0],
    e: "Wenn die Tracht nachlässt und keine Königinnen mehr begattet werden müssen, füttern die Arbeiterinnen die Drohnen nicht mehr, zerren sie aus dem Stock und lassen sie verhungern. Ein Volk, das im Herbst noch Drohnen duldet, ist oft weisellos."
  },
  {
    id: "vo-drohnenschlacht-zeit", s: ["imyb"], t: "s",
    q: "Wann findet die Drohnenschlacht statt?",
    o: ["im Winter", "im Sommer (Juni/Juli)", "im Frühjahr"], c: [1],
    e: "Nach der Sommersonnenwende, wenn die Haupttracht endet – je nach Region und Jahr ab Juli bis in den August. Unter den Antworten ist „Juni/Juli“ die richtige."
  },
  {
    id: "vo-begattung-ort", s: ["sammlung"], t: "s",
    q: "Wo findet die Begattung einer Königin statt?",
    o: ["Im Bienenstock", "Im Flug", "In der Weiselzelle"], c: [1],
    e: "Die junge Königin fliegt einige Tage nach dem Schlupf zum Hochzeitsflug und paart sich in der Luft an einem Drohnensammelplatz mit mehreren Drohnen. Die Drohnen sterben nach der Paarung."
  },
  {
    id: "vo-drohnen-paarung", s: ["sammlung"], t: "s",
    q: "Mit wie vielen Drohnen paart sich eine junge Königin normalerweise?",
    o: ["2–4", "12–15", "20–30"], c: [1],
    e: "Im Durchschnitt mit etwa 10–20 Drohnen. Die Mischung vieler Väter macht das Volk genetisch vielfältig und widerstandsfähiger."
  },
  {
    id: "vo-spermatheka", s: ["extra"], t: "s",
    q: "Wo speichert die Königin die Spermien der Drohnen?",
    o: ["in der Samenblase (Spermatheka)", "in der Honigblase", "in den Wachsdrüsen", "im Fettkörper"], c: [0],
    e: "Die Spermien reichen für das ganze Leben der Königin. Beim Legen entscheidet sie, ob sie ein Ei befruchtet (Weibchen) oder nicht (Drohn)."
  },
  {
    id: "vo-drohnensammelplatz", s: ["extra"], t: "s",
    q: "Was ist ein Drohnensammelplatz?",
    o: ["Ein Ort in der Luft, an dem sich Drohnen vieler Völker sammeln und junge Königinnen begattet werden", "Eine Wabe, auf der Drohnen schlafen", "Der Platz vor dem Flugloch, an dem Drohnen gefüttert werden", "Ein Kasten, in dem der Imker Drohnen aufbewahrt"], c: [0],
    e: "Drohnensammelplätze liegen etwa 10–40 m hoch in der Luft und werden Jahr für Jahr an denselben Stellen genutzt. Drohnen aus vielen Völkern der Umgebung treffen sich dort – das sorgt für Vermischung."
  },
  {
    id: "vo-drohn-unbefruchtet", s: ["extra"], t: "s",
    q: "Aus welchen Eiern entstehen Drohnen?",
    o: ["aus unbefruchteten Eiern", "aus befruchteten Eiern", "aus Eiern, deren Larven nur Gelée royale bekommen", "nur aus Eiern von Arbeiterinnen"], c: [0],
    e: "Drohnen entstehen aus unbefruchteten Eiern (Jungfernzeugung, Parthenogenese) und haben nur einen einfachen Chromosomensatz. Aus befruchteten Eiern entstehen Weibchen – Arbeiterinnen oder Königinnen."
  },
  {
    id: "vo-koenigin-fuetterung", s: ["extra"], t: "s",
    q: "Wodurch entscheidet sich, ob aus einem befruchteten Ei eine Königin oder eine Arbeiterin wird?",
    o: ["Durch die Ernährung: Die Königinnenlarve bekommt in einer Weiselzelle bis zur Verdeckelung reichlich Gelée royale", "Durch die Temperatur im Brutnest", "Durch die Größe des Eies", "Durch das Alter der Königin"], c: [0],
    e: "Genetisch sind Königin und Arbeiterin gleich. Arbeiterinnenlarven bekommen nach etwa drei Tagen ein „einfacheres“ Futter mit Honig und Pollen, die Königinnenlarve dagegen bis zum Schluss üppig Gelée royale."
  },
  {
    id: "vo-geschlecht-zelle", s: ["imybx"], t: "s",
    q: "Die Königin kann das Geschlecht des Eies steuern. Was ist der wichtigste bestimmende Faktor?",
    o: ["Die Breite der Zelle", "Die Tageszeit", "Die Außentemperatur", "Die Farbe des Wachses"], c: [0],
    e: "Die Königin tastet die Zelle mit den Vorderbeinen ab: In die breiten Drohnenzellen legt sie unbefruchtete Eier (Drohnen), in die engeren Arbeiterinnenzellen befruchtete."
  },
  {
    id: "vo-zuchtmaden", s: ["imyb"], t: "s",
    q: "Wie alt sind die Maden, die man für die Königinnenzucht (das Umlarven) verwendet?",
    o: ["1 Tag", "3 Tage", "4 Tage", "5 Tage"], c: [0],
    e: "Man nimmt möglichst junge Larven von etwa einem Tag (12–36 Stunden alt). Nur sehr junge Larven können noch zu vollwertigen Königinnen werden; ältere wurden schon als Arbeiterinnen gefüttert."
  },
  {
    id: "vo-koenigin-namen", s: ["imyb"], t: "m",
    q: "Wie wird die Bienenkönigin noch bezeichnet?",
    o: ["Stockmutter", "Bienenmutter", "Weisel"], c: [0, 2],
    e: "Imker sagen Weisel (daher Weiselzelle, weisellos, weiselrichtig) oder Stockmutter. „Bienenmutter“ ist kein gebräuchlicher Fachbegriff."
  },
  {
    id: "vo-weisel-begriff", s: ["lvbi16"], t: "i",
    q: "Lückentext: „Die Bienenkönigin nennt der Imker ______.“",
    acc: ["Weisel", "Stockmutter"], ans: "Weisel",
    e: "Weisel ist der klassische Fachbegriff für die Königin – davon abgeleitet: Weiselzelle, weisellos (ohne Königin), weiselrichtig (mit legender Königin)."
  },
  {
    id: "vo-drohn-begriff", s: ["lvbi16"], t: "i",
    q: "Lückentext: „Spricht man in der Imkerei von einer männlichen Biene, dann sagt man ______.“",
    acc: ["Drohn", "Drohne", "der Drohn"], ans: "Drohn",
    e: "Die männliche Biene heißt Drohn (Mehrzahl: Drohnen). Umgangssprachlich hört man auch „die Drohne“."
  },
  {
    id: "vo-brut-begriff", s: ["lvbi16"], t: "i",
    q: "Lückentext: „Der Nachwuchs der Bienen (Eier, Larven und Puppen) wird als ______ bezeichnet.“",
    acc: ["Brut", "Bienenbrut"], ans: "Brut",
    e: "Brut ist der Sammelbegriff. Man unterscheidet offene Brut (Eier und Larven) und verdeckelte Brut (Streckmaden, Vorpuppen, Puppen)."
  },
  {
    id: "vo-puppe-begriff", s: ["lvbi16"], t: "i",
    q: "Lückentext: „Während der Umwandlung von der Larve zur erwachsenen Biene zeigt sie keine äußerliche Aktivität. Die Biene wird in dieser Phase als ______ bezeichnet.“",
    acc: ["Puppe", "Bienenpuppe"], ans: "Puppe",
    e: "In der verdeckelten Zelle spinnt sich die Larve einen Kokon und wird zur Puppe. Von außen passiert nichts, innen wird der ganze Körper umgebaut."
  },
  {
    id: "vo-metamorphose-begriff", s: ["lvbi16"], t: "i",
    q: "Lückentext: „Die Umwandlung von der Larve zur fertigen Biene nennt man ______.“",
    acc: ["Metamorphose", "vollständige Metamorphose", "Verwandlung"], ans: "Metamorphose",
    e: "Bienen machen eine vollständige Metamorphose durch (holometabol): Ei – Larve – Puppe – fertiges Insekt (Imago)."
  },
  {
    id: "vo-der-bien", s: ["imyb", "quiz"], t: "s",
    q: "Was verbirgt sich hinter der Bezeichnung „der Bien“?",
    o: ["ein Bienenmännchen (Drohn)", "das gesamte Bienenvolk", "der Bienenvater (Imker)"], c: [1],
    e: "„Der Bien“ – geprägt von Johannes Mehring – beschreibt das Bienenvolk als einen einzigen Organismus, einen „Superorganismus“: Keine einzelne Biene ist allein lebensfähig, erst alle zusammen bilden das Lebewesen."
  },
  {
    id: "vo-weiselzellen-schwarm", s: ["imyb", "quiz"], t: "s",
    q: "Als Vorbereitung zum Schwärmen bestiftet die alte Königin meistens …",
    o: ["Weiselzellen am oberen Rand der Brutwabe", "Weiselzellen in der Mitte der Brutwabe", "Weiselzellen am unteren Rand der Brutwabe"], c: [2],
    e: "Schwarmzellen sitzen typischerweise am unteren Rand und an den Seitenkanten der Waben. Nachschaffungszellen (nach Königinnenverlust) entstehen dagegen mitten auf der Wabenfläche aus umgebauten Arbeiterinnenzellen."
  },
  {
    id: "vo-weiselzellen-zahl", s: ["sammlung"], t: "s",
    q: "Wie viele Weiselzellen werden in Vorbereitung auf das Schwärmen meist angelegt und bestiftet?",
    o: ["1–4", "5–15", "20–30"], c: [1],
    e: "Ein schwarmlustiges Volk legt meist ein gutes Dutzend Schwarmzellen an. Bei der stillen Umweiselung sind es dagegen nur wenige (1–3) Zellen."
  },
  {
    id: "vo-erster-schwarm", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Mit dem ersten Schwarm (Vorschwarm) verlässt normalerweise … den Bienenstock.",
    o: ["eine junge Königin", "die alte Königin", "mehrere Königinnen"], c: [1],
    e: "Die alte, begattete Königin zieht mit dem Vorschwarm aus, sobald die ersten Schwarmzellen verdeckelt sind. Nachschwärme ziehen später mit jungen, unbegatteten Königinnen aus."
  },
  {
    id: "vo-schwarm-entfernung", s: ["sammlung"], t: "s",
    q: "Wie weit entfernt sich ein Schwarm direkt beim Ausschwärmen vom Bienenstock?",
    o: ["ca. 10 m", "ca. 200 m", "ca. 1 km"], c: [0],
    e: "Der Schwarm sammelt sich zunächst ganz in der Nähe als Schwarmtraube, z. B. an einem Ast. Von dort suchen Spurbienen eine neue Wohnung – erst dann zieht der Schwarm weiter weg. Das ist die Chance des Imkers, ihn einzufangen."
  },
  {
    id: "vo-schwarm-anzeichen", s: ["lvbi16"], t: "m",
    q: "Woran kann man erkennen, dass ein Volk schwärmen will, und was kann man frühzeitig dagegen tun? Welche Aussagen sind richtig?",
    o: ["Die Arbeiterinnen beginnen mit dem Bau von Weiselzellen.", "Eine Königin mit starkem Pheromon lockt die Arbeiterinnen des Nachbarvolkes an; diese wechseln als Schwarm in die Nachbarbeute und lassen ihre eigene Königin allein zurück.", "Der Imker muss regelmäßig kontrollieren, ob ein Volk ausreichend Raum für Brut und Vorräte hat.", "Der Imker verschließt vorsorglich ein paar Tage das Flugloch."], c: [0, 2],
    e: "Bestiftete Weiselzellen (Schwarmzellen) sind das sichere Zeichen für Schwarmstimmung. Vorbeugen kann man durch genug Platz (rechtzeitig erweitern), Baurahmen, Ableger und regelmäßige Kontrollen. Die zweite Aussage ist erfunden. Ein verschlossenes Flugloch würde das Volk ersticken bzw. überhitzen lassen und verhindert das Schwärmen nicht."
  },
  {
    id: "vo-schwaenzeltanz", s: ["imyb", "quiz"], t: "s",
    q: "Der Schwänzeltanz der Bienen zeigt … an.",
    o: ["die Schwarmstimmung im Volk", "die Richtung und Entfernung einer Futterquelle", "die Geburt einer neuen Königin"], c: [1],
    e: "Beim Schwänzellauf auf der senkrechten Wabe gibt der Winkel zur Senkrechten die Richtung zur Futterquelle relativ zur Sonne an, die Dauer des Schwänzellaufs die Entfernung. Entschlüsselt hat das Karl von Frisch."
  },
  {
    id: "vo-rundtanz", s: ["imyb", "quiz"], t: "s",
    q: "Der Rundtanz zeigt … an.",
    o: ["eine Trachtquelle in der Nähe", "die harmonische Stimmung im Volk", "das gesunde Brutnest"], c: [0],
    e: "Beim Rundtanz läuft die Biene kleine Kreise abwechselnd links und rechts herum. Er bedeutet: „Futter in der Nähe (unter etwa 100 m) – sucht in der Umgebung!“ Die Richtung wird dabei nicht angegeben; den Blütenduft riechen die Nachtänzerinnen an der Tänzerin."
  },
  {
    id: "vo-tanz-100m", s: ["imyb", "wd40"], t: "s",
    q: "Mit welchem Tanz teilen die Bienen eine Futterquelle in weniger als 100 m Entfernung mit?",
    o: ["Schwänzeltanz", "Rundtanz"], c: [1],
    e: "Rundtanz für nahe Futterquellen, Schwänzeltanz für weiter entfernte (mit Richtung und Entfernung)."
  },
  {
    id: "vo-tanz-oben", s: ["extra"], t: "s",
    q: "Eine Biene tanzt auf der senkrechten Wabe den Schwänzellauf genau senkrecht nach oben. Wo liegt die Futterquelle?",
    o: ["In Richtung der Sonne", "Genau von der Sonne weg", "90° links von der Sonne", "Direkt über dem Bienenstock"], c: [0],
    e: "Auf der senkrechten Wabe steht „oben“ für die Richtung der Sonne. Senkrecht nach oben = zur Sonne hin, senkrecht nach unten = von der Sonne weg, schräg nach rechts = entsprechend viele Grad rechts von der Sonne."
  },
  {
    id: "vo-tanz-unten", s: ["extra"], t: "s",
    q: "Der Schwänzellauf zeigt senkrecht nach unten. Wo liegt die Futterquelle?",
    o: ["In Richtung der Sonne", "Genau von der Sonne abgewandt", "Unter der Erde", "Im Bienenstock"], c: [1],
    e: "Nach unten bedeutet „entgegen der Sonnenrichtung“. Steht die Sonne z. B. im Süden, liegt die Futterquelle im Norden."
  },
  {
    id: "vo-tanz-himmelsrichtung", s: ["sammlung", "extra"], t: "s",
    q: "Am Spätnachmittag steht die Sonne im Südwesten. Eine Biene tanzt den Schwänzellauf waagerecht nach rechts (90° im Uhrzeigersinn von der Senkrechten). In welcher Himmelsrichtung liegt die Futterquelle?",
    o: ["Nordwesten", "Südosten", "Nordosten", "Süden"], c: [0],
    e: "Senkrecht nach oben = Sonnenrichtung (Südwest). 90° im Uhrzeigersinn weiter: Südwest → West → Nordwest. Die Futterquelle liegt also im Nordwesten."
  },
  {
    id: "vo-tanz-entfernung", s: ["extra"], t: "s",
    q: "Woran erkennen die Nachtänzerinnen beim Schwänzeltanz die Entfernung der Futterquelle?",
    o: ["An der Dauer des Schwänzellaufs", "An der Farbe der Tänzerin", "An der Lautstärke des Summens allein", "Gar nicht – die Entfernung wird nie mitgeteilt"], c: [0],
    e: "Je länger der Schwänzellauf (und je mehr Schwänzelbewegungen), desto weiter ist die Futterquelle entfernt. Der Duft an der Tänzerin verrät zusätzlich die Blütenart."
  },
  {
    id: "vo-verstaendigung", s: ["imyb"], t: "s",
    q: "Wie verständigen sich Bienen untereinander?",
    o: ["durch Summen", "durch Tänze, Duftstoffe und Schwingungen", "durch Mimik und Gestik"], c: [1],
    e: "Bienen kommunizieren über Tänze (Rund- und Schwänzeltanz), Pheromone (Duftstoffe), Vibrationen/Schwingungen auf der Wabe und über Futteraustausch (Trophallaxis)."
  },
  {
    id: "vo-pheromone-definition", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Als Pheromone bezeichnet man …",
    o: ["Duftstoffe, die das Zusammenleben im Bienenvolk steuern", "Arzneimittel, die aus Bienengift hergestellt werden", "Tinkturen und Salben aus Propolis"], c: [0],
    e: "Pheromone sind Botenstoffe, die zwischen Tieren derselben Art wirken: z. B. Königinnensubstanz, Brutpheromon, Alarmpheromon, Nasonov-Duft. In der Fachsprache heißen die Duftstoffe der Bienen also Pheromone."
  },
  {
    id: "vo-pheromone-aussagen", s: ["lvbi15", "imyb", "wd40"], t: "m",
    q: "Was wissen Sie über das Pheromonsystem der Honigbienen? Welche Aussagen sind richtig?",
    o: ["Pheromone werden in der Biene durch die Hämolymphe zu den Organen transportiert. Sie können in kleinsten Mengen Entwicklungs- und Stoffwechselprozesse im Organismus auslösen.", "Es gibt spezielle Alarmpheromone. Honigbienen geben sie ab, wenn sie sich verteidigen.", "Da die Bienenkönigin das Volk regiert, ist sie die Einzige, die Pheromone produziert.", "Jede Honigbiene gibt Pheromone ab. Dabei unterscheiden sich die Pheromone je nachdem, ob sie von Arbeiterin, Königin, Drohn oder Larve stammen.", "Pheromone sind Gemische unterschiedlicher, mehr oder weniger flüchtiger Duftstoffe."], c: [0, 1, 3, 4],
    e: "Alle Bienenwesen – auch Larven (Brutpheromon) und Drohnen – geben Pheromone ab; die Königin „regiert“ nicht, sie ist nur eine wichtige Duftquelle. Alarmpheromone gibt es sicher: Beim Stechen wird aus der Stachelkammer ein Duft frei, der nach Banane riecht (Isopentylacetat) und weitere Bienen alarmiert.",
    n: "In einem Lösungsbogen fehlte das Kreuz bei den Alarmpheromonen – die gibt es aber eindeutig, deshalb ist diese Aussage hier richtig."
  },
  {
    id: "vo-trophallaxis", s: ["lvbi15", "imyb", "wd40"], t: "m",
    q: "Wissen Sie, was Trophallaxis bedeutet? Welche Aussagen sind richtig?",
    o: ["Durch den häufigen Futteraustausch stellt sich ein vergleichbarer Füllungsgrad in der Honigblase aller Arbeiterinnen eines Volkes ein.", "Drohnen können sich ausschließlich über den sozialen Futteraustausch ernähren. Sie brauchen zum Überleben eine Fütterung durch die Arbeiterinnen.", "Trophallaxis stellt eine Form der Kommunikation unter den Bienen eines Volkes dar.", "Während der Futterübergabe kommt es zum Körperkontakt. Dabei werden auch Pheromone, wie die Königinnensubstanz, weitergegeben."], c: [0, 2, 3],
    e: "Trophallaxis ist der Futteraustausch von Mund zu Mund. Er verteilt Nahrung gleichmäßig, gibt Informationen (z. B. über die Tracht) weiter und verbreitet die Königinnensubstanz – deshalb ist er auch Kommunikation. Falsch ist „ausschließlich“: Drohnen werden zwar viel gefüttert, können aber auch selbst Honig aus den Zellen aufnehmen.",
    n: "In einem Lösungsbogen war die Drohnen-Aussage angekreuzt und die Kommunikations-Aussage nicht. Fachlich ist es umgekehrt."
  },
  {
    id: "vo-aussagen-arbeiterin", s: ["lvbi15", "imyb"], t: "m",
    q: "Welche der folgenden Aussagen über die Honigbiene sind richtig?",
    o: ["Eine Arbeitsbiene kann bei Verlust der Königin auch Eier legen. Da sie nur befruchtete Eier legen kann, entstehen aus den Eiern von Arbeiterinnen immer nur Arbeiterinnen.", "Sommerbienen und Winterbienen unterscheiden sich in der Farbe des Pelzes. Sommerbienen sind bunter, Winterbienen haben einen weißen Pelz, damit sie im Schnee nicht auffallen.", "Als Honigmacherin bereitet die Arbeiterin den Honig und das Bienenbrot.", "Der letzte Lebensabschnitt einer Arbeiterin ist die Sammelbiene. Eine betagte Biene erkennt man an den ausgefransten Flügelspitzen."], c: [2, 3],
    e: "Arbeiterinnen sind nicht begattet – legen sie Eier (Legearbeiterinnen), sind diese unbefruchtet und es entstehen nur Drohnen. Winterbienen unterscheiden sich nicht in der Farbe, sondern im Körperinneren (großer Fettkörper, lange Lebensdauer). Stockbienen verarbeiten Nektar zu Honig und stampfen Pollen zu Bienenbrot ein. Alte Sammlerinnen haben ausgefranste Flügel.",
    n: "In einem Lösungsbogen war nur die letzte Aussage angekreuzt. Dass Stockbienen Honig und Bienenbrot bereiten, ist aber richtig."
  },
  {
    id: "vo-ohne-koenigin", s: ["sammlung"], t: "m",
    q: "Was sind charakteristische Merkmale eines Bienenvolkes ohne Königin?",
    o: ["Aufgeregte, unruhige Bienen („Weiselbrausen“)", "Gärender Honig", "Buckelbrut"], c: [0, 2],
    e: "Weisellose Völker sind unruhig und „heulen“ beim Öffnen. Nach einiger Zeit fangen Arbeiterinnen an, unbefruchtete Eier zu legen – es entsteht Buckelbrut (Drohnenbrut in Arbeiterinnenzellen mit gewölbten Deckeln). Gärender Honig hat mit der Königin nichts zu tun, sondern mit zu hohem Wassergehalt."
  },
  {
    id: "vo-koenigin-funktion", s: ["sammlung"], t: "m",
    q: "Welche Funktionen erfüllt die Königin?",
    o: ["Fortpflanzung (Eier legen)", "Zusammenhalt des Volkes (über ihre Pheromone)", "Futter sammeln"], c: [0, 1],
    e: "Die Königin legt alle Eier des Volkes und hält es mit der Königinnensubstanz zusammen: Die Arbeiterinnen wissen dadurch, dass eine Königin da ist, und ziehen keine neue auf. Sammeln und alle anderen Arbeiten erledigen die Arbeiterinnen."
  },
  {
    id: "vo-nachschaffung", s: ["extra"], t: "s",
    q: "Ein Volk verliert plötzlich seine Königin, es ist aber noch junge Brut vorhanden. Was tun die Bienen?",
    o: ["Sie bauen Zellen mit jungen Arbeiterinnenlarven zu Nachschaffungszellen um und ziehen eine neue Königin", "Sie warten, bis ein Schwarm einzieht", "Sie holen eine Königin aus dem Nachbarvolk", "Nichts – ohne Königin stirbt das Volk sofort"], c: [0],
    e: "Nur Larven, die jünger als etwa drei Tage sind, können noch zur Königin werden. Fehlt passende Brut, wird das Volk drohnenbrütig (Legearbeiterinnen) und geht ohne Hilfe des Imkers ein."
  },
  {
    id: "vo-legearbeiterinnen", s: ["extra"], t: "s",
    q: "Was sind Afterweisel (Legearbeiterinnen)?",
    o: ["Arbeiterinnen, die in einem lange weisellosen Volk unbefruchtete Eier legen – daraus entstehen nur Drohnen", "Junge Königinnen vor dem Hochzeitsflug", "Bienen, die die Eier der Königin bewachen", "Drohnen, die Eier legen"], c: [0],
    e: "Ohne Königin und Brutpheromon entwickeln sich bei manchen Arbeiterinnen die Eierstöcke. Typisch: mehrere Eier pro Zelle, Eier an der Zellwand, Buckelbrut in Arbeiterinnenzellen."
  },
  {
    id: "vo-stockgeruch", s: ["extra"], t: "s",
    q: "Woran erkennen Wächterbienen am Flugloch fremde Bienen?",
    o: ["Am Stockgeruch – jedes Volk hat seinen eigenen Duft", "An der Größe", "Am Summton", "Gar nicht, jede Biene darf hinein"], c: [0],
    e: "Wachs, Vorräte und Pheromone geben jedem Volk einen eigenen „Stockgeruch“. Wächterinnen betasten ankommende Bienen mit den Fühlern; Fremde ohne Nektarladung werden oft abgewehrt – wichtig gegen Räuberei."
  },
  {
    id: "vo-kuehlung", s: ["imybx"], t: "s",
    q: "Wie halten Bienen ihren Stock bei großer Hitze kühl?",
    o: ["Sie tragen Wasser ein, verteilen es in den Waben und fächeln – Verdunstungskühlung", "Sie ziehen tiefer in den Stock", "Sie hören auf zu brüten und schlafen", "Sie verschließen das Flugloch mit Propolis"], c: [0],
    e: "Wasserträgerinnen bringen Wasser, das auf den Waben verteilt wird; Fächlerinnen erzeugen einen Luftstrom. Die Verdunstung kühlt. An heißen Tagen sitzen viele Bienen außerdem als „Bart“ vor dem Flugloch, um den Stock zu entlasten."
  }
]);
