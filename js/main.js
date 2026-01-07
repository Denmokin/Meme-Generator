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






