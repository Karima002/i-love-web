Vandaag hebben we issues geschoten in een groep met verschillende mensen uit verschillende projecten:
- https://github.com/ArmanVD/look-and-feel-corporate-identity/issues/6
- https://github.com/Karima002/look-and-feel-corporate-identity-/issues/21

# Code vraag
Aan @KoopReynders verduidelijking gevraagd over mobile first. Als je een website gaat ontwerpen kan je daarmee beginnen met het ontwerpen in groot scherm. Dan kan je overgaan naar het ontwerpen van een mobiele versie. Als je begint met bouwen is het de bedoeling dat je begint met mobiel. Je zet je live website in mobiel via de inspector. Alles wat je in code schrijft zal je schrijven voor mobiel. Op het moment dat je daarmee klaar bent kan je beginnen met het schrijven van de code voor een grotere scherm. HTML blijft hetzelfde. In CSS moet je de aanpassingen gaan doorvoeren. Dit doe je door `@media min-width` te gebruiken. Met deze selector geef je aan dat je bij een minimale breedte van bijvoorbeeld 46em de volgende regels moeten worden uitgevoerd.

``` HTML
 <section class="frontpage-news">
            <p class="category-frontpage">Binnenland</p>
            <h1 class="title-article">Een metalen ode aan de Utrechtse gastarbeiders </h1>
            <p class="text_intro">Kunstenaar Aimée Zito Lema ontwierp een kunstwerk als eerbetoon aan de gastarbeiders uit de jaren ‘60 en ‘70. Ze
            deed dit in samenwerking met de nakomelingen, die willen dat het werk van hun voorouders niet ongezien blijft. 'Wij willen ze niet 
            vergeten en de generaties na ons moeten ze ook niet vergeten.'</p>
            <p class="author">Door <strong>Thalia Pinidis</strong></p>
            <img class="frontpage-image" src="./assets/voorpagina.jpg" alt="Foto van metalen ode in vorm van een hamer" width="520" height="320">
   </section>
```

``` CSS
.frontpage-news {
    padding: 1em 1em 0 1em; /*De hoofdsectie heeft padding aan de boven-, rechter- en linkerzijde: met de klok mee:*/
    display: grid; /* Grid lay-out voor de main section */
    @media (min-width: 46em) {
        display: grid; /* Grid lay-out voor de titelsectie met vier rijen en drie kolommen */
        grid-template-rows: min-content;
        grid-template-areas: /*grid template areas voor de tekst en img */
        "text1 img"
        "text2 img"
        "text3 img"
        "text4 img";
        row-gap: .7em; /* Ruimte tussen rijen */
        column-gap: 4em; /* Ruimte tussen kolommen */
        padding: 14em 7em 6em 6em;
    } 
}
```
In bovenstaande code wordt een grid uitgevoerd op grote scherm.

# WE LOVE WEB - From pitch to direction
Process  Emiel van Betsbrugge: hierin legt Emiel het proces uit van het maken van een website bij een agency:
- Pitch: klant komt naar je met een briefing, met een budget. De agency stelt zich voor en legt uit wat hun werkwijze is.
- Discovery: punten waar nog niet duidelijkheid over is wordt bij discovery besproken
- design & early dev: op een bepaald moment moet de client niet met meer verzoeken komen.  
--> sprint planning: op de eind van de sprint wil je dit en dit af hebben
- QA: je stuurt je website naar een external team en testen de website op alle devices.
- Retospective: een terugblik op het project op wat goed is gegaan en wat beter kan de volgende keer. Op deze manier bouw je een snellere workflow
- Active Theory heeft zijn eigen framework. Zo zijn ze niet afhankelijk van andere bedrijven.

Een website die ik mooi vind die Emiel heeft laten zien: https://www.thomasmonavon.com/

![WhatsApp Image 2024-11-22 at 13 35 12](https://github.com/user-attachments/assets/af50223a-ac0b-4b24-a251-c4a4429c02a1)

