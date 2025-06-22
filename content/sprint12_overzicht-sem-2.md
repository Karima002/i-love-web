# Algemeen

| Term                  | Uitleg                                                                                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Dynamische data**   | Dynamische data komt uit een database en kan bijvoorbeeld door een klant of opdrachtgever zelf aangepast worden. Teksten en plaatjes schrijf je niet in de HTML, maar haal je met een API uit een database. Een dynamische site maakt de inhoud op aanvraag aan. In plaats van duizenden aparte HTML-bestanden, gebruik je: <ul><li>Een database voor de gegevens.</li><li>HTML-templates die automatisch worden ingevuld.</li></ul> |
| **Statische website** | Een statische site geeft altijd exact dezelfde HTML-pagina terug bij een bepaald adres. Elke productpagina moet je apart aanmaken. Bij veel pagina’s wordt dit lastig en tijdrovend. <br> Bron: Client-server overview - Learn web development \| MDN |

---

# JSON

| Term                | Uitleg                                                                                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie JSON**  | Verzameling van gegevens die bij elkaar horen. Het is een formaat van gegevens, vooral om makkelijk en snel data over te brengen tussen software.        |
| **Voorbeeld JSON**  | ```json { "naam": "Lisa", "leeftijd": 28, "Student": false, "interesses": ["reizen", "programmeren"] } ```                                              |
| **JSON object**     | JSON object bestaat uit een lijst (array) van meerdere objecten. <br> **2 objecten in 1 array:** ```json [ { "name": "FDND Student", "id": 234, "github_handle": "fdnd" }, { "name": "Iemand anders", "id": 456, "github_handle": null } ] ``` |
| **JSON.parse**      | De JSON.parse() methode in JavaScript zet een JSON-string ("name: json") om in een JavaScript-object.                                                   |

Bron: JSON.parse() - JavaScript \| MDN

---

# API en HTTP

| Term         | Uitleg                                                                                                                                                                                                                       |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **API**      | Een stuk software waar je met andere software tegenaan kunt praten. Bijvoorbeeld: je app vraagt het weer op van een weerdienst via hun API.                                           |
| **REST API** | Communiceren via HTTP wordt een REST API genoemd. REST API gebruikt standaard HTTP-methodes zoals GET, POST, DELETE. Elke REST API is een API, maar niet elke API is een REST API.     |
| **HTTP**     | HTTP staat voor HyperText Transfer Protocol. Het beschrijft hoe verzoeken naar de server worden gestuurd en hoe de server reageert. <ul><li>**GET**: informatie ophalen.</li><li>**POST**: gegevens verzenden.</li></ul> |

---

# HTTP Methodes

| Methode | Wat doet het?          | Voorbeeld                           |
|---------|------------------------|-------------------------------------|
| **GET** | Ophalen van gegevens   | Haal gebruikerslijst op             |
| **POST**| Versturen              | Voeg een nieuwe gebruiker toe       |
| **PUT** | Helemaal vervangen     | Werk een bestaande gebruiker bij    |
| **PATCH**| Gedeeltelijk bijwerken| Update alleen de naam               |
| **DELETE**| Verwijderen van data | Verwijder een gebruiker             |

---

# Data fetchen

| Term         | Uitleg                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------|
| **Fetch API**| De Fetch API biedt een JavaScript-interface om HTTP-verzoeken te doen en de antwoorden te verwerken.|
| **Fetch()**  | Met de Fetch API doe je een verzoek door de functie fetch() aan te roepen. Je geeft aan fetch() een URL, of een Request-object met instellingen.|
| **Promise**  | Fetch geeft een promise terug zodra je een verzoek verstuurt. Deze wordt later vervuld of afgewezen.|

---

# NodeJS en co.

| Term          | Uitleg                                                                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **NodeJS**    | Server-side software waarmee je dynamische websites kunt maken. Je kunt JavaScript op de server gebruiken.                                                  |
| **NPM**       | NodeJS Package Manager om afhankelijkheden voor een project te installeren.                                                                                 |
| **Express.js**| Een framework bovenop Node.js, waarmee je makkelijker webservers en API's bouwt. Routes zoals GET en POST zijn eenvoudig te definiëren.                      |
| **Liquid**    | Gebruiken we om HTML te renderen met tags `{% %}` en uitvoer `{{ }}`.                                                                                       |
| **Directus**  | Een systeem om content te beheren via een admin-omgeving en automatisch een API te genereren.                                                              |

---

# Sorteren

| Term                  | Uitleg                                                                                                                                                                    |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Query parameter**   | Een query parameter is een stukje extra informatie dat je aan een URL toevoegt om bijvoorbeeld data te filteren, sorteren of te zoeken. Het helpt de server begrijpen wat je precies wilt zien. |
| **Vraagteken**        | `https://fdnd.directus.app/items/person/?sort=name`<br>Met het vraagteken geef je aan dat er informatie komt.                                                            |
| **Sorteren**          | Wil je sorteren op geboortedatum, dan gebruik je:<br>`https://fdnd.directus.app/items/person/?sort=birthdate`                                                            |
| **Omdraaien sorteren**| Wil je het omdraaien (bijvoorbeeld van jong naar oud in plaats van oud naar jong), dan zet je een minteken (`-`) voor de parameter:<br>`https://fdnd.directus.app/items/person/?sort=-birthdate` |
| **Bron**              | Query Parameters \| Directus Docs                                                                                                                                       |

---

# Filteren

| Term                                | Uitleg                                                                                                                                                     |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **HTML tag**                        | Sorteer op `<body>` tag als favoriet:<br>`https://fdnd.directus.app/items/person/?filter={"fav_tag":"<body>"}`                                             |
| **Kleur**                           | Directus werkt met hex kleurcodes, dus je moet het `#`-symbool omzetten in `%23`. Voor de kleur rood (`#ff0000`) gebruik je:<br>`https://fdnd.directus.app/items/person/?filter={"fav_color":"%23ff0000"}` |
| **Sorteren op specifieke letter**   | Filter op namen die met een bepaalde letter beginnen. Voorbeeld: `D` of `K`:<br>`https://fdnd.directus.app/items/person?fields=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K` |
| **Bevat specifiek woord**           | Filter op specifieke woorden, bijvoorbeeld: `frontend`:<br>`https://fdnd.directus.app/items/person/?filter={"bio":{"_contains":"frontend"}}`               |
| **Tussen .. En ..**                 | Filter op een bereik, bijvoorbeeld geboortedatums tussen 1990 en 2000:<br>`https://fdnd.directus.app/items/person/?filter={"birthdate":{"_between":["1990-01-01","2000-12-31"]}}` |
| **Zoeken in database**              | Zoek naar een specifiek woord in de database, bijvoorbeeld: `frisbee`:<br>`https://fdnd.directus.app/items/person/?search=frisbee`                         |
| **Filteren en sorteren combineren** | Combineer filters en sortering, bijvoorbeeld:<br>`https://fdnd.directus.app/items/person/?filter={"fav_tag":"%3Csection%3E"}&sort=name`                     |

---

# Routes

| Term             | Uitleg                                                                                                                                   |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **app.**         | App is een instantie van Express.                                                                                                       |
| **get**          | `Get` is de HTTP-verzoeksmethode die bepaalt wat voor soort verzoek je doet (bijv. `get`, `post`).                                       |
| **/student/:id** | Dit is een pad op de server.                                                                                                             |
| **Async**        | Async is een JavaScript keyword dat aangeeft dat een functie asynchroon is. Dit betekent dat de functie niet blokkeert terwijl hij wacht. |
| **Request, response** | De `handler`-functie wordt uitgevoerd wanneer de route overeenkomt. `Req` bevat informatie over het verzoek (bijv. URL), en `res` stuurt het antwoord terug naar de gebruiker. |

---

# GET en POST

| Term  | Uitleg                                                                                                                                                                                     |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **HTTP** | HTTP is een protocol waarmee browsers tegen servers kunnen praten. Het maakt gebruik van URLs om resources zoals HTML, CSS, afbeeldingen en JSON-bestanden op te halen.                 |
|         | **Kenmerken:**                                                                                                                                                                           |
|         | <ul><li>Browsers kunnen een URL via HTTP binnenhalen (fetchen).</li><li>Een NodeJS-server kan een URL via HTTP binnenhalen, bijvoorbeeld van Directus.</li></ul>                         |
| **GET** | Voor elke URL die je opvraagt, moet je bepalen met welke methode dat gebeurt. Standaard is dat GET. Elk adres dat je invoert in je browser zorgt voor een GET request. GET requests halen alleen gegevens op. |
| **POST**| Met een POST geef je aan dat je iets wil veranderen. Een typische POST is het versturen van een formulier. Alles wat iets verandert in een database heeft een formulier nodig.           |
| **Let op!** | Niet elk `<form>` hoeft een POST te doen. Je kunt ook GET requests uitvoeren vanuit een formulier, bijvoorbeeld bij een zoekformulier met `<input type="search">`.                   |
