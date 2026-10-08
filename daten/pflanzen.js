IMKER.add("pflanzen", [
  {
    id: "pf-wert", s: ["lvbi15", "imyb"], t: "s",
    x: "Schätzungen gehen davon aus, dass der ökonomische Wert der Bienen (einschließlich der Hummeln) als Bestäuber höher liegt als der Ertrag aus Honigernte und Bienenwachs.",
    q: "Wie hoch ist der Wert der Bestäubung im Vergleich?",
    o: ["Das 5-Fache der Erträge aus Honig und Wachs", "Etwa die Hälfte des Wertes von Honig und Wachs", "Das 10- bis 15-Fache der Erträge aus Honig und Wachs", "Etwa genauso viel wie Honig und Wachs", "Das 8,5-Fache der Erträge aus Honig und Wachs"], c: [2],
    e: "Die Bestäubungsleistung ist rund 10- bis 15-mal so viel wert wie Honig und Wachs zusammen. Deshalb gilt die Honigbiene nach Rind und Schwein als drittwichtigstes Nutztier."
  },
  {
    id: "pf-verdienst", s: ["imyb", "wd40"], t: "s",
    q: "Was ist der größte Verdienst der Honigbienen?",
    o: ["Wachs", "Honig", "Bestäubung", "Pollen"], c: [2],
    e: "Ohne Bestäubung gäbe es von vielen Obst-, Gemüse- und Ölpflanzen kaum Ernte. Der wirtschaftliche Wert der Bestäubung übersteigt den von Honig und Wachs um ein Vielfaches."
  },
  {
    id: "pf-ertrag-ohne", s: ["imyb", "wd40"], t: "s",
    q: "Wie viel Prozent weniger Ertrag würde es ohne Bienen geben?",
    o: ["15 %", "20 %", "50 %", "80 %"], c: [3],
    e: "Häufig genannte Zahl: Rund 80 % der Nutz- und Wildpflanzen bei uns sind auf Insektenbestäubung angewiesen bzw. profitieren davon – die Lösung lautet deshalb 80 %. Wie stark der Ertrag wirklich sinken würde, hängt von der Kultur ab (Getreide etwa ist windbestäubt)."
  },
  {
    id: "pf-bluetenstetigkeit", s: ["imyb"], t: "s",
    q: "Was ist eine Besonderheit der Honigbienen unter den blütenbesuchenden Insekten?",
    o: ["Honig", "Blütenstetigkeit", "Gelée royale", "Pollen"], c: [1],
    e: "Eine Sammlerin bleibt bei einem Sammelflug bei einer Pflanzenart. So landet der Pollen auf der richtigen Narbe – das macht die Honigbiene zu einer besonders wirksamen Bestäuberin."
  },
  {
    id: "pf-warum-blueten", s: ["lvbi15", "imyb", "wd40"], t: "m",
    x: "Die meisten Pflanzen haben viele grüne Blätter, aber nur wenige bunte Blüten.",
    q: "Warum gibt es überhaupt Blüten?",
    o: ["Eine bestäubte Blüte produziert Samen und ermöglicht dadurch die Ausbreitung der Pflanzenart über weite Distanzen.", "Die Pflanze braucht die Blüte zur sexuellen Vermehrung. Die Blüte ist das Geschlechtsorgan der Blütenpflanzen.", "Was soll man denn sonst am Muttertag verschenken?", "Die stark gefärbten Blütenblätter enthalten Farbpigmente, die weit effektiver für die Photosynthese sind als die grünen Blätter."], c: [0, 1],
    e: "Die Blüte ist das Fortpflanzungsorgan: Nach der Bestäubung entstehen Samen und Früchte, die die Art verbreiten. Die bunten Farbstoffe dienen der Anlockung von Bestäubern, nicht der Photosynthese – die findet im grünen Chlorophyll der Blätter statt."
  },
  {
    id: "pf-stempel", s: ["lvbi16"], t: "m",
    q: "Ordne die Begriffe der Blüte zu: Welche Teile bilden zusammen den weiblichen Teil der Blüte (Stempel bzw. Fruchtblatt)?",
    o: ["Narbe", "Griffel", "Fruchtknoten mit Samenanlagen", "Staubbeutel", "Kelchblatt"], c: [0, 1, 2],
    e: "Stempel = Narbe (fängt den Pollen auf) + Griffel (Verbindung) + Fruchtknoten mit den Samenanlagen. Staubblätter mit Staubbeuteln sind der männliche Teil, Kelch- und Kronblätter die Blütenhülle."
  },
  {
    id: "pf-pollen-ort", s: ["lvbi16"], t: "s",
    q: "Wo entsteht in der Blüte der Pollen?",
    o: ["In den Staubbeuteln", "In der Narbe", "In der Nektardrüse", "In den Kronblättern"], c: [0],
    e: "Die Staubbeutel sitzen an der Spitze der Staubblätter (Staubfäden). Sie platzen auf, wenn der Pollen reif ist."
  },
  {
    id: "pf-nektar-ort", s: ["lvbi16"], t: "s",
    q: "Wo wird in der Blüte der Nektar gebildet?",
    o: ["In den Nektardrüsen (Nektarien), meist am Blütenboden", "In den Staubbeuteln", "In der Narbe", "In den Kelchblättern"], c: [0],
    e: "Nektarien liegen meist tief am Blütenboden. So muss der Bestäuber an Staubbeuteln und Narbe vorbei – und nimmt dabei Pollen auf bzw. gibt ihn ab."
  },
  {
    id: "pf-bestaeubung", s: ["lvbi16", "extra"], t: "s",
    q: "Was versteht man unter Bestäubung?",
    o: ["Die Übertragung von Pollen auf die Narbe einer Blüte", "Die Verschmelzung von Ei- und Samenzelle", "Das Sammeln von Nektar", "Das Bilden von Samen"], c: [0],
    e: "Bestäubung = Pollen landet auf der Narbe. Danach wächst ein Pollenschlauch durch den Griffel zur Samenanlage, wo die Befruchtung stattfindet (Verschmelzung der Keimzellen). Erst dann entstehen Samen und Frucht."
  },
  {
    id: "pf-frucht", s: ["lvbi16"], t: "s",
    q: "Woraus entsteht nach der Befruchtung die Frucht?",
    o: ["Aus dem Fruchtknoten", "Aus den Kronblättern", "Aus den Staubbeuteln", "Aus der Nektardrüse"], c: [0],
    e: "Der Fruchtknoten wird zur Frucht, die Samenanlagen darin werden zu Samen. Bei der Erdbeere ist es etwas anders: Das Fruchtfleisch entsteht aus dem Blütenboden, die eigentlichen Früchte sind die kleinen Nüsschen außen."
  },
  {
    id: "pf-erdbeere", s: ["lvbi17"], t: "s",
    x: "Auf einem Bild siehst du drei reife Erdbeeren: eine große, gleichmäßige und zwei kleine, verkrüppelte.",
    q: "Was ist die Ursache für die verkrüppelten Früchte?",
    o: ["Unvollständige Bestäubung – nicht alle Nüsschen wurden befruchtet", "Zu viel Sonne", "Zu viel Dünger", "Die Sorte"], c: [0],
    e: "Jedes Nüsschen auf der Erdbeere muss einzeln bestäubt und befruchtet werden. Nur befruchtete Nüsschen bilden Wachstumsstoffe, die das Fruchtfleisch an dieser Stelle wachsen lassen. Fehlt die Bestäubung teilweise, bleibt die Frucht dort klein – sie wird schief und verkrüppelt."
  },
  {
    id: "pf-supermarkt", s: ["lvbi17"], t: "m",
    q: "Solche fehlentwickelten Früchte findet man im heimischen Garten, im Supermarkt aber praktisch nie. Warum?",
    o: ["Im Erwerbsanbau wird für gute Bestäubung gesorgt, z. B. durch aufgestellte Bienen- oder Hummelvölker", "Missgebildete Früchte werden nach Handelsklassen aussortiert und z. B. zu Marmelade verarbeitet", "Im Supermarkt gibt es nur Früchte, die ohne Bestäubung wachsen", "Supermarkt-Erdbeeren werden künstlich geformt"], c: [0, 1],
    e: "Obstbauern mieten oft Bienen- oder Hummelvölker für die Bestäubung, und in den Verkauf kommt nur gut geformte Ware der Handelsklassen. Auch die Erdbeeren im Supermarkt brauchen also Bestäuber."
  },
  {
    id: "pf-einstein", s: ["lvbi17"], t: "s",
    x: "Albert Einstein soll gesagt haben: „Wenn die Bienen verschwinden, hat der Mensch nur noch vier Jahre zu leben; keine Bienen mehr, keine Pflanzen, keine Tiere, keine Menschen mehr.“",
    q: "Was will uns dieses Zitat sagen?",
    o: ["Viele Pflanzen sind auf Bestäubung durch Insekten angewiesen. Fehlen die Bestäuber, fehlen Früchte und Samen – und damit Nahrung für Tiere und Menschen", "Ohne Honig würden die Menschen verhungern", "Bienen erzeugen den Sauerstoff, den wir atmen", "Bienen sind die einzigen Tiere, die Pflanzen bestäuben"], c: [0],
    e: "Die Aussage betont die Bedeutung der Bestäuber für Ökosysteme und Ernährung. Gut zu wissen: Dass das Zitat von Einstein stammt, ist nicht belegt – und neben Honigbienen bestäuben auch Wildbienen, Hummeln, Schwebfliegen, Schmetterlinge u. v. m."
  },
  {
    id: "pf-fruehblueher", s: ["lvbi16"], t: "m",
    x: "Für euren Bienenstand stehen folgende Pflanzen zur Auswahl: Akelei, Bartblume, Glockenblume, Herbstastern, Immergrün, Märzenbecher, Winterling, Krokus, Lavendel, Salbeiarten.",
    q: "Welche dieser Pflanzen sind Frühblüher, die den Bienen schon ab Februar/März Pollen und Nektar liefern?",
    o: ["Winterling", "Krokus", "Märzenbecher", "Herbstastern", "Lavendel", "Bartblume"], c: [0, 1, 2],
    e: "Winterling, Krokus und Märzenbecher blühen schon im Spätwinter und sind wichtige erste Pollenquellen für die Brut. Lavendel blüht im Sommer, Bartblume und Herbstastern im Spätsommer und Herbst."
  },
  {
    id: "pf-spaetblueher", s: ["lvbi16"], t: "m",
    q: "Welche dieser Pflanzen blühen spät im Jahr (August bis Oktober) und helfen den Bienen über die Trachtlücke im Spätsommer?",
    o: ["Herbstastern", "Bartblume", "Krokus", "Akelei", "Winterling"], c: [0, 1],
    e: "Bartblume (August/September) und Herbstastern (September/Oktober) liefern spät im Jahr Nektar und Pollen – wichtig für die Aufzucht der Winterbienen. Akelei blüht im Mai/Juni, Krokus und Winterling im Spätwinter."
  },
  {
    id: "pf-salweide", s: ["extra"], t: "s",
    q: "Welche Gehölze sind im zeitigen Frühjahr eine der wichtigsten Pollen- und Nektarquellen?",
    o: ["Weiden (z. B. Salweide) und Hasel", "Linde und Robinie", "Fichte und Tanne", "Sonnenblume und Mais"], c: [0],
    e: "Weidenkätzchen (z. B. Salweide) liefern ab März reichlich Pollen und Nektar, die Hasel schon ab Februar Pollen – entscheidend für den Brutstart. Linde und Robinie blühen im Frühsommer, Fichte/Tanne liefern Honigtau, Sonnenblume und Mais blühen im Sommer."
  },
  {
    id: "pf-raps", s: ["extra"], t: "s",
    q: "Welche Kulturpflanze liefert in vielen Regionen im Frühjahr (April/Mai) die erste große Massentracht?",
    o: ["Raps", "Mais", "Heidekraut", "Sonnenblume"], c: [0],
    e: "Der gelb blühende Raps liefert viel Nektar und Pollen. Mais liefert nur Pollen, Heide blüht im Spätsommer, Sonnenblume im Hochsommer."
  },
  {
    id: "pf-robinie", s: ["extra"], t: "s",
    q: "Von welchem Baum stammt der in Deutschland „Akazienhonig“ genannte Honig?",
    o: ["Von der Robinie (Scheinakazie)", "Von echten Akazien aus Afrika", "Von der Linde", "Von der Kastanie"], c: [0],
    e: "Die Robinie (Robinia pseudoacacia) wird auch Scheinakazie genannt – daher der Name. Ihr Honig ist hell, mild und bleibt lange flüssig."
  },
  {
    id: "pf-linde", s: ["extra"], t: "s",
    q: "Welcher Baum blüht im Juni/Juli und liefert einen hellen, frisch-aromatischen Sortenhonig?",
    o: ["Linde", "Salweide", "Hasel", "Birke"], c: [0],
    e: "Linden (Sommer- und Winterlinde) sind eine wichtige Frühsommertracht in Städten und Dörfern. Lindenhonig schmeckt typisch frisch, leicht nach Minze bzw. Menthol."
  },
  {
    id: "pf-phacelia", s: ["extra"], t: "s",
    q: "Welche Pflanze trägt den Beinamen „Bienenfreund“?",
    o: ["Phacelia (Büschelschön)", "Löwenzahn", "Brennnessel", "Mais"], c: [0],
    e: "Phacelia wird als Gründüngung und Bienenweide angebaut. Sie liefert reichlich Nektar und auffallend blauen Pollen."
  },
  {
    id: "pf-trachtluecke", s: ["extra"], t: "s",
    q: "Was ist eine Trachtlücke?",
    o: ["Eine Zeit, in der kaum etwas blüht und die Bienen wenig Nektar und Pollen finden", "Eine Lücke im Brutnest", "Ein Loch in der Beute", "Die Zeit zwischen zwei Honigernten im Glas"], c: [0],
    e: "Trachtlücken gibt es vor allem nach der Frühjahrstracht (Juni) und im Spätsommer, wenn Felder gemäht sind. Dann drohen Räuberei und Brutrückgang – Imker füttern ggf. und säen Bienenweide."
  },
  {
    id: "pf-heide-tracht", s: ["imyb", "wd40"], t: "s",
    q: "Welche Massentracht wird vielen Bienen zum Verhängnis?",
    o: ["Raps", "Mais", "Heide", "Obst"], c: [2],
    e: "Die Heidetracht im August/September ist für die Völker sehr anstrengend: Viele Sammlerinnen „fliegen sich tot“, und die Völker gehen geschwächt in die Zeit, in der die Winterbienen entstehen.",
    n: "Im IMYB-Lösungsbogen war zuerst „Raps“ angekreuzt und wurde zu „Heide“ korrigiert."
  },
  {
    id: "pf-mandel", s: ["imybx"], t: "s",
    q: "Welche Kulturpflanze hängt fast vollständig von der Bestäubung durch Honigbienen ab?",
    o: ["Mandel", "Weizen", "Mais", "Reis"], c: [0],
    e: "Für die riesigen Mandelplantagen in Kalifornien werden jedes Frühjahr über eine Million Bienenvölker zur Bestäubung herangefahren. Weizen, Mais und Reis sind windbestäubt."
  },
  {
    id: "pf-bluetenwahl", s: ["imybx"], t: "s",
    q: "Welcher Faktor beeinflusst die Blütenwahl der Sammelbienen am meisten?",
    o: ["Die Zuckerkonzentration des Nektars", "Die Größe der Blüte", "Die Entfernung zum Nachbarvolk", "Die Höhe der Pflanze"], c: [0],
    e: "Bienen bevorzugen ergiebige, zuckerreiche Trachten und tanzen dafür besonders lebhaft – so lenkt das Volk seine Sammlerinnen auf die lohnendsten Quellen."
  },
  {
    id: "pf-flugradius", s: ["imybx"], t: "s",
    q: "Wie groß ist ungefähr der Sammelradius eines Bienenvolkes?",
    o: ["ca. 300 m", "ca. 3 km (bei Bedarf deutlich weiter)", "ca. 30 km", "ca. 100 km"], c: [1],
    e: "Meist sammeln Bienen im Umkreis von etwa 1–3 km, bei Trachtmangel auch 5 km und mehr. Deshalb muss man Völker beim Umstellen mehr als ca. 3 km weit bringen."
  },
  {
    id: "pf-insektizide", s: ["lvbi16"], t: "s",
    q: "Welche Gruppe von Pflanzenschutzmitteln ist für Bienen besonders gefährlich?",
    o: ["Herbizide", "Insektizide", "Fungizide"], c: [1],
    e: "Insektizide sollen Insekten töten – und Bienen sind Insekten. Herbizide (gegen Unkraut) und Fungizide (gegen Pilze) sind weniger direkt giftig, können aber Nahrungspflanzen vernichten bzw. in Kombination die Giftigkeit verstärken. Die Bienenschutzverordnung regelt, wann und wo bienengefährliche Mittel eingesetzt werden dürfen."
  },
  {
    id: "pf-neonicotinoide", s: ["imyb"], t: "s",
    q: "Welche Gruppe von Pflanzenschutz-Wirkstoffen wurde wegen ihrer Gefahr für Bienen weitgehend verboten?",
    o: ["Isophoron", "Neonicotinoide", "Kaolin", "Ethylenglycol"], c: [1],
    e: "Neonicotinoide sind hochwirksame Nervengifte für Insekten. Die EU hat 2018 die Anwendung von drei wichtigen Wirkstoffen im Freiland verboten."
  },
  {
    id: "pf-bienenschutzverordnung", s: ["imyb"], t: "s",
    q: "Wann wurde die Bienenschutzverordnung (zu bienengefährlichen Pflanzenschutzmitteln) eingeführt?",
    o: ["1973", "1990", "1992", "2005"], c: [2],
    e: "Die Bienenschutzverordnung von 1992 legt u. a. fest, dass bienengefährliche Mittel nicht an blühenden oder von Bienen beflogenen Pflanzen angewendet werden dürfen."
  }
]);
