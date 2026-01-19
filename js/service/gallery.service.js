'use strict'

var gImgs = [
    { id: 1, url: 'memes/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2, url: 'memes/2.jpg', keywords: ['cute', 'dogs'] },
    { id: 3, url: 'memes/3.jpg', keywords: ['cute', 'dogs'] },
    { id: 4, url: 'memes/4.jpg', keywords: ['cute', 'cat'] },
    { id: 5, url: 'memes/5.jpg', keywords: ['cute', 'baby'] },
    { id: 6, url: 'memes/6.jpg', keywords: ['funny', 'man'] },
    { id: 7, url: 'memes/7.jpg', keywords: ['funny', 'man'] },
    { id: 8, url: 'memes/8.jpg', keywords: ['funny', 'man'] },
    { id: 9, url: 'memes/9.jpg', keywords: ['funny', 'man'] },
    { id: 10, url: 'memes/10.jpg', keywords: ['funny', 'man'] },
    { id: 11, url: 'memes/11.jpg', keywords: ['funny', 'man'] },
    { id: 12, url: 'memes/12.jpg', keywords: ['funny', 'man'] },
    { id: 13, url: 'memes/13.jpg', keywords: ['funny', 'man'] },
    { id: 14, url: 'memes/14.jpg', keywords: ['funny', 'man'] },
    { id: 15, url: 'memes/15.jpg', keywords: ['funny', 'man'] },
    { id: 16, url: 'memes/16.jpg', keywords: ['funny', 'man'] },
]

function setImg(id) {
    gMeme.selectedImgId = id
    renderMeme()
}


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

