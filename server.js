// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';




// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Om Views weer te geven, heb je Routes nodig
// Maak een GET route voor de index (meestal doe je dit in de root, als /)
// In je visitekaartje was dit waarschijnlijk index.html
app.get('/', async function (request, response) {
   // Render index.liquid uit de Views map en geef de opgehaalde data mee, in een variabele genaamd person
   response.render('index.liquid',) //Aan die view wordt een object meegegeven. Met de data uit de API, zodat die gegevens ook in die view gebruikt kunnen worden. 
})

//Nieuwe routes aanmaken voor verschillende sprints
app.get('/sprint1', async function (request, response) {
    response.render('sprint1.liquid') 
 })

 app.get('/sprint2', async function (request, response) {
    response.render('sprint2.liquid') 
 })

 app.get('/sprint3', async function (request, response) {
    response.render('sprint3.liquid') 
 })

 app.get('/sprint4', async function (request, response) {
    response.render('sprint4.liquid') 
 })

 app.get('/sprint5', async function (request, response) {
    response.render('sprint5.liquid') 
 })

 app.get('/sprint6', async function (request, response) {
    response.render('sprint6.liquid') 
 })

 app.get('/sprint7', async function (request, response) {
    response.render('sprint7.liquid') 
 })

 app.get('/sprint8', async function (request, response) {
    response.render('sprint8.liquid') 
 })

 app.get('/experimenten', async function (request, response) {
   response.render('experimenten.liquid') 
})

app.get('/weloveweb', async function (request, response) {
   response.render('weloveweb.liquid') 
})
app.get('/core', async function (request, response) {
   response.render('core.liquid') 
})

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
