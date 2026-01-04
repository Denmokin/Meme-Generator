'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    syncFormDefaults()
    addListeners()
    resizeCanvas()
    renderMeme()
}

function addListeners() {
    formListener()
}

function resizeCanvas() {
    const gElCanvasContainer = document.querySelector('.canvas-container')
    gElCanvasContainer.width = gElCanvas.width + 'px'
    gElCanvasContainer.height = gElCanvas.height + 'px'
    console.log('gElCanvasContainer.width: ', gElCanvasContainer.width)
}

function syncFormDefaults() {
    const elForm = document.querySelector('.meme-form')
    const line = gMeme.lines[0]
    elForm.querySelector('[name="text"]').value = line.txt
    elForm.querySelector('[name="color"]').value = line.color
}

function formListener() {
    const elForm = document.querySelector('.meme-form')

    elForm.addEventListener('input', (ev) => {
        onTextEdit(ev, elForm)
    })

    elForm.addEventListener('click', (ev) => {
        if (ev.target.name === 'size') onTextEdit(ev, elForm)
    })
}

function onTextEdit(ev, elForm) {
    const formData = new FormData(elForm)
    const sizeDiff = (ev.target.name === 'size') ? ev.target.value : 0
    setLineTxt(formData, sizeDiff)
}


function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `memes/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0], gElCanvas.width / 2, 210)
    }
}


function drawText(meme, x, y) {

    gCtx.lineWidth = 0
    gCtx.strokeStyle = meme.color
    gCtx.fillStyle = meme.color

    gCtx.font = `${meme.size}px Ariel`;
    gCtx.textAlign = 'center'

    gCtx.fillText(meme.txt, x, y)
    gCtx.strokeText(meme.txt, x, y)
}




///////- galleryController -///////// 

function onImgSelect(id) {
    setImg(id)
}

function renderGallery() {
    const elMemes = document.querySelector('.select-img-container')
    const memes = gImgs.map(meme =>
        `<img onclick="onImgSelect(${meme.id})" 
        src="${meme.url}"/>`
    ).join('')
    elMemes.innerHTML = memes
}


///// -- Dash Board -- //////

function onDownloadMeme(el) {
    var memeContent = gElCanvas.toDataURL();
    console.log('memeContent: ', memeContent)
    el.href = memeContent
    el.download = 'myMeme'
}