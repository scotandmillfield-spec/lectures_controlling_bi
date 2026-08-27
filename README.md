# Sofia's Coffee World — Lehrmaterial BI & Controlling

Interaktive Lehrmodule für die Vorlesungen zu Business Intelligence und Controlling.
Ein durchgehender Fall — ein Wiener Kaffeehausbetrieb — trägt alle Themen.

**Startseite:** [`index.html`](index.html) · live unter
`https://<benutzername>.github.io/<repo>/` (nach Aktivierung von GitHub Pages)

---

## Aufbau

```
.
├── index.html                      Startseite mit Kacheln, Filter und Suche
├── PROJECT-CANON.md                Namen, Zahlen und Festlegungen des Falls
├── scd-dashboard.html              Slowly Changing Dimensions
├── bi-reference-architecture.html  BI-Referenzarchitektur
├── balanced-scorecard.html         Balanced Scorecard
└── decks/                          Foliensätze zum Herunterladen
```

Jede HTML-Datei ist in sich geschlossen: kein Build, kein Server, keine Abhängigkeit außer
Webfonts mit Fallback. Doppelklick genügt, und die Dateien funktionieren auch auf einem Stick
oder in einer Lernplattform.

## Lokal ansehen

```bash
git clone https://github.com/<benutzername>/<repo>.git
cd <repo>
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Ein Webserver ist nicht nötig. Wer trotzdem einen möchte:

```bash
python3 -m http.server 8000
```

## GitHub Pages einschalten

Einmalig: *Settings* → *Pages* → *Source: Deploy from a branch* → `main` / `/ (root)`.
Nach etwa einer Minute liegt die Startseite unter der oben genannten Adresse. Jeder weitere
Push aktualisiert sie automatisch.

## Ein Modul ergänzen

1. Neue HTML-Datei neben `index.html` legen, Foliensätze in `decks/`.
2. In `index.html` die Zeile `const TOPICS = [` suchen und einen Eintrag einfügen.
   Die Startseite kennt nur, was in dieser Liste steht — ohne Eintrag bleibt das Modul
   unsichtbar.
3. `PROJECT-CANON.md` ergänzen, wenn neue Namen oder Zahlen dazukommen.

Der genaue Aufbau eines Eintrags steht im Abschnitt „Ein Modul ergänzen" am Fuß der
Startseite, samt Beispielblock zum Kopieren.

## Vor dem Push prüfen

```bash
pip install playwright --quiet && playwright install chromium
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
    b.close()
EOF
```

Überlauf muss überall `0` sein, Fehlerliste leer.

## Konventionen

- **Theme:** Alle Farbwerte liegen im `:root`-Block jeder Datei. Beim Umfärben müssen alle
  Dateien denselben Block tragen.
- **Foliensätze** sind Binärdateien. Git verwaltet sie, aber Unterschiede zwischen zwei
  Fassungen sind nicht lesbar — bei größeren Änderungen lieber die Fassung in der
  Commit-Nachricht beschreiben.
- **`PROJECT-CANON.md` ist verbindlich.** Namen und Zahlen, die dort stehen, gelten in allen
  Modulen. Wer sie ändert, ändert sie überall.

## Lizenz und Nutzung

Lehrmaterial. Der Sofia-Cartoon stammt aus dem Folienmaster und ist entsprechend
gekennzeichnet (Drozdzynski, 2025). Vor einer Veröffentlichung als öffentliches Repository
prüfen, ob die Nutzungsrechte an Cartoon, Schriften und Corporate Design das abdecken.
