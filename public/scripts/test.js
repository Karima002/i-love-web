let buttonaudio = document.querySelector ('button')
let audio = document.querySelector ('audio')

buttonaudio.addEventListener ('click')

function () {
    if (buttonaudio.classList.contains('paused')) {
        audio.play()
    } else {
        audio.pause()
    }

}