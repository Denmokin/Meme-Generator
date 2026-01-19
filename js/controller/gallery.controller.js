'use strict'

function onImgSelect(id) {
    // change page
    const elMemes = document.querySelector('.app-container')
    const elGallery = document.querySelector('.gallery-container')
    elMemes.classList.remove('display-none')
    elGallery.classList.add('display-none')
    onUpdateNav('memes')
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

