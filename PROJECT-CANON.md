# Sofia's Coffee Dream — Projektkanon

Grundlage für alle Lehrmodule. Zu Beginn einer neuen Sitzung mitgeben, dann bleiben die
Module untereinander stimmig.

**Stand:** 26.08.2026 · Fassung 2 (vollständig neu geschrieben nach Korrektur des Grundkanons)

Markierungen: **[gesetzt]** = von Maik vorgegeben · **[Vorschlag]** = von mir gewählt, kann
geändert werden · **[offen]** = braucht eine Entscheidung.

---

## 1. Das Unternehmen

**[gesetzt]** Sofia betreibt in Wien:

- **zwei Kaffeehäuser**
- eine **eigene Rösterei**
- ein **Coffeebike**, mit dem sie unterwegs verkauft
- **Import von fair gehandeltem Rohkaffee aus Peru**
- **Großhandel:** Sie liefert geröstete Bohnen an **Bäckereien** und an **andere Kaffeehäuser**
- **keine eigene Bäckerei**

**[gesetzt]** Angefangen hat alles mit dem **Coffeebike**. Es ist nicht der jüngste Zweig des
Geschäfts, sondern der erste — Kaffeehäuser, Rösterei und Großhandel sind daraus gewachsen.
Deshalb taucht das Rad in der Fallstudie zweimal auf: am Anfang als Keimzelle und am Ende als
Traum.

**[gesetzt]** Zehn Angestellte, allesamt Studierende.

**Die Schleife:** Kuchen und Gebäck kauft sie bei Bäckereien zu — teils bei denselben, die
von ihr Bohnen beziehen. Dieselbe Geschäftsbeziehung, einmal als Debitor und einmal als
Kreditor. Für Stammdatenmodellierung und Konsolidierung ein dankbares Motiv.

**Zwei B2B-Segmente, nicht eines:** Bäckereien (mit der Schleife) und andere Wiener
Kaffeehäuser (ohne sie, dafür größere Gebinde und Preisdruck durch Wettbewerb). Für die
Dimensionsmodellierung ein Gewinn: `DIM_CUSTOMER` trägt damit B2C mit Kundenkarte, B2B
Bäckereien und B2B Kaffeehäuser.

**Aus dem Master abgeleitet:** Das Geschäft liegt im Universitätsviertel — auf Folie 5 des
Masters ist der Semesterbeginn ein Nachfragetreiber. Passt zur studentischen Belegschaft und
zum Standort Alsergrund.

---

## 2. Personen

**[gesetzt]** Keine Nachnamen. Nur Sofia, Nguyen und Alex sind fest; alle weiteren Vornamen
dürfen frei erfunden werden.

| Name | Rolle | Status |
|---|---|---|
| **Sofia** | Inhaberin | [gesetzt] |
| **Nguyen** | Werkstudentin, studiert Controlling und BI | [gesetzt] |
| **Alex** | Controller | [gesetzt] |
| Anna | Baristin, Kennung E-042 | [Vorschlag] — bereits in den SCD-Modulen verwendet |
| Jonas | Röstmeister | [Vorschlag] |
| Klara | Schichtleitung Ringstraße | [Vorschlag] |
| Elif | Schichtleitung Alsergrund | [Vorschlag] |
| Tobias | Coffeebike | [Vorschlag] |

**[gesetzt]** Nguyen ist Werkstudentin und damit Teil der zehn. Sofias BI wird von ihrer
eigenen studentischen Hilfskraft gebaut — das erklärt, warum ein Betrieb dieser Größe
überhaupt BI hat.

### Das Zweigespann — die Regieanweisung des Falls

**[gesetzt]** Sofia hat viele gute Ideen und ist in der Umsetzung tollpatschig. Sie liest eine
Kennzahl, zieht sofort einen Schluss und handelt. Nguyen holt sie herunter: Sie fragt, was die
Zahl eigentlich zählt, und gemeinsam wird daraus etwas Professionelles. Sofia lernt dabei
jedes Mal etwas — sie ist nicht die Dumme, sondern die Ungeduldige.

Dieses Muster trägt jedes Modul: **Sofia stellt die Frage falsch, Nguyen stellt sie richtig.**
Alex, der Controller, bringt die Methode dazu — Plan gegen Ist, Abweichung, Ursache.

**Nicht ausschreiben:** Das Vorbild sind Fernseh-Duos aus Enthusiast und Korrektiv. Die Namen
gehören in die Vorlesung, nicht in die Module — sie altern schlecht und nicht jede Kohorte
kennt sie.

**Zu den Personalnummern:** Anna trägt E-042, obwohl es nur zehn Stellen gibt. Das ist kein
Fehler, sondern Absicht — bei studentischer Belegschaft mit hoher Fluktuation sind
Nummernkreise längst weitergelaufen. Genau deshalb braucht es Surrogatschlüssel.

---

## 3. Standorte

**[Vorschlag]** Namen für die beiden Kaffeehäuser. Ringstraße stammt aus den bereits
gebauten Modulen und bleibt, damit der Änderungsaufwand klein ist.

| Standort | Charakter |
|---|---|
| **Kaffeehaus Ringstraße** | Zentral. Touristen, Pendler, gleichmäßige Auslastung, höherer Bon |
| **Kaffeehaus Alsergrund** | Universitätsnah. Studierende, Nachfrage folgt dem Semesterrhythmus, kleinerer Bon, hohe Frequenz |
| **Coffeebike** | Mobil. Standort wechselt täglich — Märkte, Veranstaltungen, Firmenfeste |
| **Rösterei** | Produktion, kein Verkauf an Endkunden |
| **Großhandel** | Kein Ort, sondern ein Kanal: Lieferung an Bäckereien |

Das Coffeebike ist als vierter Eintrag der Standortdimension wertvoll: Ein Verkaufsort, dessen
Position sich laufend ändert, wirft von selbst die Frage auf, was eigentlich das
Dimensionsattribut ist — das Fahrrad oder der Platz, an dem es steht.

---

## 4. Der laufende Gag

**[gesetzt]** Sofia spart durch BI so viel Zeit, dass sie davon träumt, mit dem Coffeebike
auf dem Markusplatz in Venedig zu verkaufen.

**Verwendung:** als Pointe am Ende eines Moduls, nicht als Dauerwitz. **Ausnahme [gesetzt]:**
In der Fallstudie *und* in der Balanced Scorecard darf er stehen — die Fallstudie ist
optionales Beiwerk, das nicht jede Kohorte sieht, und dort ist der Traum das Thema und nicht
nur die Pointe. Ein Modul, ein Auftritt
— sonst nutzt er sich ab. Er eignet sich für den Abschlusskasten, wenn ein Modul zeigt, dass
etwas automatisiert oder beschleunigt wurde. Beim Balanced-Scorecard-Modul ist er sogar
inhaltlich anschlussfähig: Der Markusplatz ist Sofias Vision, und eine Vision gehört genau in
die Mitte einer Scorecard.

---

## 4a. Die Storyline

**[gesetzt]** Aus Maiks Foliensatz. Sie ist der Bogen, den die Fallstudie erzählt.

| Station | Inhalt |
|---|---|
| **Once upon a time** | Sofia winkt: *„Hey there! I want my dream to come true."* Der Traum ist ein Kreislauf — Bohne, Röstung, Rad, Tasse — und das Bild dazu ist ein Coffeebike mit Espressomaschine und grünem Sonnenschirm |
| **Business grows** | Fair gehandelte Bohnen aus Peru → Sofias Rösterei → Coffeebike und zwei Kaffeehäuser (B2C) → Bäckereien und andere Kaffeehäuser (B2B). Sofias Kommentar: *„Viel zu tun"* |
| **Let's get pro** | Vier Schmerzpunkte: Zettelwirtschaft ist von gestern · der Steuerberater macht die Finanzen · der Umsatz sinkt langsam, aber stetig · die Beschwerden nehmen zu |

**Der Steuerberater [gesetzt]:** Er macht die Finanzen — korrekt, vollständig und Wochen zu
spät. Genau die Trennlinie, die Reichmanns Pyramide zieht: Rechnungswesen ist nicht
Controlling. Das ist der stärkste Anschluss der Fallstudie an den Rest der Suite.

**Der didaktische Kern des Falls:** Sofia arbeitet nicht zu wenig. Die Zahlen existieren
bereits — sie liegen nur an vier Stellen und sind drei Wochen alt.

---

## 5. Feste Zahlen

Alles illustrativ, aber modulübergreifend konsistent zu halten.

### Umsätze Q1 2026 (SCD-Module)
- Anna: Januar 8.400 € · Februar 7.900 € · März 9.200 €
- Ringstraße ohne Anna: 22.000 / 21.000 / 23.000 €
- Alsergrund ohne Anna: 18.000 / 17.500 / 18.500 €
- **Quartalssumme immer 145.500 €** — bleibt über alle SCD-Typen gleich. Das ist die Pointe:
  die Summe stimmt, nur die Zuordnung nicht.
- Anna wechselt zum **01.03.2026** von Ringstraße nach Alsergrund

### Die 10.000-Euro-Kampagne **[gesetzt]**

Der Lehrfall des Zweigespanns, und er rechnet sich exakt aus den Zahlen oben:

| | Ringstraße | Alsergrund | Summe |
|---|---|---|---|
| **Type 1** — Annas Q1 wandert komplett mit | 66.000 € | 79.500 € | 145.500 € |
| **Type 2** — Jan/Feb bleiben, März wandert | 82.300 € | 63.200 € | 145.500 € |

Sofia sieht den Type-1-Bericht, liest Alsergrund als das wachsende Haus und steckt **10.000 €**
in eine Campus-Kampagne. Nguyen zeigt ihr denselben Bericht mit Type 2: Alsergrund ist nicht
gewachsen, Anna ist umgezogen. Die Führung dreht sich um — Ringstraße liegt vorn.

Die Summe stimmt in beiden Fassungen. Das ist die Pointe.

### Rösterei **[Vorschlag]**
- Rohkaffee aus Peru, rund 6.000 kg im Jahr
- Röstverlust rund 16 % — aus 100 kg grün werden 84 kg geröstet
- Röstchargen zu 12 kg
- Belieferte Bäckereien: sieben

### Kennzahlen der Balanced Scorecard
- Wartezeit am Tresen: 4:10 min, Ziel unter 3:00
- Gastzufriedenheit: 4,1 von 5, Ziel 4,5
- Wiederkehrrate 14 Tage: 38 %, Ziel 50 %
- Umsatz je Gast: 7,20 €, Ziel 8,50 €
- Deckungsbeitrag: 62 %, Ziel 68 %
- **[zu ändern]** „Kuchenabschrift 9 % → 4 %" passt nicht mehr sauber. Besser: **Röstverlust
  16 % → 14 %** oder **Abschrift auf zugekauftes Gebäck**. Die Rösterei ist der stärkere Fall,
  weil sie Sofias eigene Wertschöpfung betrifft.

---

## 6. Quellsysteme und Datenmodell

### Vorsysteme
| System | Inhalt |
|---|---|
| Kassensystem | Bonzeilen beider Kaffeehäuser und des Coffeebikes |
| ERP | Einkauf, Rechnungen, Lager, Großhandelsaufträge |
| PPS | **Rösterei**: Chargen, Röstprofile, Einwaage grün, Ausbeute geröstet |
| CRM | Kundenkarte im Kaffeehaus, Bäckereien als Großhandelskunden |
| Dienstplanung | Schichten der zehn Studierenden |
| Importunterlagen | Peru-Lieferungen, Zoll, Wechselkurs |
| Externe Daten | Wetter, Semestertermine der Universität, Veranstaltungskalender für das Coffeebike |

**Wichtig:** PPS steht in diesem Fall für die **Rösterei**, nicht für eine Bäckerei. Das war in
der bisherigen Referenzarchitektur falsch und muss korrigiert werden.

### Dimensionen
`DIM_LOCATION` (Ringstraße, Alsergrund, Coffeebike, Rösterei) · `DIM_EMPLOYEE` ·
`DIM_PRODUCT` (siehe Hierarchie unten) · `DIM_CUSTOMER` (B2C mit Kundenkarte, B2B Bäckereien,
B2B Kaffeehäuser) · `DIM_PAYMENT` (Bar, EC-Karte) · `DIM_GREEN_LOT` (Herkunftskooperative in
Peru, Erntejahr, Importdatum) · `DIM_ROAST_PROFILE` · `DIM_DATE`

**[gesetzt]** `DIM_PAYMENT` hat genau zwei Ausprägungen: **Bar** und **EC-Karte**. Bewusst
klein gehalten — eine Dimension mit zwei Zeilen ist im Modul „Semantische Datenmodelle" ein
eigener Lehrpunkt.

### Die Produkthierarchie **[gesetzt]**

Drei Ebenen, **flach** in `DIM_PRODUCT` abgelegt — je Ebene eine Spalte, kein Parent-Child.
Die Umsätze sind Q1 2026 und summieren sich auf die Quartalssumme des Kanons.

| Warengruppe | Produktgruppe | Produkt | Umsatz Q1 2026 |
|---|---|---|---|
| Getränke | Heißgetränke | Espresso | 18.400 € |
| Getränke | Heißgetränke | Melange | 24.700 € |
| Getränke | Heißgetränke | Cappuccino | 21.300 € |
| Getränke | Kaltgetränke | Cold Brew | 9.800 € |
| Getränke | Kaltgetränke | Eiskaffee | 6.500 € |
| Speisen | Gebäck | Croissant | 12.900 € |
| Speisen | Gebäck | Apfelstrudel | 14.600 € |
| Bohnen | Retail | Hausmischung 250 g | 11.200 € |
| Bohnen | Großgebinde | Hausmischung 1 kg | 26.100 € |

Zwischensummen: Heißgetränke 64.400 €, Kaltgetränke 16.300 €, **Getränke 80.700 €** ·
Gebäck und damit **Speisen 27.500 €** · Retail 11.200 €, Großgebinde 26.100 €,
**Bohnen 37.300 €**. Gesamt **145.500 €**.

Die Zahlen sind so gewählt, dass sie mit der Quartalssumme der SCD-Module zusammenfallen.
Wer sie ändert, muss die Summe halten — sonst widersprechen sich zwei Module.

### Der Würfel: Warengruppe × Monat × Filiale **[gesetzt]**

Für das Modul „Der Cube". Die Zelle ist der Umsatz einer Warengruppe in einem Monat in einer
Filiale. Der Würfel ist so gerechnet, dass er **beide** bereits gesetzten Randsummen trifft:
die Filial- und Monatsaufteilung des SCD-Beispiels (Type 2, also die Wahrheit) und die
Warengruppensummen der Produkthierarchie.

| | Jan Ring | Feb Ring | Mär Ring | Jan Alser | Feb Alser | Mär Alser | Summe |
|---|---|---|---|---|---|---|---|
| **Getränke** | 14.600 | 13.900 | 11.600 | 11.400 | 11.100 | 18.100 | **80.700** |
| **Speisen** | 5.200 | 4.900 | 3.700 | 4.000 | 3.900 | 5.800 | **27.500** |
| **Bohnen** | 10.600 | 10.100 | 7.700 | 2.600 | 2.500 | 3.800 | **37.300** |
| **Summe** | 30.400 | 28.900 | 23.000 | 18.000 | 17.500 | 27.700 | **145.500** |

Die Spaltensummen sind exakt die Zahlen aus Abschnitt 5: Ringstraße 82.300 €, Alsergrund
63.200 €. Die Zeilensummen sind exakt die Warengruppen der Produkthierarchie.

**Eine Ebene feiner**, für den Drill-down im selben Modul:

| | Jan Ring | Feb Ring | Mär Ring | Jan Alser | Feb Alser | Mär Alser | Summe |
|---|---|---|---|---|---|---|---|
| Heißgetränke | 12.000 | 11.400 | 8.800 | 9.400 | 9.100 | 13.700 | 64.400 |
| Kaltgetränke | 2.600 | 2.500 | 2.800 | 2.000 | 2.000 | 4.400 | 16.300 |
| Gebäck | 5.200 | 4.900 | 3.700 | 4.000 | 3.900 | 5.800 | 27.500 |
| Retail | 2.100 | 2.000 | 1.500 | 1.700 | 1.600 | 2.300 | 11.200 |
| Großgebinde | 8.500 | 8.100 | 6.200 | 900 | 900 | 1.500 | 26.100 |

**Zur Reichweite der 145.500 €:** Die Zahl ist der Quartalsumsatz des Betriebs. Das
SCD-Beispiel verteilt sie auf die beiden Kaffeehäuser, weil es von Annas Wechsel handelt und
Coffeebike und Großhandel dort nicht vorkommen. Der Würfel übernimmt genau diese Aufteilung.
Wer eine Lerneinheit mit dem Coffeebike als dritter Filiale bauen will, braucht dafür eine
eigene, ausdrücklich gekennzeichnete Zahlenreihe — die 145.500 € sind bereits vergeben.

### Fakten
`FACT_SALES` (Bonzeile) · `FACT_ROAST_BATCH` (Einwaage, Ausbeute, Verlust) ·
`FACT_DELIVERY` (Großhandel) · `FACT_GREEN_INTAKE` (Import)

### Was der Fall didaktisch hergibt
- **Zwei Kundensegmente** in einer Faktentabelle — B2C-Bon gegen B2B-Lieferschein
- **Eine Produktionsstufe** mit Mengenumwandlung — Kilogramm grün werden Kilogramm geröstet,
  Maßeinheiten und Ausbeute sind ein echtes Modellierungsproblem
- **Wechselkurs und Importlaufzeit** — Fremdwährung, langer Vorlauf, Bewertungsfragen
- **Saisonalität mit klarer Ursache** — Semesterrhythmus in Alsergrund, Wetter beim Coffeebike
- **Ein Verkaufsort ohne festen Ort** — das Coffeebike zwingt zur Frage, was ein
  Dimensionsattribut eigentlich beschreibt

---

## 7. Corporate Identity (IU)

Aus `MasterSlidesMaik.pptx` ausgelesen.

| Rolle | Hex |
|---|---|
| Petrol (Primär) | `#209CBD` |
| Dunkelpetrol | `#166980` |
| Orange (Akzent, Warnung) | `#FF922B` |
| Orange hell | `#FFC895` |
| Sand | `#F0E0C3` |
| Text | `#1D1D1F` |
| Grau | `#8A8A89` |

**Schrift:** Source Sans Pro (Folien) · in HTML `Source Sans 3` plus `IBM Plex Mono` für Daten
und Codes.

Nur in der Balanced Scorecard zusätzlich, um vier Perspektiven zu trennen: Navy `#0F4C5C`,
Petrol `#209CBD`, Orange `#FF922B`, Ocker `#B5852C` als dunkle Variante der Sandfarbe.

---

## 8. Konventionen PowerPoint

- Master `MasterSlidesMaik.pptx`, 16:9, 38 Layouts, verwendet wird Layout 38 `Text_two_Objects`
- Kopfzeile: Platzhalter `idx=10` bei (0,46 / 0,37), rendert automatisch in Versalien
- Fußnote als eigene Textbox bei (0,46 / 6,90), 8 pt — python-pptx klont **keine**
  FOOTER-Platzhalter
- Petrol-Banner: abgerundetes Rechteck (0,70 / 0,96), 11,43 × 0,56 Zoll, 24 pt weiß, zentriert
- Abschnitts-Pills: Höhe 0,42 Zoll, 16 pt; links Petrol „How it works", rechts Orange
  „What it means for Sofia" bzw. „Limitations"
- Aufzählungszeichen: `buChar "-"`, `buFont Symbol`, `buClr` Petrol, `marL/indent` 320040
- Sofia-Cartoon: `ppt/media/image13.jpeg`, Zuschnitt exakt wie `srcRect` im Master
  (`l=27463 t=20835 r=25026 b=38559`), sonst weißer Rahmen
- Sprechernotizen auf jeder Folie: Aufhänger, Kernbotschaft, Diskussionsfrage
- Hilfsmodul `iu_base.py`

**Qualitätssicherung:** Bildvorschau ist unzuverlässig. Stattdessen nach LibreOffice-Export
mit `pdftotext -bbox-layout` die Wortboxen prüfen. Source Sans Pro ist im Container nicht
installiert, LibreOffice ersetzt es durch das breitere DejaVu Sans — was dort passt, passt in
PowerPoint erst recht.

---

## 9. Konventionen HTML

Ein Modul, eine in sich geschlossene Datei, kein Build-Schritt. Einzige externe Abhängigkeit:
Google Fonts mit Fallback-Stack.

- Gleiche CSS-Variablen in `:root` in allen Dateien
- Reiter mit `role="tablist"`, Pfeiltastennavigation, `aria-selected`
- Tooltip als fixierter `#tip`-Container, reagiert auch auf `focusin` — Tastaturbedienung
- Bei `pointerout` prüfen, ob das Ziel noch im selben Knoten liegt, sonst flackert der Tooltip
- Grid- und Flex-Kinder brauchen `min-width:0`
- Breite Tabellen in `.tscroll` mit `overflow-x:auto`
- `prefers-reduced-motion` respektieren, kein `localStorage`
- Jedes Modul endet mit einem farbigen Kasten, der die eine Pointe trägt

---

## 10. Bestand und Korrekturbedarf

| Datei | Zu korrigieren |
|---|---|
| `SCD_Sofias_Coffee_World.pptx` | „four outlets", Anna Berger → Anna, Schönbrunn → Alsergrund |
| `scd-dashboard.html` | dieselben Punkte, plus Fußzeile mit den vier Filialen |
| `OLAP_Storage_Sofias_Coffee_World.pptx` | „four Viennese outlets" |
| `bi-reference-architecture.html` | **PPS = Bäckerei ist falsch, muss Rösterei sein**; Fußzeile |
| `balanced-scorecard.html` | alle Nachnamen; Rollen; „cake waste / daily bake"; Fußzeile |
| `index.html` | Vorspann und Fußzeile |

---

## 11. So eine Sitzung starten

> Anbei der Projektkanon und die Datei `<name>.html`. Bitte weiter im etablierten Stil:
> `<Änderungswunsch>`.

Kommt ein Modul hinzu, den Eintrag in `index.html` nicht vergessen — Abschnitt „Adding a new
module" auf der Startseite erklärt es.
