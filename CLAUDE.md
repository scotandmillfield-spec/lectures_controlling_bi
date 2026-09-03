# Projektanweisungen

Interaktive Lehrmodule für Vorlesungen zu Business Intelligence und Controlling.
Ein durchgehender Fall — ein Wiener Kaffeehausbetrieb — trägt alle Themen.

**Sprache:** Commit-Nachrichten, Pull-Request-Beschreibungen und Kommunikation immer auf
Deutsch. Für die Module gilt:

- **Englisch ist der Normalfall.** Ein neues Modul entsteht auf Englisch, solange nichts
  anderes vereinbart ist.
- **Deutsch ist zulässig, wo es die Sache trägt** — etwa bei einem Beispiel aus einem
  deutschen Rechts- oder Praxisfeld, in dem die Fachbegriffe übersetzt schief würden
  (Pflegesatz, Personalkostenquote, Jahresabschluss). Nicht aus Bequemlichkeit.
- **Die Sprache muss sichtbar sein.** Ein deutscher Reiter trägt `DE` in der Beschriftung,
  ein durchgehend deutsches Modul einen Hinweis in der Kachel auf der Startseite. Niemand
  soll beim Klicken überrascht werden.
- **Innerhalb eines Reiters wird nicht gemischt.** Der Reiter ist die kleinste Einheit, die
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

### Der Sprachschalter

**[gesetzt]** Zweisprachig sind bisher `index.html` und `sofias-coffee-dream.html`. Die
übrigen Module folgen den Punkten oben, bis sie umgestellt werden.

- **Deutsch ist die Grundfassung.** Ohne Parameter erscheint Deutsch. `?lang=en` schaltet um.
- **Die Wahl reist als URL-Parameter**, nicht im Speicher — `localStorage` bleibt
  ausgeschlossen. Die Startseite hängt `?lang=en` an die Kachel-Links, jedes Modul liest
  `location.search` und hängt den Parameter an seine eigenen Querverweise weiter.
- **Ein Textfeld ist entweder ein String** — dann gilt er in beiden Sprachen, etwa ein Name
  oder eine Zahl — **oder `{de:"…", en:"…"}`**. Fehlt `de`, erscheint `en`. Damit lässt sich
  ein Modul schrittweise übersetzen, ohne dass je eine halbe Seite entsteht.
- **Statischer Text im Markup trägt `data-t="schlüssel"`** und wird aus dem `UI`-Wörterbuch
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
git merge --ff-only origin/main   # spult vor, wenn der Branch nichts Unfertiges trägt
```

**`fetch` allein genügt nicht.** Es bewegt nur den Zeiger `origin/main`; das Arbeitsverzeichnis
bleibt auf dem alten Stand. Ohne den zweiten Befehl wird auf einer veralteten Kopie gearbeitet,
und eine redaktionelle Überarbeitung geht beim nächsten Block, der ganz neu geschrieben wird,
verloren. Das ist der wahrscheinlichste Weg, Arbeit zu zerstören.

- **Schlägt `--ff-only` fehl**, trägt der Branch eigene, noch nicht gemergte Commits. Dann
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

`PROJECT-CANON.md` ist verbindlich. Dort stehen alle Namen, Zahlen, Standorte und
Festlegungen des Falls. Nichts davon erfinden oder abwandeln — wenn eine Angabe fehlt,
im Pull Request nachfragen statt sie zu ergänzen.

Besonders leicht zu übersehen:

- Personen tragen **keine Nachnamen**. Sofia, Nguyen, Alex, Anna, Jonas, Klara, Elif.
- Es gibt **zwei Kaffeehäuser** (Ringstraße, Alsergrund), eine Rösterei und ein Coffeebike —
  keine vier Filialen und **keine eigene Bäckerei**.
- PPS meint die **Rösterei**, nicht eine Backstube.
- Die Quartalssumme von 145.500 € muss über alle SCD-Varianten hinweg gleich bleiben.
  Das ist der didaktische Kern, keine beliebige Zahl.

### Wenn ein Modul einen eigenen Fall braucht

**Sofia ist der Normalfall, ein eigener Fall die begründete Ausnahme.**
`supply-chain-controlling.html` gehört zum Thema Supply Chain und trägt vier Vorlieferanten eines
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

**Keine Herkunftsetiketten am Inhalt.** Ein Modul trägt keine Kennzeichnung, aus welcher Quelle
ein Block stammt — weder `FACHLITERATUR` noch `FOLIE N` noch `ERGÄNZUNG`. Die Module stehen für
sich; wer sie liest, soll sich mit dem Gegenstand befassen und nicht mit seiner Provenienz.
Abbildungen werden **nicht reproduziert**, sondern eigenständig neu aufgebaut.

**Wo eine Aussage auf einen Autor zurückgeht, wird er im Fließtext genannt** — als Zitat mit
Quellenangabe (`Horváth 2020, S. 129`) oder als Hinweis im Satz („nach Diederichs 2023“). Das
ist Zitieren, kein Etikettieren, und bleibt erwünscht.

**Die Fußzeile ist eine Zeile:** `Copyright Prof. Dr. Maik Drozdzynski, 2026`. Keine
Quellenverzeichnisse, keine Legenden, keine Versionsangaben.

## Aufbau

```
index.html                       Startseite mit Kacheln, Filter und Suche
PROJECT-CANON.md                 Namen, Zahlen, Festlegungen
<thema>.html                     je ein Modul, in sich geschlossen
decks/*.pptx                     Foliensätze zum Herunterladen
```

Jede HTML-Datei läuft **ohne Build und ohne Server**. Einzige externe Abhängigkeit sind
Google Fonts mit Fallback-Stack. Diese Eigenschaft nicht aufgeben: kein npm, kein Bundler,
keine Frameworks, keine geteilten CSS- oder JS-Dateien. Doppelklick muss genügen.

## Lernpfade

Ein Lernpfad ist eine Reihenfolge von Lerneinheiten, die zusammen Sinn ergeben. Er steht in
`index.html` in `const PATHS = [ ... ]`, direkt unter `TOPICS`.

- **Pfade verweisen auf Lerneinheiten, nie umgekehrt.** Ein Pfad kennt nur die `id` aus
  `TOPICS` und die Reihenfolge in `steps`. Eine Einheit gehört zu mehreren Pfaden, indem sie
  in mehreren `steps` steht — an der Kachel ist dafür nichts zu ändern. Deshalb kostet ein
  neuer Pfad keine Änderung an einem einzigen Modul.
- **Pfad und Spur sind zwei Sichten, nicht zwei Filter.** Wird ein Pfad gewählt, springt der
  Spurfilter auf „Alle"; wird eine Spur gewählt, wird der Pfad verlassen. Alles andere wäre
  eine Kreuztabelle, die niemand im Kopf behält. Die Suche grenzt weiter ein, in beiden Sichten.
- **Die Reihenfolge schlägt die Listenreihenfolge.** Im Pfad werden die Kacheln über
  CSS `order` sortiert und mit `01`, `02`, `03` nummeriert; der erste Schritt trägt die
  Signalfarbe.
- **Kein Fortschritt, keine Sperren.** Spätere Schritte bleiben klickbar. Ein „erst freischalten,
  wenn Schritt 1 erledigt ist" bräuchte gespeicherten Zustand, und `localStorage` ist
  ausgeschlossen. Der Pfad zeigt die Reihenfolge, er erzwingt sie nicht.
- **`?path=<id>` verlinkt einen Pfad direkt** und lässt sich mit `?lang=` kombinieren.
- **Eine unbekannte `id` in `steps`** meldet die Konsole beim Laden. Stillschweigend
  verschwinden darf ein Tippfehler nicht.

**Warum die Liste nicht in einer eigenen Datei liegt:** `fetch` auf eine `paths.json` scheitert
über `file://`, und eine `paths.js` per `<script src>` würde zwar laufen, aber die Eigenschaft
brechen, dass jede Datei für sich weitergegeben werden kann. Wächst die Liste stark, ist das
Auslagern eine Zeile Arbeit — bis dahin bleibt sie in `index.html`.

## Harte Regeln

**Neues Modul immer in `index.html` registrieren.** Die Startseite kennt nur, was in
`const TOPICS = [ ... ]` steht. Ohne Eintrag ist das Modul unsichtbar. Das ist der
häufigste Fehler.

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
Reiter als `role="tablist"` mit Pfeiltastennavigation. `prefers-reduced-motion` respektieren.

**Jedes Modul endet mit einem Pointe-Kasten** — dem einen Satz, der hängen bleiben soll.

## Gestaltung

Ein Akzent trägt, einer warnt, der Rest ist Grau. Die Signalfarbe erscheint an höchstens
zwei Stellen pro Bildschirm; ist sie überall, ist sie nirgends.

Bewegung nur, wo sie etwas aussagt. Ein Balken, der auf seinen Wert wächst, erklärt etwas.
Ein Element, das beim Scrollen einfliegt, hält nur auf.

Zahlen mit `font-variant-numeric: tabular-nums`, Kennungen und Codes in der Monospace.

Höchstens vier Reiter pro Modul. Reiter sind für Facetten derselben Frage da, nicht für
verschiedene Themen — sonst sind es zwei Module.

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
    for f in sorted(glob.glob("*.html")):
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
    pg = b.new_page(); pg.goto((BASE / "index.html").as_uri()); pg.wait_for_timeout(500)
    for h in pg.eval_on_selector_all(".lnk", "e=>e.map(x=>x.getAttribute('href'))"):
        print(("OK   " if (BASE / h).exists() else "FEHLT"), h)
    b.close()
EOF
```

Überlauf muss überall `0` sein, die Fehlerliste leer, alle Links vorhanden.

Zusätzlich nach Resten einer früheren Fassung suchen, wenn sich Namen geändert haben:

```bash
grep -rn -E "Schönbrunn|Anna Berger|four outlets|bakery" *.html
```

Ohne Netzzugriff die Prüfung überspringen und das im Pull Request ausdrücklich vermerken,
statt sie stillschweigend auszulassen.

## Pull Request

Beschreiben, **was** geändert wurde und **warum**, dazu das Prüfergebnis. Wenn etwas offen
geblieben ist oder eine Annahme getroffen wurde, das an den Anfang stellen — nicht ans Ende.

Foliensätze sind Binärdateien; ihre Unterschiede sind im Diff nicht lesbar. Bei Änderungen
an einem `.pptx` in der Beschreibung sagen, was sich inhaltlich geändert hat.
