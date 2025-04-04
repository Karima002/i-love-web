# Teamcanvas
Vandaag ben ik bezig geweest met het invullen van de teamcanvas:  ![Image](https://github.com/user-attachments/assets/9789852d-76ef-4370-934a-1620d2ce72c8)


# Leertaak
Ook ben ik bezig geweest met de leertaak van woensdag 13 november. Ik moest alles nog rustig nalezen en begrijpen. Hieronder mijn aantekeningen.
Uitleg laatste code [Custom Properties](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/stylesheet.md#custom-properties)

### `.button`

- `--hue`: Dit bepaalt de kleur van de button op basis van de kleurtoon (hue) in het HSL (Hue, Saturation, Lightness) kleurmodel. Het wordt in de code eerst ingesteld op 200, wat een blauwachtige tint is. [Bron](https://developer.mozilla.org/en-US/docs/Web/CSS/hue)
- `--lightness`: Dit bepaalt de helderheid van de kleur. In eerste instantie is deze ingesteld op 30%, wat een redelijk donkere kleur betekent.[Bron](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)
- De achtergrondkleur van de knop wordt ingesteld met de `hsl(var(--hue) 100% var(--lightness))`, wat betekent dat de kleur afhankelijk is van de waarde van `--hue` en `--lightness`. 
- De tekstkleur is altijd wit (#fff).
- `&:hover` en `&:focus`: Wanneer de gebruiker met de muis over de knop beweegt (hover) of de knop krijgt focus (bijvoorbeeld als je de knop selecteert met Tab), wordt de `--lightness` naar `25%` verlaagd, waardoor de knop iets donkerder wordt.
- `&:active`:Wanneer de knop actief is (bijvoorbeeld tijdens het klikken), wordt de --lightness naar 20% verlaagd, waardoor de knop nog donkerder wordt.
- `.button-ok`:De kleurtoon (hue) wordt hier ingesteld op `100`, wat een groene kleur oplevert. Deze knop zal dus groen zijn.

### HTML
`<button class="button">Knop</button>`
`<button class="button button-ok">OK</button>`
`<button class="button button-cancel">Annuleren</button>`



