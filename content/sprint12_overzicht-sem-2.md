# Algemeen

| Term               | Uitleg                                                                                                                                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Dynamische data    | Dynamische data komt uit een database en kan bijvoorbeeld door een klant of opdrachtgever zelf aangepast worden. Teksten en plaatjes schrijf je dan niet in de HTML, maar haal je met een API uit een database.  Een dynamische site maakt de inhoud op aanvraag aan. In plaats van duizenden aparte HTML-bestanden, gebruik je: • Een database voor de gegevens. • HTML-templates die automatisch worden ingevuld. |
| Statische website  | Een statische site geeft altijd exact dezelfde HTML-pagina terug bij een bepaald adres. Elke productpagina moet je apart aanmaken. Bij veel pagina’s wordt dit lastig en tijdrovend.  Bron: Client-server overview - Learn web development | MDN |

---

# JSON

| Term                | Uitleg                                                                                                                                                                                                                         |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Definitie JSON (data) | Verzameling van gegevens die bij elkaar horen. Het is een formaat van gegevens, vooral om makkelijk en snel data over te brengen tussen software.  Voorbeeld JSON data: ```CSS {   "naam": "Lisa",   "leeftijd": 28,   "Student": false,   "interesses": [ "reizen", "programmeren"] }``` |
| JSON object         | JSON object bestaat uit een lijst (array) van meerdere objecten.  2 objecten in 1 array: ```CSS [   {     "name": "FDND Student",     "id": 234,     "github_handle": "fdnd"   },   {     "name": "Iemand anders",     "id": 456,     "github_handle": null   } ]``` |
| JSON.parse          | De JSON.parse() methode in JavaScript zet een JSON-string ("name: json") om in een JavaScript-object.  Bron: JSON.parse() - JavaScript | MDN |

---

# API en HTTP

| Term        | Uitleg                                                                                                                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API         | Een stuk software waar je met andere software tegenaan kunt praten. Bijv je app vraagt het weer op van een weerdienst via hun API.                                                           |
| REST API    | Als het communiceren via een HTTP wordt gedaan dan wordt dat een REST API genoemd. Een kenmerk is dat REST API standaard HTTP methodes gebruiken zoals GET, POST, DELETE. Elke REST API is een API, maar niet elke API is een REST API. |
| HTTP        | HTTP staat voor HyperText Transfer Protocol. Je kunt het zien als de taal die je browser (zoals Chrome of Safari) gebruikt om webpagina’s op te vragen bij een server. Webbrowsers en webservers communiceren via het HTTP-protocol. Het beschrijft hoe verzoeken (zoals klikken op een link of invullen van een formulier) naar de server worden gestuurd, en hoe de server reageert:• GET wordt gebruikt om informatie op te halen. • POST wordt gebruikt om gegevens te verzenden. • Andere methoden zoals PUT, DELETE, etc. zijn geavanceerder.  Bron: Client-server overview - Learn web development | MDN |

---

# HTTP Methodes

| Methode | Wat doet het?                | Voorbeeld                       |
|---------|------------------------------|---------------------------------|
| GET     | Ophalen van gegevens         | Haal gebruikerslijst op        |
| POST    | Versturen (bijv. iets toevoegen) | Voeg een nieuwe gebruiker toe  |
| PUT     | Iets helemaal vervangen      | Werk een bestaande gebruiker bij |
| PATCH   | Iets gedeeltelijk bijwerken  | Update alleen de naam          |
| DELETE  | Verwijderen van data         | Verwijder een gebruiker        |

---

# Data fetchen

| Term        | Uitleg                                                                                                                                                             |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Fetch API   | De Fetch API biedt een JavaScript-interface om HTTP-verzoeken te doen en de antwoorden daarop te verwerken.  Bron: Using the Fetch API - Web APIs | MDN |
| Fetch()     | Met de Fetch API doe je een verzoek door de functie fetch() aan te roepen. Je geeft aan fetch() een URL (als tekst) of een Request-object, plus eventueel extra instellingen (zoals methodes, headers, body, etc.). |
| Promise     | Zodra je een verzoek verstuurt, Fetch direct een promise teruggeeft. Deze promise wordt later vervuld (resolved) als de response is binnengekomen, of afgewezen (rejected) als er een fout is opgetreden. |

---

# NodeJS en co.

| Term         | Uitleg                                                                                                                                                                             |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NodeJS       | NodeJS is server-side software waarmee je dynamische websites kunt maken. Normaal gebruik je JavaScript in je browser (bijv. op een website), maar met Node.js kun je JavaScript gebruiken op je server. |
| NPM          | Je gebruikt NPM, de NodeJS Package Manager om alle afhankelijkheden voor een project te installeren.                                                                              |
| Express.js   | We gebruiken express.js om een server te maken. Het zorgt ervoor dat je de local:host kan zien. Express.js is een framework dat bovenop Node.js draait. Maakt het makkelijker om webservers en API's te bouwen in Node.js. Het is met Express kun je makkelijker routes definiëren (GET, POST, etc.) |
| Liquid       | Gebruiken we om HTML te renderen. Er zijn twee soorten markeringen in LiquidJS: • Tags: Een tag bestaat uit een tag-naam en optionele argumenten, en zit tussen {% en %}. • Outputs (uitvoer): Een output geeft een waarde weer, eventueel met filters toegepast, en zit tussen {{ en }}. • Filters: filters gebruik om de waarde te bewerken na het plaatsen van | |
| Directus     | Wordt gebruikt om content (data) te beheren via een admin-omgeving en automatisch API te krijgen.                                                                                  |

---

# Sorteren

| Term            | Uitleg                                                                                                                                 |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Query parameter | Een query parameter is een stukje extra informatie dat je aan een URL toevoegt om bijvoorbeeld data te filteren, sorteren of te zoeken. Het helpt de server begrijpen wat je precies wilt zien. |
| Vraagteken      | https://fdnd.directus.app/items/person/?sort=name   Met het vraagteken geef je aan dar er informatie komt.                        |
| Sorteren        | Wil je sorteren op geboortedatum, dan gebruik je:  https://fdnd.directus.app/items/person/?sort=birthdate                        |
| Omdraaien sorteren | Wil je het omdraaien (bijvoorbeeld van jong naar oud in plaats van oud naar jong), dan zet je een minteken (-) voor de parameter:  https://fdnd.directus.app/items/person/?sort=-birthdate |
| Bron            | Query Parameters \| Directus Docs                                                                                                     |

---

# Filteren

| Term                     | Uitleg                                                                                                                                 |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| HTML tag                 | Sorteer op `<body>` tag als favoriet:  https://fdnd.directus.app/items/person/?filter={"fav_tag":"<body>"}                       |
| Kleur                    | Directus werkt met hex kleurcodes, dus je moet het `#`-symbool omzetten in `%23`. Voor de kleur rood (`#ff0000`) gebruik je:  https://fdnd.directus.app/items/person/?filter={"fav_color":"%23ff0000"} |
| Sorteren op specifieke letter | fdnd.directus.app/items/person/?filter={"name":{"_starts_with":"K"}}  D of K: https://fdnd.directus.app/items/person?fields=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=k |
| Bevat specifieke woord   | fdnd.directus.app/items/person/?filter={"bio":{"_contains":"frontend"}}                                                                |
| Tussen .. En ..          | fdnd.directus.app/items/person/?filter={"birthdate":{"_between":["1990-01-01","2000-12-31"]}}                                          |
| Zoeken in database       | https://fdnd.directus.app/items/person/?search=frisbee                                                                               |
| Filteren en sorteren combineren | https://fdnd.directus.app/items/person/?filter={"fav_tag":"%3Csection%3E"}&sort=name                                           |

---

# Routes

| Term               | Uitleg                                                                                                             |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| app.              | App is een instantie van Express                                                                                  |
| get               | Get is de methode = een HTTP-verzoeksmethode: bepaalt wat voor soort verzoek je doet (get, post).                  |
| /student/:id      | Pad op de server                                                                                                   |
| Async             | Async is een JavaScript keyword dat aangeeft dat een functie asynchroon is. Dit betekent dat de functie niet blokkeert terwijl hij wacht op iets wat tijd kost. |
| Request, response | HANDLER is de functie die wordt uitgevoerd wanneer de route overeenkomt. Req bevat informatie over het verzoek (bijv. URL) en res stuurt het antwoord terug naar de gebruiker. |

---

# GET en POST

| Term  | Uitleg                                                                                                                                                          |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HTTP  | - HTTP is een protocol waarmee browsers tegen servers kunnen praten.  - HTTP maakt gebruik van URLs; adressen van resources, zoals HTML, CSS, afbeeldingen, fonts, JSON bestanden, etc. Een browser kan zo'n URL via HTTP binnenhalen (fetchen).  - NodeJS server kan een URL via HTTP binnenhalen van bijvoorbeeld Directus.  - URLs voor je eigen server en website mag je zelf bepalen, via routing. Bijv: /sorteren of /object.  - URLs binnen Directus staan redelijk vast. Voor het filteren van de URL gebruiken we de Directus documentatie: Directus Docs |
| GET   | Voor elke URL die je opvraagt, moet je ook bepalen met welke method dat gebeurt. Standaard is dat GET. Elk adres dat je invoert in je browser zorgt voor een GET request. GET requests halen alleen gegevens op. |
| POST  | Met een POST geef je aan dat je iets wil veranderen. Een typische POST is het versturen van een formulier. Alles wat iets verandert in een database heeft een formulier nodig.  ! Niet elk `<form>` hoeft een POST te doen. Je kunt natuurlijk ook GET requests uitvoeren vanuit een formulier. Denk aan een zoekformulier met één `<input type="search">`. |
