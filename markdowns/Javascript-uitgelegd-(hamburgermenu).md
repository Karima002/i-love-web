Op 22/23 november ben ik bezig geweest met het begrijpen van javascript en het schrijven van mijn eerste regels javascript. Dit heb ik gedaan met behulp van de CSS challenge positioneren. Hieronder leg ik de javascript code uit: [link naar code](https://github.com/Karima002/look-and-feel-corporate-identity-/blob/main/scripts/index.js#L2-L3)


### Stap 1: Zoek de menu-button op en sla die op in een variabele
`const openButton = document.querySelector("header > button"); `

**Uitleg**
* `const`: Hiermee wordt een variabele gedeclareerd die niet opnieuw toegewezen kan worden. De variabel wordt `openButton` genoemd.
* `document.querySelector("header > button"):` Hiermee selecteer je het eerste `<button>` element dat zich direct in een <header> bevindt in het HTML-document. Op moment dat er meerdere buttons zich bevinden in de header kan je ervoor kiezen de button een class-name te geven of te werken met nth-of-type: `const secondButton = document.querySelector("header > button:nth-of-type(2)");

**Resultaat**
Het resultaat is een verwijzing naar het HTML-element, die we opslaan in de variabele `openButton`.

### Stap 2: Laat de menu-button luisteren naar kliks en voer dan een functie uit 
**Uitleg**
* `openButton.addEventListener("click", openMenu)`: Hiermee zeg je tegen de menu-button dat hij moet luisteren naar een bepaalde gebeurtenis (in dit geval een klik).
* Zodra een gebruiker op de knop klikt, wordt de functie `openMenu()` uitgevoerd.

### Stap 3: Voeg in de functie een class toe aan de <nav>

**Uitleg**
* `const deNav = document.querySelector("nav");`Hiermee zoek je naar het eerste <nav>-element in het HTML-document en sla je het op in de variabele deNav.
* `classList.add()`: Hiermee voeg je een CSS-class toe aan het `<nav>`-element.
* De class "`toonMenu`" wordt toegevoegd aan de bestaande classes van het `<nav>`-element.

```javascript
function openMenu() {
    const deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}
```
