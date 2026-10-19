# DRK-Blutspendedienst West — Kanon des Berichtswesens

Dieser Kanon gilt für die Module in `drk-blutspende/`. Seine Quelle ist die
**Anwenderdokumentation für das Reporting des DRK Blutspendedienst West**, erstellt von der
Controlling Innovations Center GmbH, Dortmund, Stand 03.06.2024, Version 1.0. Alles hier steht
dort; erfunden ist nichts. Wer eine Zahl ändern will, ändert sie in der Vorlage und zieht sie
hier nach.

`PROJECT-CANON.md` (Sofia) und `KANON-VERBAND.md` (der Verband) gelten hier nicht. Die drei
Kanons werden nie gemischt.

## 1. Die Organisation

Der DRK-Blutspendedienst West gewinnt Blutspenden, stellt daraus Präparate her und setzt sie bei
Kunden ab. Das Berichtswesen läuft in **Microsoft Power BI Desktop**; die Integration in den
Power BI Service ist für weitere Entwicklungen vorgesehen.

- **Keine Personennamen.** Die Dokumentation nennt Rollen (Controlling, Berichtsversender,
  Mitarbeitende), nicht Personen. Die Module halten es genauso.
- **Vier Standorte**, die in den Berichten als Zentren erscheinen: **Münster, Breitscheid,
  Bad Kreuznach, Hagen**. Im Monatsdashboard stehen sie abgekürzt als MS, BS, KH, HA.
- **Zwei Server.** `DRKDW01` ist die produktive Umgebung, `DRKDW02` das Entwicklungs- und
  Testsystem. Die Rohdaten stammen aus SAP und stehen täglich ab etwa 12:00 Uhr bereit.

## 2. Die drei Dashboards

| Bericht | Takt | Datenstand | Seiten |
|---|---|---|---|
| Tagesdashboard | täglich, gegen 12:00 Uhr | abgeschlossener Vortag | 2, davon eine ausgeblendet |
| Wochendashboard | wöchentlich, montags gegen 12:00 Uhr | abgeschlossene Vorwoche | 2 |
| Monatsdashboard | monatlich, zu Monatsbeginn | Vormonat | 2 |

Jeder Bericht geht als **PDF per E-Mail** an ausgewählte Mitarbeitende. Die Verknüpfungen liegen
unter `C:\Freigabe\Geteilter Ordner (PROD und DEV)\Dashboards\Produktiv`, die manuell gepflegten
Daten unter `\\DRKDW01\Freigabe\Daten Dashboards`.

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
- **PEI** — das Paul-Ehrlich-Institut, an das die Bestände gemeldet werden.
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

## 5. Feste Zahlen — Tagesdashboard, Stand 12.03.2024 **[gesetzt]**

Berichtsstand 12.03.2024, Kalenderwoche 11 (11.03. bis 17.03.2024). Grundlage von
`drk-blutspende/tagesdashboard.html`.

- **Erschienene Spender Prognose 2024, Abw. zum Plan aktueller Monat: 0 %** (Hintergrund grün)
- **Absatz EK Prognose 2024, Abw. zum Plan aktueller Monat: −6 %** (Hintergrund rot)

### Erschienene Spender Mo-So

| | 11.03. | 12.03. | 13.03. | 14.03. | 15.03. | 16.03. | 17.03. |
|---|---|---|---|---|---|---|---|
| Ist | 3.242 | | | | | | |
| Plan | 3.282 | 3.477 | 3.350 | 2.954 | 3.150 | 166 | 647 |

### Absatz EK

| | 11.03. | 12.03. | 13.03. | 14.03. | 15.03. | 16.03. | 17.03. |
|---|---|---|---|---|---|---|---|
| Ist | 2.095 | | | | | | |
| Plan | 2.639 | 2.639 | 2.639 | 2.639 | 2.639 | 0 | 0 |

### Lagerreichweite EK in Tagen

A + 9,1 · A − 4,8 · AB+ 22,1 · AB− 16,8 · B + 10,4 · B − 5,3 · 0 + 7,2 · 0 − 6,2 ·
**Gesamt 8,2**. Grenzlinien bei **2 und 8 Tagen**.

### Kürzungsrate Bestellung EK Vortag (11.03.2024)

| | A + | A − | AB+ | AB− | B + | B − | 0 + | 0 − | Gesamt |
|---|---|---|---|---|---|---|---|---|---|
| Bestellmenge | 735 | 169 | 63 | 13 | 167 | 42 | 697 | 241 | **2.127** |
| Bestellmenge Kürzung | 0 | −3 | 0 | 0 | 0 | −1 | −20 | −8 | **−32** |
| Kürzungsrate | 0 % | −2 % | 0 % | 0 % | 0 % | −2 % | −3 % | −3 % | **−2 %** |

**Die Rate ist gerechnet und nicht erhoben.** Sie ergibt sich aus Kürzung geteilt durch
Bestellmenge und wird ohne Nachkommastelle gezeigt, weshalb bei A − eine Rate von −2 % steht,
obwohl die Rechnung −1,8 % ergibt. Die Prozentwerte lassen sich deshalb nicht addieren.

### Bestände, Seite 2, Stand 13.05.2024

A + 9.167 · A − 809 · AB+ 1.185 · AB− 292 · B + 1.715 · B − 147 · 0 + 7.448 · 0 − 1.019 ·
**Gesamt 21.782**.

## 6. Feste Zahlen — Wochendashboard, KW 20/2024

Noch nicht in ein Modul übernommen. Die Werte stehen hier, damit sie beim Bau nicht erneut aus
der Vorlage gelesen werden müssen.

- Liquiditätslage aktuell **41,4 Mio. €**, Hochrechnung **36,0 Mio. €**, beide grün. Die Schwelle
  für die bedingte Formatierung liegt bei **17.890.000 €**.
- Kürzungsquote bestellte EK **−8 %** (rot)
- Prognose Bestand EK Reichweite am Ende der KW: KW 21 **7,4** · KW 22 **6,9** · KW 25 **7,9** ·
  KW 29 **9,6**
- Erschienene Spender letzte 7 Tage: Ist **15.250**, Plan **17.645** (Tacho von 14.000 bis 21.000)
- Verteilung nach Zentren, Ist gegen Plan: Bad Kreuznach **4,1 / 4,9 Tsd.** · Münster
  **4,0 / 4,8 Tsd.** · Breitscheid **4,0 / 4,5 Tsd.** · Hagen **3,1 / 3,4 Tsd.**
- Seite 2: Erschienene Spender abgelaufene KW **3.258**, Absatz EK abgelaufene KW **2.541**
- Notizentext der Vorlage: Absatz EK arbeitstäglich **3.012**, rund 5 % über Plan (**2.872**);
  erschienene Spender arbeitstäglich **3.050**, rund 14 % unter der Planzahl SO (**3.529**);
  EK-Reichweite am Ende der KW voraussichtlich rund **7,4 Tage**

Die Säulen der Reichweiteprognose sind bedingt formatiert: 3 bis 5 Tage `#00DE00`, 2,5 bis 2,9
und 5,1 bis 7 `#F0F08C`, 2 bis 2,4 und 7,1 bis 8 `#FFFF05`, 1,5 bis 1,9 und 8,1 bis unter 10
`#FFC000`, unter 1,5 und ab 10 `#FF3300`.

## 7. Feste Zahlen — Monatsdashboard, Januar 2024

Noch nicht in ein Modul übernommen.

- Liquiditätslage aktuell **31,3 Mio.** (grün), Hochrechnung **30,0 Mio.** (grün)
- Fremdzukauf EK in Stück **0** (grau), Verwurf/Absatz EK **3 %** (rot)
- Abweichung vom Stellenplan (VZÄ) **−23** (grün), Personalkostenquote **46 %** (gelb)
- Krankenquote bis 6 Wochen **8 %** (rot), über 6 Wochen **2 %** (gelb)
- Erschienene Spender **70.221** gegen Plan **77.988** (Tacho von 68.000 bis 88.000),
  Planabweichung **−10 %** bzw. **−7.767**
- Planabw. Spender nach Standort: BS **−6 %** · HA **−11 %** · KH **−14 %** · MS **−11 %**
- Planabw. Absatz nach Produktgruppe: EK **−8 %** · PTK **−8 %** · ATK **−16 %** · Lyo **+30 %** ·
  Q-GFP **+8 %** · Frakt. plasma **−12 %**
- Ergebnisentwicklung 2024 in TEUR, kumuliert. Ist Januar **1.512**.
  Plan: 1.173 · 1.315 · 1.502 · 1.876 · 2.083 · 2.324 · 2.632 · 2.908 · 2.963 · 3.340 · 3.438 ·
  2.871. Fortgeschrittene Planung: 1.512 · 1.654 · 1.841 · 2.215 · 2.422 · 2.663 · 2.971 · 3.247 ·
  3.302 · 3.679 · 3.777 · 3.211.

Schwellen der bedingten Formatierung: Liquidität **17.890.000 €**, Verwurf/Absatz **10.000**,
Personalkostenquote grün bis 45 %, gelb 45 bis 50 %, rot ab 50 %; Krankenquote bis 6 Wochen grün
bis 4 %, gelb 4 bis 6 %, rot ab 6 %; Krankenquote über 6 Wochen grün bis 2 %, gelb 2 bis 3 %, rot
ab 3 %.

## 8. Was die Vorlage nicht hergibt

- **Keine Zeitreihe des Tagesdashboards.** Die Vorlage zeigt einen einzigen Berichtsstand. Eine
  Übung, die mehrere Tage durchspielt, braucht Zahlen, die es nicht gibt.
- **Keine Zahlen hinter den Liniendiagrammen** der Spender- und Absatzentwicklung nach
  Kalenderwochen. Ablesbar sind allein die Größenordnung und der Verlauf.
- **Keine Angaben zu Kunden, Preisen und Kosten.** Das Berichtswesen deckt Spender, Absatz,
  Bestand, Liquidität und Personal ab, nicht die Kalkulation.
- **Kein Berichts- und kein Berechtigungskonzept.** Beide werden in der Vorlage erwähnt und liegen
  nicht bei.
