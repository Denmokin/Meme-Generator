'use strict'

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

