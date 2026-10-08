IMKER.add("recht", [
  {
    id: "re-schwarm-finden", s: ["lvbi16"], t: "s",
    q: "Darf jemand, der einen Bienenschwarm findet, ihn einfangen und mitnehmen?",
    o: ["Nein, denn der Schwarm gehört demjenigen, auf dessen Grundstück er sich niedergelassen hat.", "Ja, es sei denn, er bemerkt Anzeichen dafür, dass der Imker seinen Schwarm verfolgt oder schon in Besitz genommen hat.", "Nein, er könnte eine Bienenkrankheit verbreiten."], c: [1],
    e: "§ 961 BGB: Ein ausgezogener Schwarm wird herrenlos, wenn der Eigentümer ihn nicht unverzüglich verfolgt oder die Verfolgung aufgibt. Einen herrenlosen Schwarm darf sich jeder aneignen. Der Grundstückseigentümer wird nicht automatisch Eigentümer."
  },
  {
    id: "re-grundstueck", s: ["lvbi15", "imyb"], t: "s",
    q: "Darf der Imker ein fremdes Grundstück betreten, um seinen Bienenschwarm zu verfolgen?",
    o: ["Nein, erst nach Erlaubnis des Grundstückseigentümers.", "Ja, aber nur in Begleitung eines weiteren Imkers als Zeuge.", "Ja, aber er muss den angerichteten Flurschaden dem Grundstückseigentümer ersetzen."], c: [2],
    e: "§ 962 BGB: Der Eigentümer darf bei der Verfolgung fremde Grundstücke betreten und den Schwarm sogar aus einer fremden, unbesetzten Bienenwohnung holen – den entstehenden Schaden muss er ersetzen."
  },
  {
    id: "re-besetzte-beute", s: ["extra"], t: "s",
    q: "Ein Schwarm zieht in eine besetzte Beute des Nachbarimkers ein und vereinigt sich mit dessen Volk. Wem gehören die Bienen jetzt?",
    o: ["Dem Nachbarn, dem das besetzte Volk gehört", "Dem Imker, dem der Schwarm entflogen ist", "Beiden je zur Hälfte", "Niemandem"], c: [0],
    e: "§ 964 BGB: Zieht ein Schwarm in eine besetzte Bienenwohnung ein, erstreckt sich das Eigentum an dem besetzten Volk auf den eingezogenen Schwarm. Der bisherige Eigentümer verliert seine Rechte am Schwarm."
  },
  {
    id: "re-anmeldung", s: ["extra"], t: "s",
    q: "Wo muss man in Deutschland seine Bienenvölker anmelden?",
    o: ["Beim zuständigen Veterinäramt (und meist zusätzlich bei der Tierseuchenkasse des Landes)", "Beim Finanzamt", "Nirgends", "Beim Bürgermeister"], c: [0],
    e: "Nach der Bienenseuchenverordnung muss jede Bienenhaltung spätestens zu Beginn beim Veterinäramt angezeigt werden – mit Anzahl der Völker und Standort. So kann im Seuchenfall (z. B. Faulbrut) schnell reagiert werden."
  },
  {
    id: "re-wanderung", s: ["extra"], t: "s",
    q: "Was brauchst du, wenn du mit Bienenvölkern an einen Standort in einem anderen Landkreis wanderst?",
    o: ["Eine amtstierärztliche Gesundheitsbescheinigung (Freiheit von Amerikanischer Faulbrut)", "Einen Waffenschein", "Nichts", "Eine Erlaubnis des Deutschen Imkerbundes"], c: [0],
    e: "Wer Völker an einen anderen Ort verbringt, braucht ein Gesundheitszeugnis, das bescheinigt, dass sie frei von Amerikanischer Faulbrut sind. Außerdem muss man die Wanderung beim zuständigen Veterinäramt anzeigen."
  },
  {
    id: "re-afb-anzeige", s: ["extra"], t: "s",
    q: "Was musst du tun, wenn du in einem Volk Amerikanische Faulbrut vermutest?",
    o: ["Den Verdacht unverzüglich dem Veterinäramt melden und nichts aus dem Volk weitergeben", "Das Volk sofort an einen anderen Ort bringen", "Den Honig schnell schleudern und verkaufen", "Abwarten, ob es von selbst besser wird"], c: [0],
    e: "Die Amerikanische Faulbrut ist eine anzeigepflichtige Tierseuche – schon der Verdacht muss gemeldet werden. Bis zur Klärung dürfen keine Völker, Waben, Honig oder Geräte den Stand verlassen."
  },
  {
    id: "re-zeichenfarben", s: ["sammlung"], t: "s",
    q: "Wie viele Farben umfasst das internationale Zeichnungssystem für Königinnen?",
    o: ["5", "4", "3"], c: [0],
    e: "Fünf Farben im Fünf-Jahres-Rhythmus nach der letzten Ziffer des Schlupfjahres: 1/6 weiß, 2/7 gelb, 3/8 rot, 4/9 grün, 5/0 blau. Merksatz z. B.: „Wo Gehst Rasch Gemüse Besorgen?“"
  },
  {
    id: "re-farbe-2014", s: ["quiz"], t: "s",
    q: "Mit welcher Zeichenfarbe werden Königinnen des Jahrgangs 2014 gezeichnet?",
    o: ["rot", "grün", "blau", "gelb", "weiß"], c: [1],
    e: "Jahre mit 4 oder 9 am Ende: grün. (1/6 weiß, 2/7 gelb, 3/8 rot, 4/9 grün, 5/0 blau)"
  },
  {
    id: "re-farbe-2015", s: ["quiz", "imyb"], t: "s",
    q: "Mit welcher Zeichenfarbe werden Königinnen des Jahrgangs 2015 gezeichnet?",
    o: ["rot", "grün", "blau", "weiß"], c: [2],
    e: "Jahre mit 5 oder 0 am Ende: blau. (1/6 weiß, 2/7 gelb, 3/8 rot, 4/9 grün, 5/0 blau)"
  },
  {
    id: "re-farbe-2016", s: ["imyb"], t: "s",
    q: "Mit welcher Zeichenfarbe werden Königinnen des Jahrgangs 2016 gezeichnet?",
    o: ["grün", "blau", "weiß", "gelb"], c: [2],
    e: "Jahre mit 1 oder 6 am Ende: weiß. (1/6 weiß, 2/7 gelb, 3/8 rot, 4/9 grün, 5/0 blau)"
  },
  {
    id: "re-farbe-2017", s: ["imyb"], t: "s",
    q: "Mit welcher Zeichenfarbe werden Königinnen des Jahrgangs 2017 gezeichnet?",
    o: ["blau", "weiß", "gelb", "rot"], c: [2],
    e: "Jahre mit 2 oder 7 am Ende: gelb. (1/6 weiß, 2/7 gelb, 3/8 rot, 4/9 grün, 5/0 blau)"
  },
  {
    id: "re-farbe-2026", s: ["extra"], t: "s",
    q: "Mit welcher Zeichenfarbe werden Königinnen des Jahrgangs 2026 gezeichnet?",
    o: ["weiß", "gelb", "rot", "grün", "blau"], c: [0],
    e: "Jahre mit 1 oder 6 am Ende: weiß. 2027 folgt gelb, 2028 rot. Das Zeichen zeigt auf einen Blick, wie alt die Königin ist."
  },
  {
    id: "re-apimondia", s: ["imyb", "sammlung"], t: "s",
    q: "Wie heißt der internationale Verband der Bienenzüchtervereinigungen?",
    o: ["FIS", "FIFA", "IOC", "Apimondia"], c: [3],
    e: "Apimondia hat ihren Sitz in Rom und richtet alle zwei Jahre einen Weltkongress der Imker aus. FIS (Ski), FIFA (Fußball) und IOC (Olympia) sind Sportverbände."
  },
  {
    id: "re-bienenmuseum", s: ["imyb", "quiz"], t: "s",
    q: "In welcher Stadt befindet sich das „Deutsche Bienenmuseum“?",
    o: ["in Münster", "in Bonn", "in Weimar"], c: [2],
    e: "Das Deutsche Bienenmuseum wurde 1907 von Pfarrer Ferdinand Gerstung gegründet und befindet sich in Weimar.",
    n: "Im IMYB-Lösungsbogen war „Münster“ angekreuzt – das ist falsch, das Museum steht in Weimar."
  },
  {
    id: "re-gerstung", s: ["imyb", "quiz"], t: "s",
    q: "Wer gründete das „Deutsche Bienenmuseum“?",
    o: ["Ferdinand Gerstung", "Karl von Frisch", "Max Kuntzsch"], c: [0],
    e: "Ferdinand Gerstung, Pfarrer und Bienenforscher, gründete das Museum in Weimar und prägte die Lehre vom Bien als Organismus mit."
  },
  {
    id: "re-nobelpreis", s: ["imyb", "quiz", "wd40"], t: "s",
    q: "Welcher Bienenwissenschaftler erhielt den Nobelpreis?",
    o: ["Ferdinand Gerstung", "Karl von Frisch", "Max Kuntzsch"], c: [1],
    e: "Karl von Frisch erhielt 1973 den Nobelpreis für Physiologie oder Medizin (zusammen mit Konrad Lorenz und Nikolaas Tinbergen) – für die Entschlüsselung der Tanzsprache der Bienen."
  },
  {
    id: "re-nobelpreis-wofuer", s: ["imyb", "quiz"], t: "s",
    q: "Wofür wurde der Nobelpreis an einen Bienenwissenschaftler verliehen?",
    o: ["für die Erforschung der Wirkung der Duftstoffe (Pheromone)", "für die Erforschung der Tanzsprache", "für die Herstellung und Anwendung von Bienenmedikamenten (Apitherapie)"], c: [1],
    e: "Karl von Frisch zeigte, dass Bienen mit Rund- und Schwänzeltanz Richtung und Entfernung von Futterquellen mitteilen. Außerdem erforschte er das Farbsehen der Bienen."
  },
  {
    id: "re-mehring", s: ["lvbi15", "imyb", "sammlung"], t: "s",
    x: "Johannes Mehring (1815–1878) gilt als einer der wichtigsten Wegbereiter der modernen Imkerei.",
    q: "Für welche Erfindung wurde Johannes Mehring bekannt?",
    o: ["Die Mittelwand (Kunstwabe) bzw. Mittelwandpresse", "Die Honigschleuder", "Den Smoker", "Das Absperrgitter"], c: [0],
    e: "Mehring erfand 1857/58 die Mittelwand: eine Wachsplatte mit eingeprägten Zellböden, auf der die Bienen gleichmäßig Arbeiterinnenwaben bauen. Von ihm stammt auch der Begriff „der Bien“. Die Honigschleuder stellte Franz von Hruschka 1865 vor."
  },
  {
    id: "re-hruschka", s: ["sammlung"], t: "s",
    q: "Wer stellte die erste Honigschleuder vor?",
    o: ["Franz von Hruschka", "Johannes Mehring", "Karl von Frisch", "Lorenzo Langstroth"], c: [0],
    e: "Major Franz von Hruschka stellte die Honigschleuder 1865 vor. Damit konnte man Honig gewinnen, ohne die Waben zu zerstören – die Bienen sparen sich den teuren Neubau."
  },
  {
    id: "re-dzierzon", s: ["sammlung"], t: "s",
    q: "Wer begründete den beweglichen Wabenbau durch „Stäbchen“ (Oberträger, Top Bars)?",
    o: ["Johann Dzierzon", "Johannes Mehring", "Franz von Hruschka", "Ferdinand Gerstung"], c: [0],
    e: "Pfarrer Johann Dzierzon führte in den 1830er-Jahren Stäbchen ein, an denen die Bienen ihre Waben einzeln bauen. Daraus entwickelten Berlepsch und Langstroth das bewegliche Rähmchen. Dzierzon entdeckte außerdem, dass Drohnen aus unbefruchteten Eiern entstehen."
  },
  {
    id: "re-raehmchen", s: ["sammlung"], t: "s",
    q: "Welche Erfindung trug enorm zur Erleichterung der Imkerei bei?",
    o: ["Smoker", "Werkzeuge wie der Stockmeißel", "Bewegliche Rähmchen"], c: [2],
    e: "Mit beweglichen Rähmchen kann man jede Wabe einzeln herausnehmen, kontrollieren, Brut und Honig beurteilen und Honig ernten, ohne den Wabenbau zu zerstören. Erst das machte moderne Völkerführung, Schleudern und Krankheitskontrolle möglich."
  },
  {
    id: "re-zeidelgericht", s: ["sammlung"], t: "s",
    q: "Wo tagte von 1350 bis 1779 das Zeidelgericht?",
    o: ["In Feucht bei Nürnberg", "In Weimar", "In Celle", "In München"], c: [0],
    e: "Die Zeidler holten Honig aus Bienenvölkern in hohlen Bäumen des Nürnberger Reichswaldes. Kaiser Karl IV. gewährte ihnen 1350 Privilegien; ihr Gericht tagte in Feucht – dort gibt es heute ein Zeidelmuseum."
  },
  {
    id: "re-sprengel", s: ["sammlung"], t: "s",
    q: "Wann veröffentlichte Christian Konrad Sprengel seine Entdeckung, dass Pflanzen von Insekten bestäubt werden?",
    o: ["1693", "1793", "1893", "1953"], c: [1],
    e: "1793 erschien sein Buch „Das entdeckte Geheimniß der Natur im Bau und in der Befruchtung der Blumen“. Sprengel erkannte als Erster das Zusammenspiel von Blüten und Insekten."
  },
  {
    id: "re-kosten-art", s: ["lvbi15", "imyb"], t: "m",
    x: "Die Produktionskosten eines Imkers lassen sich in Fixkosten und variable Kosten unterteilen.",
    q: "Welche dieser Kosten sind Fixkosten?",
    o: ["Abschreibung der Honigschleuder", "Versicherung", "Vereins- und Verbandsbeitrag", "Honiggläser und Etiketten", "Futterzucker", "Varroa-Behandlungsmittel"], c: [0, 1, 2],
    e: "Fixkosten fallen unabhängig davon an, wie viel Honig man erntet (Anschaffungen bzw. deren Abschreibung, Versicherung, Beiträge, Miete). Variable Kosten wachsen mit der Völkerzahl bzw. Honigmenge: Gläser, Etiketten, Futter, Behandlungsmittel, Mittelwände."
  },
  {
    id: "re-kosten-offen", s: ["lvbi15", "imyb"], t: "f",
    x: "Um Honig herzustellen, muss ein Imker Waben, Rähmchen, Königinnen und andere Dinge einkaufen. Außerdem benötigt er Maschinen und Aushilfen zur Honigernte.",
    q: "Nenne jeweils vier Beispiele für Fixkosten und für variable Kosten in der Imkerei.",
    ans: "Fixkosten: Abschreibung für Schleuder, Beuten, Smoker und andere Geräte · Miete oder Pacht (Stand, Schleuderraum) · Versicherung · Vereins-/Verbandsbeitrag · Fachliteratur.\nVariable Kosten: Honiggläser, Deckel, Etiketten · Futterzucker · Varroa-Behandlungsmittel · Mittelwände und Rähmchen · Königinnen · Lohn für Aushilfen bei der Ernte · Strom und Wasser beim Schleudern.",
    e: "Faustregel: Kosten, die auch anfallen, wenn kein Glas Honig verkauft wird, sind fix. Kosten, die pro Volk oder pro Kilo Honig steigen, sind variabel.",
    n: "In einer handschriftlichen Lösung in der Mappe waren die Beispiele vertauscht (z. B. Oxalsäure als Fixkosten, Schleuder als variable Kosten)."
  }
]);
