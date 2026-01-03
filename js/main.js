'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    addListeners()
    renderMeme()
}

function addListeners() {

}

//////////// - memeController - //////////////

function onTextEdit(ev) {
    ev.preventDefault()
    let form = ev.target
    const formData = new FormData(form)
    let value = formData.get('text')
    console.log('value: ', value)
    setLineTxt(value)
}



function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `/memes/${meme.selectedImgId}.jpg`

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
    const elMemes = document.querySelector('.memes')
    const memes = gImgs.map(meme =>
        `<img onclick="onImgSelect(${meme.id})" 
        src="${meme.url}" 
        style="width:80px; 
        cursor:pointer;"/>`
    ).join('')
    elMemes.innerHTML = memes
}