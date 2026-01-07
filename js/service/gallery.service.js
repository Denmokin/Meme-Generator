'use strict'

var gImgs = [
    { id: 1, url: 'memes/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2, url: 'memes/2.jpg', keywords: ['cute', 'dogs'] },
    { id: 3, url: 'memes/3.jpg', keywords: ['cute', 'dogs'] },
    { id: 4, url: 'memes/4.jpg', keywords: ['cute', 'cat'] },
    { id: 5, url: 'memes/5.jpg', keywords: ['cute', 'baby'] },
    { id: 6, url: 'memes/6.jpg', keywords: ['funny', 'man'] },
]

function setImg(id) {
    gMeme.selectedImgId = id
    renderMeme()
}


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

