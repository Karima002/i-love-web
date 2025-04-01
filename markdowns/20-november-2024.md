[I Love web](https://karima002.github.io/i-love-web/docs/sprint4.html)  
Beantwoord deze vragen in je Learning Journal:
Beschrijf 3 dingen die je geleerd hebt over HTML, en link naar goede bronnen.

- Elk formulier bestaat uit een `<form>` element. 
- Elk fomrulierveld moet een eigen label hebben
- Met `<p>` kan je om de labels zetten zodat de volgende input op de volgende regel begint

Bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

Beschrijf 3 dingen die je geleerd hebt over CSS, en link naar goede bronnen.
- Je kan een achtergrondkleur toevoegen aan de input door de property `background-color`
- Je kan een width toevoegen aan de `text-area` voor een grotere textvlak
 
Bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#css

Beschrijf voor beide onderwerpen iets dat je kunt gebruiken en gaat toepassen in de leertaak.
``` css
form:not(.form_search) {
    input:not([type="submit"]), textarea {
        color: var(--black);
        width: 95%;
    }
}
```

``` html
<form>
            <fieldset>
                <p>
                    <label>Naam<input type="text"> </label>
                </p>
```

![WhatsApp Image 2024-12-04 at 11 51 23](https://github.com/user-attachments/assets/9336705d-93ae-4760-9f9d-0d1f9d257f02)
