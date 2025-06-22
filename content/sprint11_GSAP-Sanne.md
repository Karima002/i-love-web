# GSAP voor beginners

Installation | GSAP | Docs & Learning - instal (geen cdn gebruiken): https://gsap.com/docs/v3/Installation/

Installeer specifieke animaties.

``` JS
Gsap.to(  '[alt=sagittarius"]', { // dit is naar iets toe
    Duration: 1,  //Duration (standaard doet gsap .5 sec)
    Rotate: 720,
    Repeat: 3,
    Yoyo: true, // heen en terug
    Ease: "power1.in0ut",
    repeatDelay: 1, //rollen en dan stopt tie even en gaat hij weer terug
//laatste komma mag in GSAP
}),
``` 
Easing | GSAP | Docs & Learning == code kan je aanpassen in de ease visualiser

``` JS

Gsap.from (  '[alt=sagittarius"]', { //hier wil je vanuit een punt en niet naar een punt met to
    Y: "-300%",
    Durarion: 2.5,
    strength:0.7,
    endAtStart:false,
    squash:1,
    squashID: "myBounce-squash"
}),

```

``` JS
gsap.from("[aria-label='stagger'] img", //hiermee selecteer je 3 elementen tegelijk {
    X: 250,
    Duration: .5,
    Stagger: .5 //ik selecteer meer dingen en het gaat naar elkaar met stagger
    ease: "elastic.out(1,0.5)", // voor het veren
});
```

Timeliner  // meer tweet met elkaar koppellen

``` JS
Let myTimeline = gsap.timeline();
Let queen = document.querySelector(' [alt="queen"]')
Let king = document.querySelector(' [alt="king"]')

myTimeline.to(queen, { //ze komt van buiten en gaat naar binnen
    Duration: 1, //
    X:-200,
    Rotate: -720
});


myTimeline.from(king, { //ze komt van buiten en gaat naar binnen
    Duration: 1, //
    X:200, //van rechts dus geen min getal
    Rotate: -720
    "+=1" // op GSAP heb je controle over wanneer de koning gaat rollen, begin 1 seconde nadat de andere begint met rollen
});


myTimeline.to(queen, { //ze komt van buiten en gaat naar binnen
    Duration: 1, //
    Scale: 1.5 // groter worden
    Rotate: 10
});

myTimeline.to(queen, { //ze komt van buiten en gaat naar binnen
    Duration: 1, //
    Scale: 1.5 // groter worden
    Rotate: -10
});
```

// na een klik speelt de animatie

``` JS
const elf = document.querySelector('[alt="elf"]');
const geluid = document.querySelector('audio');
const button = document.querySelector("button");

let buttonTimeline = gsap.to(elf, {
    duration:.2,
    y:-50,
    ease: "circ.out",
    repeat:1,
    yoyo:true,
    paused:true,
    onComplete:pop,  //wat te doen als het klaar is met de sprong > geluid afspelem
});


function pop() {
    geluid.play(); // geluid afspelen na de klik
}

function springdan() {
    buttonTimeline.restart(); //start bovenstaande timeline als je op button klikt
}

button.addEventListener("click", springdan);
```
/////////////
// DRAWSVG //
/////////////


DrawSVG | GSAP | Docs & Learning - deze plugin heb je nodig. In HTML ook de liberary toevoegen
``` JS

const drawButton = document.querySelector('[aria-label="drawSVG"] button');
const lijnen = document.querySelectorAll('svg path'); // svg met alle padden, elk path is een letter. Met All selecteer je alle paden

let text = gsap.from(lijnen, {
    duration:.5,
    drawSVG:0, //vanaf 0 beginnen met tekenen
    stagger:.5, 
});



function nogEenKeer() {
    text.restart();
}

drawButton.addEventListener("click", nogEenKeer);

```