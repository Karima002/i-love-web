# Overzicht sprint 7


## Algemeen

### Dynamische data
Dynamische data komt uit een database en kan bijvoorbeeld door een klant of opdrachtgever zelf aangepast worden. Teksten en plaatjes schrijf je dan niet in de HTML, maar haal je met een API uit een database.

Een **dynamische site** maakt de inhoud op aanvraag aan. In plaats van duizenden aparte HTML-bestanden, gebruik je:
- Een database voor de gegevens.
- HTML-templates die automatisch worden ingevuld.

### Statische website
Een **statische site** geeft altijd exact dezelfde HTML-pagina terug bij een bepaald adres. Elke productpagina moet je apart aanmaken. Bij veel pagina’s wordt dit lastig en tijdrovend.

Bron: [Client-server overview - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

---

## JSON

### Definitie JSON (data)
Verzameling van gegevens die bij elkaar horen. Het is een formaat van gegevens, vooral om makkelijk en snel data over te brengen tussen software.

**Voorbeeld JSON data**
```json
{
  "naam": "Lisa",
  "leeftijd": 28,
  "Student": false,
  "interesses": ["reizen", "programmeren"]
}
```

### JSON object
JSON object bestaat uit een lijst (array) van meerdere objecten.

**2 objecten in 1 array:**
```json
[
  {
    "name": "FDND Student",
    "id": 234,
    "github_handle": "fdnd"
  },
  {
    "name": "Iemand anders",
    "id": 456,
    "github_handle": null
  }
]
```

### JSON.parse
De `JSON.parse()` methode in JavaScript zet een JSON-string (`"name: json"`) om in een JavaScript-object.

Bron: [JSON.parse() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

---

## API en HTTP

### API
Een stuk software waar je met andere software tegenaan kunt praten. Bijvoorbeeld je app vraagt het weer op van een weerdienst via hun API.

### REST API
Als het communiceren via een HTTP wordt gedaan dan wordt dat een REST API genoemd. Een kenmerk is dat REST API standaard HTTP methodes gebruiken zoals GET, POST, DELETE.  
**Elke REST API is een API, maar niet elke API is een REST API.**

### HTTP
HTTP staat voor HyperText Transfer Protocol. Je kunt het zien als de taal die je browser gebruikt om webpagina’s op te vragen bij een server. Webbrowsers en webservers communiceren via het HTTP-protocol. 

**HTTP methodes:**
- `GET`: wordt gebruikt om informatie op te halen.
- `POST`: wordt gebruikt om gegevens te verzenden.
- Andere methoden zoals `PUT`, `DELETE`, etc. zijn geavanceerder.

Bron: [Client-server overview - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

### HTTP Methodes

| Methode | Wat doet het?              | Voorbeeld                   |
|---------|----------------------------|-----------------------------|
| GET     | Ophalen van gegevens       | Haal gebruikerslijst op     |
| POST    | Versturen (bijv. iets toevoegen) | Voeg een nieuwe gebruiker toe |
| PUT     | Iets helemaal vervangen    | Werk een bestaande gebruiker bij |
| PATCH   | Iets gedeeltelijk bijwerken| Update alleen de naam       |
| DELETE  | Verwijderen van data      | Verwijder een gebruiker     |

---

## Data fetchen

### Fetch API
De `Fetch API` biedt een JavaScript-interface om HTTP-verzoeken te doen en de antwoorden daarop te verwerken.

Bron: [Using the Fetch API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Fetch()
Met de Fetch API doe je een verzoek door de functie `fetch()` aan te roepen. Je geeft aan fetch() een URL (als tekst) of een Request-object, plus eventueel extra instellingen (zoals methodes, headers, body, etc.).

### Promise
Zodra je een verzoek verstuurt, Fetch direct een promise teruggeeft. Deze promise wordt later vervuld (resolved) als de response is binnengekomen, of afgewezen (rejected) als er een fout is opgetreden.

---

## NodeJS

### NodeJS
NodeJS is server-side software waarmee je dynamische websites kunt maken. Normaal gebruik je JavaScript in je browser, maar met Node.js kun je JavaScript gebruiken op je server.

### NPM
Je gebruikt NPM, de NodeJS Package Manager om alle afhankelijkheden voor een project te installeren.

### Express.js
We gebruiken express.js om een server te maken. Express.js is een framework dat bovenop Node.js draait. 
Maakt het makkelijker om webservers en API's te bouwen in Node.js. 
Met Express kun je makkelijker routes definiëren (GET, POST, etc.)

---

## Liquid

LiquidJS gebruiken we om HTML te renderen. Er zijn twee soorten markeringen in Liquid:
- **Tags**: Een tag bestaat uit een tag-naam en optionele argumenten, en zit tussen `{%` en `%}`.
- **Outputs (uitvoer)**: Een output geeft een waarde weer, eventueel met filters toegepast, en zit tussen `{{` en `}}`.
- **Filters**: filters gebruik om de waarde te bewerken na het plaatsen van `|`
