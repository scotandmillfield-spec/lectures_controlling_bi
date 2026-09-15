/* =====================================================================
   DIE REIHENFOLGE DER KACHELN

   Hier steht nur, in welcher Folge die Module erscheinen. Was ein Modul
   ist — Titel, Kacheltext, Spur, Verweise — steht in index.html in
   const TOPICS; dort spielt die Reihenfolge keine Rolle.

   Sortieren heisst: eine Zeile an eine andere Stelle schieben.

   - Die Kennung muss zu einer id aus TOPICS passen. Steht hier eine,
     die es dort nicht gibt, meldet die Konsole das beim Laden.
   - Ein Modul, das hier fehlt, verschwindet nicht. Seine Kachel rutscht
     ans Ende, und die Konsole sagt auch das.
   - Der Text hinter der Kennung ist eine Lesehilfe und sonst nichts.

   Fehlt diese Datei, laeuft index.html trotzdem — dann gilt die Folge
   der Liste in TOPICS.
   ===================================================================== */
const REIHENFOLGE = [
  "werkstatt",         // Die Werkstatt — wie diese Plattform gebaut ist
  "risiko-intro",      // Risikomanagement: der Begriff
  "risiko",            // Der Risikomanagement-Prozess
  "risiko-werkstatt",  // Die Risikoanalyse-Werkstatt
  "bilanz-aufbau",     // Die Bilanz nach HGB
  "bilanz-guv",        // Die Gewinn- und Verlustrechnung
  "bilanz-kennzahlen", // Jahresabschlussanalyse mit Kennzahlen
  "bilanz-buchungssaetze", // Buchungssätze und ihre Wirkung
  "liqui-begriff",     // Liquidität: der Begriff
  "liqui-bwa",         // Die BWA lesen
  "liqui-vorschau",    // Die Liquiditätsvorschau
  "liqui-tagesplan"    // Tagesvorschau und Rollierung
];
