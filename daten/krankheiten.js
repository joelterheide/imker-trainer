IMKER.add("krankheiten", [
  {
    id: "kr-afb-erreger", s: ["imyb", "wd40"], t: "s",
    q: "Was ist der Auslöser der Amerikanischen Faulbrut?",
    o: ["Virus", "Bakterium", "Parasiten", "Pilz"], c: [1],
    e: "Erreger ist das sporenbildende Bakterium Paenibacillus larvae. Die Sporen bleiben jahrzehntelang ansteckend. Die Amerikanische Faulbrut ist eine anzeigepflichtige Tierseuche – schon der Verdacht muss dem Veterinäramt gemeldet werden.",
    n: "Im IMYB-Lösungsbogen war zuerst „Virus“ angekreuzt und wurde zu „Bakterium“ korrigiert."
  },
  {
    id: "kr-kalkbrut-erreger", s: ["imyb"], t: "s",
    q: "Was ist der Auslöser der Kalkbrut?",
    o: ["Virus", "Bakterium", "Parasiten", "Pilz"], c: [3],
    e: "Kalkbrut wird vom Pilz Ascosphaera apis verursacht. Die Larven vertrocknen zu harten „Mumien“. Begünstigt wird sie durch Kälte, Feuchtigkeit und schwache Völker.",
    n: "Im IMYB-Lösungsbogen war zuerst „Bakterium“ angekreuzt und wurde zu „Pilz“ korrigiert."
  },
  {
    id: "kr-mumien", s: ["sammlung", "imybx"], t: "s",
    q: "Welche Krankheit liegt vor, wenn weiße (teils grau-schwarze) Mumien in den Zellen, am Flugloch oder auf der Windel liegen?",
    o: ["Faulbrut", "Nosema", "Kalkbrut"], c: [2],
    e: "Kalkbrutmumien sind hart, kreideweiß bis schwarz (wenn der Pilz Sporen bildet) und lassen sich wie Steinchen aus den Zellen schütteln. Gegenmaßnahmen: Volk stärken, Umweiseln, Waben erneuern, trockener Standort."
  },
  {
    id: "kr-afb-symptom", s: ["imybx", "extra"], t: "s",
    q: "Bei welcher Krankheit sind die Zelldeckel eingesunken und löchrig, die Brut riecht faulig und die braune Larvenmasse zieht beim Streichholztest Fäden?",
    o: ["Amerikanische Faulbrut", "Kalkbrut", "Nosema", "Sackbrut"], c: [0],
    e: "Das ist das typische Bild der Amerikanischen Faulbrut: lückenhaftes Brutnest, eingesunkene, dunkle und durchlöcherte Deckel, fadenziehende Masse (Streichholzprobe), später festsitzende Schorfe. Bei Verdacht: Veterinäramt informieren, nichts aus dem Volk weitergeben."
  },
  {
    id: "kr-efb-symptom", s: ["imybx"], t: "s",
    q: "Welche Krankheit befällt vor allem die offene (unverdeckelte) Brut – die Larven liegen verdreht, gelblich verfärbt und sterben ab?",
    o: ["Europäische Faulbrut", "Amerikanische Faulbrut", "Kalkbrut", "Varroose"], c: [0],
    e: "Die Europäische (Gutartige) Faulbrut befällt hauptsächlich offene Larven, die sich verdreht und gelblich bis bräunlich in der Zelle liegen. Bei der Amerikanischen Faulbrut sterben die Larven dagegen meist erst nach der Verdeckelung."
  },
  {
    id: "kr-nosema-symptom", s: ["imybx"], t: "s",
    q: "Bei welcher Erkrankung der erwachsenen Bienen sieht man oft Kotflecken auf Waben, Rähmchen und am Flugloch?",
    o: ["Nosemose (Darmparasit Nosema) bzw. Ruhr", "Kalkbrut", "Amerikanische Faulbrut", "Wachsmotte"], c: [0],
    e: "Kotflecken zeigen Durchfall: Er kann durch den Darmparasiten Nosema (ein einzelliger Pilz) verursacht sein oder durch Ruhr, z. B. bei schwer verdaulichem Winterfutter wie Melezitose. Brutkrankheiten und Wachsmotten machen keine Kotflecken."
  },
  {
    id: "kr-nosema-mittel", s: ["imybx"], t: "s",
    q: "Welches Medikament wird international gegen Nosema eingesetzt, ist in der EU aber nicht zugelassen?",
    o: ["Fumagillin", "Thymol", "Oxalsäure", "Natronlauge"], c: [0],
    e: "Fumagillin ist ein Antibiotikum. In der EU sind Antibiotika bei Bienen nicht zugelassen – bei uns setzt man gegen Nosema auf starke Völker, Wabenhygiene, gute Standorte und Wabenerneuerung."
  },
  {
    id: "kr-afb-massnahmen", s: ["imybx", "extra"], t: "s",
    q: "Was geschieht, wenn bei einem Volk die Amerikanische Faulbrut amtlich festgestellt wird?",
    o: ["Der Amtstierarzt richtet einen Sperrbezirk ein; befallene Völker werden saniert (z. B. Kunstschwarmverfahren) oder getötet, verseuchtes Material verbrannt bzw. desinfiziert", "Der Imker behandelt selbst mit Ameisensäure", "Nichts – die Krankheit heilt von selbst aus", "Man füttert Honig aus einem gesunden Volk"], c: [0],
    e: "Im Sperrbezirk (Radius meist mindestens 1 km) dürfen keine Bienen, Waben oder Geräte hinein- oder hinausgebracht werden; alle Völker werden untersucht. Je nach Befall werden Völker saniert oder getötet und das Material verbrannt bzw. gründlich gereinigt (z. B. mit heißer Natronlauge)."
  },
  {
    id: "kr-afb-nachweis", s: ["imybx", "extra"], t: "s",
    q: "Wie wird Amerikanische Faulbrut sicher nachgewiesen?",
    o: ["Im Labor, z. B. aus einer Futterkranzprobe oder einem Brutwabenstück (Kultur bzw. PCR)", "Durch Riechen am Flugloch", "Durch Zählen der Varroamilben", "Durch Wiegen des Volkes"], c: [0],
    e: "Die Futterkranzprobe (Futter aus dem Bereich direkt über der Brut) ist eine Vorsorgeuntersuchung: Sie zeigt Sporen an, oft lange bevor man Symptome sieht. Bei Verdacht schickt man ein Wabenstück mit kranker Brut ein."
  },
  {
    id: "kr-kalkbrut-massnahme", s: ["imybx"], t: "s",
    q: "Welche Maßnahme hilft bei anhaltender Kalkbrut?",
    o: ["Umweiseln (Königin aus einer robusten, hygienischen Linie) und das Volk stärken, Waben erneuern", "Antibiotika füttern", "Mit Ameisensäure behandeln", "Das Volk an einen feuchten, schattigen Platz stellen"], c: [0],
    e: "Kalkbrut hängt stark von der Genetik ab: Völker mit gutem Putztrieb räumen befallene Larven schnell aus. Daneben helfen ein trockener, warmer Standort, ausreichend Volksstärke und frische Waben."
  },
  {
    id: "kr-septikaemie", s: ["lvbi15", "imyb"], t: "s",
    q: "Was bezeichnet man als Septikämie?",
    o: ["eine Brutkrankheit", "eine Blutkrankheit", "eine Durchfallerkrankung"], c: [1],
    e: "Septikämie ist eine bakterielle Infektion der Hämolymphe („Blutvergiftung“) erwachsener Bienen. Die Hämolymphe wird milchig-trüb, die Bienen sterben und zerfallen schnell. Sie tritt vor allem bei geschwächten Völkern und feuchten Standorten auf."
  },
  {
    id: "kr-bienenprobe", s: ["lvbi15", "imyb"], t: "s",
    q: "Eine Bienenprobe für die Untersuchung auf Bienenkrankheiten besteht aus mindestens …",
    o: ["10 Bienen", "50 bis 100 Bienen", "1000 Bienen"], c: [1],
    e: "Für die Untersuchung erwachsener Bienen (z. B. auf Nosema) braucht das Labor eine aussagekräftige Menge – mindestens etwa 50 bis 100 Bienen, vom Flugloch oder aus dem Honigraum."
  },
  {
    id: "kr-natronlauge", s: ["imyb", "quiz"], t: "s",
    q: "Wozu benutzt der Imker Natronlauge?",
    o: ["zum Desinfizieren der Rähmchen", "zum Bekämpfen der Wachsmotten", "zum Bekämpfen der Varroamilben"], c: [0],
    e: "Heiße Natronlauge (Ätznatron) löst Wachs- und Propolisreste und tötet Krankheitserreger, z. B. nach Faulbrut. Vorsicht: stark ätzend – Schutzbrille und Handschuhe!"
  },
  {
    id: "kr-wachsmotte", s: ["imyb", "imybx"], t: "s",
    q: "Welcher Falter legt seine Eier in die Waben, und seine Raupen (Maden) fressen Wachs, Vorräte und Brutreste – bei schwachen Völkern bilden sie dichte Gespinste?",
    o: ["Nachtfalter allgemein", "Bienenfalter", "Wachsmotte", "Kleidermotte"], c: [2],
    e: "Die Große und die Kleine Wachsmotte. Ihre Raupen durchziehen Waben mit Gespinstgängen; leere Brutwaben im Lager können in wenigen Wochen zerstört werden. Starke Völker halten Wachsmotten selbst in Schach."
  },
  {
    id: "kr-wachsmotte-schutz", s: ["imybx"], t: "s",
    q: "Was ist eine wirksame, rückstandsfreie Methode gegen Wachsmotten in gelagerten Waben?",
    o: ["Die Waben einfrieren (bzw. kühl, luftig und hell lagern)", "Pestizide auf die Waben sprühen", "Die Waben im warmen Keller stapeln", "Honig auf die Waben streichen"], c: [0],
    e: "Einfrieren (z. B. 24 Stunden bei −18 °C) tötet alle Stadien der Wachsmotte. Danach luftig, hell und kühl lagern – Wachsmotten mögen es warm, dunkel und eng. Alternativ werden Waben mit Essigsäure oder Bacillus-thuringiensis-Präparaten behandelt."
  },
  {
    id: "kr-baer", s: ["imyb"], t: "m",
    q: "Woran ist ein Bär in einem Bienenvolk interessiert?",
    o: ["an der Brut", "am Honig", "am Wachs"], c: [0, 1],
    e: "Bären holen sich vor allem die eiweißreiche Brut und den Honig. Wachs fressen sie höchstens nebenbei mit, es ist nicht ihr Ziel.",
    n: "Im IMYB-Lösungsbogen waren alle drei Antworten angekreuzt."
  }
]);
