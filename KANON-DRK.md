# Blutspendedienst — Kanon des Berichtswesens

Dieser Kanon gilt für die Module in `drk-blutspende/`.

**Sämtliche Zahlen, Standorte, Pfade und Systemnamen dieses Kanons sind erfunden.** Sie bilden
den Aufbau, die Rechenwege und die Formatierungsregeln eines Berichtswesens ab, wie es ein
Blutspendedienst führt, ohne Betriebsdaten eines Auftraggebers zu zeigen. Die Vorlage, aus der
die Struktur stammt, liegt außerhalb dieses Repositorys und wird hier nicht wiedergegeben.
Wer eine Zahl ändern will, ändert sie hier und zieht sie im Modul nach, damit beide Stellen
zusammenpassen.

`PROJECT-CANON.md` (Sofia) und `KANON-VERBAND.md` (der Verband) gelten hier nicht. Die drei
Kanons werden nie gemischt.

## 1. Die Organisation

Der Blutspendedienst gewinnt Blutspenden, stellt daraus Präparate her und setzt sie bei Kunden
ab. Das Berichtswesen läuft in **Microsoft Power BI Desktop**; die Integration in den Power BI
Service ist für weitere Entwicklungen vorgesehen.

- **Keine Personennamen und keine Eigennamen.** Genannt werden Rollen (Controlling,
  Berichtsversender, Mitarbeitende), nicht Personen, sowie Funktionen, nicht Orte.
- **Vier Standorte**, die in den Berichten als Zentren erscheinen: **Zentrum Nord, Zentrum Süd,
  Zentrum Ost, Zentrum West**. Im Monatsdashboard stehen sie abgekürzt als N, S, O, W.
- **Zwei Server.** Der **Produktivserver** führt die ausgelieferten Berichte, der **Testserver**
  das Entwicklungs- und Testsystem. Die Rohdaten stammen aus dem ERP-System und stehen täglich
  ab etwa 12:30 Uhr bereit.

## 2. Die drei Dashboards

| Bericht | Takt | Datenstand | Seiten |
|---|---|---|---|
| Tagesdashboard | täglich, gegen 13:00 Uhr | abgeschlossener Vortag | 2, davon eine ausgeblendet |
| Wochendashboard | wöchentlich, montags gegen 13:00 Uhr | abgeschlossene Vorwoche | 2 |
| Monatsdashboard | monatlich, zu Monatsbeginn | Vormonat | 2 |

Jeder Bericht geht als **PDF per E-Mail** an ausgewählte Mitarbeitende. Die Verknüpfungen liegen
unter `L:\Berichtswesen\Dashboards\Produktiv`, die manuell gepflegten Daten unter
`L:\Berichtswesen\Daten Dashboards`.

## 3. Begriffe

- **EK** — Erythrozyten-Konzentrat, in Stück gezählt. Die Hauptgröße aller drei Dashboards.
- **Erschienene Spender** — die tatsächlich zu einem Spendetermin erschienenen Spender.
- **Geplante Spender** — die Anzahl, die erscheinen müsste, um die geplanten EK-Bedarfe zu decken.
- **Plan SO** — der Planwert der Spende-Organisation für einen vollen Monat.
- **Lagerreichweite** — die Zeit in Tagen, für die der Lagerbestand veräußerbarer EKs bei
  geplantem Abruf ausreicht.
- **Kürzungsrate Bestellungen** — die Abweichung zwischen bestellter und gelieferter Menge in
  Prozent.
- **Bestellmenge Kürzung** — die Abweichung zwischen tatsächlich abgesetzter und bestellter Menge.
- **Bundesoberbehörde** — die für Blutprodukte zuständige Behörde, an die die Bestände gemeldet
  werden.
- Weitere Produktgruppen des Monatsdashboards: **PTK** (Pool-Thrombozytenkonzentrate), **ATK**
  (Apherese-Thrombozytenkonzentrate), **Lyo** (LyoPlas), **Q-GFP** (gefrorenes Frischplasma),
  **Frakt. plasma**.

## 4. Farben und Schriften des Berichtsstandards

| Art | Hexadezimalwert |
|---|---|
| Ist | `#000000` |
| Plan | `#548235` |
| Plan AR / Plan SO | `#C5E0B4` |
| Fortgeschrittene Planung | `#118DFF` |
| Vorjahreswerte | `#666666` |
| Positiv | `#00DE00` |
| Neutral | `#FFFF05` |
| Negativ | `#FF3300` |
| Standard-Blau | `#4472C4` |
| Grenzlinie | `#ECB10E` |

Die Hintergründe der Kennzahlenkarten und die Bereiche der Tacho-Visuals nehmen die blasseren
Töne **`#84FD84`** (positiv), **`#FEFE76`** (neutral) und **`#FF9377`** (negativ), damit beide
Darstellungsformen übereinstimmen.

| | Schriftart | Schriftgröße |
|---|---|---|
| Berichtsüberschriften | Arial, bold | 24 |
| Titel (Kennzahlen) | Arial | 14 |
| Kennzahlen | Arial, bold | 14 |
| Titel (Diagramme) | Arial, bold | 12 |
| Achsen-, Datenbeschriftungen, Legende, Tabellen | Arial | 9 |
| Gesamtwerte (Tabellen/Matrizen) | Arial, bold | 9 |
| Text | Arial | 11 |

**Die Schriftgrößen gelten für Power BI, nicht für die Module.** Dort gilt die Untergrenze von
15px aus `CLAUDE.md`, weil eine mit 9pt gesetzte Achsenbeschriftung am Beamer unlesbar ist.

## 5. Feste Zahlen — Tagesdashboard, Stand 11.02.2026 **[gesetzt]**

Berichtsstand 11.02.2026, ein Mittwoch, Kalenderwoche 07 (09.02. bis 15.02.2026). Grundlage von
`drk-blutspende/tagesdashboard.html`; wer dort eine Zahl ändert, ändert sie auch hier.

- **Erschienene Spender Prognose 2026, Abw. zum Plan aktueller Monat: −3 %** (Hintergrund rot)
- **Absatz EK Prognose 2026, Abw. zum Plan aktueller Monat: 0 %** (Hintergrund grün)

Die zweite Karte steht bei null Prozent auf Grün, da die bedingte Formatierung erst unterhalb von
null auf Rot umschlägt. Dieser Fall ist Absicht, weil er im Modul abgefragt wird.

### Erschienene Spender Mo-So

| | Mo 09.02. | Di 10.02. | Mi 11.02. | Do 12.02. | Fr 13.02. | Sa 14.02. | So 15.02. |
|---|---|---|---|---|---|---|---|
| Ist | 2.868 | 3.104 | | | | | |
| Plan | 2.950 | 2.980 | 3.210 | 3.060 | 2.740 | 210 | 580 |

### Absatz EK

| | Mo 09.02. | Di 10.02. | Mi 11.02. | Do 12.02. | Fr 13.02. | Sa 14.02. | So 15.02. |
|---|---|---|---|---|---|---|---|
| Ist | 1.902 | 2.140 | | | | | |
| Plan | 2.280 | 2.280 | 2.280 | 2.280 | 2.280 | 0 | 0 |

**Zwei Ist-Tage sind Absicht.** Der Bericht zeigt den abgeschlossenen Vortag, weshalb an einem
Mittwoch Montag und Dienstag einen Ist-Wert haben. Daran lässt sich zeigen, dass mit jedem
Morgen eine schwarze Säule hinzukommt.

### Lagerreichweite EK in Tagen

A + 11,6 · A − 5,2 · AB+ 19,4 · AB− 14,7 · B + 8,1 · B − 2,6 · 0 + 6,5 · 0 − 4,3 ·
**Gesamt 7,8**. Grenzlinien bei **3 und 9 Tagen**.

Fünf der neun Säulen liegen im Zielbereich (A −, B +, 0 +, 0 − und der Gesamtwert). **B − liegt
mit 2,6 Tagen unter der Untergrenze**, AB+, AB− und A + liegen über der Obergrenze. Beide Fälle
kommen vor, damit das Modul beide Richtungen abfragen kann.

### Kürzungsrate Bestellung EK Vortag (10.02.2026)

| | A + | A − | AB+ | AB− | B + | B − | 0 + | 0 − | Gesamt |
|---|---|---|---|---|---|---|---|---|---|
| Bestellmenge | 812 | 143 | 71 | 18 | 154 | 37 | 738 | 219 | **2.192** |
| Bestellmenge Kürzung | 0 | −4 | 0 | 0 | −2 | −3 | −26 | −5 | **−40** |
| Kürzungsrate | 0 % | −3 % | 0 % | 0 % | −1 % | −8 % | −4 % | −2 % | **−2 %** |

**Die Rate ist gerechnet und nicht erhoben.** Sie ergibt sich aus Kürzung geteilt durch
Bestellmenge und wird ohne Nachkommastelle gezeigt, weshalb bei B + eine Rate von −1 % steht,
obwohl die Rechnung −1,3 % ergibt, und bei A − eine Rate von −3 %, obwohl −2,8 % herauskommt.
Der Gesamtwert von −2 % entsteht aus −40 geteilt durch 2.192, also aus −1,8 %. Die Prozentwerte
lassen sich deshalb nicht addieren.

### Bestände, Seite 2, Stand 14.04.2026

A + 8.421 · A − 936 · AB+ 1.074 · AB− 265 · B + 1.583 · B − 212 · 0 + 6.907 · 0 − 1.148 ·
**Gesamt 20.546**.

Der Stand weicht von dem der ersten Seite ab, da diese Seite unabhängig vom täglichen Versand
abgerufen wird. Eine Rechnung, die Bestände und Reichweiten beider Seiten verbindet, ist deshalb
ausgeschlossen.

## 6. Feste Zahlen — Wochendashboard, KW 08/2026

Noch nicht in ein Modul übernommen. Die Werte stehen hier, damit sie beim Bau feststehen und
nicht beim Schreiben erfunden werden.

- Liquiditätslage aktuell **38,6 Mio. €**, Hochrechnung **33,2 Mio. €**, beide grün. Die Schwelle
  für die bedingte Formatierung liegt bei **16.450.000 €**.
- Kürzungsquote bestellte EK **−7 %** (rot)
- Prognose Bestand EK Reichweite am Ende der KW: KW 09 **6,8** · KW 10 **7,3** · KW 13 **8,4** ·
  KW 17 **10,2**
- Erschienene Spender letzte 7 Tage: Ist **14.780**, Plan **16.920** (Tacho von 13.000 bis 20.000)
- Verteilung nach Zentren, Ist gegen Plan: Zentrum Nord **4,3 / 5,0 Tsd.** · Zentrum Süd
  **3,8 / 4,6 Tsd.** · Zentrum Ost **3,6 / 4,2 Tsd.** · Zentrum West **3,1 / 3,1 Tsd.**
- Seite 2: Erschienene Spender abgelaufene KW **3.106**, Absatz EK abgelaufene KW **2.418**
- Notizentext: Absatz EK arbeitstäglich **2.884**, rund 4 % über Plan (**2.770**); erschienene
  Spender arbeitstäglich **2.956**, rund 13 % unter der Planzahl SO (**3.398**); EK-Reichweite am
  Ende der KW voraussichtlich rund **6,8 Tage**

Die vier Zentren summieren sich auf 14,78 Tsd. im Ist und 16,92 Tsd. im Plan, also auf die
beiden Werte der Tachonadel, sodass sich die Visualisierungen gegeneinander prüfen lassen.

Die Säulen der Reichweiteprognose sind bedingt formatiert: 4 bis 7 Tage `#00DE00`, 3,5 bis 3,9
und 7,1 bis 8 `#F0F08C`, 3,0 bis 3,4 und 8,1 bis 9 `#FFFF05`, 2,0 bis 2,9 und 9,1 bis unter 11
`#FFC000`, unter 2,0 und ab 11 `#FF3300`.

## 7. Feste Zahlen — Monatsdashboard, Januar 2026

Noch nicht in ein Modul übernommen.

- Liquiditätslage aktuell **29,4 Mio.** (grün), Hochrechnung **27,8 Mio.** (grün)
- Fremdzukauf EK in Stück **0** (grau), Verwurf/Absatz EK **4 %** (rot)
- Abweichung vom Stellenplan (VZÄ) **−19** (grün), Personalkostenquote **48 %** (gelb)
- Krankenquote bis 6 Wochen **6 %** (rot), über 6 Wochen **3 %** (rot)
- Erschienene Spender **66.480** gegen Plan **74.300** (Tacho von 64.000 bis 84.000),
  Planabweichung **−11 %** bzw. **−7.820**
- Planabw. Spender nach Standort: N **−8 %** · O **−13 %** · S **−12 %** · W **−9 %**
- Planabw. Absatz nach Produktgruppe: EK **−9 %** · PTK **−6 %** · ATK **−14 %** · Lyo **+26 %** ·
  Q-GFP **+11 %** · Frakt. plasma **−15 %**
- Ergebnisentwicklung 2026 in TEUR, kumuliert. Ist Januar **1.384**.
  Plan: 1.096 · 1.248 · 1.427 · 1.790 · 1.994 · 2.231 · 2.518 · 2.786 · 2.841 · 3.205 · 3.302 ·
  2.748. Fortgeschrittene Planung: 1.384 · 1.536 · 1.715 · 2.078 · 2.282 · 2.519 · 2.806 ·
  3.074 · 3.129 · 3.493 · 3.590 · 3.036.

Die fortgeschrittene Planung liegt durchgehend 288 TEUR über dem Plan, da sie den Januarvorsprung
des Ist fortschreibt. Der Dezemberwert fällt in beiden Reihen gegenüber dem November ab, weil die
kumulierte Reihe den Jahresabschlussbuchungen folgt.

Schwellen der bedingten Formatierung: Liquidität **16.450.000 €**, Verwurf/Absatz **12.000**,
Personalkostenquote grün bis 44 %, gelb 44 bis 49 %, rot ab 49 %; Krankenquote bis 6 Wochen grün
bis 4 %, gelb 4 bis 6 %, rot ab 6 %; Krankenquote über 6 Wochen grün bis 2 %, gelb 2 bis 3 %, rot
ab 3 %.

## 8. Was dieser Kanon nicht hergibt

- **Keine Zeitreihe des Tagesdashboards über mehrere Berichtsstände.** Festgelegt ist ein
  einziger Stand. Eine Übung, die mehrere Tage durchspielt, braucht Zahlen, die hier nicht
  stehen, weshalb sie erst nach einer Erweiterung dieses Kanons entstehen kann.
- **Keine Zahlen hinter den Liniendiagrammen** der Spender- und Absatzentwicklung nach
  Kalenderwochen. Festgelegt sind allein die Größenordnung und der Verlauf.
- **Keine Angaben zu Kunden, Preisen und Kosten.** Das Berichtswesen deckt Spender, Absatz,
  Bestand, Liquidität und Personal ab, nicht die Kalkulation.
- **Kein Berichts- und kein Berechtigungskonzept.** Beide werden in den Modulen erwähnt und sind
  hier nicht ausformuliert.
