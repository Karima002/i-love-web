let theMenu = document.querySelector('header > nav')
let openButton = document.querySelector('header > div > .button-open-menu')
let sluitButton = document.querySelector('header > nav > .button-sluit-menu')

openButton.addEventListener('click', openMenu)

function openMenu() {
    theMenu.classList.add('toonMenu')
}

sluitButton.addEventListener('click', sluitMenu)

function sluitMenu() {
    theMenu.classList.remove('toonMenu')
}
