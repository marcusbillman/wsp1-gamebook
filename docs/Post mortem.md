# Post mortem

### Inledning

Projektets syfte är att skapa ett soloäventyr ([Wikipedia](https://sv.wikipedia.org/wiki/Solo%C3%A4ventyr)) baserat på en folksaga som kan spelas i webbläsaren. Spelets huvudsakliga målgrupp är barn. Mitt soloäventyr är baserat på _Den fula ankungen_ av H.C. Andersen.

Spelets backend ska innefatta en dynamisk webbserver som hämtar sagans innehåll från en databas och använder templater för att generera sidor som sedan skickas till klienten. Användaren ska kunna göra val genom att klicka på länkar som tar denne till olika delar av äventyret.

### Bakgrund

Projektet använder följande tekniker:
- Webbservern drivs på Node.js-ramverket Express.
- Sagans text och länkar finns i en MySQL-databas.
- Templaterna använder Pug-motorn.
- Stilmallarna är skrivna i Sass, eftersom det förenklar nästling och hierarki.

**Detta är en sammanfattning av processen. Alla steg i punktform finns i min [loggbok](https://github.com/marcusbillman/wsp1-gamebook/wiki/Loggbok).**

Jag började med att leta efter en lämplig saga som intresserade mig, inte var för kort, och som innehöll rum för anpassningar där jag kunde lägga till val och sidospår. Jag valde _Den fula ankungen_ från [Sagosidan](https://sagosidan.se/den-fula-ankungen/). Den var lite väl lång, så jag behövde bearbeta den en hel del i ett [Google Dokument](https://docs.google.com/document/d/1u5z6cIKHUDQbtocbRcvWk8-JjXpTUlFn6maNVr8XJ1E/edit?usp=sharing). Jag kasserade mindre viktiga delar, rättade till skrivfel med mera och lyckades halvera sagans längd.

Sedan påbörjade jag mitt [flödesschema på diagrams.net](https://drive.google.com/file/d/186KD1aWBwMecRII_4fiTelJVtgNRTVg9/view?usp=sharing) där jag delade upp sagan i korta sidor och kopplade ihop dem med val som användaren gör. Jag började även föra in sagans text i min databas. Jag itererade över många små ändringar i sagan och uppdaterade dokumentet och flödesschemat eftersom. När jag kände mig klar så förde jag in all text från dokumentet och alla länkar in i min databas.

För att få inspiration påbörjade jag en UI-design i Figma. Jag byggde också en _minimum viable product_ (MVP) baserad på standardprojektet från Express generator. Den kunde visa sagans sidor och hade fungerande länkar för att ta sig mellan sidorna, med fungerande koppling till databasen. Sedan färdigställde jag designen, som också gick igenom flera iterationer för att matcha målgruppen, och till sist så implementerade jag designen.

Till sist testade jag soloäventyret en hel del själv och även min mamma fick agera testare. Jag finslipade på några delar av sagans text för att få ett bättre flow och sedan kallade jag projektet klart.

### Positiva erfarenheter

- För att föra in hela storyn i databasens tabell `pages` så kopierade jag texten från mitt Google Dokument till en textfil som jag bearbetade till CSV-format med hjälp av regex. Jag använde sedan ett [onlineverktyg](http://convertcsv.com/csv-to-sql.htm) för att skapa en databasdump från CSV-filen. Den metoden fungerade väl och effektivt.
- Jag blev nöjd med UI-designen. Den är olik någon annan UI-design jag gjort förut och jag blev speciellt nöjd med effekten av rivet papper på containern, som jag åstadkom genom att sätta bakgrundsbilder på containerns `::before`- och `::after`-pseudoelement.
- Det var första gången jag använde Express och jag tyckte att det gick väldigt bra att göra routes och länkar som tar användaren till rätt sida baserat på sidans ID.
- Jag är nöjd med mitt sätt att dela upp texten i flera stycken på samma sida. När jag importerade texten från mitt Google Dokument till databasen följde det med radbrytningar. I min route så splittar jag textsträngen från databasen vid `\n` och får då en array av stycken som jag sedan loopar över i min Pug-view för att få individuella `p`-element.

### Negativa erfarenheter

- Jag hade några problem med MySQL i början. Jag fick ett autentiseringsfel när jag skulle ansluta med Express-servern och jag fick även vissa anslutningsfel i TablePlus. Det första löste sig genom att uppdatera MySQL-användaren och det andra löste sig genom omstarter och ominstallationer.
- I början var det överväldigande med alla filer i Express-projektet. Jag var förvirrad över vad en route var, hur man använder variabler i views och vad alla JavaScript-filer gör. Efter några veckor så började jag mig dock förstå och känna mig mer bekväm bland filerna.
Dessa negativa erfarenheter är sådant som kommer försvinna snabbt eftersom jag får mer erfarenhet. Redan vid nästa projekt så kommer dessa knappt vara problem över huvud taget.

### Sammanfattning

Överlag så var detta ett roligt och lärorikt projekt och jag är nöjd med slutprodukten. Jag lärde mig hur man skapar en grundläggande webbserver, servar dynamiska templatbaserade sidor och hur man använder MySQL-databaser. Jag fick flera "wow"-upplevelser då jag verkligen kände hur fascinerande och roligt webbutveckling och webbserverprogrammering är – till exempel när texten från databasen för första gången visades på sidan och när jag listade ut hur man hanterar variabler och villkor i Pug. Pug kändes i början förvirrande och krångligt, men jag upptäckte snabbt hur praktiskt och användbart det är, speciellt då man kan dölja och visa element baserat på villkor.

Som en vidareutveckling på mitt soloäventyr hade jag velat göra om den till en Single-Page Application för att göra den snabbare och enklare kunna göra övergångar och animationer, men då används inte längre Pug-templater som fylls i på serversidan. Jag hade också velat göra sagan längre och ge den fler sidospår för att göra den mer intressant.