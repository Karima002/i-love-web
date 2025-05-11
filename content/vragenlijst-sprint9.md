__1. Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt__
- 1pnt
- NodeJS wordt gebruikt voor backend-ontwikkeling, API's en het bouwen van webservers.
- In mijn project gebruik ik NodeJS om bestanden te lezen, data te verwerken en pagina op de server te zetten.
- https://github.com/Karima002/i-love-web/blob/54eec488e5a0692cd24ffddc73d606442afee16a/server.js#L78-L82

__2. Ik weet wat het doel van package.json is en heb hier aanpassingen in gemaakt__
- 2pnt. Ik heb een eigen package.json gemaakt in mijn i-love-web.
- https://github.com/Karima002/i-love-web/blob/main/package.json

__3. Ik heb met npm packages geïnstalleerd en gebruikt in het bestand server.js__
- 2pnt naast npm install en npm init gebruikt. Geen npm packages gebruikt, maar weet wel dat het de eerste regel is in de server.js.
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/9106d930e26c76a78f913ce1040c3f07ac11b503/server.js#L3

__4. Ik kan met commando’s in de terminal een NodeJS project stoppen en starten__
- 2pnt
- ctrl + c nieuwe line
- pijl omhoog geschiedenis comondo’s
- [|] voor het verwijderen van andere geopende terminals

__5. Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen__
- 2pnt 
- De Server.JS wordt 1 keer geladen. Als je daar iets aanpast ziet de NodeJS het niet pas na herstarting.

__6. Ik heb een strategie voor debuggen in NodeJS__
- 2pnt
- Ik gebruik console.log en inspector voor debugging
- Ook gebruik ik de inspector om te weten waar het mis gaat
- Als derde optie kan ik ook de paginabron weergegeven om te weten waar linkjes naartoe leiden.

__7. Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen__
- 1pnt
- Express.js is een framework voor Node.js dat het makkelijker maakt om webservers en API's te bouwen.
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L3

__8. Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken__
- 3pnt
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L27-L104

__9. Ik weet wat request en response argumenten zijn in een functie voor het laden van data__
- 2pnt 
- req (request) bevat gegevens van de client, zoals URL-parameters en formdata.
- res (response) bepaalt wat de server terugstuurt naar de client.
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L28

__10. Ik heb gebruik gemaakt van een request parameter om specifieke data te laden__
- 2pnt 
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L45-L49

__11. Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken__
- 3pnt
- Liquid heb je nodig om dynamische HTML kunt genereren binnen Express.js. Express.js zorgt voor de server maar het weet niet hoe het HTML moet maken. Daarom koppel je de template engine  Liquid aan Express
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/views/objects.liquid#L30-L33

__12. Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderen van een pagina__
- 3pnt
- Hiervoor gebruiken we  response.render("index.liquid", )
-  https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L60

__13. Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken__
-  3pnt
- bron liquid filters: https://shopify.dev/docs/api/liquid/filters
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/views/objects.liquid#L68


__14. Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view__
- 3pnt 
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L27-L104

__15. Ik weet waar een foreach loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen__
- 2pnt
- Hiermee kun je een lijst dynamisch weergeven in HTML.
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/views/acquisitionar.liquid#L36-L42

__16. Ik kan in Liquid een controle maken waarmee een image niet getoond wordt als deze niet in de database is ingevuld__
- 2pnt
- Dit is mogelijk met een if els state
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/views/objects.liquid#L15-L20

__17. Ik heb een strategie voor debuggen in Liquid__
- 2pnt
- Ik gebruik console.log en inspector voor debugging
- Ook gebruik ik de inspector om te weten waar het mis gaat
- Als derde optie kan ik ook de paginabron weergegeven om te weten waar linkjes naartoe leiden.

__18. Ik kan data fetchen uit een REST API__
- 3pnt
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L48

__19. Ik snap het verschil tussen HTTP requests van de methodes GET en POST__
- 2pnt
- GET: https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L76-L86
- POST: https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L135-L152

__20. Ik kan data uit een REST API filteren of sorteren__
- 1pnt
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L82

__21. Ik snap wat het async keyword doet in JavaScript code__
- 0pnt

__22. Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON__
- 0pnt

__23. Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten__
- 2pnt
-  Client-side: draait in de browser 
- Server-side: draait in Node.js

__24. Ik kan formulier data die is ge-POST opslaan in een variabele op de server en gebruiken bij het renderen van een pagina__
- 2pnt

__25. Ik kan formulier data die is ge-POST door middel van een POST of PATCH HTTP request opslaan in de REST API__
- 2pnt
- https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/93920162ba655bedb4ff5789d1d30df6c9fe56e0/server.js#L119-L125
