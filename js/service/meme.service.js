'use strict'

var gImgs = [
    { id: 1, url: 'memes/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2, url: 'memes/2.jpg', keywords: ['cute', 'dogs'] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(newText) {
    gMeme.lines[0].txt = newText
    renderMeme()
}

function setImg(id) {
    gMeme.selectedImgId = id
    renderMeme()
}


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

