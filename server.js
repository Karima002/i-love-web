// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs'

//Package voor het omzetten van markdown naar HTML
import { marked } from 'marked'

//Frontmatter voor metadata
import matter from 'gray-matter'


// zodat we bestanden en mappen kunnen inlezen. 
import { readdir, readFile } from 'node:fs/promises'

//bij het starten van de server willen we alle bestanden in de markdown (content) inlezen. Voorheen deden we het met fetch nu gaat het lokaal
const files = await readdir('content')

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


 app.get('/content-semester-1', async function (request, response) {
   response.render('contentsemester1.liquid', {files: files}) 
})

app.get('/content-semester-1/:slug', async function (request, response) {
   const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' }) //je maakt een variable aan. Je pakt de file met de slg die je op regel 76 hebt aangegeven. Achter elke bestand heb je .md en daarom geef je dit ook hier mee
   const opgemaakt = marked.parse(fileContents) //  content wordt omgezet met marked in HTML.
   const { content, data } = matter(fileContents);
      response.render('artikel.liquid', {
      file: opgemaakt,
      title: data.title,
      author: data.author || 'Onbekend',
      date: data.date || 'Datum nader te bepalen '
   }) 
})
app.get('/sprint10', async function (request, response) {
   const files = (await readdir('content')).filter(file => file.startsWith('sprint10_')); // Alleen de nieuwe Markdown-bestanden laden die starten met 'sprint10_'
   response.render('sprint10.liquid', { files: files });
});

app.get('/sprint10/:slug', async function (request, response) {
   const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' }) 
   const opgemaakt = marked.parse(fileContents) 
   const { content, data } = matter(fileContents);
      response.render('artikel.liquid', {
      file: opgemaakt,
      title: data.title,
      author: data.author || 'Onbekend',
      date: data.date || 'Datum nader te bepalen '
   }) 
})

// Sprinyt 11
app.get('/sprint11', async function (request, response) {
   const files = (await readdir('content')).filter(file => file.startsWith('sprint11_')); // Alleen de nieuwe Markdown-bestanden laden die starten met 'sprint10_'
   response.render('sprint11.liquid', { files: files });
});

app.get('/sprint11/:slug', async function (request, response) {
   const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' }) 
   const opgemaakt = marked.parse(fileContents) 
   const { content, data } = matter(fileContents);
      response.render('artikel.liquid', {
      file: opgemaakt,
      title: data.title,
      author: data.author || 'Onbekend',
      date: data.date || 'Datum nader te bepalen '
   }) 
})

app.get('/sprint12', async function (request, response) {
   const files = (await readdir('content')).filter(file => file.startsWith('sprint12_')); // Alleen de nieuwe Markdown-bestanden laden die starten met 'sprint10_'
   response.render('sprint12.liquid', { files: files });
});

app.get('/sprint12/:slug', async function (request, response) {
   const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' }) 
   const opgemaakt = marked.parse(fileContents) 
   const { content, data } = matter(fileContents);
      response.render('artikel.liquid', {
      file: opgemaakt,
      title: data.title,
      author: data.author || 'Onbekend',
      date: data.date || 'Datum nader te bepalen '
   }) 
})



//slug is onderdeel van de url. je gebruikt: omdat je nog niet weet welke bestanden erin koment
 app.get('/experimenten', async function (request, response) {
   response.render('experimenten.liquid') 
})

app.get('/weloveweb', async function (request, response) {
   response.render('weloveweb.liquid') 
})

app.get('/core', async function (request, response) {
   response.render('core.liquid') 
})

app.get('/scrolldriven', async function (request, response) {
   const linkResponse = await fetch('https://fdnd.directus.app/items/links')
   const linkResponseJSON = await linkResponse.json();

   response.render('scrolldriven.liquid', {
      links: linkResponseJSON.data,
   })
})


app.post('/scrolldriven', async function (request, response) {
   await fetch('https://fdnd.directus.app/items/links', {
      method: "POST", 
      body: JSON.stringify({ //gegevens die  naar de server wordt gestuurd, omzetten in een JSON-string.
      for: "test",
      from: request.body.added_by,
      text: request.body.url
      }),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }, 
   });
  response.redirect(303, '/scrolldriven')
})

app.post('/acquisition', async function (request, response) {
  
    await fetch("https://fdnd-agency.directus.app/items/fabrique_messages", {
      method: "POST",
      body: JSON.stringify({ //gegevens die  naar de server wordt gestuurd, omzetten in een JSON-string.
        for: "Karima_" + request.body.name,  // De naam van de gebruiker, toegevoegd aan een vaste string "Karima_" voor het alleen weergeven van mijn posts.
        from: request.body.email,  // E-mail van de gebruiker
        text: request.body.description,  // De beschrijving die door de gebruiker is ingevoerd in het formulier
      }),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }, //request met post, met headers geef je aan wat er is meegegeven, je geeft informatie over wat je in de request heb meegegeven. 
    });
    
    response.redirect(303, '/en/succesfull') //Na het versturen van de gegevens naar de API wordt de gebruiker doorgestuurd naar de pagina /succesfull
  
  })


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
