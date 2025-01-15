let openButton = document.querySelector ('button')
let animationDiv = document.querySelector ('div')

openButton.addEventListener('click', animationArc)
console.log (animationArc)

function animationArc () {
    animationDiv.classList.add('transformarc')
}