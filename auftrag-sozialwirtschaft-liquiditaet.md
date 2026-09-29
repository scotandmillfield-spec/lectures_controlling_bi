# Auftrag: Lernpfad „Liquidität steuern in der Sozialwirtschaft“

**Stand:** 29.09.2026 · Fassung 1 · für Claude Code im Repository `lectures_controlling_bi`

**Anlass:** Schulung für einen Caritasverband, sieben Stunden, drei Themen aus der Anfrage der
Controllerin: (1) Cashflow verstehen, Liquidität planen und Engpässe früh erkennen,
(2) nicht abgerechnete Leistungen monatlich erfassen, (3) die GuV als Steuerungsinstrument.

**Freigaben von Maik (29.09.2026)**

- Es wird geduzt, wie auf der ganzen Plattform.
- Die Bezeichnung ist **Cashflow**, ein Wort, auch in „Free Cashflow“. „Kapitalflussrechnung“
  erscheint allein als Synonym im Glossar.
- Inhalte aus der Sozialwirtschaft dürfen ergänzt werden. Das ist die ausdrückliche Bitte, die
  CLAUDE.md unter „Nichts dazudichten“ als einzige Ausnahme nennt. Sie gilt für die Inhalte in
  diesem Auftrag und für nichts darüber hinaus.

**Markierungen in diesem Auftrag**

| Marke | Bedeutung |
|---|---|
| **[Kanon]** | steht so in `modul_cashflow/PROJECT-CANON.md` |
| **[abgeleitet]** | aus dem Kanon nachgerechnet, keine neue Annahme |
| **[ergänzt]** | fachliche Ergänzung, von Maik freigegeben |
| **[Annahme]** | Beispielwert zur Veranschaulichung, im Modul als Annahme erkennbar |
| **[prüfen]** | vor der Schulung fachlich oder rechtlich gegenlesen lassen |
| **[Entscheidung]** | Maik entscheidet vor dem Bau |

**Die Stichpunkte sind Inhalt, keine Formulierung.** Der Text der Module entsteht nach CLAUDE.md
und STILPROBE.md. Keine Marke aus dieser Tabelle erscheint im Modul (keine Herkunftsetiketten).

---

## 0 · Grundsätze

1. **Kein neuer Einstieg.** Alles entsteht in `plattform/`. Ein eigener Einstieg müsste nach
   CLAUDE.md jeden gemeinsamen Inhalt kopieren; genau diese Varianten sollen vermieden werden.
2. **Ein neuer Lernpfad, keine neuen Varianten.** Der Pfad verweist auf vorhandene Module. Neu
   entstehen nur drei Module; jedes davon steht zusätzlich in einem der bestehenden Pfade.
3. **Kein zweites Zahlenwerk in bestehenden Modulen.** Die Beispielzahlen der Plattform bilden
   eine Kette (die zwölf BWA-Monate summieren sich auf die GuV, die Vorschau baut auf der BWA
   auf). Die Sozialwirtschaft kommt dort als zusätzlicher Übungseintrag, als Quizfrage und als
   aufklappbarer Block hinein, nie als Umschalter.
4. **Der Fall „der Verband“** ist der zweite Fall der Plattform. Er wird aus
   `modul_cashflow/PROJECT-CANON.md` übernommen (siehe Paket 1). Keine Eigennamen: der Verband,
   das Pflegeheim, die Beratungsstelle, das Wohnhaus, der Secondhandladen; Personen nur als
   Rolle (der Vorstand, die Leitung Finanzen und Controlling, die neue Kraft in der
   Buchhaltung, die Leitung des Pflegeheims).
5. **Wo ein Modul oder eine Lektion mit dem Verband arbeitet, sagt es das im ersten Satz**
   (Kachel bzw. Kernaussage), wie CLAUDE.md es für eigene Fälle verlangt.
6. **Rechtliches als Systematik.** Gemeinnützigkeit, Rücklagen, Sphären, Krisenfrüherkennung
   und Umsatzsteuer werden als Ordnung dargestellt, nie mit Frist, Grenzbetrag oder Wortlaut
   einer Vorschrift. Wo eine Frist oder ein Betrag nötig wäre, steht der Hinweis, dass der
   steuerliche Berater oder Wirtschaftsprüfer des eigenen Hauses das festlegt.
7. **Sprache der Module Deutsch**, mit `langBadge` wie bei den übrigen Liquiditätsmodulen.

---

## 1 · Arbeitspakete

Jedes Paket ist ein eigener Pull Request. Vor jedem Paket `git fetch origin main` und
`git merge --ff-only origin/main`, danach die betroffenen Dateien neu einlesen.

| Paket | Inhalt | Abschnitt |
|---|---|---|
| P1 | Fall übernehmen, Korrekturen im Kanon, Lernpfad, Hüllen der drei neuen Module, Registrierung | 2, 3 |
| P2 | Ergänzungen in sechs bestehenden Modulen, eine Korrektur in `liquiditaet-begriff` | 8 |
| P3 | Modul `cashflow` mit Inhalt | 4 |
| P4 | Modul `leistung-periodengerecht` mit Inhalt | 5 |
| P5 | Modul `liquiditaet-tagesplan` füllen (heute Hülle) | 6 |
| P6 | Modul `liqui-fruehwarnung` mit Inhalt | 7 |

Nach P6 gehört jedes neue Modul mit vier Fragen in die Standortbestimmung (siehe 9).

---

## 2 · Paket 1: Der Fall und seine Korrekturen

### 2.1 Übernahme

- `modul_cashflow/PROJECT-CANON.md` wird als **`KANON-VERBAND.md`** ins Wurzelverzeichnis
  übernommen: Abschnitte 1 (Rahmen, ohne Sie-Form), 2 (Fall, Einrichtungen, Rollen),
  3 (Zahlenwerk), 5 (Rechtliches), 7 (Ton). Abschnitt 4 (Modulschnitt) entfällt, weil der
  Schnitt jetzt dieser Auftrag ist.
- „Cash Flow“ wird durchgehend zu „Cashflow“, „Sie“ zu „Du“.
- Das Leitmotiv bleibt wörtlich im Kanon: Bei einem gemeinnützigen Träger gilt „Cash is king“
  nur mit Fußnote; ein hoher Bestand ohne zulässige Rücklage ist ein Risiko.
- CLAUDE.md, Abschnitt „Wenn ein Modul einen eigenen Fall braucht“: ein Absatz, dass der
  Verband der zweite Fall der Plattform ist, mit Verweis auf `KANON-VERBAND.md` und
  Begründung (Sonderposten, Zuwendungen, Sphären und Kostenträger gibt der allgemeine Fall
  nicht her). Unter „Vor jeder Aufgabe lesen“ den Kanon ergänzen.
- Das Repository `modul_cashflow` wird danach nicht weitergeführt. Sein Modul 1
  (Stromgrößen) deckt dasselbe ab wie `liquiditaet-begriff`, Lektion 01. Maik archiviert es
  von Hand; dieser Auftrag fasst es nicht an.

### 2.2 Korrekturen am Kanon

**K1 [Entscheidung] Die Auflösung des Sonderpostens fehlt in der GuV.** Der Kanon nennt
92 T€ Auflösung als ertragswirksam und zieht sie im Cashflow ab, in der GuV-Tabelle steht sie
aber nicht; die sonstigen betrieblichen Erträge (58 T€) sind kleiner als 92 T€. Vorschlag,
der alle Summen, das Ergebnis und den Cashflow unverändert lässt:

| Position | bisher | neu |
|---|---|---|
| Erlöse Pflege (Pflegeheim) | 4.180 | **4.088** |
| Erträge aus der Auflösung von Sonderposten | fehlt | **92** |
| Erträge gesamt | 5.238 | 5.238 |

**K2 [Entscheidung] Zinsen im Cashflow.** Der Kanon zeigt die gezahlten Zinsen (62 T€) im
laufenden Bereich und nennt das nach DRS 21 zulässig. Das trifft nicht zu: DRS 21 ordnet
gezahlte Zinsen ohne Wahlrecht der Finanzierungstätigkeit zu, erhaltene Zinsen der
Investitionstätigkeit. Für einen eingetragenen Verein ist DRS 21 nicht verbindlich; ein vom
Wirtschaftsprüfer aufgestellter Cashflow folgt ihm aber in der Regel, und die Teilnehmenden
sollen ihren eigenen Bericht wiedererkennen. Zwei Wege:

| | Kanon (Zinsen laufend) | DRS 21 (Zinsen Finanzierung) |
|---|---:|---:|
| Laufende Tätigkeit | 220 | 282 |
| Investitionstätigkeit | −182 | −182 |
| Finanzierungstätigkeit | +24 | −38 |
| Veränderung Finanzmittelbestand | +62 | +62 |
| Free Cashflow nach Zuwendungen | 38 | 100 |
| Free Cashflow vor Zuwendungen | −112 | −50 |
| Cashflow je Sphäre | 265 / −85 / 48 / −8 | 320 / −85 / 55 / −8 |

Dieser Auftrag rechnet mit der Spalte „Kanon“. Entscheidet Maik für DRS 21, ändern sich die
Zahlen der rechten Spalte in `cashflow` (alle Lektionen), in 2.3 (Anschluss je Sphäre,
Innenfinanzierungsgrad 82,9 %) und in der Formel der Hebel (Basis 282 statt 220). Der Satz zur
Zulässigkeit fällt in beiden Fällen weg.

**K3 [bestätigt] Investitionszuwendungen im Cashflow.** Der Kanon zeigt die 150 T€
Investitionszuwendungen im Investitionsbereich. Das entspricht DRS 21 in der Fassung des
DRÄS 13 (Geschäftsjahre ab 2023): Investitionszuschüsse der öffentlichen Hand stehen im
Investitionsbereich, Zuschüsse zu laufenden Aufwendungen im laufenden Bereich. Keine Änderung.
Für die Analyse zeigt das Modul zusätzlich den **Free Cashflow vor Zuwendungen** (−112 T€
neben 38 T€): Aus eigener Kraft reicht der laufende Cashflow für die Investitionen nicht, erst
die Zuwendungen machen den Free Cashflow positiv.

### 2.3 Ergänzungen am Kanon [ergänzt]

Diese Werte kommen in `KANON-VERBAND.md` als eigener Abschnitt „Ergänzungen für die
Lernplattform“. Alle Summen sind gegen den Kanon gerechnet.

**Die GuV nach Einrichtungen** (T€, nach K1). Die Geschäftsstelle ist keine Einrichtung; ihre
Kosten werden als Umlage verteilt (Schlüssel: Anteil an den Erträgen, gerundet). Die Spenden
stehen beim ideellen Bereich, also bei der Beratungsstelle.

| | Pflegeheim | Beratungsstelle | Wohnhaus | Secondhandladen | Geschäftsstelle | Verband |
|---|---:|---:|---:|---:|---:|---:|
| Erlöse, Zuwendungen, Miete | 4.088 | 620 | 96 | 74 | | 4.878 |
| Auflösung Sonderposten | 92 | | | | | 92 |
| Spenden | | 210 | | | | 210 |
| Sonstige Erträge | 40 | 10 | | 8 | | 58 |
| **Erträge** | **4.220** | **840** | **96** | **82** | | **5.238** |
| Personalaufwand | −2.780 | −560 | −10 | −60 | −200 | −3.610 |
| Material- und Sachaufwand | −620 | −90 | −14 | −25 | −43 | −792 |
| Abschreibungen | −225 | −10 | −16 | −7 | −10 | −268 |
| Sonstige betriebliche Aufwendungen | −153 | −242 | −19 | −5 | −67 | −486 |
| Zinsaufwand | −55 | | −7 | | | −62 |
| **Einrichtungsergebnis I** | **387** | **−62** | **30** | **−15** | **−320** | |
| Umlage Geschäftsstelle | −250 | −55 | −5 | −10 | +320 | |
| **Einrichtungsergebnis II** | **137** | **−117** | **25** | **−25** | **0** | **20** |

Die Beratungsstelle liegt ohne Spenden bei −272 T€ (Ergebnis I) bzw. −327 T€ (Ergebnis II).
Das Jahresergebnis des Verbands vor Spenden beträgt −190 T€ **[abgeleitet]**; diese Zahl folgt
zwingend aus dem Kanon (+20 minus 210) und ist unabhängig von der Aufteilung.

**Anschluss an den Cashflow je Sphäre.** Mit den folgenden Veränderungen des Working Capital
**[Annahme]** ergibt die Aufteilung genau den Cashflow je Sphäre aus dem Kanon:

| | Pflegeheim | Beratungsstelle | Wohnhaus | Secondhandladen | Summe |
|---|---:|---:|---:|---:|---:|
| Ergebnis II | 137 | −117 | 25 | −25 | 20 |
| + Abschreibungen, einschließlich Anteil Geschäftsstelle | 230 | 12 | 18 | 8 | 268 |
| − Auflösung Sonderposten | −92 | | | | −92 |
| ± Working Capital | −10 | 20 | 5 | 9 | 24 |
| **= Cashflow aus laufender Tätigkeit** | **265** | **−85** | **48** | **−8** | **220** |

**Kennzahlen [abgeleitet]**

| Kennzahl | Wert | Rechnung |
|---|---|---|
| Belegungstage Pflegeheim | 29.434 | 84 Plätze × 365 Tage × Auslastung 96 % **[Annahme]** |
| Erlöse je Belegungstag | 138,89 € | 4.088 T€ / 29.434 **[prüfen: Größenordnung]** |
| Personalaufwand je Belegungstag (direkt) | 94,45 € | 2.780 T€ / 29.434 |
| Personalaufwandsquote Pflegeheim | 65,9 % | 2.780 / 4.220 |
| Personalaufwandsquote Verband | 68,9 % | 3.610 / 5.238 |
| Forderungslaufzeit 31.12. | 41,7 Tage | 486 / (4.088 + 96 + 74) × 365 |
| Forderungslaufzeit 01.01. | 35,3 Tage | 412 / 4.258 × 365, bei gleichem Umsatz |
| Monatliche Auszahlungen | 412,5 T€ | (5.218 − 268) / 12, wie im Kanon |
| Liquiditätsreichweite 31.12. | 1,16 Monate | 480 / 412,5 (Kanon: „rund 1,2“) |
| Liquiditätsreichweite 01.01. | 1,01 Monate | 418 / 412,5 |
| Free Cashflow | 38 T€ | 220 − 182 (Kanon) |
| Innenfinanzierungsgrad der Investitionen | 64,7 % | 220 / 340 |

**Hebel [abgeleitet]**, jeweils für ein Jahr:

- 1 Prozentpunkt Auslastung im Pflegeheim entspricht 42,6 T€ Erlösen.
- 1 Tag Forderungslaufzeit bindet 11,7 T€ (4.258 / 365).
- 1 % Tarifsteigerung kostet 36,1 T€ Personalaufwand.
- Ein Tag Pflegeerlöse sind 11,2 T€ (4.088 / 365).

---

## 3 · Paket 1: Lernpfad, Hüllen, Registrierung

### 3.1 Der neue Lernpfad in `plattform/index.html`, `const PATHS`

```
id:    "sozialwirtschaft"
title: de "Liquidität steuern in der Sozialwirtschaft"
       en "Managing liquidity in the social sector"
sub:   de: Vom Unterschied zwischen Ertrag und Einzahlung über die GuV als Steuerungsinstrument
           und die Erfassung im Leistungsmonat bis zum Cashflow, zur Liquiditätsplanung und zu
           einem Frühwarnsystem. Die Beispiele kommen aus einem Verband mit Pflegeheim,
           Beratungsstelle, Wohnhaus und Secondhandladen.
       en: (sinngemäß übersetzen)
steps: ["liqui-begriff", "bilanz-guv", "leistung-periodengerecht", "cashflow",
        "liqui-vorschau", "liqui-tagesplan", "liqui-fruehwarnung"]
```

### 3.2 Die neuen Module in den bestehenden Pfaden

- `bilanzanalyse`: `cashflow` nach `bilanz-kennzahlen`, `leistung-periodengerecht` nach
  `bilanz-buchungssaetze`. Neue Folge: aufbau, guv, kennzahlen, cashflow, buchungssaetze,
  leistung-periodengerecht.
- `liquiditaetsplanung`: `liqui-fruehwarnung` als letzter Schritt nach `liqui-tagesplan`.
- Den `sub`-Text beider Pfade prüfen und, falls er die Module aufzählt, ergänzen.

### 3.3 `TOPICS` und `reihenfolge.js`

| Kennung | Datei | Titel de | Kacheltext de (Inhalt, nicht Wortlaut) | Spur |
|---|---|---|---|---|
| `cashflow` | `cashflow.html` | Der Cashflow | Arbeitet mit dem Verband (erster Satz). Vom Jahresergebnis zum Zahlungsstrom, drei Bereiche, typische Muster und was der Cashflow über das operative Geschäft verrät; am Ende die eigene Rechnung | wie `bilanz-kennzahlen` |
| `leistung-periodengerecht` | `leistung-periodengerecht.html` | Leistungen im Leistungsmonat erfassen | Warum ein Ertrag in den Monat der Leistung gehört, zwei Verfahren im Vergleich, wer was bis wann liefert. Beispiele aus dem Pflegeheim des Verbands | wie `bilanz-buchungssaetze` |
| `liqui-fruehwarnung` | `liquiditaet-fruehwarnung.html` | Liquiditätsrisiken früh erkennen | Kennzahlen vom Groben ins Detail, Schwellen und Ampeln, ein Frühwarnsystem mit Zuständigkeiten. Beispiele aus dem Verband | `liqui` |

`reihenfolge.js`: `cashflow` nach `bilanz-kennzahlen`, `leistung-periodengerecht` nach
`bilanz-buchungssaetze`, `liqui-fruehwarnung` nach `liqui-tagesplan`.

In P1 stehen die drei Module mit `status:"planned"` und als Hülle nach dem Modulvertrag
(Lektionen, Blocküberschriften und Kernaussagen aus den Abschnitten 4, 5 und 7).

---

## 4 · Paket 3: Modul `cashflow` · Der Cashflow

Arbeitet durchgehend mit dem Verband. Fünf Inhaltslektionen, Quiz, Praxiseinstieg. Zahlen aus
Abschnitt 2 dieses Auftrags.

### Lektion 01 · Vom Jahresergebnis zum Cashflow

**Kernaussage:** Der Verband weist 20 T€ Jahresergebnis aus und hat aus laufender Tätigkeit
220 T€ erwirtschaftet. Die indirekte Rechnung nimmt alles zurück, was das Ergebnis berührt
hat und das Konto nicht.

**Block: Drei Rechenwerke und ihre zwei Verbindungsstellen.** Bilanz (Bestand am Stichtag),
GuV (Erfolg der Periode), Cashflow-Rechnung (Veränderung des Finanzmittelbestands und ihre
Herkunft). Das Jahresergebnis steht in der GuV und im Eigenkapital; der Finanzmittelbestand
steht in der Bilanz und am Ende der Cashflow-Rechnung (418 T€ am 01.01., 480 T€ am 31.12.).
Abbildung: drei Kästen, zwei Verbindungslinien, sonst nichts.

**Block: Die Überleitung Schritt für Schritt** [Kanon]

| Schritt | T€ | Warum (Inhalt der Begründung) |
|---|---:|---|
| Jahresergebnis | +20 | Ausgangspunkt |
| + Abschreibungen | +268 | Aufwand ohne Auszahlung; bezahlt wurde bei der Anschaffung |
| − Auflösung Sonderposten | −92 | Ertrag ohne Einzahlung; die Zuwendung kam bei der Investition |
| + Zunahme Rückstellungen | +48 | Aufwand, dessen Zahlung später kommt (Urlaub, Überstunden) |
| − Zunahme Forderungen | −74 | Erträge, deren Einzahlung noch aussteht |
| + Abnahme Vorräte | +5 | Verbrauch aus dem Lager ohne neuen Einkauf |
| + Zunahme Verbindlichkeiten aus L+L | +45 | Aufwand, der noch nicht bezahlt ist |
| **= Cashflow aus laufender Tätigkeit** | **+220** | |

Die Vorzeichenregel als eigener Satz im Modul: Steigt ein Aktivposten, bindet er Geld
(minus); steigt ein Passivposten, hält er Geld im Haus (plus).

**Block: Direkte und indirekte Methode.** Direkt heißt Einzahlungen minus Auszahlungen, so
rechnet die Liquiditätsvorschau (Verweis auf `liquiditaet-vorschau.html`). Indirekt heißt
vom Jahresergebnis aus, so wird aus einem Abschluss analysiert. Beim laufenden Cashflow kommen
beide auf denselben Betrag.

**Interaktiv:** Wasserfall, der sich per Klick Schritt für Schritt aufbaut; jeder Balken hat
einen Tooltip mit Begründung und dem Vorfall im Verband. Darunter eine Zuordnungsübung „Plus
oder minus?“ mit acht Veränderungen: die sechs aus der Tabelle, dazu „erhaltene Anzahlungen
steigen“ (plus) und „Vorräte steigen“ (minus).

**Pointe (Inhalt):** Jahresergebnis und Cashflow messen zwei verschiedene Dinge; bezahlt wird
aus dem Cashflow.

### Lektion 02 · Drei Bereiche und ihre Muster

**Kernaussage:** Die Cashflow-Rechnung teilt die Veränderung des Finanzmittelbestands in drei
Bereiche. Erst die drei Vorzeichen zusammen ergeben ein Bild.

**Block: Die drei Bereiche des Verbands** [Kanon]

| Bereich | T€ | Inhalt |
|---|---:|---|
| Laufende Tätigkeit | +220 | aus Lektion 01 |
| Investitionstätigkeit | −182 | Bädersanierung und Fahrzeug −340, Investitionszuwendungen +150, Verkauf Altfahrzeug +8 |
| Finanzierungstätigkeit | +24 | Darlehen +120, Tilgung −96 |
| **Veränderung Finanzmittelbestand** | **+62** | 418 → 480 |

Ein aufklappbarer Kasten zur Zuordnung von Zinsen und Zuwendungen nach DRS 21 (K2, K3), ohne
weitere DRS-Tiefe.

**Block: Acht Muster** [ergänzt; übliche Lesart der Bilanzanalyse]

| Laufend | Investition | Finanzierung | Deutung |
|:-:|:-:|:-:|---|
| + | − | − | Aus eigener Kraft investiert und Schulden bedient. Der Normalfall eines gesunden Betriebs |
| + | − | + | Investiert über den laufenden Cashflow hinaus, ergänzt durch Kredite oder Zuwendungen. **Der Verband** |
| + | + | − | Anlagen verkauft, Schulden getilgt. Konsolidierung oder Rückzug |
| + | + | + | Geld fließt aus allen Richtungen zu. Selten; beim gemeinnützigen Träger die Frage der zeitnahen Verwendung |
| − | − | + | Laufendes Geschäft und Investitionen auf Kredit. Warnsignal, außer in einer Anlaufphase |
| − | + | + | Laufende Verluste durch Anlagenverkäufe und Kredite gedeckt. Krise |
| − | + | − | Anlagenverkäufe decken Defizit und Tilgung. Substanzverzehr |
| − | − | − | Der Bestand schmilzt in allen Bereichen. Nur mit hohem Anfangsbestand möglich, akut |

**Block: Der Free Cashflow.** Laufende Tätigkeit plus Investitionstätigkeit: 38 T€ nach
Zuwendungen, −112 T€ vor Zuwendungen (K3). Auf 5,2 Mio. € Erträge bleiben 38 T€ für Tilgung,
Rücklagen und Zweckerfüllung.

**Interaktiv:** Mustermatrix mit drei Schaltern (plus/minus je Bereich), Ausgabe der Deutung;
das Muster des Verbands ist markiert. Daneben ein Schalter „Zuwendungen einrechnen“ für den
Free Cashflow.

**Pointe (Inhalt):** Aus eigener Kraft reicht der laufende Cashflow des Verbands für seine
Investitionen nicht; die Zuwendungen schließen die Lücke.

### Lektion 03 · Vom Cashflow zum operativen Geschäft

**Kernaussage:** Jede Zeile der Überleitung hat einen Treiber im Tagesgeschäft. Wer die
Treiber kennt, liest den Cashflow als Folge von Entscheidungen in den Einrichtungen.

**Block: Der Treiberbaum** [ergänzt]

- Belegung × Erlös je Belegungstag → Erlöse → Abrechnung im Leistungsmonat (Verweis auf
  `leistung-periodengerecht.html`) → Zahlungseingang je Kostenträger → Forderungen (−74).
- Stellen × Tarif → Personalaufwand → Auszahlung am Monatsende; Urlaub und Überstunden →
  Rückstellungen (+48).
- Investitionsplan → Zuwendungsabruf → Investitionsbereich.
- Darlehen und Tilgungsplan → Finanzierungsbereich.

**Block: Die Hebelkarte** [abgeleitet, Abschnitt 2.3]: Auslastung (1 Prozentpunkt = 42,6 T€
Erlöse), Forderungslaufzeit (1 Tag = 11,7 T€ gebunden), Tarif (1 % = 36,1 T€ Aufwand).

**Block: Die Geldumschlagsdauer ohne Lager.** Verweis auf `liquiditaet-begriff.html`,
Lektion 03. In Pflege und Beratung gibt es kaum Vorräte; es dominiert die
Forderungslaufzeit. Das Personal wird vor dem Zahlungseingang bezahlt, rund 42 Tage
Forderungslaufzeit binden 486 T€.

**Block: Was der Verband aus seinem Cashflow ablesen kann** [abgeleitet]

- Die Investitionen deckt der laufende Cashflow nur mit Zuwendungen (Lektion 02).
- Der Anstieg der Forderungen um 74 T€ entspricht gut sechs Tagen Forderungslaufzeit (74 / 11,7).
- Die 48 T€ Rückstellungen sind Geld, das noch abfließt.
- 92 T€ des Ergebnisses sind Sonderpostenauflösung ohne Einzahlung.
- 480 T€ Bestand reichen für 1,16 Monate Auszahlungen.

**Interaktiv:** Drei Schieber (Auslastung −3 bis +3 Prozentpunkte, Forderungslaufzeit −10 bis
+10 Tage, Tarif 0 bis 5 %). Ausgabe laufender Cashflow und Reichweite. Die Rechnung ist eine
lineare Näherung und heißt im Modul so:

```
Cashflow  = 220 + ΔAuslastung × 42,6 − ΔTage × 11,7 − Tarif% × 36,1
Reichweite = (480 + Cashflow − 220) / (412,5 + Tarif% × 36,1 / 12)
```

Ein Klick auf einen Treiber im Baum markiert seine Zeile im Wasserfall aus Lektion 01.

**Pointe (Inhalt):** Belegung, Abrechnungstempo und Personaleinsatz bestimmen den Cashflow;
die Rechnung macht ihre Wirkung sichtbar.

### Lektion 04 · Was bei einem gemeinnützigen Träger anders ist

**Kernaussage:** Überschüsse sind erlaubt, ihre Ausschüttung nicht. Zudem müssen Mittel zeitnah
verwendet werden, weshalb beim Verband auch ein zu hoher Bestand ein Befund ist.

**Block: Vier Sphären, vier Cashflows** [Kanon]: Zweckbetrieb Pflegeheim +265, ideeller
Bereich Beratungsstelle −85, Vermögensverwaltung Wohnhaus +48, wirtschaftlicher
Geschäftsbetrieb Secondhandladen −8. Abbildung: vier Balken, ein Pfeil vom Pflegeheim zur
Beratungsstelle.

**Block: Quersubventionierung als Systematik** [prüfen]: Mittelverwendung für den
satzungsmäßigen Zweck ist erwünscht; Verluste eines wirtschaftlichen Geschäftsbetriebs mit
gemeinnützigen Mitteln auszugleichen, ist es in der Regel nicht. Keine Grenzen, keine
Fristen, Verweis auf den steuerlichen Berater.

**Block: Untergrenze und Obergrenze der Liquidität** [ergänzt]: Die Untergrenze setzt die
Zahlungsfähigkeit, die Obergrenze setzen zeitnahe Mittelverwendung und Rücklagenplanung
[prüfen]. Anschluss an `liqui-fruehwarnung`, Lektion 02.

**Block: Der Sonderposten.** Die Investitionszuwendung kommt als Einzahlung und steht als
Sonderposten auf der Passivseite; Abschreibung und Auflösung laufen danach parallel und sind
beide nicht zahlungswirksam. Aus eigener Kraft zu verdienen sind deshalb die
eigenfinanzierten Abschreibungen, 268 − 92 = 176 T€ [abgeleitet].

**Block: Die Rollen fragen.** Die neue Kraft in der Buchhaltung fragt, wie der Verband mit
20 T€ Ergebnis die Bäder bezahlen kann. Die Leitung des Pflegeheims fragt, warum das
Pflegeheim die Beratungsstelle mitfinanziert.

**Interaktiv:** Ein Klick auf einen Sphärenbalken zeigt die Überleitung der Sphäre
(Tabelle „Anschluss an den Cashflow je Sphäre“ in 2.3). Ein Schalter „Spenden
herausrechnen“ zeigt die Beratungsstelle ohne Spenden.

**Pointe (Inhalt):** Beim gemeinnützigen Träger hat die Liquidität zwei Grenzen: Zu wenig
gefährdet die Zahlungsfähigkeit, zu viel die zeitnahe Mittelverwendung.

### Lektion 05 · Deine eigene Cashflow-Rechnung

**Kernaussage:** Ein Formular für die indirekte Rechnung mit eigenen Zahlen. Unten stehen das
Muster, der Free Cashflow und die Reichweite.

**Block: Das Formular.** Laufende Tätigkeit: Jahresergebnis, Abschreibungen, Auflösung
Sonderposten, Veränderung Rückstellungen, Forderungen, Vorräte, Verbindlichkeiten aus L+L,
Sonstiges. Investitionstätigkeit: Auszahlungen für Sachanlagen, Einzahlungen aus Abgängen,
Investitionszuwendungen. Finanzierungstätigkeit:
Darlehen, Tilgung, Sonstiges. Anfangsbestand, rechnerischer Endbestand, Endbestand laut
Bilanz, Probe als Ampel. Für die Reichweite zusätzlich Aufwendungen gesamt und Abschreibungen.

**Block: Die Auswertung.** Muster aus Lektion 02, Free Cashflow vor und nach Zuwendungen,
Reichweite, Innenfinanzierungsgrad (laufender Cashflow / Auszahlungen für Sachanlagen; Verband
64,7 %).

**Block: Mitnehmen.** Beispiel (lädt den Verband), Leeren, als JSON speichern und laden
(Kennung `cashflow`), als Text in die Zwischenablage, wie in `bilanz-kennzahlen.html`.

**Block: Was das Formular weglässt.** Konzernabschluss, Wechselkurse, die Trennung nach
Sphären (nur gesamt).

### Quiz

Mindestens 20 Fragen aus dem Inhalt der Lektionen 01 bis 05. Schwerpunkte: Vorzeichenregel,
Sonderposten, direkte und indirekte Methode, die acht Muster, Free Cashflow vor und nach
Zuwendungen, Hebel, Reichweite, Sphären und zeitnahe Mittelverwendung.

### Praxiseinstieg · Sieben Schritte mit dem eigenen Cashflow

1. Die Abschlüsse der letzten zwei, besser drei Jahre holen, dazu eine vorhandene
   Cashflow-Rechnung.
2. Je Jahr die Vorzeichen der drei Bereiche notieren und das Muster bestimmen.
3. Die drei größten Überleitungsposten suchen und je einen Treiber im Tagesgeschäft nennen.
4. Den Free Cashflow vor und nach Zuwendungen rechnen.
5. Die Reichweite zum Stichtag rechnen und, wenn möglich, für jedes Monatsende.
6. Den Cashflow je Sphäre oder Einrichtung rechnen, soweit die Buchhaltung die Trennung hergibt.
7. Drei Fragen für den Vorstand formulieren, die aus den Zahlen folgen.

**Glossar:** Cashflow, Kapitalflussrechnung (Synonym), indirekte Methode, direkte Methode,
laufende Tätigkeit, Investitionstätigkeit, Finanzierungstätigkeit, Free Cashflow, Sonderposten
aus Zuwendungen, Sphäre, Liquiditätsreichweite, Innenfinanzierungsgrad, Working Capital.

---

## 5 · Paket 4: Modul `leistung-periodengerecht` · Leistungen im Leistungsmonat erfassen

Arbeitet mit dem Pflegeheim und der Beratungsstelle des Verbands. Drei Inhaltslektionen, Quiz,
Praxiseinstieg. Grundlage ist die Anfrage des Verbands: Erbrachte, noch nicht abgerechnete
Leistungen und Zahlungseingänge werden heute auf den Debitor gebucht, die Rechnungen
erscheinen im Prozess nicht.

### Lektion 01 · Leistung, Rechnung, Zahlung

**Kernaussage:** Ein Ertrag gehört in den Monat, in dem die Leistung erbracht wurde. Rechnung
und Zahlung haben eigene Zeitpunkte und eigene Konten.

**Block: Drei Zeitpunkte im Pflegeheim**

- Leistung im März: 31 Tage × 11,2 T€ = 347,2 T€ Pflegeerlöse [abgeleitet].
- Rechnung am dritten Arbeitstag im April [Annahme].
- Zahlung [Annahme]: Pflegekasse (45 %) und Bewohnerinnen und Bewohner (40 %) im April,
  Sozialhilfeträger (15 %) im Juni. Im Modul steht, dass das eigene Haus diese Wege gegen
  seine tatsächlichen tauscht.
- Anschluss an die Begriffspaare aus `liquiditaet-begriff.html`, Lektion 01: Der Ertrag
  entsteht im März mit der Leistung, bilanziell ebenso die Forderung. Die Rechnung macht die
  Forderung fällig und ordnet sie einem Debitor zu; die Einzahlung folgt im April und Juni.

**Block: Was ohne Abgrenzung in der Monats-GuV passiert** [abgeleitet]. Direkte Kosten des
Pflegeheims 319,4 T€ je Monat (3.833 / 12), sonstige Erträge und Sonderpostenauflösung 11,0 T€
je Monat.

| Monat | Tage | Leistung | Ergebnis I, Ertrag im Leistungsmonat | Ergebnis I, Ertrag erst mit der Rechnung |
|---|---:|---:|---:|---:|
| Januar | 31 | 347,2 | 38,8 | (Dezember-Leistung) |
| Februar | 28 | 313,6 | 5,2 | 38,8 |
| März | 31 | 347,2 | 38,8 | 5,2 |
| April | 30 | 336,0 | 27,6 | 38,8 |
| Mai | 31 | 347,2 | 38,8 | 27,6 |

Wird der Ertrag erst mit der Rechnung gebucht, zeigt die März-GuV die kurze Februar-Leistung
gegen die März-Kosten. Das Ergebnis des März liegt um 33,6 T€ zu niedrig, das des April um
11,2 T€ zu hoch, weil dort die 31 Tage des März gegen einen 30-Tage-Monat stehen. Über das Jahr
gleicht sich das weitgehend aus, im einzelnen Monat nicht. Belegungsschwankungen und späte
Rechnungen verschieben das Ergebnis weiter; der Dezember sammelt die Korrekturen (Verweis auf
`liquiditaet-bwa.html`, Lektion 03).

**Block: Die Grundlage im HGB.** Realisationsprinzip und Periodenabgrenzung (§ 252 Abs. 1
Nr. 4 und 5 HGB). Vollständig erbrachte, noch nicht abgerechnete Leistungen sind Forderungen;
nicht abgeschlossene Leistungen sind unfertige Leistungen [prüfen: Abgrenzung im eigenen Haus
mit dem Wirtschaftsprüfer].

**Block: Der Sonderfall Zuwendungen** (Beratungsstelle) [prüfen]: Ertrag in dem Umfang, in dem
die geförderten Aufwendungen anfallen; erhaltene, noch nicht verwendete Mittel als
Verbindlichkeit oder eigener Passivposten; bewilligte, für angefallene Aufwendungen noch nicht
abgerufene Mittel als Forderung.

**Interaktiv:** Zeitstrahl Februar bis Juni mit Markern für Leistung, Rechnung und Zahlung je
Kostenträger. Umschalter „Ertrag im Leistungsmonat“ und „Ertrag erst mit der Rechnung“.
Ausgabe: die Monats-GuV aus der Tabelle als Balken, darunter die Stände von Forderung, Debitor
und Bank je Monatsende.

**Pointe (Inhalt):** Die Rechnung bestimmt, wann gezahlt wird; in welchen Monat der Ertrag
gehört, bestimmt die Leistung.

### Lektion 02 · Das heutige Verfahren und das saubere Verfahren

**Kernaussage:** Wer Schätzung und Zahlung auf dasselbe Debitorenkonto bucht und die Rechnung
auslässt, hat den Ertrag im richtigen Monat. Er verliert dabei die offene Postenliste, das
Mahnwesen und eine verlässliche Forderungslaufzeit.

**Block: Das heutige Verfahren** (aus der Anfrage). Monatsende: Debitor an Erlöse, geschätzt
347,2 T€. Zahlung: Bank an Debitor. Die Rechnung über 345,0 T€ [Annahme: zwei
Abwesenheitstage weniger abgerechnet] wird nicht gebucht. Nach der Zahlung bleiben 2,2 T€ auf
dem Debitor stehen, die niemand zahlen wird; liegt die Schätzung zu niedrig, entsteht ein
Haben-Saldo.

**Block: Sechs Folgen**

1. Die offene Postenliste enthält Schätzungen statt Rechnungen, Restposten sammeln sich an.
2. Ohne Rechnung gibt es keine Fälligkeit und kein Mahnwesen.
3. Forderungslaufzeit und Altersstruktur lassen sich nicht rechnen.
4. Abweichungen zwischen Schätzung und Rechnung erscheinen nicht als Erlöskorrektur.
5. Die Rechnung fehlt als Beleg in der Buchhaltung [prüfen: Belegprinzip].
6. Die Cashflow-Überleitung (Veränderung der Forderungen) und die ersten Wochen einer
   Liquiditätsvorschau (offene Posten) stehen auf unsicherem Grund.

**Block: Verfahren A, Abgrenzung auf einem Sachkonto** [ergänzt]

| Zeitpunkt | Buchung | T€ |
|---|---|---:|
| Monatsende März | Forderungen aus noch nicht abgerechneten Leistungen an Erlöse (je Einrichtung und Kostenträger, auf einem Sachkonto) | 347,2 |
| Rechnung im April | Debitor an Erlöse | 345,0 |
| Rechnung im April | Erlöse an Forderungen aus noch nicht abgerechneten Leistungen (oder automatische Umkehrbuchung am Monatsersten) | 347,2 |
| Zahlung | Bank an Debitor | 345,0 |

Der April enthält −2,2 T€ Erlöskorrektur; der Debitor ist ausgeglichen.

**Block: Verfahren B, Rechnung in den Leistungsmonat buchen** [ergänzt]. Die Periode März
bleibt bis zu einem Stichtag offen; die Rechnung hat das Leistungsdatum März und wird dort
gebucht. Keine Schätzung, aber der Monatsabschluss wartet auf die Abrechnung.

**Block: A und B im Vergleich**

| | Verfahren A | Verfahren B |
|---|---|---|
| Genauigkeit im Monat | Schätzung, Korrektur im Folgemonat | Rechnungsbetrag |
| Tempo des Monatsabschlusses | unabhängig von der Abrechnung | wartet auf die Abrechnung |
| Aufwand | Meldung, Buchung, Auflösung, Abstimmung | Periode offen halten, Stichtag einhalten |
| Voraussetzung | Meldebogen der Einrichtungen | Abrechnung bis zum Stichtag fertig |

Empfehlung [ergänzt]: B, wo die Abrechnung bis zum Stichtag fertig ist, A für alles, was
später abgerechnet wird. Beide Verfahren nebeneinander sind möglich, je Einrichtung festgelegt.

**Interaktiv:** Buchungskette in drei Schritten (Monatsende, Rechnung, Zahlung) als Kontenansicht
mit Debitor, Sachkonto, Erlöse und Bank; Umschalter heute, A, B. Schieber „Rechnung weicht von
der Schätzung ab“ (−5 bis +5 T€); im heutigen Verfahren entsteht daraus ein Restposten, in A
eine Erlöskorrektur. Die Stelle, an der der Restposten entsteht, ist markiert.

**Pointe (Inhalt):** Der Ertrag gehört in den Leistungsmonat, die Rechnung auf den Debitor; wer
beides auf einem Konto vermischt, kann keinen offenen Posten mehr verfolgen.

### Lektion 03 · Wer liefert was bis wann

**Kernaussage:** Eine Abgrenzung ist so gut wie die Meldung aus der Einrichtung. Dafür braucht
der Monatsabschluss feste Termine, einen Meldebogen und eine Abstimmung im Folgemonat.

**Block: Der Meldebogen** [ergänzt]: Einrichtung, Leistungsmonat; je Kostenträger und
Leistungsart die Menge (Belegungstage, Abwesenheitstage, Fachleistungsstunden, Kontakte), der
Vergütungssatz laut Vereinbarung und der Betrag; Besonderheiten (Aufnahmen, Entlassungen und
Sterbefälle mit Datum, fehlende Kostenzusagen, strittige Fälle); meldende Person und Vertretung.

**Block: Der Monatsabschlusskalender** [Annahme: Termine als Beispiel]

| Arbeitstag | Wer | Was |
|---|---|---|
| 1 | Einrichtungen | Meldebogen abgeben |
| 2 | Abrechnung | Kostenzusagen prüfen, Fakturierung beginnen |
| 3 | Finanzbuchhaltung | Abgrenzung buchen (A) oder Rechnungen in die offene Periode buchen (B) |
| 4 | Controlling | Plausibilität: Menge × Satz, Vergleich mit Vormonat und Plan, große Abweichungen erklären lassen |
| 5 | Finanzbuchhaltung | Periode schließen, Monatsbericht |
| Folgemonat | Finanzbuchhaltung und Controlling | Abgrenzung gegen Rechnungen abstimmen, Schätzgüte je Einrichtung festhalten |

**Block: Die Abstimmung im Folgemonat.** Abgrenzung 347,2 gegen Rechnung 345,0 ergibt −2,2 T€
(−0,6 %). Über zwölf Monate je Einrichtung verfolgt, zeigt die Schätzgüte, wo die Meldung
besser werden muss.

**Block: Sonderfälle** [prüfen]: fehlende Kostenzusage (Leistung erbracht, Kostenträger offen:
abgrenzen und das Ausfallrisiko bewerten); rückwirkende Entgelterhöhung (erst buchen, wenn sie
vereinbart ist); Nachberechnungen und Gutschriften (im Monat der Korrektur); Tod oder Auszug
(abrechnen bis zu dem Tag, den der Vertrag bestimmt).

**Block: Zuständigkeiten.** Einrichtung liefert die Menge, Abrechnung stellt die Rechnung,
Finanzbuchhaltung bucht und stimmt ab, Controlling prüft die Plausibilität und berichtet, die
Leitung Finanzen und Controlling legt die Regeln fest und gibt sie frei.

**Interaktiv:** Swimlane mit fünf Bahnen (Einrichtung, Abrechnung, Finanzbuchhaltung,
Controlling, Leitung Finanzen) und acht Karten, die in Reihenfolge und Bahn gezogen werden;
„Prüfen“ markiert falsch gelegte Karten. Pointer Events, damit es auf dem Telefon geht.

**Pointe (Inhalt):** Die Qualität der Monatszahlen entsteht am ersten Arbeitstag in der
Einrichtung.

### Quiz

Mindestens 20 Fragen. Schwerpunkte: drei Zeitpunkte, Realisationsprinzip, Folgen des heutigen
Verfahrens, die Buchungen in A, Unterschied zwischen A und B, Inhalt des Meldebogens,
Abstimmung und Schätzgüte, Zuwendungen.

### Praxiseinstieg · Sieben Schritte zum sauberen Verfahren

1. Die Debitorenkonten auf Schätzungsreste durchsehen (Posten ohne Rechnung, Restbeträge,
   Haben-Salden).
2. Die Bereinigung zu einem Stichtag mit dem Wirtschaftsprüfer abstimmen.
3. Je Einrichtung Verfahren A oder B festlegen.
4. Das Sachkonto „Forderungen aus noch nicht abgerechneten Leistungen“ je Einrichtung und
   Kostenträger einrichten [prüfen: Kontenrahmen des Verbands].
5. Meldebogen und Termine einführen.
6. Die Arbeitsanweisung schreiben. Gerüst: Zweck, Geltungsbereich, Begriffe, Zuständigkeiten,
   Termine, Buchungsregeln, Abstimmung, Sonderfälle, Dokumentation.
7. Drei Monate die Schätzgüte messen, danach die Regeln nachschärfen.

**Glossar:** Leistungsmonat, Periodenabgrenzung, Realisationsprinzip, Forderung aus noch nicht
abgerechneten Leistungen, unfertige Leistung, Debitor, Sachkonto, Umkehrbuchung, offener
Posten, Schätzgüte, Kostenzusage.

---

## 6 · Paket 5: `liquiditaet-tagesplan.html` füllen

Die Hülle bleibt, wie sie ist: vier Lektionen, Quiz, Praxiseinstieg, die vorhandenen
Kernaussagen. Das Modul rechnet mit dem allgemeinen Fall aus `liquiditaet-vorschau.html`
(Regelwerk, Plan- und Ist-Reihe) und braucht keine neue Zahl. Die Sozialwirtschaft kommt als
Block hinzu.

### Lektion 01 · Von Monaten zu Tagen

- **Block: Warum Tage.** Zahlungsfähigkeit entscheidet sich am Fälligkeitstag. Der
  Monatsendbestand verdeckt den Tiefpunkt innerhalb des Monats.
- **Block: Dieselben Regeln, feinere Auflösung.** „Fester Tag“ behält seinen Tag (Personal am
  25., Miete am 3.), „Zahlungsverhalten“ wird gleichmäßig auf die Arbeitstage verteilt
  [Annahme, im Modul so benannt], „Jahresrhythmus“ fällt auf seinen Stichtag.
- **Block: Wo die Genauigkeit endet.** Nach etwa dreizehn Wochen liefert die Tagesauflösung keine
  zusätzliche Information mehr; danach übernimmt die Monatsvorschau.
- **Block: Der Monatsrhythmus in der Sozialwirtschaft** [ergänzt]. Das Personal ist der größte
  Auszahlungsblock (beim Verband 3.610 von 4.950 T€ zahlungswirksamen Aufwendungen) und fällt
  gebündelt an; die Kostenträger zahlen zu eigenen Terminen. Der Tiefpunkt liegt deshalb
  häufig kurz nach dem Gehaltslauf.
- **Interaktiv:** Ein Monat der Vorschau als Monatsbalken und als Tageslinie. Abzulesen sind
  Tag und Höhe des Tiefpunkts gegenüber dem Monatsendbestand.

### Lektion 02 · Die ersten Wochen

- **Block: Drei Quellen.** Kontoauszug als Startbestand; offene Posten der Debitoren nach
  Fälligkeit und Zahlungsverhalten; offene Posten der Kreditoren und feste Termine (Gehalt,
  Steuern, Tilgung, Miete).
- **Block: Der Übergang.** Nach einigen Wochen sind die offenen Posten verbraucht; ab dann
  übernimmt das Regelwerk der Monatsvorschau.
- **Block: Die Voraussetzung.** Eine offene Postenliste aus Schätzungen taugt dafür nicht
  (Verweis auf `leistung-periodengerecht.html`, Lektion 02).
- **Interaktiv:** Die offenen Posten entstehen aus den letzten zwei Ist-Monaten der Vorschau
  und deren Zahlungsverhalten und werden auf dreizehn Wochen verteilt; Ausgabe Wochensaldo und
  Bestand.

### Lektion 03 · Rollierend planen

- **Block: Der Rhythmus.** Dreizehn Wochen wöchentlich, zwölf Monate monatlich fortschreiben.
- **Block: Was stehen bleibt und was ersetzt wird.** Regeln, Annahmen und Szenarien bleiben; die
  abgelaufene Woche wird durch das Ist ersetzt; jede Fassung wird aufbewahrt (für Lektion 04).
- **Block: Voraussetzungen einer belastbaren Planung** [ergänzt; beantwortet eine Frage der
  Anfrage]: gebuchte Rechnungen und saubere offene Posten; periodengerechte Erfassung; ein
  Regelwerk mit einer verantwortlichen Person je Regel; feste Termine; der Plan-Ist-Vergleich;
  Szenarien; eine Person, die die Planung führt; vereinbarte Kreditlinien.
- **Interaktiv:** Das 13-Wochen-Fenster wird um eine Woche verschoben; Woche 1 wird Ist, Woche
  14 kommt dazu.

### Lektion 04 · Die Güte der eigenen Vorschau

- **Block: Plan gegen Ist.** Je Monat aus der Plan- und der Ist-Reihe der Vorschau.
- **Block: Drei Ursachen.** Zeitpunkt, Betrag, nicht geplant.
- **Block: Die Treffgenauigkeit** [ergänzt]: mittlere absolute Abweichung in Prozent der
  Auszahlungen, über die Monate verfolgt.
- **Block: Die Lernschleife.** Aus jeder wiederkehrenden Abweichung wird eine geänderte Regel.
- **Interaktiv:** Jede Monatsabweichung einer der drei Ursachen zuordnen.

Quiz mit mindestens 20 Fragen und Praxiseinstieg mit Glossar wie in den Nachbarmodulen.

---

## 7 · Paket 6: Modul `liqui-fruehwarnung` · Liquiditätsrisiken früh erkennen

Arbeitet mit dem Verband. Drei Inhaltslektionen, Quiz, Praxiseinstieg.

### Lektion 01 · Kennzahlen vom Groben ins Detail

**Kernaussage:** Drei Leitkennzahlen zeigen, ob Handlungsbedarf besteht; die Kennzahlen darunter
zeigen, wo er entsteht.

**Block: Die drei Leitkennzahlen** [abgeleitet]

| Kennzahl | Formel | Verband |
|---|---|---|
| Liquiditätsreichweite | Finanzmittelbestand (wahlweise zuzüglich freier Kreditlinie) / durchschnittliche monatliche Auszahlungen | 1,16 Monate |
| Laufender Cashflow | rollierend über zwölf Monate | 220 T€ |
| Forderungslaufzeit | Forderungen / Leistungserlöse × 365 | 41,7 Tage |

**Block: Der Kennzahlenbaum.** Unter der Reichweite: Bestand, freie Linie, Auszahlungen (davon
Personal rund 301 T€ im Monat). Unter dem Cashflow: Ergebnis, Abschreibungen, Working Capital.
Unter der Forderungslaufzeit: je Kostenträger, Altersstruktur (bis 30, 31 bis 60, 61 bis 90,
über 90 Tage), Abrechnungsrückstand (erbrachte, noch nicht abgerechnete Leistungen in Tagen).
Daneben die operativen Treiber: Auslastung, Personalaufwandsquote, Erlöse je Belegungstag.

**Block: Wo die Liquiditätsgrade stehen.** Verweis auf `bilanz-kennzahlen.html`, Lektion 03.
Sie sind Stichtagsgrößen und damit Spätindikatoren.

**Interaktiv:** Kennzahlenbaum; ein Klick öffnet die nächste Ebene mit Wert und Formel.

**Pointe (Inhalt):** Eine Kennzahl oben zeigt, dass etwas nicht stimmt; erst die Ebene darunter
zeigt, in welcher Einrichtung und bei welchem Kostenträger.

### Lektion 02 · Ab wann es kritisch wird

**Kernaussage:** Eine Kennzahl warnt erst, wenn sie eine Schwelle hat. Frühindikatoren erreichen
ihre Schwelle Monate vor dem Bestand.

**Block: Früh- und Spätindikatoren** [ergänzt]

| früh | mittel | spät |
|---|---|---|
| Auslastung, Abrechnungsrückstand, Forderungslaufzeit, offene Kostenzusagen, Personalplanung gegen Refinanzierung | laufender Cashflow, Plan-Ist-Abweichung des Bestands | Bestand, Reichweite, Liquiditätsgrade, Inanspruchnahme der Kreditlinie |

**Block: Schwellen festlegen.** Schwellen sind eine Festlegung der Leitung Finanzen und
Controlling mit dem Vorstand. Beispiel einer Mindestliquidität: eine Monatsauszahlung für das
Personal, rund 301 T€ [Annahme]. Eine Obergrenze ergibt sich aus der zeitnahen
Mittelverwendung [prüfen].

**Block: Die Jahresreihe des Verbands** [Annahme: didaktische Reihe für das Folgejahr,
Größenordnung aus dem Kanon abgeleitet; Reichweite = Bestand / 412,5]

| Monat | Auslastung % | Forderungslaufzeit Tage | Bestand T€ | Reichweite Monate |
|---|---:|---:|---:|---:|
| Jan | 96,4 | 42 | 471 | 1,14 |
| Feb | 96,6 | 41 | 463 | 1,12 |
| Mär | 96,2 | 42 | 482 | 1,17 |
| Apr | 95,8 | 42 | 474 | 1,15 |
| Mai | 95,6 | 43 | 461 | 1,12 |
| Jun | 95,2 | 44 | 450 | 1,09 |
| Jul | 94,4 | 46 | 428 | 1,04 |
| Aug | 93,8 | 48 | 404 | 0,98 |
| Sep | 93,5 | 50 | 381 | 0,92 |
| Okt | 93,6 | 51 | 366 | 0,89 |
| Nov | 93,9 | 51 | 214 | 0,52 |
| Dez | 94,1 | 50 | 279 | 0,68 |

November: jährliche Sonderzahlung an das Personal [Annahme].

Voreingestellte Schwellen [Annahme]: Auslastung grün ab 95 %, rot unter 93 %;
Forderungslaufzeit grün bis 45 Tage, rot über 50 Tage; Reichweite grün ab 1,0, rot unter 0,75.
Damit werden Auslastung und Forderungslaufzeit im Juli gelb, die Reichweite im August gelb, die
Forderungslaufzeit im Oktober rot und die Reichweite im November rot; die Frühindikatoren melden
sich vier Monate vor dem roten Bestand.

**Block: Der rechtliche Rahmen als Systematik** [prüfen]: die Pflicht der Geschäftsleitung einer
juristischen Person, Entwicklungen fortlaufend zu überwachen, die ihren Fortbestand gefährden
können (§ 1 StaRUG); Zahlungsunfähigkeit und drohende Zahlungsunfähigkeit als Begriffe
(§§ 17, 18 InsO). Keine Fristen und keine Grenzwerte im Modul.

**Interaktiv:** Schieber für die Schwellen je Kennzahl; die Jahresreihe färbt sich ein. Ausgabe:
der erste gelbe Monat je Kennzahl und der Vorlauf der Frühindikatoren vor dem ersten roten
Monat der Reichweite.

**Pointe (Inhalt):** Wer erst auf den Kontostand schaut, sieht den Engpass im Monat, in dem er
eintritt; die Auslastung und die Forderungslaufzeit zeigen ihn vier Monate vorher.

### Lektion 03 · Das Frühwarnsystem

**Kernaussage:** Ein Frühwarnsystem besteht aus Auswertungen, Schwellen, Empfängern und
festgelegten Reaktionen. Fehlt eines davon, bleibt es ein Bericht.

**Block: Welche Auswertungen es braucht** [ergänzt; beantwortet zwei Fragen der Anfrage]

| Frage | Auswertung | Rhythmus | in der Regel |
|---|---|---|---|
| Wie viel Geld ist da? | Kontostand und Bestand | täglich | vorhanden |
| Reicht es in den nächsten Wochen? | 13-Wochen-Vorschau (`liquiditaet-tagesplan.html`) | wöchentlich | aufzubauen |
| Reicht es im Jahr? | 12-Monats-Vorschau (`liquiditaet-vorschau.html`) | monatlich | aufzubauen |
| Kommt das Geld herein? | offene Posten mit Altersstruktur je Kostenträger | wöchentlich | aufzubauen, setzt das saubere Verfahren voraus |
| Ist alles abgerechnet? | Abrechnungsstand je Einrichtung | monatlich | aufzubauen |
| Wie läuft das Geschäft? | Monats-GuV je Einrichtung, Belegungsbericht | monatlich | teilweise vorhanden |
| Woher kommt die Veränderung? | Cashflow-Rechnung | quartalsweise oder jährlich | vorhanden |
| Wie gut plant der Verband? | Plan-Ist-Vergleich des Bestands | monatlich | aufzubauen |

**Block: Das Cockpit auf einer Seite.** Die drei Leitkennzahlen mit Ampel, darunter die
Frühindikatoren, dazu ein Kommentar der Leitung Finanzen und Controlling.

**Block: Eskalationsstufen** [ergänzt]

| Stufe | Reaktion |
|---|---|
| grün | Monatsbericht an die Leitung Finanzen und Controlling |
| gelb | Ursache klären, Maßnahme vorschlagen, Bericht an den Vorstand, Vorschau wöchentlich |
| rot | Vorstand sofort informieren, Maßnahmenplan, Vorschau täglich bis wöchentlich, Bank einbinden |

**Block: Maßnahmen** [ergänzt]: Abrechnung beschleunigen und Kostenzusagen nachhalten;
Forderungen einziehen; Abschlagszahlungen bei Kostenträgern anfragen [prüfen]; Zuwendungen
abrufen; Investitionen verschieben; Zahlungsziele nutzen; eine Kreditlinie vereinbaren, solange
die Ampel grün ist.

**Block: Anschluss an das Risikomanagement.** Das Liquiditätsrisiko ist ein Risiko im Sinn von
`risikomanagement-prozess.html`; die Ampel folgt der Zonenlogik dort (Verweis, keine Kopie).

**Interaktiv:** Die Matrix als Tabelle mit einem Kästchen „bei uns vorhanden“ je Zeile; ohne
Speicher. Ausgabe als Text zum Kopieren: die Liste der aufzubauenden Auswertungen.

**Pointe (Inhalt):** Ein Frühwarnsystem ist fertig, wenn für jede Farbe feststeht, wer was tut.

### Quiz und Praxiseinstieg

Quiz mit mindestens 20 Fragen. Praxiseinstieg in sieben Schritten: Leitkennzahlen festlegen;
Schwellen mit dem Vorstand beschließen; Verantwortliche benennen; fehlende Auswertungen nach der
Matrix priorisieren; einen festen Termin für das Cockpit setzen; drei Monate Probebetrieb;
Schwellen nachjustieren. **Glossar:** Liquiditätsreichweite, Frühindikator, Spätindikator,
Schwelle, Mindestliquidität, Abrechnungsrückstand, Altersstruktur, Eskalationsstufe,
Krisenfrüherkennung.

---

## 8 · Paket 2: Ergänzungen in bestehenden Modulen

Für alle gilt: Die bestehenden Werkzeuge und das allgemeine Zahlenwerk bleiben unverändert. Neue
Übungseinträge fügen sich in die vorhandene Übung ein; die Zahl im Titel der Übung wächst mit
(„Vierzehn Vorfälle“ wird zu „Achtzehn Vorfälle“). Jede Ergänzung bringt mindestens zwei
Quizfragen für den Vorrat des Moduls mit. Die neuen Blöcke heißen so, dass die Sache im Titel
steht, etwa „Erfolg und Zahlung in der Sozialwirtschaft“.

### 8.1 `liquiditaet-begriff.html`

**Korrektur (sachlich, unabhängig von diesem Auftrag):** Im Block „Fünf Stellen, an denen Erfolg
und Zahlung auseinanderfallen“ steht unter „Zeitverschiebung“, der Ertrag entstehe mit der
Rechnungsstellung. Das widerspricht Lektion 01 desselben Moduls (Ertrag, wenn die Leistung
erbracht wird) und ist genau die Verwechslung, um die es beim Verband geht. Der Satz stellt
künftig auf die Leistung ab; die Rechnung löst die Fälligkeit aus, das Zahlungsziel läuft ab
Rechnung. In der Tabelle der Begriffspaare bekommt das Beispiel zur Einnahme den Zusatz, dass
die Forderung spätestens mit der Rechnung entsteht.

**Ergänzungen:**

- Übung „Vierzehn Vorfälle einordnen“, vier neue Vorfälle:
  - Das Pflegeheim erbringt im März Pflegeleistungen, die Rechnung geht im April hinaus
    (März: Erfolg ja, Zahlung nein).
  - Eine Investitionszuwendung für die Bädersanierung geht ein (Zahlung ja, Erfolg nein).
  - Der Sonderposten wird zum Jahresende anteilig aufgelöst (Erfolg ja, Zahlung nein).
  - Eine freie Spende geht auf dem Konto ein (Erfolg ja, Zahlung ja) [prüfen:
    zweckgebundene, noch nicht verwendete Spenden werden anders behandelt, das steht in der
    Begründung].
- Block „Erfolg und Zahlung in der Sozialwirtschaft“ nach den fünf Stellen: Investitionszuwendung
  und Sonderposten; nachschüssige Abrechnung mit Kostenträgern; Zuwendungen mit Abruf und
  Verwendungsnachweis; Sonderzahlungen an das Personal; zeitnahe Mittelverwendung, weshalb der
  Bestand auch zu hoch sein kann.
- Lektion 03, Block „Die Geldumschlagsdauer ohne Lager“: kaum Vorräte, die Forderungslaufzeit
  dominiert, das Personal wird vor dem Zahlungseingang bezahlt. Verband: rund 42 Tage, 486 T€
  gebunden.

### 8.2 `bilanz-aufbau.html`

- Block „Die Bilanz eines gemeinnützigen Trägers“ [prüfen]: der Sonderposten aus Zuwendungen
  zur Finanzierung des Anlagevermögens zwischen Eigenkapital und Rückstellungen; beim
  eingetragenen Verein Vereinskapital und Rücklagen, die Rücklagen nach Gemeinnützigkeitsrecht
  als Systematik ohne Grenzen; erhaltene, noch nicht verwendete Zuwendungen und zweckgebundene
  Spenden auf der Passivseite; § 266 HGB gilt für Kapitalgesellschaften, für
  Pflegeeinrichtungen gibt die Pflege-Buchführungsverordnung eine eigene Gliederung vor.
- Übung „Zehn Positionen einordnen“, drei neue: Sonderposten aus Investitionszuwendungen
  (passiv), Forderungen aus noch nicht abgerechneten Pflegeleistungen (aktiv), noch nicht
  verwendete Zuwendungen (passiv).

### 8.3 `bilanz-guv.html`

**Neue Lektion nach „Vom Umsatz zum Ergebnis“: Die Gewinn- und Verlustrechnung als
Steuerungsinstrument.** Sie arbeitet mit dem Verband und sagt das in der Kernaussage.
Beantwortet Thema 3 der Anfrage.

- **Kernaussage:** Die Pflichtgliederung zeigt den Verband als Ganzes, nach Aufwandsarten und
  für ein Jahr. Zum Steuern braucht es Ergebnisse je Einrichtung, je Monat und bezogen auf die
  Leistung.
- **Block: Was die Pflichtgliederung nicht zeigt.** Sie verdichtet über alle Einrichtungen,
  mischt betriebliches und neutrales Ergebnis, zeigt nur das Jahr und keine Leistungsmengen.
- **Block: Die Stufen einer Steuerungs-GuV** [ergänzt]: Erträge je Einrichtung, direkte
  Aufwendungen, Einrichtungsergebnis I, Umlage der Geschäftsstelle, Einrichtungsergebnis II,
  Summe als Ergebnis des Verbands; Spenden und neutrale Posten (periodenfremd, Anlagenabgänge)
  sichtbar getrennt. Zahlen aus Abschnitt 2.3.
- **Block: Sonderposten sichtbar machen.** Abschreibungen und Auflösung des Sonderpostens
  nebeneinander ausweisen; das Ergebnis belasten nur die eigenfinanzierten Abschreibungen.
- **Block: Monat, Plan, Vorjahr.** Die Steuerungs-GuV läuft monatlich mit Abgrenzungen
  (Verweis auf `leistung-periodengerecht.html`), kumuliert und gegen Plan und Vorjahr.
- **Block: Bezug auf die Leistung.** Erlöse und Personalaufwand je Belegungstag (138,89 € und
  94,45 €), Personalaufwandsquote (Pflegeheim 65,9 %, Verband 68,9 %), Auslastung.
- **Block: Das Prüfraster für die eigene GuV** [ergänzt; beantwortet „Welche
  Optimierungsmöglichkeiten bestehen in unserem Aufbau?“]. Acht Fragen:
  1. Gibt es ein Ergebnis je Einrichtung oder Sphäre?
  2. Sind direkte Aufwendungen und Umlagen getrennt?
  3. Sind Spenden und neutrale Posten vom Betriebsergebnis getrennt?
  4. Stehen Abschreibungen und Sonderpostenauflösung nebeneinander?
  5. Läuft die GuV monatlich mit Abgrenzungen?
  6. Stehen Plan und Vorjahr daneben?
  7. Gibt es Kennzahlen je Leistungseinheit?
  8. Passen oben wenige Zeilen auf eine Seite, mit der Möglichkeit, in die Tiefe zu gehen?
- **Interaktiv:** Umschalter zwischen Pflichtgliederung und Steuerungs-GuV auf denselben Zahlen
  des Verbands; in der Steuerungs-GuV klappen die Einrichtungen auf. Das Prüfraster als acht
  Schalter (ja, teilweise, nein) mit Ampel und einer Liste der offenen Punkte zum Kopieren.
- **Pointe (Inhalt):** Dieselben 20 T€ Jahresergebnis setzen sich aus einem Pflegeheim mit
  +137 T€ und einer Beratungsstelle mit −117 T€ zusammen; erst die Gliederung nach Einrichtungen
  zeigt das.

**Weitere Ergänzungen:**

- Block „Die Gewinn- und Verlustrechnung einer Pflegeeinrichtung“ [prüfen: Positionen gegen die
  Pflege-Buchführungsverordnung]: Erträge nach Leistungsarten (allgemeine Pflegeleistungen,
  Unterkunft und Verpflegung, Zusatzleistungen, gesondert berechenbare Investitionskosten,
  Zuweisungen und Zuschüsse zu Betriebskosten), Personalaufwand nach Dienstarten.
- Übung „Zwölf Positionen einordnen“, drei neue: Erträge aus der Auflösung von Sonderposten,
  Spenden, Zuwendungen der öffentlichen Hand zu laufenden Kosten.
- Der Praxiseinstieg bekommt einen Schritt „Das Prüfraster auf die eigene GuV anwenden“.

### 8.4 `bilanz-buchungssaetze.html`

Übung „Zwölf Vorfälle einordnen“, drei neue (Grundfall und erfolgswirksam ja oder nein):

- Eine Investitionszuwendung geht ein: Bank an Sonderposten (Aktiv-Passiv-Mehrung, erfolgsneutral).
- Der Sonderposten wird anteilig aufgelöst: Sonderposten an Erträge aus der Auflösung
  (erfolgswirksam).
- Die März-Leistung des Pflegeheims wird abgegrenzt: Forderungen aus noch nicht abgerechneten
  Leistungen an Erlöse (Aktiv-Passiv-Mehrung, erfolgswirksam).

### 8.5 `liquiditaet-bwa.html`

- Im Block „Die fünf Stellen“, Stelle „Buchungsstand und Periodenzuordnung“: dieselbe Wirkung
  auf der Erlösseite, wenn Leistungen erst mit der Rechnung gebucht werden, mit Verweis auf
  `leistung-periodengerecht.html`.
- Übung „Vierzehn Aussagen einordnen“: eine neue Aussage dazu.

### 8.6 `liquiditaet-vorschau.html`

- Lektion 02, Block „Regeln in der Sozialwirtschaft“ [Annahme: Beispiele, keine Rechtsnorm]:
  Pflegekasse und Bewohnerinnen und Bewohner als „Fester Tag“; Sozialhilfeträger als
  „Zahlungsverhalten“ über mehrere Monate; Zuwendungen im „Jahresrhythmus“ bzw. als Abruf in
  Tranchen; Personal als „Fester Tag“ am Monatsende; die jährliche Sonderzahlung im
  „Jahresrhythmus“; Investitionen und Investitionszuwendungen im unteren Teil, weil sie in
  keiner BWA stehen.
- Lektion 03, Block „Wenn Leistungen steuerfrei sind“ [prüfen durch den steuerlichen Berater]:
  Pflege- und Betreuungsleistungen sind überwiegend umsatzsteuerfrei; dann fällt kaum
  Umsatzsteuer an, der Vorsteuerabzug entfällt aber ebenfalls, weshalb Sachkosten brutto geplant
  werden; steuerpflichtig kann ein wirtschaftlicher Geschäftsbetrieb sein. Keine Normen, keine
  Sätze.
- Lektion 04, **vierter Regler „Personalkosten steigen vor der Refinanzierung“**: Steigerung in
  Prozent (0 bis 8) ab einem wählbaren Monat, Verzögerung der Refinanzierung in Monaten (0 bis
  12). Die Personalauszahlungen steigen ab dem Monat, der Umsatz im selben Verhältnis erst nach
  der Verzögerung. Der Befund darunter nennt den Tiefpunkt wie bei den drei vorhandenen Reglern.
  Beantwortet „Wie wirken sich operative Schwankungen auf unsere Liquidität aus?“ zusammen mit
  den drei vorhandenen Reglern.

---

## 9 · Standortbestimmung

Je Modul vier Fragen in `FRAGEN` in `plattform/assessment.html`, dazu das Modul in `FELDER`
dort und in `FELDMODUL` in `plattform/index.html`. Beide Listen führen die Module unter ihrem
Dateinamen ohne Endung, nicht unter der Kennung aus `TOPICS`.

| Modul in `FELDER` und `FELDMODUL` | Feld |
|---|---|
| `cashflow` | `zahlung` |
| `leistung-periodengerecht` | `erfolg` |
| `liquiditaet-tagesplan` (sobald gefüllt) | `zahlung` |
| `liquiditaet-fruehwarnung` | `zahlung` |

Den `was`-Text der Felder `zahlung` und `erfolg` um die neuen Inhalte ergänzen.

---

## 10 · Für Maik: Auswahl für die Schulung

Nicht Teil des Baus. Die Spalte „live“ nennt die Lektionen, die in der Schulung durchgegangen
werden; alles Übrige bleibt im Lernpfad für die Nacharbeit.

| # | Modul | Thema der Anfrage | live | Min. |
|---|---|---|---|---:|
| 01 | `liqui-begriff` | Grundlage | 01 bis 03 | 45 |
| 02 | `bilanz-guv` | 3 | Vom Umsatz zum Ergebnis, Steuerungsinstrument, Praxiseinstieg | 40 |
| 03 | `leistung-periodengerecht` | 2 | 01 bis 03, Praxiseinstieg | 55 |
| 04 | `cashflow` | 1 | 01 bis 04 | 60 |
| 05 | `liqui-vorschau` | 1 | 02, 04 | 30 |
| 06 | `liqui-tagesplan` | 1 | 03, 04 | 30 |
| 07 | `liqui-fruehwarnung` | 1 | 01 bis 03, Praxiseinstieg | 55 |
| | Quizze als Kontrollpunkte, fünfmal | | | 25 |
| | Puffer | | | 20 |
| | **netto** | | | **360** |

## 11 · Abdeckung der Anfrage

| Frage | Modul und Lektion |
|---|---|
| Cashflow-Rechnung lesen und interpretieren | `cashflow` 01, 02 |
| Brücke zwischen Cashflow-Kennzahlen und operativem Geschäft | `cashflow` 03 |
| Rückschlüsse aus den Cashflow-Daten | `cashflow` 02 bis 04 |
| Wirkung operativer Schwankungen | `cashflow` 03, `liqui-vorschau` 04 |
| Ab wann kritisch, welche Kennzahlen | `liqui-fruehwarnung` 01, 02 |
| Bestehende und zusätzliche Auswertungen | `liqui-fruehwarnung` 03 |
| Frühwarnsystem | `liqui-fruehwarnung` 02, 03 |
| Anforderungen an eine belastbare Liquiditätsplanung | `liqui-tagesplan` 03, 04 |
| Sauberer Prozess für nicht abgerechnete Leistungen | `leistung-periodengerecht` 02 |
| Monatliche Umsetzung | `leistung-periodengerecht` 01, 02 |
| Informationen der Einrichtungen | `leistung-periodengerecht` 03 |
| Handlungsanweisungen für die Finanzbuchhaltung | `leistung-periodengerecht`, Praxiseinstieg |
| GuV als Steuerungsinstrument | `bilanz-guv`, neue Lektion |
| GuV lesen und interpretieren | `bilanz-guv`, Vom Umsatz zum Ergebnis und neue Lektion |
| Optimierung des eigenen GuV-Aufbaus | `bilanz-guv`, Prüfraster und Praxiseinstieg |

## 12 · Vor dem Bau zu entscheiden

1. **K1:** Erlöse Pflege 4.088 T€ und Sonderpostenauflösung 92 T€ als eigene Zeile?
2. **K2:** Zinsen im laufenden Bereich wie im Kanon (220 T€) oder nach DRS 21 in der
   Finanzierung (282 T€)?
3. **Abschnitt 2.3:** Die Aufteilung nach Einrichtungen und die Jahresreihe in 7 sind von mir
   gesetzt. Passt die Größenordnung (Erlöse je Belegungstag 138,89 €, Auslastung 96 %)?
4. **Alle [prüfen]-Stellen** gehen vor der Schulung an jemanden, der Gemeinnützigkeitsrecht und
   Pflegebuchführung sicher kennt.
