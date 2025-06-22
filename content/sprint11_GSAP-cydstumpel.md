# GSAP met Cyd Stumpel

### Mouse event 1: Starten met mouse events

codepen: https://codepen.io/Karima002/pen/azzrroe. 

##### Hierdoor gaat de cursor mee met de div: 

```JS
window.addEventListener('mousemove', (e) => {  // Uit het event (e) kunnen we clientX en clientY opvragen; dit is de cursor positie of muis coordinaten van de gebruiker.
Gsap.to('.cursor', { 
    X: e.clientX,
    Y: e.clientY,
    Stagger: 0.1 // als je een array van e lementen hebt dan wordt het uitgevoerd met een delay //je voegt wel meerdere divs toe aan de html
})
}
```

Codepen: GSAP P2 / Mouse Position [beginner] 1.0 -- DIY
Uitwerkingen: GSAP P2 / Mouse Position [beginner] 1.0 -- UITWERKING

### Mouse event 2: Reactieve custom cursors

```JS

// Aanpassen muis aan de hand van waar je op hovert (dit doe je met een target)
Gsap.to('.cursor', { 
X: e.clientX,
Y: e.clientY,
})
```


Console.log(e.target) // je wil weten welke element je hebt als je ergens over hovert. Dit kan je ook zo checken:

```JS
  if (e.target.nodeName == 'A' || e.target.closest('a')) { //de nodeName maakt de <a> een hoofdletter, met closest kan je checken of er een kind van een a is, bijv een <a> in een <span<

Gsap.to('.cursor', {
    Scale: 1 //maak de cursor groter als je over een a hovert anders:
    }) 
    }else {
Gsap.to('cursor', {
        scale: 0.33})     
})
```


// cursor in het midden van de afbeelding (zie visuele weergave image trains intro

```JS

Const width = headerImage.offsetWidth
Gsap.to(headerImage, {
    X: e.clientX - width / 2 , // we hebben de helft van de width van de afbeelding nodig
    Y: e.clientY - height / 2
})
})
}
```



### Mouse event 3 op elementen: button

// Kijk eerst even naar de CSS! Ik gebruik een clip-path met een circle functie, nog nooit clip path circle gebruikt? Kijk hier eens naar: https://bennettfeely.com/clippy/ > even in de zijbalk circle aanklikken

// Door de --clip-size, --clip-x en --clip-y waarden aan te passen met gsap kunnen we het effect maken.
// Een array met colors die we kunnen gebruiken om elke keer een random kleur uit deze lijst te weergeven
```JS

const colors = [
  '#ffcc00',
  '#66e5bf',
  '#050542',
  '#a675f5'
]

const button = document.querySelector('.button')
// we halen de boundingClientRect waarde van het button element op, hier staat onderandere het x en y coordinaat van de button op de pagina, maar ook de breedte en hoogte
let rect = button.getBoundingClientRect()

// De width, x en y veranderen wanneer je het scherm groter of kleiner maakt, maar de waarde in de rect variabele is een momentopname dus we moeten de waarde van de rect variabele op resize herbereken:
window.addEventListener('resize', () => {
  rect = button.getBoundingClientRect()
})

// Gebruik een event listener om de muispositie van de gebruiker op te vangen wanneer de gebruiker de button entert met de muis 
button.addEventListener('mouseenter', (e) => {
  // Uit het event (e) kunnen we clientX en clientY opvragen; dit is de cursor positie van de gebruiker:
  const x = e.clientX - rect.x
  const y = e.clientY - rect.y
  gsap.set('.button', {
    '--clip-x': `${x}px`,
    '--clip-y': `${y}px`,
    // get a random value from an array of colors with GSAP!!
    '--background': gsap.utils.random(colors)
  })
  gsap.to('.button', {
    // je kan ook css variabelen aanpassen met gsap, cool he?!
    '--clip-size': '150%',

  })  
})

// Gebruik een event listener om de muispositie van de gebruiker op te vangen wanneer de gebruiker de button leavet met de muis 
button.addEventListener('mouseleave', (e) => {
   const x = e.clientX - rect.x
   const y = e.clientY - rect.y
   gsap.set('.button', {
    '--clip-x': x,
    '--clip-y': y
  })
  gsap.to('.button', {
    '--clip-size': '0%',
    // we gebruiken overwrite om te zorgen dat de andere animatie afgekapt wordt, anders conflicteren ze met elkaar
    overwrite: true
  })  
})

```

