'use strict'

let gElCanvas
let gCtx
let gStartPos

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    gMeme.lines[0].pos = { x: gElCanvas.width / 2, y: 50 }
    gMeme.lines[1].pos = { x: gElCanvas.width / 2, y: gElCanvas.height - 50 }

    renderGallery()
    syncFormDefaults()
    addListeners()
    resizeCanvas()
    renderMeme()
}


function onTabSwitch(ev) {
    const linkEl = ev.target
    const page = ev.target.id
    const elGallery = document.querySelector('.gallery-container')
    const elMemes = document.querySelector('.app-container')
    // const elAbout = document.querySelector('.about-container')

    switch (page) {
        case 'gallery':
            elGallery.classList.remove('display-none')
            elMemes.classList.add('display-none')

            break;
        case 'memes':
            elMemes.classList.remove('display-none')
            elGallery.classList.add('display-none')
            break;

        default:
            console.log('omg: ', omg)
            break;
    }

}



