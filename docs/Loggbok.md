# Loggbok

### Fredag 2 oktober
* Valde sagan _Den fula ankungen_.
* Skapade en databas med den grundläggande strukturen av två tabeller.

### Tisdag 6 oktober
* Redigerade sagan för att göra den kortare och åtgärda stav-, grammatik- och andra formateringsfel.

### Torsdag 8 oktober
* Redigerade sagan för att göra den kortare och åtgärda stav-, grammatik- och andra formateringsfel.
* Lade in ungefär hälften av sagans innehåll i flödesschemat.

### Fredag 9 oktober
* Lärde mig hur man gör för att routern ska hämta ID från URL:en och hämta data från databasen.
* Lade in resten av sagans innehåll i flödesschemat.
* Gav alla steg i flödesschemat ett unikt ID.
* Tog bort lite mer icke-essentiellt innehåll ur sagan.
* Skrev om cirka 80 % av sagan till förenklad du- och presens-form.

### Lördag 10 oktober
* Skrev klart de sista delarna av den bearbetade texten och finslipade flödesschemat lite.

### Söndag 11 oktober
* Skapade om databasen med förbättrad struktur och namngivning.
* Förde in hela storyn i databasens tabell `pages` (kopierade från textdokumentet till en CSV-fil som jag bearbetade med hjälp av regex).
* Förde in alla länkar i databasens tabell `links`.
* Skapade en databasdump och laddade upp den till Drive.

### Tisdag 13 oktober
* Flyttade loggboken från Google Docs till GitHub Wiki
* Påbörjade UI-designen

### Onsdag 14 oktober
* Arbetade med UI-designen
    * Reviderade spel-layouten och lade till rivet papper
    * Valde färger och typsnitt (men dessa kommer nog ändras)
    * Påbörjade startsidan

### Torsdag 15 oktober
* Skapade en `page`-route som tittar på en `id`-parameter i URL:en
* Skapade en `page`-view som visar sidnummer och `body`-text från `pages`-tabellen i databasen
* Tog bort den förinställda `users`-routen

### Fredag 16 oktober
* Ändrade `db`-modellen så att den använder promises för databasfrågor
* Ändrade `page`-vyn
    * Länkar visas nu från databasen
    * Länkar utan text visar "Nästa"
    * Slutsidorna visar länken "Tillbaka till startsidan"
* Reviderade UI-designen med nytt gult färgtema och mer sagobok-iga typsnitt

### Lördag 17 oktober
* Färdigställde UI-designen för spelet och startsidan

### Tisdag 20 oktober
* Lade till saknad markup
    * Text på startskärmen
    * "Börja om"-knapp på spelskärmen
    * Navbar
* Stilade hela startskärmen och spelskärmen
    * Typsnitt och färger
    * Layout och positionering
    * Margin och padding
    * Typografi och knappar
    * Rivet-papper-effekt på containern
    * Navbar och footer

### Torsdag 22 oktober
* Lade till en saknad länk på sida 4 i databasen
* Lade till styckesindelning för sagans text
* Lade till animation på papper-containern och knapparnas hover-effekt
* Justerade några textstorlekar och marginaler
* Gömde "Börja om"-knappen på sida 1
* Åtgärdade ett problem där papper-containern överlappade navbar och footer

### Fredag 23 oktober
* Stilade `::selection`
* Gjorde sidan responsiv med breakpoints för mobil
* Optimerade bilderna av rivet papper
* Förbättrade positioneringen av det rivna pappret (använder inte längre `transform`)

### Söndag 25 oktober
* Redigerade lite text i sagans databas för att göra sagan mer sammanhängande
* Redigerade texten på startsidan så att den blev enklare
* Lät min mamma speltesta och hon hade inga klagomål (jag är dock medveten om att mammor har en tendens att inte ha klagomål)

### Tisdag 3 november
* Skrev [post mortem](https://github.com/marcusbillman/wsp1-gamebook/wiki/Post-mortem), vilket markerar slutet på projektet. Hej då!

### Onsdag 11 november
* Åh, en till sak. Lade till dokumentationen i en mapp i repositoryt eftersom Jens ville ha det så.
