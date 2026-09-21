# Projektanweisungen

Interaktive Lehrmodule für Vorlesungen zu Business Intelligence und Controlling.
Ein durchgehender Fall — ein Wiener Kaffeehausbetrieb — verbindet alle Themen.

## Die drei Begriffe

Es gibt genau drei Ebenen. Sie heißen überall gleich — im Gespräch, in den Commits, in den
Texten der Plattform:

- **Modul** — eine Kachel auf der Startseite, eine HTML-Datei, ein Thema.
- **Lektion** — ein Reiter innerhalb eines Moduls. Die kleinste Einheit, die jemand am Stück
  durcharbeitet.
- **Lernpfad** — eine Reihenfolge von Modulen, die zusammen Sinn ergibt. Sie steht in
  `index.html` in `const PATHS`.

„Lerneinheit“, „Kapitel“, „Kurs“ sind keine Begriffe dieser Plattform. Wo sie noch stehen, sind
sie Reste. **Im Code** heißen die Dinge weiter `role="tab"`, `.panel`, `TOPICS` — das ist
Technik und wird nicht umbenannt, nur der sichtbare und der gesprochene Text folgt den drei
Begriffen oben.

## Was ein Modul ausmacht

**Jedes Modul hat mindestens drei Lektionen** und endet immer mit denselben zweien:

1. **Mindestens eine Inhaltslektion.** Wie viele es sind, entscheidet der Stoff. Eine Obergrenze
   gibt es nicht.
2. **Das Quiz.** Ein Vorrat von mindestens 20 Fragen, aus dem beim Laden **fünf zufällig**
   gezogen werden. Beim Neuladen kommen andere; genau das ist der Zweck.
3. **Der Praxiseinstieg.** Was jemand als Erstes tut, der das Gelernte im eigenen Unternehmen
   einführen will. Der Form nach eine Checkliste, dem Ton nach keine — konkrete erste Schritte,
   keine Kästchen zum Abhaken um des Abhakens willen. Hierhin gehört auch das Glossar, wenn das
   Modul eines hat: Es ist Nachschlagewerk für die Anwendung, nicht Prüfstoff.

**[gesetzt] Ein Leitbild-Modul führt weder Quiz noch Praxiseinstieg.** Ein Leitbild beschreibt
eine Haltung, die sich nicht mit richtig und falsch abfragen lässt. Der Praxiseinstieg entfällt
ebenfalls, weil das Leitbild selbst schon die Zusage ist, die jemand einlösen muss. Eine Liste
erster Schritte daneben wiederholt allein, was in den Sätzen steht. An ihrer Stelle steht die letzte Lektion als Plakat, auf dem das vollständige Leitbild zu
lesen ist. `plattform/controlling-leitbild.html` ist der erste Fall. Die Ausnahme gilt allein für
Leitbilder, jedes andere Modul bekommt sein Quiz und seinen Praxiseinstieg.

**Die Reihenfolge steht fest:** Inhalt, dann Quiz, dann Praxiseinstieg. Das Quiz prüft, was
gerade gelesen wurde, der Praxiseinstieg schaut nach vorn. Umgedreht ergäbe es keinen Sinn.

**Eine Lektion ist in 15 bis 20 Minuten durchzuarbeiten** — durchzuarbeiten, nicht zu verstehen.
Verstehen braucht länger und lässt sich nicht planen. Wird eine Lektion länger, wird sie geteilt,
nicht gestaucht. Das ist die einzige Größenregel, die es gibt.

**Warum die zwei Pflichtlektionen:** Die Module richten sich an Praktiker, nicht an Theoretiker.
Auch wo Theorie unumgänglich ist, muss am Ende etwas stehen, das jemand am Montag anfassen kann.

**`plattform/content-werkstatt.html` erklärt all das von innen** — die drei Ebenen, den Modulvertrag, den
Kanon und die Regeln, mit einem Briefing-Bogen für Zuarbeit von außen. Es ist zugleich das
Muster: Wer wissen will, wie ein Modul nach diesen Regeln aussieht, sieht dort nach. Ändert
sich eine Festlegung hier, wird sie dort mitgezogen — sonst widersprechen sich die beiden.

**Sprache:** Commit-Nachrichten, Pull-Request-Beschreibungen und Kommunikation immer auf
Deutsch. Für die Module gilt:

- **Englisch ist der Normalfall.** Ein neues Modul entsteht auf Englisch, solange nichts
  anderes vereinbart ist.
- **Deutsch ist zulässig, wo die Sache es verlangt** — etwa bei einem Beispiel aus einem
  deutschen Rechts- oder Praxisfeld, in dem die Fachbegriffe übersetzt schief würden
  (Pflegesatz, Personalkostenquote, Jahresabschluss). Nicht aus Bequemlichkeit.
- **Die Sprache muss sichtbar sein.** Eine deutsche Lektion ist mit `DE` in der Beschriftung
  gekennzeichnet, ein durchgehend deutsches Modul mit einem Hinweis auf seiner Kachel auf der
  Startseite. Niemand soll beim Klicken überrascht werden.
- **Innerhalb einer Lektion wird nicht gemischt.** Die Lektion ist die kleinste Einheit, die
  eine Sprache hat. Halbe Sätze in der einen und Tooltips in der anderen Sprache sind der
  Fehler, den diese Regel verhindern soll.
- **Namen und Zahlen des Kanons bleiben unverändert.** Sofia heißt in beiden Sprachen Sofia,
  Ringstraße bleibt Ringstraße, 145.500 € bleiben 145.500 €. Übersetzt werden Fließtext und
  Bedienelemente, nicht der Fall.
- **Die Anrede ist immer „Du".** In den Modulen wird geduzt, mit großem D: „Klicke eine Zeile
  an", „Deine erste Schätzung", „entscheiden musst Du". Kein „Sie", kein „Ihre", nirgends —
  weder im Fließtext noch in Tooltips, Detailkästen oder Schaltflächen. Das englische *you*
  ist ohnehin schon die passende Form. Aufpassen bei „sie" in der dritten Person: „Sie ist der
  Grund, warum sich ein Bericht aufklappen lässt" bleibt, wie es ist.

### Wie ein Satz klingt

Ein Modul soll sich lesen wie jemand spricht, der die Sache erklärt. Was sich nicht vorlesen
lässt, ohne dass der Leser stockt, ist falsch geschrieben.

**Einzeln ist keine der folgenden Regeln wichtig.** Zusammen ergeben ihre Verstöße den Tonfall,
an dem jeder Leser nach zwei Absätzen erkennt, dass eine Maschine geschrieben hat. Genau deshalb
stehen sie hier.

#### Zeichensetzung

**Der Gedankenstrich kommt nicht vor.** Weder als Einschub mitten im Satz noch als Anhängsel am
Ende. Wo einer steht, gehört ein Komma hin, oder der Anhang wird ein eigener Satz. Haupt- und
Nebensätze werden durch Kommata getrennt, wie es die Schule lehrt.

**Der Doppelpunkt leitet eine echte Aufzählung ein und sonst nichts.** Er ist kein Mittel, um
den Höhepunkt eines Gedankens anzukündigen. Wer ihn dafür benutzt, baut eine Pause ein, die der
Leser als Effekt empfindet. Effekte fallen auf.

Richtig ist „Eine Vorschau braucht drei Angaben: den Startmonat, die BWA und die
Zahlungsregeln." Falsch ist „Dann zeigt sich das Eigentliche: Die Regeln lagen zu hoch."

**Kein Oxford-Komma.** Vor dem letzten „und" einer Aufzählung steht im Deutschen kein Komma.
„Ist, Plan und Abweichung" ist richtig, „Ist, Plan, und Abweichung" ist falsch. Das Komma vor
einem „und", das zwei vollständige Hauptsätze verbindet, ist etwas anderes und bleibt erlaubt.

**Zwei Hauptsätze werden nicht mit „, und" aneinandergehängt.** Maik benutzt diese Fügung in
viertausend Wörtern Buchtext **kein einziges Mal**. Sie ist die häufigste Ausweichbewegung, wenn
der Gedankenstrich verboten wird, also dieselbe Marotte in anderer Gestalt.

Zwei Wege führen heraus, von denen der zweite meistens der bessere ist.

1. **Zwei Sätze daraus machen.** Der zweite beginnt mit einem Adverb, das die Verbindung
   herstellt, also mit `Dann`, `Deshalb`, `Zudem`, `Damit`, `Trotzdem` oder `Dabei`.
2. **Den zweiten Hauptsatz unterordnen.** Maiks eigenes Repertoire dafür ist `sowie` (4,2 Treffer
   je 1.000 Wörter), `hingegen` und `allerdings` (2,0), `Zudem` am Satzanfang (1,5), `, da` (1,2),
   `sodass`, `indem`, `wobei` und `hierbei`. Dazu kommt der Relativsatz.

**Der zweite Weg ist der wichtigere**, weil das reine Zerlegen die Satzlänge auffrisst. Beim
ersten Durchgang durch `plattform/liquiditaet-vorschau.html` hat das Aufspalten aller 86 Stellen
den Median von 18 auf 14 Wörter gedrückt und den Anteil kurzer Sätze von 5,7 auf 15,2 Prozent
getrieben. Erst das Zurückholen von 35 Stellen über Unterordnung hat den Takt wieder
hergestellt.

Dasselbe gilt für `, und zwar`. Dort steht `nämlich`, oder der Einschub kommt in eine Klammer.

**Kein Satz beginnt mit „Und".** Was angehängt werden soll, kommt mit Komma an den Satz davor.
Dasselbe gilt für ein „Aber" oder „Doch" am Satzanfang, das nur den Rhythmus bedienen soll.

#### Satzbau

Jeder Satz hat ein Subjekt, das etwas tut. Meistens bist Du das, oder das Modul, oder die
Rechnung. Wo niemand handelt, entsteht der Klang, den jemand meint, wenn er sagt, ein Text lese
sich wie eine Bedienungsanleitung.

| Die Marotte | Wie es dasteht | Wie es dastehen soll |
|---|---|---|
| Die Sentenz an der Stelle der Aussage | „Eine Vorschau beginnt nicht im luftleeren Raum." | „Deine Vorschau fängt in einem bestimmten Monat an." |
| Passiv ohne Handelnden | „Der abgelaufene Teil wird mitgerechnet." | „Das Modul rechnet die Monate mit, die schon gelaufen sind." |
| Verb vorn, Subjekt hinten | „Verbunden wird über das Feld *Hängt an*." | „Verbinden kannst Du über das Feld *Hängt an*." |
| Satz ohne Verb | „Ein Graph, kein Baum." | „Die Daten liegen als Graph vor. Der Baum entsteht erst beim Lesen." |
| Die Dreierfigur ohne Verb | „Oben das Geschäft, in der Mitte das Finanzamt, unten alles Übrige." | „Eine Liquiditätsvorschau setzt sich aus drei Komponenten zusammen. Erstens die BWA samt Regelwerk, zweitens der Steuersaldo, drittens alles, was nicht in der BWA steht." |
| Das Anhängsel am Satzende | „…, und das ist der Zweck der Trennung." | Punkt setzen. Den Gedanken in den nächsten Satz stellen, wenn er gebraucht wird. |

#### Der Takt der Sätze

**Der kurze, schlagende Satz ist erlaubt.** Falsch ist seine Häufigkeit. In Maiks Buchtext sind
sieben Prozent der Sätze kürzer als neun Wörter, in den Modulen waren es achtzehn bis dreißig
Prozent. Ein kurzer Satz wirkt, weil er nach einer langen Strecke Argumentation kommt. Wo jeder
dritte Satz kurz ist, kommt keiner mehr an.

Ein Modul wird am Bildschirm gelesen und einmal durchgelesen, deshalb bleibt es unter der Dichte
des Buches. Die Zielmarke liegt dazwischen.

| | Buch | Module vorher | Zielmarke Modul |
|---|---|---|---|
| Satzlänge, Median | 21 Wörter | 12 bis 14 | **17 bis 18** |
| Sätze unter 9 Wörtern | 7 % | 18 bis 30 % | **höchstens 12 %** |
| Sätze über 25 Wörtern | 34 % | 6 bis 8 % | **mindestens 20 %** |

**Die Klammer ersetzt den Gedankenstrich.** Maik setzt Beispiele, Querverweise und
Einschränkungen in Klammern, rund siebzehnmal je tausend Wörter. In den Modulen stand dafür ein
Gedankenstrich oder ein eigener Satz. Wer einen Einschub braucht, nimmt die Klammer.

**Eine Zahl wird eingeschränkt, statt behauptet.** Wörter wie `zumeist`, `in der Regel`,
`häufig`, `nicht selten`, `sollte` und `kann` stehen im Buchtext rund dreißigmal auf vier
Seiten. An denselben Stellen stand in den Modulen eine nackte Behauptung. Wo eine Aussage nicht
immer gilt, sagt der Satz das.

**`STILPROBE.md` hält die Messung und die Mustersätze fest.** Dort stehen Maiks eigene Sätze nach
Typ sortiert, dazu das, was sich aus dem Buch nicht übernehmen lässt. Wer den Ton treffen will,
liest die Datei vor dem Schreiben.

**Überschriften benennen die Sache ganz.** „Der Aufbau einer Liquiditätsvorschau" kostet drei
Wörter mehr als „Der Aufbau" und lässt den Leser nicht raten, wovon die Rede ist. Dasselbe gilt
für die Beschriftung eines Kastens. „Teil 1: BWA" sagt, was drinsteht, „Oberer Teil" sagt nur,
wo er liegt.

#### Ton

**Kein Clickbait.** Kein Satz kündigt an, dass gleich etwas Überraschendes kommt. Keine
rhetorische Frage, die nur Spannung aufbauen soll. Keine Behauptung, die größer ist als ihr
Gegenstand. Eine Liquiditätsvorschau ist eine Liquiditätsvorschau und wird so beschrieben, wie
sie ist.

**Gesprochenes Deutsch heißt nicht flapsig.** Der Ton bleibt der eines Dozenten, der vor der
Gruppe steht. Er spricht in vollständigen Sätzen, er benutzt Fachbegriffe dort, wo sie
hingehören, und verzichtet auf die Figuren, mit denen ein Text sich selbst interessant machen
will.

#### Warum das hier steht und nicht in der Tabelle

Ein regulärer Ausdruck findet diese Dinge nicht. Den Gedankenstrich könnte er finden, allerdings
stehen in den 25 Dateien noch **870** davon, von denen jeder eine eigene Entscheidung zwischen
Komma, Punkt und Streichung braucht. Ein Suchen und Ersetzen würde dort Sätze zerstören, weshalb
die Altlast erst aufgeräumt wird, wenn ein Text ohnehin angefasst wird.

Dasselbe gilt für die Fügung „, und", von der noch **196** Stück verteilt sind. Sauber sind bisher
`plattform/liquiditaet-begriff.html`, `plattform/liquiditaet-bwa.html`,
`plattform/liquiditaet-vorschau.html` und `plattform/controlling-leitbild.html`. Der Lernpfad
Liquiditätsplanung ist damit bis auf das Modul `liquiditaet-tagesplan.html` durch, das noch eine
Hülle ist. Sobald alle Dateien durch sind, wandern beide Muster in die Prüftabelle. Ab dann meldet
die Prüfung jeden neuen Fund.

**Für neu geschriebene und überarbeitete Texte gelten die Regeln vollständig, ab sofort.**

**[gesetzt] Diese Regeln gelten zunächst allein für den deutschen Text.** Für das Englische ist
nichts festgelegt. `index.html` und `sofias-coffee-dream.html` führen beide Sprachen, deren
englischer Teil vorerst bleibt, wie er ist.

### Verbotene Formulierungen

Diese Liste wächst. Fällt beim Lesen eine Wendung auf, die nicht mehr vorkommen soll, kommt
sie hier hinein — mit dem Grund und mit dem, was stattdessen dasteht. **Ein Verbot ohne Ersatz
erzeugt Ausweichmanöver, keinen besseren Text.** Deshalb hat jede Zeile drei Angaben.

**Die Tabelle ist die einzige Quelle.** Die Prüfung am Ende dieser Datei liest sie hier aus;
es gibt keine zweite Liste, die auseinanderlaufen könnte.

| Muster | Grad | Warum | Stattdessen |
|---|---|---|---|
| `(können|haben|sind|werden|müssen|sollten|wollen|finden|sehen|klicken|erhalten) Sie\b` | hart | Die Anrede ist immer „Du“. Die Umstellung Verb-vor-Sie ist eindeutig. | „kannst Du“, „siehst Du“ |
| `\b(Wenn|Falls|Sobald|Damit|Bevor) Sie\b` | hart | Dasselbe, an der anderen typischen Stelle. | „Wenn Du“, „Bevor Du“ |
| `\bIhre[nmrs]?\b` | prüfen | Meist die Sie-Anrede. Am Satzanfang kann es die dritte Person sein. | „Deine“, „Deinen“ |
| `\bIhnen\b` | prüfen | Meist die Sie-Anrede. | „Dir“ |
| `Kursbuch` | hart | Kursbücher sind als Quelle ausgeschlossen. | Fachliteratur mit Autor und Jahr |
| `Studienbrief` | hart | Dasselbe wie Kursbuch. | Fachliteratur mit Autor und Jahr |
| `\bMWCH\d*\b` | hart | Kurskennungen erscheinen nicht. | Das Thema benennen |
| `FACHLITERATUR` | hart | Herkunftsetikett am Inhalt. | Den Autor im Fließtext nennen |
| `FOLIE \d` | hart | Herkunftsetikett am Inhalt. | Die Aussage selbst überschreiben |
| `ERGÄNZUNG` | hart | Herkunftsetikett am Inhalt. | Eine Überschrift, die den Inhalt benennt |
| `Lerneinheit` | hart | Kein Begriff dieser Plattform. | „Modul“ oder „Lektion“, je nach Ebene |
| `\bKapitel\b` | prüfen | Kein Begriff dieser Plattform. | „Lektion“ oder „Abschnitt“ |
| `\b([Tt]rage|[Tt]rägst|[Tt]rägt|[Tt]ragen|[Tt]ragt|[Tt]rug|[Tt]rugen|[Tt]rüge|[Gg]etragen|[Tt]ragend[ers]*)\b` | hart | Das Verb „tragen“ ist eine Verlegenheitslösung: Es klingt nach Aussage und sagt nichts. | Das konkrete Verb: „hält aus“, „gibt her“, „ruht auf“, „steht auf“, „hat“, „reicht“ |
| `\bsondern\b` | hart | Die Figur „nicht X, sondern Y“ klingt nach Schärfe und sagt zuerst, was etwas nicht ist. Der Leser hält die Verneinung im Kopf, bis die Behauptung endlich kommt. | Den Satz positiv stellen: „Ein Risiko ist ein bewertetes Ereignis.“ |

**Was „sondern“ nicht rettet.** Gemeint ist die Figur, nicht das Wort. Wer „Ein Risiko ist
kein Unglück, sondern ein bewertetes Ereignis“ in zwei Sätze zerlegt, hat sie mit einem Punkt
getarnt: „Ein Risiko ist kein Unglück. Es ist ein bewertetes Ereignis.“ Die Prüfung findet das
nicht, ein Leser schon. Der Satz wird positiv gestellt, und die Behauptung steht vorn. Wo die
Verneinung wirklich etwas beiträgt, bekommt sie einen eigenen Satz mit eigenem Inhalt — einen,
der über den Spiegel der Behauptung hinausgeht. „Die Formel rechnet dabei richtig“ sagt etwas.
„Es ist kein Rechenfehler“ sagt nichts.

**Was „tragen“ nicht trifft.** Verboten ist das einfache Verb. Zusammensetzungen sind andere
Wörter und bleiben: `eintragen`, `übertragen`, `betragen`, `Vertrag`, `Beitrag`, `Auftrag`,
`Ertrag`. Ebenso die Ableitungen `Tragweite`, `Tragfähigkeit`, `tragbar` und `Träger` — sie
sind Fachbegriffe und keine Beugung. Der reguläre Ausdruck ist mit `\b` genau so geschnitten;
wer ihn erweitert, prüft vorher gegen `beträgt` und `eingetragen`.

**Warum nicht einfach `Sie` verboten wird.** Das Wort trifft in fast jedem Modul die dritte
Person: „Abschnitte … Sie werden zur Laufzeit zu Blöcken“. Ein Verbot darauf meldet fast nur
Fehlalarme und wird nach dem dritten Lauf ignoriert. Geprüft wird deshalb die Umstellung
Verb-vor-Sie und die Konjunktion davor — dort ist die Anrede eindeutig. Für alles andere
gilt die Regel weiter, sie wird nur nicht maschinell gesucht.

**Zwei Grade.** `hart` heißt: kommt nicht vor, die Prüfung schlägt fehl. `prüfen` heißt: ist
fast immer falsch, kann im Einzelfall richtig sein — die Prüfung meldet den Fund, entschieden
wird von Hand. Ein „prüfen“-Fund, der bleiben soll, bekommt in derselben Zeile die Marke
`sprache:ok` — im Markup als `<!-- sprache:ok -->`, im Skript als `/* sprache:ok */`. Dann
schweigt die Prüfung dort künftig. Ein kurzer Grund dahinter hilft dem nächsten Leser:
`/* sprache:ok — dritte Person, Sofia */`. **Im Skript nie einen HTML-Kommentar setzen**,
wenn die Zeichenkette später als Markup ausgegeben wird — der Kommentar landet sonst in
der Seite.

**Die Umlautfalle.** `index.html` schreibt Umlaute im `UI`-Wörterbuch als `\u00e4`-Folgen.
Eine Regel, die nach dem Zeichen sucht, findet dort nichts. Die Prüfung löst die Folgen
deshalb vor dem Suchen auf. Wer sie umbaut, lässt diesen Schritt stehen — an ihm ist ein
„trägt“ auf der Startseite einmal unbemerkt vorbeigekommen.

**Zum Muster.** In der ersten Spalte steht ein regulärer Ausdruck. Der senkrechte Strich ist
in einer Markdown-Tabelle nicht verwendbar, außer innerhalb einer Klammergruppe wie oben;
soll etwas ganz anderes zusätzlich verboten werden, bekommt es eine eigene Zeile.

**Was passiert, wenn eine Zeile dazukommt.** Gemeint sind die künftigen Texte und die
vorhandenen gleichermaßen. Deshalb gehört zu jedem neuen Eintrag im selben Arbeitsgang:

1. Die Zeile in die Tabelle schreiben, mit Grund und Ersatz.
2. Die Prüfung laufen lassen und **alle** Fundstellen in den bestehenden Modulen bereinigen.
3. Beim Ersetzen den Satz lesen, nicht nur das Wort tauschen. Ein Suchen-und-Ersetzen über die
   ganze Datei hat schon einen Satz zerstört, in dem „Reiter“ den Browser-Reiter meinte und
   nicht die Lektion.
4. Das Ergebnis in der Pull-Request-Beschreibung nennen: welche Zeile neu ist und wie viele
   Stellen sie berührt hat.

**Wo die Liste gilt.** In allen `*.html` beider Verzeichnisse — Fließtext, Beschriftungen, Tooltips, Fußzeilen,
Klassennamen und Kommentare. Für Commit-Nachrichten und Pull-Request-Beschreibungen gilt sie
sinngemäß, wird dort aber nicht maschinell geprüft.

### Der Sprachschalter

**[gesetzt]** Zweisprachig sind bisher `index.html` und `sofias-coffee-dream.html`. Die
übrigen Module folgen den Punkten oben, bis sie umgestellt werden.

- **Deutsch ist die Grundfassung.** Ohne Parameter erscheint Deutsch. `?lang=en` schaltet um.
- **Die Wahl reist als URL-Parameter**, nicht im Speicher — `localStorage` bleibt
  ausgeschlossen. Die Startseite hängt `?lang=en` an die Links der Module, jedes Modul liest
  `location.search` und hängt den Parameter an seine eigenen Querverweise weiter.
- **Ein Textfeld ist entweder ein String** — dann gilt er in beiden Sprachen, etwa ein Name
  oder eine Zahl — **oder `{de:"…", en:"…"}`**. Fehlt `de`, erscheint `en`. Damit lässt sich
  ein Modul schrittweise übersetzen, ohne dass je eine halbe Seite entsteht.
- **Statischer Text im Markup bekommt `data-t="schlüssel"`** und wird aus dem `UI`-Wörterbuch
  gefüllt; `data-tp` setzt einen Platzhalter, `data-ta` ein `aria-label`.
- **`$QS` in einem `href` innerhalb eines Textbausteins** wird beim Einsetzen durch den
  aktuellen Parameter ersetzt, damit Querverweise die Sprache mitnehmen.
- **`<html lang>` und `<title>` werden mitgesetzt.**
- **Auf der Startseite markiert `langBadge`**, in welcher Sprache ein Modul selbst läuft.
  In der Sprache, in der das Modul ohnehin ist, bleibt das Feld leer.

**Nicht übersetzt** werden Namen und Zahlen des Kanons sowie der Codeblock in der Anleitung
auf der Startseite — Bezeichner bleiben englisch, nur der erklärende Text daneben wechselt.

---

## Vor jeder Aufgabe: erst den aktuellen Stand holen

**Maik redigiert die Texte direkt in `main`.** Diese Änderungen sind nicht optional
mitzunehmen — sie sind der aktuelle Stand. Deshalb gilt vor **jeder** Änderung an einer Datei,
ohne Aufforderung und ohne Nachfrage:

```bash
git fetch origin main
git merge --ff-only origin/main   # spult vor, wenn auf dem Branch nichts Unfertiges liegt
```

**`fetch` allein genügt nicht.** Es bewegt nur den Zeiger `origin/main`; das Arbeitsverzeichnis
bleibt auf dem alten Stand. Ohne den zweiten Befehl wird auf einer veralteten Kopie gearbeitet,
und eine redaktionelle Überarbeitung geht beim nächsten Block, der ganz neu geschrieben wird,
verloren. Das ist der wahrscheinlichste Weg, Arbeit zu zerstören.

- **Schlägt `--ff-only` fehl**, liegen auf dem Branch eigene, noch nicht gemergte Commits. Dann
  `git merge origin/main` und den Konflikt auflösen — niemals `--force` und niemals
  `git checkout -B`, solange dort etwas Unfertiges liegt.
- **Nach dem Vorspulen die Dateien neu einlesen**, die geändert werden sollen. Was im Kontext
  steht, kann von vor dem Merge stammen.
- **Die Anker in Änderungsskripten mit `assert` prüfen.** Wurde ein Textbaustein redigiert,
  scheitert das Skript laut, statt still etwas Falsches zu treffen. Das ist Absicht.
- **Die Zusicherung gilt zum Zeitpunkt des Abgleichs, nicht dauerhaft.** Wird während einer
  laufenden Aufgabe in `main` redigiert, bekommt die Sitzung das nicht mit. Dann vor dem
  nächsten Schritt erneut abgleichen.

**Autorzeile lesen:** Commits dieser Sitzung stehen als Autor unter *Maik*, weil der Container
so konfiguriert ist. Ob ein Commit von Hand stammt, verrät allein das Fehlen des Trailers
`Co-Authored-By: Claude`.

## Vor jeder Aufgabe lesen

`STILPROBE.md` ist vor dem Schreiben eines Textes zu lesen. Dort steht, wie ein Satz in
diesem Projekt klingt, gemessen an Maiks eigenem Buchtext.

`PROJECT-CANON.md` ist verbindlich. Dort stehen alle Namen, Zahlen, Standorte und
Festlegungen des Falls. Nichts davon erfinden oder abwandeln — wenn eine Angabe fehlt,
im Pull Request nachfragen statt sie zu ergänzen.

Besonders leicht zu übersehen:

- Personen haben **keine Nachnamen**. Sofia, Nguyen, Alex, Anna, Jonas, Klara, Elif.
- Es gibt **zwei Kaffeehäuser** (Ringstraße, Alsergrund), eine Rösterei und ein Coffeebike —
  keine vier Filialen und **keine eigene Bäckerei**.
- PPS meint die **Rösterei**, nicht eine Backstube.
- Die Quartalssumme von 145.500 € muss über alle SCD-Varianten hinweg gleich bleiben.
  Das ist der didaktische Kern, keine beliebige Zahl.

### Wenn ein Modul einen eigenen Fall braucht

**Sofia ist der Normalfall, ein eigener Fall die begründete Ausnahme.**
`plattform/controlling-leitbild.html` arbeitet mit dem CV, einem Verband der Pflege und sozialen
Dienste. Ein Leitbild entsteht in einer Organisation, und Sofias Kaffeehaus hat weder Leitungsrunde
noch Verband. Die Kachel sagt es im ersten Satz.

`vorlesung/supply-chain-controlling.html` gehört zum Thema Supply Chain und arbeitet mit vier Vorlieferanten eines
Nutzfahrzeugherstellers. Der Grund: Sofias Betrieb hat keine benannten Lieferanten, und der
Kanon soll nicht um welche erweitert werden, nur damit ein Portfolio vier Punkte bekommt —
lieber ein sichtbar getrennter Fall als ein stillschweigend gedehnter Kanon. Wo das nötig ist,
sagt es die Kachel im ersten Satz und der Fußtext des Moduls.

### Quellen: Fachliteratur ja, Kursbücher nie

**Kursbücher sind tabu.** Kein Verweis auf ein Kursbuch, keine Seitenzahl daraus, keine
Versionsnummer, keine Lektionsnummer, keine reproduzierte Abbildung oder Tabelle. Ebenso wenig
erscheint eine **Kurskennung** wie `MWCH02` — genannt wird das Thema, nicht die Kursnummer.
Das gilt für Fließtext, Etiketten, Fußzeilen, Klassennamen und Kommentare gleichermaßen.

**Fachliteratur darf zitiert werden** und soll es auch: Horváth, Weber, Reichmann, Gleißner,
Diederichs, Rohrschneider, ISO-Normen. Wo eine Aussage auf eine benennbare Quelle zurückgeht,
wird sie genannt — mit Autor und Jahr, nicht mit einer Fundstelle in einem Kurswerk.

**Keine Herkunftsetiketten am Inhalt.** Ein Modul bekommt keine Kennzeichnung, aus welcher Quelle
ein Block stammt — weder `FACHLITERATUR` noch `FOLIE N` noch `ERGÄNZUNG`. Die Module stehen für
sich; wer sie liest, soll sich mit dem Gegenstand befassen und nicht mit seiner Provenienz.
Abbildungen werden **eigenständig neu aufgebaut** und nie reproduziert.

**Wo eine Aussage auf einen Autor zurückgeht, wird er im Fließtext genannt** — als Zitat mit
Quellenangabe (`Horváth 2020, S. 129`) oder als Hinweis im Satz („nach Diederichs 2023“). Das
ist Zitieren, kein Etikettieren, und bleibt erwünscht.

**Die Fußzeile ist eine Zeile:** `Copyright Prof. Dr. Maik Drozdzynski, 2026 · build 0.0.50`.
Keine Quellenverzeichnisse, keine Legenden.

### Die Buildnummer

Sie steht als Letztes in der Fußzeile jeder ausgelieferten Datei, in der Monospace:
`<span class='build'>build 0.0.50</span>`. Die einfachen Anführungszeichen sind Absicht — auf
den drei zweisprachigen Seiten steht die Fußzeile als JavaScript-String in doppelten, und ein
`class="…"` zerrisse ihn.

- **Die Zahl ist der Zähler der Merge-Ereignisse auf `main`**, plus eins für den Merge, der
  gerade bevorsteht: `git rev-list --count --merges origin/main`. Solange es keinen
  Releasestand gibt, bleibt es bei `0.0.` davor.
- **Sie wird von Hand gesetzt, im selben PR wie die Änderung** — bewusst ohne Automatik. Eine
  GitHub Action dafür brächte ein `.github/workflows/` in ein Repository, das absichtlich keine
  Werkzeuge hat, und einen Bot-Commit nach jedem Merge. Der Weg nach `main` führt ohnehin über
  genau einen PR.
- **Alle 25 Dateien bekommen dieselbe Zahl**, auch die, die der PR sonst nicht anfasst. Die
  Nummer sagt, aus welchem Auslieferungsstand eine Datei stammt — und Module werden einzeln
  weitergegeben.
- **Die separat hochgeladene `foerdermittel-radar-elearning-plattform.html` im Wurzelverzeichnis
  gehört zu keiner der beiden Auslieferungen** und bleibt unberührt.
- **Sechs Module in `vorlesung/` haben statt der Copyright-Zeile einen erklärenden Fußtext.**
  Das ist Altbestand. Dort steht die Buildnummer am Ende dieses Textes, damit keine Datei ohne
  sie bleibt.

## Aufbau

```
index.html                       die Weiche — nur für die Entwicklung
CLAUDE.md                        diese Datei
PROJECT-CANON.md                 Namen, Zahlen, Festlegungen des Falls
STILPROBE.md                     wie Maik schreibt, gemessen an seinem Buchtext

vorlesung/                       der Stoff für die Lehrveranstaltungen
  index.html                     Startseite mit Filter und Suche
  reihenfolge.js                 die Folge der Kacheln
  <thema>.html                   je ein Modul, in sich geschlossen
  decks/*.pptx                   Foliensätze zum Herunterladen

plattform/                       die unabhängige Lernplattform
  index.html
  reihenfolge.js
  <thema>.html
```

**Die beiden Verzeichnisse sind getrennte Auslieferungen.** Jedes ist für sich vollständig.
Deshalb gilt:

- **Kein Verweis über die Grenze.** Ein Modul in `vorlesung/` verlinkt nichts in `plattform/`
  und umgekehrt. Beim Ausrollen läge das Ziel nicht auf demselben Server.
- **Kein gemeinsamer Inhalt.** Was beide Seiten brauchen, wird kopiert und darf auseinander-
  laufen. Die Ansprache ist verschieden, und das ist der Zweck der Trennung.
- **`index.html` im Wurzelverzeichnis gehört zu keiner der beiden.** Es ist die Weiche für die
  Entwicklung und sagt das auch im Kopf der Seite. Auf einen Webspace, der eine der beiden
  Auslieferungen aufnimmt, kommt es nicht mit.

### Wie der Stand ins Web kommt

**GitHub Pages ist eingeschaltet und baut bei jedem Push auf `main`.** Ausgeliefert wird das
Wurzelverzeichnis des Repositorys — beide Ordner und die Weiche dazwischen. Die Einstellung
steht in den Repository-Einstellungen und an keiner Datei im Repo. Wer nur nach einem Workflow,
einer `CNAME` oder einem `gh-pages`-Branch sucht, findet nichts und schließt daraus falsch, es
gebe keine Auslieferung. Genau dieser Fehlschluss hat schon einmal eine Sitzung gekostet.

- **Der Bau heißt `pages build and deployment`** und steht unter Actions. Dort ist abzulesen,
  welcher Commit zuletzt ausgeliefert wurde — die erste Frage, wenn die Seite einen alten Stand
  zeigt.
- **Ein alter Stand im Web bedeutet fast immer einen ausgebliebenen Bau** und nicht eine falsche
  Datei. Bevor irgendetwas im Repo gesucht wird, wird diese Liste angesehen.
- **Der Wiederholungslauf hilft dann nicht.** Er baut denselben alten Commit noch einmal. Was
  hilft, ist ein neuer Commit auf `main` oder ein Umstellen und Zurückstellen der Quelle unter
  Einstellungen → Pages.
- **Ein Hochladen auf einen geschützten Webspace ist davon unabhängig** und geschieht von Hand.
  Die beiden Wege können auseinanderlaufen; der Stand unter Pages sagt nichts über den Stand
  dort und umgekehrt.

Jede HTML-Datei läuft **ohne Build und ohne Server**. Einzige externe Abhängigkeit sind
Google Fonts mit Fallback-Stack. Diese Eigenschaft nicht aufgeben: kein npm, kein Bundler,
keine Frameworks, keine geteilten CSS- oder JS-Dateien. Doppelklick muss genügen.

**Die eine Ausnahme ist `reihenfolge.js`**, und sie ist eng geschnitten. Jedes der beiden
Verzeichnisse hat seine eigene; geladen wird sie allein von der Startseite daneben, über einen
klassischen `<script src>` — der funktioniert über `file://`, anders als `fetch`. Sie ist
**optional**: Fehlt sie, meldet die Konsole das und die Startseite nimmt die Folge der Liste in
`TOPICS`. Ein Modul bleibt davon unberührt und wird weiterhin einzeln weitergegeben. Eine
Datei dieser Art über die Startseite hinaus kommt nicht dazu, ohne dass diese Regel neu
verhandelt wird.

## Lernpfade

Ein Lernpfad ist eine Reihenfolge von Modulen, die zusammen Sinn ergeben. Er steht in
`index.html` in `const PATHS = [ ... ]`, direkt unter `TOPICS`.

- **Pfade verweisen auf Module, nie umgekehrt.** Ein Pfad kennt nur die `id` aus `TOPICS` und
  die Reihenfolge in `steps`. Ein Modul gehört zu mehreren Pfaden, indem es in mehreren `steps`
  steht — am Modul selbst ist dafür nichts zu ändern. Deshalb kostet ein neuer Pfad keine
  Änderung an einer einzigen Moduldatei.
- **Pfad und Spur sind zwei Sichten, nicht zwei Filter.** Wird ein Pfad gewählt, springt der
  Spurfilter auf „Alle"; wird eine Spur gewählt, wird der Pfad verlassen. Alles andere wäre
  eine Kreuztabelle, die niemand im Kopf behält. Die Suche grenzt weiter ein, in beiden Sichten.
- **Die Reihenfolge schlägt die Listenreihenfolge.** Im Pfad werden die Module über
  CSS `order` sortiert und mit `01`, `02`, `03` nummeriert; der erste Schritt bekommt die
  Signalfarbe.
- **Kein Fortschritt, keine Sperren.** Spätere Schritte bleiben klickbar. Ein „erst freischalten,
  wenn Schritt 1 erledigt ist" bräuchte gespeicherten Zustand, und `localStorage` ist
  ausgeschlossen. Der Pfad zeigt die Reihenfolge, er erzwingt sie nicht.
- **`?path=<id>` verlinkt einen Pfad direkt** und lässt sich mit `?lang=` kombinieren.
- **Eine unbekannte `id` in `steps`** meldet die Konsole beim Laden. Stillschweigend
  verschwinden darf ein Tippfehler nicht.

**Warum `PATHS` in `index.html` bleibt:** Die Liste ist kurz und enthält zweisprachigen
Fließtext — Titel und Beschreibung jedes Pfads. Das ist Inhalt und keine Anordnung, und es
gehört zu den Daten, aus denen die Startseite besteht. Ausgelagert ist deshalb allein die
Reihenfolge der Kacheln, siehe unten.

### Die Reihenfolge der Kacheln

Sie steht in **`reihenfolge.js`**, einer Liste von Modulkennungen, eine je Zeile. Umsortieren
heißt: eine Zeile verschieben. Dass die Reihenfolge früher aus der Stellung der Blöcke in
`TOPICS` entstand, hat jedes Umsortieren zu einer Blockverschiebung über zwanzig Zeilen
gemacht — dafür ist diese Datei da.

- **`TOPICS` ist seitdem eine reine Definitionsliste.** Wo ein Modul dort steht, ist gleich.
- **Ein Modul, das in `reihenfolge.js` fehlt, verschwindet nicht.** Seine Kachel rutscht ans
  Ende, und die Konsole sagt es. Ein neu registriertes Modul ist damit sofort sichtbar, auch
  wenn die Datei vergessen wurde. Eine Kennung ohne Modul meldet die Konsole ebenso.
- **Der Text hinter jeder Kennung ist eine Lesehilfe.** Gelesen wird allein die Kennung; ein
  umbenanntes Modul macht den Kommentar schief, aber nichts kaputt.
- **Die Lernpfade behalten ihre eigene Reihenfolge** in `steps`. Ist ein Pfad gewählt, schlägt
  sie die Folge aus `reihenfolge.js`.

### Der Pfadplaner

Lektion 04 in `plattform/content-werkstatt.html` ist das Werkzeug, mit dem ein Autor die Gliederung
baut, bevor eine Zeile Text entsteht. Sie liegt als **Bühne** vor ihm: Pfad, Module, Lektionen
und aufklappbare Blöcke als Kästen auf einer Fläche, mit Pfeilen verbunden. Ein Klick auf einen
Kasten öffnet daneben seine Stammdaten — Bezeichnung, Kurzinhalt, bei einem Modul auch Spur und
Sprache. Am Ende erzeugt „Auftrag erzeugen“ einen Text.

- **Dieser Text ist die erwartete Eingabe.** Wer ihn hier einfügt, bekommt die Hüllen — leere
  Module mit den benannten Lektionen und Blöcken, samt Quiz und Praxiseinstieg, eingetragen in
  `TOPICS` und `PATHS`. Die Kacheln bekommen `status: "planned"` und bleiben klickbar.
- **Der Planer speichert nichts.** Kein `localStorage`, also ist der Entwurf beim Neuladen weg.
  Deshalb steht der erzeugte Auftrag im Textfeld und nicht im Speicher: Er ist die Sicherung.
- **Ein Graph, kein Baum.** Im Speicher liegen Knoten mit Ort und Typ und Kanten dazwischen.
  Der Baum entsteht erst beim Lesen: Kinder eines Knotens sind die, deren Kante von ihm
  ausgeht, sortiert nach ihrer Höhe auf der Bühne. Deshalb ändert ein Schieben die Reihenfolge,
  ohne dass irgendwo eine Liste umsortiert werden müsste — und deshalb steht die Nummer im
  Kasten, während er noch in der Hand ist.
- **Ein Element hat genau einen Platz.** Eine neue Kante löst die alte. Erlaubt sind nur
  Pfad → Modul → Lektion → Block; alles andere weist die Bühne mit einem Satz ab. Was keinen
  Anschluss hat, steht gestrichelt da und kommt nicht in den Auftrag.
- **Die Knoten haben eine feste Größe.** `NB` und `NH` im Skript stehen auf denselben Werten
  wie `.kn` im CSS. Damit lässt sich jeder Pfeil rechnen statt messen — in einem zugeklappten
  Block liefert `getBoundingClientRect` nur Nullen, und eine gemessene Zeichnung entartete
  dort auf einen Punkt.
- **Zwei Wege für dieselbe Sache.** Verbunden wird über das Feld *Hängt an* in den Stammdaten
  oder durch Ziehen eines Pfeils vom Punkt am rechten Rand; geschoben wird mit den Pfeiltasten
  oder mit der Maus. Der erste Weg ist der verlässliche, der zweite der bequeme. Beides muss
  funktionieren, auch auf dem Telefon — deshalb Pointer Events und nicht HTML5-Drag-and-drop,
  das dort gar nicht auslöst.

**Der gemeinsame Namensraum ist die Falle.** Alle Skripte eines Moduls liegen im selben
Gültigkeitsbereich. `plZeichne` des Planers in Lektion 04 hat einmal `plZeichne` des
Längenrechners in Lektion 02 überschrieben, und beide waren tot. Ein neues Werkzeug in einem
vorhandenen Modul bekommt deshalb ein eigenes Präfix und wird vor dem Anlegen dagegen
geprüft:

```bash
grep -c "\bpfp" plattform/content-werkstatt.html   # Präfix schon vergeben?
```

## Harte Regeln

**Neues Modul immer in `index.html` registrieren.** Die Startseite kennt nur, was in
`const TOPICS = [ ... ]` steht. Ohne Eintrag ist das Modul unsichtbar. Das ist der
häufigste Fehler. Die Kennung gehört danach an ihre Stelle in `reihenfolge.js` — wird das
vergessen, steht die Kachel am Ende und die Konsole sagt es beim Laden.

**Der `:root`-Block muss in allen Dateien identisch sein.** Alle Farb- und
Schriftentscheidungen leben dort. Nie einen Farbwert direkt in eine Regel schreiben.

**Kein `localStorage`, kein `sessionStorage`.** Zustand in JavaScript-Variablen halten.

**Kein `fetch` auf Nachbardateien.** Über `file://` schlägt das fehl. Daten einbetten.

**Grid- und Flex-Kinder brauchen `min-width: 0`.** Sonst sprengt eine breite Tabelle das
Layout, und der Fehler ist von außen schwer zu finden. Breite Tabellen zusätzlich in einen
Container mit `overflow-x: auto` und `tabindex="0"` wickeln.

**Bei `pointerout` prüfen, ob das Ziel noch im selben Element liegt**, sonst flackert der
Tooltip beim Wechsel zwischen Kindelementen:

```js
el.addEventListener("pointerout", e => {
  const from = e.target.closest(".node");
  const to = e.relatedTarget?.closest?.(".node");
  if (from && to !== from) hideTip();
});
```

**Tooltips auch an `focusin` hängen**, sonst sind sie per Tastatur unerreichbar.
Lektionen als `role="tablist"` mit Pfeiltastennavigation. `prefers-reduced-motion` respektieren.

**Jedes Modul endet mit einem Pointe-Kasten** — dem einen Satz, der hängen bleiben soll.
Er steht am Ende jeder Lektion, nicht nur am Ende der letzten.

**Ein Modul ohne Quiz und ohne Praxiseinstieg ist nicht fertig**, ausgenommen das Leitbild
oben. Die beiden Pflichtlektionen
werden nicht nachgereicht und nicht „später ergänzt“. Wer ein Modul anlegt oder erweitert,
legt sie mit an.

**Abschnitte innerhalb einer Lektion sind auf- und zuklappbar.** Die Blöcke entstehen zur
Laufzeit: `makeBlocks(panel)` läuft am Ende jedes Moduls über `document.querySelectorAll(".panel")`,
jedes `h2.sec` eröffnet einen Block, alles danach bis zum nächsten `h2.sec` ist sein Inhalt. Der
erste ist offen, die übrigen zu.

- **Am Markup ist dafür nichts zu tun** — ein neues `h2.sec` wird automatisch ein Block. Genau
  deshalb ist es so gebaut: Ein neues Modul bekommt die Mechanik durch Kopieren des CSS-Blocks
  und der Funktion, ohne dass eine einzige Überschrift umgeschrieben wird.
- **Zwei Dinge bleiben außerhalb:** alles vor dem ersten `h2.sec` (die Kernaussage der Lektion)
  und ein `.pointe` am Ende. Der Sammelvorgang hält vor dem Pointe-Kasten an.
- **Wer seine Zeichnung aus dem Layout misst, muss auf `resize` hören.** In einem zugeklappten
  Block liefert `getBoundingClientRect` nur Nullen; die Zeichnung entartet auf einen Punkt. Beim
  Aufklappen wird deshalb ein `resize` ausgelöst. Die Strategy Map in `vorlesung/balanced-scorecard.html`
  ist der Fall, an dem das aufgefallen ist — sie zeichnete zugeklappt `0,0,0,0`.
- **Im Druck sind alle Blöcke offen** (`.blk-b[hidden]{display:block!important}`), sonst fehlt
  im PDF, was gerade zugeklappt war.
- **Module ohne `h2.sec` bleiben unverändert.** `vorlesung/bi-reference-architecture.html` und
  `vorlesung/scd-dashboard.html` gliedern ihre Lektionen nicht in Abschnitte; dort gibt es nichts zu klappen.

## Gestaltung

Ein Akzent führt, einer warnt, der Rest ist Grau. Die Signalfarbe erscheint an höchstens
zwei Stellen pro Bildschirm; ist sie überall, ist sie nirgends.

Bewegung nur, wo sie etwas aussagt. Ein Balken, der auf seinen Wert wächst, erklärt etwas.
Ein Element, das beim Scrollen einfliegt, hält nur auf.

Zahlen mit `font-variant-numeric: tabular-nums`, Kennungen und Codes in der Monospace.

Lektionen sind für Facetten derselben Frage da, nicht für verschiedene Themen — sonst sind es
zwei Module. Wie viele es werden, entscheidet der Stoff; die Grenze zieht die 15-bis-20-Minuten-Regel
pro Lektion, nicht eine feste Obergrenze. Werden es viele, ist das ein Hinweis, aber kein Verbot:
Erst wenn zwei Lektionen nichts mehr miteinander zu tun haben, ist es Zeit für ein zweites Modul.

## Vor dem Abschluss prüfen

Diese Prüfung immer laufen lassen und das Ergebnis in die Pull-Request-Beschreibung
aufnehmen. Sie braucht Netzzugriff für die Installation.

```bash
pip install playwright --break-system-packages --quiet && playwright install chromium
python3 - <<'EOF'
from playwright.sync_api import sync_playwright
import pathlib, glob
BASE = pathlib.Path(".").resolve()
with sync_playwright() as p:
    b = p.chromium.launch()
    # Beide Auslieferungen und die Weiche im Wurzelverzeichnis.
    for f in sorted(glob.glob("*.html") + glob.glob("vorlesung/*.html") + glob.glob("plattform/*.html")):
        for w in (390, 1300):
            pg = b.new_page(viewport={"width": w, "height": 900})
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            pg.goto((BASE / f).as_uri()); pg.wait_for_timeout(600)
            for t in pg.locator('[role="tab"]').all():
                t.click(); pg.wait_for_timeout(200)
            ov = pg.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
            print(f"{f:34s} {w:5d}px  Ueberlauf {ov:3d}  {errs or 'ok'}")
            pg.close()
    # Die Verweise jeder Startseite gelten relativ zu ihrem eigenen Verzeichnis.
    for ordner in ("vorlesung", "plattform"):
        pg = b.new_page(); pg.goto((BASE / ordner / "index.html").as_uri()); pg.wait_for_timeout(500)
        for h in pg.eval_on_selector_all(".lnk", "e=>e.map(x=>x.getAttribute('href'))"):
            print(("OK   " if (BASE / ordner / h).exists() else "FEHLT"), ordner + "/" + h)
        pg.close()
    b.close()
EOF
```

Überlauf muss überall `0` sein, die Fehlerliste leer, alle Links vorhanden.

### Die Sprachprüfung

Liest die Tabelle der verbotenen Formulierungen aus dieser Datei und sucht sie in allen
`*.html`. Braucht kein Netz und läuft in einer Sekunde.

```bash
python3 - <<'EOF'
import io, re, glob, sys

# Die Tabelle aus CLAUDE.md ist die einzige Quelle.
md = io.open("CLAUDE.md", encoding="utf-8").read()
block = md.split("| Muster | Grad | Warum | Stattdessen |", 1)[1].split("\n\n", 1)[0]
regeln = []
for zeile in block.splitlines():
    sp = [t.strip() for t in zeile.strip().strip("|").split("|")]
    if len(sp) < 4 or sp[0].startswith("---") or not sp[0].startswith("`"):
        continue
    # Ein Muster kann selbst einen senkrechten Strich enthalten; alles vor dem
    # Grad gehoert zum Muster.
    for i, t in enumerate(sp):
        if t in ("hart", "pruefen", "prüfen"):
            muster = "|".join(sp[:i]).strip().strip("`")
            regeln.append((muster, t, sp[i+1], sp[i+2] if len(sp) > i+2 else ""))
            break
print(f"{len(regeln)} Regeln gelesen\n")

# index.html schreibt Umlaute als \\u00e4-Folgen. Ohne dieses Aufloesen
# geht jede Regel mit Umlaut dort ins Leere - genau so ist ein "traegt"
# auf der Startseite einmal durch die Pruefung gerutscht.
ESC = re.compile(r"\\u([0-9a-fA-F]{4})")
klar = lambda z: ESC.sub(lambda m: chr(int(m.group(1), 16)), z)

hart = weich = 0
for datei in sorted(glob.glob("*.html") + glob.glob("vorlesung/*.html") + glob.glob("plattform/*.html")):
    zeilen = io.open(datei, encoding="utf-8").read().split("\n")
    for nr, z in enumerate(zeilen, 1):
        if "sprache:ok" in z:
            continue
        z = klar(z)
        for muster, grad, warum, statt in regeln:
            if re.search(muster, z):
                streng = grad == "hart"
                hart += streng; weich += not streng
                stelle = re.search(muster, z).group(0)
                print(f'{"FEHLER" if streng else "pruefen"}  {datei}:{nr}  „{stelle}“')
                print(f'        {warum}  Stattdessen: {statt}')

print(f"\n{hart} harte Verstoesse, {weich} zu pruefen")
sys.exit(1 if hart else 0)
EOF
```

Ein harter Verstoß muss vor dem Pull Request weg. Ein „prüfen“-Fund wird angesehen und
entweder geändert oder mit `<!-- sprache:ok -->` in derselben Zeile stehen gelassen.

### Die Zahlenprobe

Eine redaktionelle Überarbeitung fasst jeden Satz einer Datei an. Dabei kann eine Zahl
verrutschen oder ein Name des Kanons verschwinden, ohne dass es jemand im Diff bemerkt, weil
ohnehin jede Zeile geändert ist. Die Zahlenprobe vergleicht deshalb die Substanz vor und nach
der Überarbeitung. Sie zieht alle Zahlgruppen und alle Kanonnamen aus der Datei und stellt die
Mengen gegenüber.

Der erste Parameter ist die Git-Referenz, gegen die verglichen wird, danach folgen die Dateien.

```bash
python3 - HEAD plattform/liquiditaet-begriff.html <<'EOF'
import io, re, sys, collections, subprocess

KANON = ["Sofia","Nguyen","Alex","Anna","Jonas","Klara","Elif",
         "Ringstra\u00dfe","Alsergrund","R\u00f6sterei","Coffeebike","PPS"]

def substanz(t):
    m = collections.Counter(re.findall(r"\d[\d.,]*\d|\d", t))
    for k in KANON:
        n = len(re.findall(r"\b" + k + r"\b", t))
        if n:
            m["NAME " + k] = n
    return m

# Ein Wert hat mehr als eine Ziffer. Eine einzelne Ziffer ist meist eine
# Ordnungszahl aus einer Beschriftung und wird milder gemeldet.
wert = lambda k: k.startswith("NAME ") or len(k) > 1

def hole(ref, datei):
    return subprocess.run(["git","show",f"{ref}:{datei}"],
                          capture_output=True, text=True, check=True).stdout

ref, dateien = sys.argv[1], sys.argv[2:]
fehler = 0
for d in dateien:
    a, b = substanz(hole(ref, d)), substanz(io.open(d, encoding="utf-8").read())
    paare = ([(k,n,"fehlt jetzt") for k,n in sorted((a-b).items())] +
             [(k,n,"neu dazu")    for k,n in sorted((b-a).items())])
    hart = [x for x in paare if wert(x[0])]
    mild = [x for x in paare if not wert(x[0])]
    if not paare:
        print(f"OK          {d}  ({sum(a.values())} Zahlen und Namen unver\u00e4ndert)")
        continue
    if hart:
        fehler += 1
        print(f"ABWEICHUNG  {d}")
        for k,n,r in hart: print(f"   {r:12s} {k!r} x{n}")
    if mild:
        print(f"Hinweis     {d}  einstellige Zahlen, meist Ordnungszahlen")
        for k,n,r in mild: print(f"   {r:12s} {k!r} x{n}")
sys.exit(1 if fehler else 0)
EOF
```

**Zwei Klassen von Meldungen.** `ABWEICHUNG` meint eine Zahl mit mehr als einer Ziffer oder
einen Kanonnamen, also einen Wert. Der Lauf bricht dort ab. `Hinweis` meint eine einstellige
Zahl, meist eine Ordnungszahl aus einer Beschriftung wie „Teil 1". Die wird gemeldet, sie lässt
den Lauf aber durch.

**Die Probe liest die ganze Datei** und schließt CSS und JavaScript mit ein. Das ist Absicht,
denn so fällt auch eine Pixelangabe auf, die beim Umschreiben versehentlich mitgeändert wurde.

**Sie beweist nichts, sie warnt nur.** Verglichen werden Mengen, also fällt ein Tausch zweier
Zahlen zwischen zwei Sätzen nicht auf. Gegen den häufigsten Unfall hilft sie trotzdem, nämlich
gegen die Zahl, die beim Umformulieren verlorengeht oder sich ändert.

Zusätzlich nach Resten einer früheren Fassung suchen, wenn sich Namen geändert haben:

```bash
grep -rn -E "Schönbrunn|Anna Berger|four outlets|bakery" *.html vorlesung/*.html plattform/*.html
```

Ohne Netzzugriff die Prüfung überspringen und das im Pull Request ausdrücklich vermerken,
statt sie stillschweigend auszulassen.

## Pull Request

Beschreiben, **was** geändert wurde und **warum**, dazu das Prüfergebnis. Wenn etwas offen
geblieben ist oder eine Annahme getroffen wurde, das an den Anfang stellen — nicht ans Ende.

Foliensätze sind Binärdateien; ihre Unterschiede sind im Diff nicht lesbar. Bei Änderungen
an einem `.pptx` in der Beschreibung sagen, was sich inhaltlich geändert hat.

**Nach dem Merge ist die Arbeit noch nicht im Web.** Der Bau `pages build and deployment` läuft
von selbst an und braucht eine knappe Minute — er bleibt aber gelegentlich aus. Deshalb gehört
zum Abschluss ein Blick unter Actions: Steht dort ein erfolgreicher Lauf auf dem Merge-Commit,
ist der Stand draußen. Steht dort der Commit davor, siehe „Wie der Stand ins Web kommt“.
