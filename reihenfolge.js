/* =====================================================================
   DIE REIHENFOLGE DER KACHELN AUF DER STARTSEITE

   Hier steht nur, in welcher Folge die Module erscheinen. Was ein Modul
   ist — Titel, Kacheltext, Spur, Verweise — steht weiter in index.html
   in const TOPICS; dort spielt die Reihenfolge keine Rolle mehr.

   Sortieren heisst: eine Zeile an eine andere Stelle schieben.

   Drei Dinge dazu:

   - Die Kennung muss zu einer id aus TOPICS passen. Steht hier eine,
     die es dort nicht gibt, meldet die Konsole das beim Laden.
   - Ein Modul, das hier fehlt, verschwindet nicht. Seine Kachel rutscht
     ans Ende, und die Konsole sagt auch das. Ein neues Modul ist damit
     sofort sichtbar, auch wenn diese Datei vergessen wurde.
   - Der Text hinter der Kennung ist eine Lesehilfe und sonst nichts.
     Wird ein Modul umbenannt, darf er nachgezogen werden; muss er aber
     nicht, denn gelesen wird allein die Kennung.

   Die Lernpfade haben ihre eigene Reihenfolge: Sie steht in index.html
   in const PATHS, in der Zeile steps des jeweiligen Pfads.

   Fehlt diese Datei, laeuft index.html trotzdem — dann gilt die Folge
   der Liste in TOPICS.
   ===================================================================== */
const REIHENFOLGE = [
  "werkstatt",         // Die Werkstatt — wie diese Plattform gebaut ist
  "case",              // Sofias Coffee Dream — der Fall
  "cube",              // Der Cube
  "semantik",          // Semantische Datenmodelle
  "scd",               // Slowly Changing Dimensions
  "olap",              // MOLAP, ROLAP und HOLAP
  "arch",              // BI-Referenzarchitektur
  "bsc",               // Balanced Scorecard
  "pyramid",           // Controlling-Pyramide (Reichmann)
  "scc",               // Supply Chain Controlling
  "risiko-intro",      // Risikomanagement: der Begriff
  "risiko",            // Der Risikomanagement-Prozess
  "risiko-werkstatt",  // Die Risikoanalyse-Werkstatt
  "kpi",               // Kennzahlensysteme
  "etl",               // ETL und Datenqualität
  "cyber-intro"        // Einführung in Cyber-Security
];
