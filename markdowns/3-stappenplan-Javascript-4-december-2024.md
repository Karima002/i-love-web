
# Javascript drie stappenplan

Bronnen:
- https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/
- https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/programming-user-interaction.md#het-3-stappenplan-waarmee-je-bijna-alles-kan

### STAP 1: SELECTEREN ELEMENT
```javascript
let showMoreButton = document.querySelector('.show-more');
```

In JavaScript kun je dit element selecteren met document.querySelector(), gecombineerd met de class selector hierboven. Het resultaat kun je in een variabele opslaan, die je net als bij CSS custom properties kunt noemen zoals je wilt. Met het let keyword maak je een variabele aan: showMoreButton is de variable die je zelf hebt bedacht.

***

### STAP 2: EVENT EN FUNCTIE TOEVOEGEN

EVENT
```javascript
showMoreButton.addEventListener('click', doSomething);
```

FUNCTIE
```javascript
let doSomething = function() {
    alert('Het werkt!');
}
```


* `addEventlistener`: alle dingen die mensen doen op moment dat ze een site gebruiken: klik, rotate bijv. je luistert naar de event in een browser. Hiermee voeg je een event toe aan het element.
* doSomething is een aangemaakte _functie_ (die je ook hier kunt noemen zoals je wilt). Met addEventListener hebben we die functie gekoppeld aan het click event. 
* Hierdoor wordt de doSomething functie aangeroepen, zodra iemand op de button klikt. 

### STAP 3: FEEDBACK AAN GEBRUIKER

In Stap 3 geef je feedback aan de gebruiker. Vaak doe je dit door iets te veranderen op de pagina, iets toe te voegen, iets te animeren, ergens heen te scrollen, iets te openen, een geluidje af te spelen, etc. In de meeste gevallen wil je de CSS van een bepaald HTML element veranderen, of een class aan- of uitzetten.

```javascript
document.body.classList.add('dark-mode'); // → <body class="dark-mode">
document.querySelector('section').classList.remove('font-large'); // → <section class="about">
```
