let buttonaudio = document.querySelector ('button') //hiermee willen we het geluid afspelen core functionaliteit
let audio = document.querySelector ('audio')

buttonaudio.addEventListener ('click')

function buttonaudio () {
    if (buttonaudio.classList.contains('play')) {
        audio.play()
    } else {
        audio.pause()
    }

}


//hiermee verberg je de audio en toon je de button, kan ook met html maar dan heb je altijd javascript nodig om het audio te laten afspelen


audio.hidden = true;
buttonaudio.hidden = false;