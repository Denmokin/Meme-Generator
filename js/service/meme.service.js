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
            size: '20',
            color: '#ff0000'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(formData, sizeDiff) {
    const line = gMeme.lines[0]

    const newTxt = formData.get('text')
    if (newTxt !== '') line.txt = newTxt

    line.color = formData.get('color')

    line.size = (+line.size) + (+sizeDiff)
    renderMeme()
}

function setImg(id) {
    gMeme.selectedImgId = id
    renderMeme()
}


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

