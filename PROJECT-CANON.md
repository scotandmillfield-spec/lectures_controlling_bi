# Sofia's Coffee World — Projektkanon

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
- **Import von Rohkaffee aus Peru**
- **Großhandel:** Sie liefert geröstete Bohnen an Bäckereien
- **keine eigene Bäckerei**

**[gesetzt]** Zehn Angestellte, allesamt Studierende.

**Die Schleife:** Kuchen und Gebäck kauft sie bei Bäckereien zu — teils bei denselben, die
von ihr Bohnen beziehen. Dieselbe Geschäftsbeziehung, einmal als Debitor und einmal als
Kreditor. Für Stammdatenmodellierung und Konsolidierung ein dankbares Motiv.

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
| **Nguyen** | BI-Expertin | [gesetzt] |
| **Alex** | Controller | [gesetzt] |
| Anna | Baristin, Kennung E-042 | [Vorschlag] — bereits in den SCD-Modulen verwendet |
| Jonas | Röstmeister | [Vorschlag] |
| Klara | Schichtleitung Ringstraße | [Vorschlag] |
| Elif | Schichtleitung Alsergrund | [Vorschlag] |
| Tobias | Coffeebike | [Vorschlag] |

**[offen]** Sind Nguyen und Alex ebenfalls Studierende, also Teil der zehn? Das wäre der
schönere Fall: Sofias BI wird von zwei ihrer eigenen Studierenden gebaut, und es erklärt,
warum ein Betrieb dieser Größe überhaupt eine BI-Expertin hat. Ich gehe bis auf Widerruf
davon aus.

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

**Verwendung:** als Pointe am Ende eines Moduls, nicht als Dauerwitz. Ein Modul, ein Auftritt
— sonst nutzt er sich ab. Er eignet sich für den Abschlusskasten, wenn ein Modul zeigt, dass
etwas automatisiert oder beschleunigt wurde. Beim Balanced-Scorecard-Modul ist er sogar
inhaltlich anschlussfähig: Der Markusplatz ist Sofias Vision, und eine Vision gehört genau in
die Mitte einer Scorecard.

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
`DIM_PRODUCT` (Getränke, Gebäck zugekauft, Bohnen im Retailbeutel, Bohnen im Großgebinde) ·
`DIM_CUSTOMER` (B2C mit Kundenkarte, B2B Bäckereien) · `DIM_GREEN_LOT` (Herkunftskooperative
in Peru, Erntejahr, Importdatum) · `DIM_ROAST_PROFILE` · `DIM_DATE`

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
