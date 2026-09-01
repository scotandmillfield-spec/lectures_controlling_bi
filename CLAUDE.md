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
