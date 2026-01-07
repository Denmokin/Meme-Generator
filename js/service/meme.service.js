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
            width: 0,
            color: '#ff0000',
            pos: { x: 125, y: 50 }
        },

        {
            txt: 'And i love it',
            size: 15,
            width: 0,
            color: '#000000',
            pos: { x: 80, y: 100 }
        }
    ]
}

function getMeme() {
    return gMeme
}

function getTextWidth(line) {
    const idx = gMeme.lines.findIndex((curLine) => curLine === line)
    gMeme.lines[idx].width = gCtx.measureText(line.txt).width
}

function switchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx = gMeme.selectedLineIdx + 1
    syncFormDefaults()
    renderMeme()
}

function addLine() {
    const line = {
        txt: 'New Line',
        size: 12,
        color: '#ffffff',
        pos: { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    renderMeme()
}

function isLineSelected(clickedPos) {

    const selectedLine = gMeme.lines.findIndex(line => {

        const halfWidth = line.width / 2
        const halfHeight = (line.size / 2)

        const isInsideX = clickedPos.x >= line.pos.x - halfWidth &&
            clickedPos.x <= line.pos.x + halfWidth

        const isInsideY = clickedPos.y >= line.pos.y - halfHeight &&
            clickedPos.y <= line.pos.y + halfHeight


        return isInsideX && isInsideY
    })

    if (selectedLine === -1) return
    
    gMeme.selectedLineIdx = selectedLine
    syncFormDefaults()
    renderMeme()
}

function setLineTxt(formData, sizeDiff) {
    const line = gMeme.lines[gMeme.selectedLineIdx]

    
    const newTxt = formData.get('text')
    if (newTxt !== '') line.txt = newTxt // If text is Empty do noting

    line.color = formData.get('color')

    line.size = (+line.size) + (+sizeDiff)
    renderMeme()
}

function setImg(id) {
    gMeme.selectedImgId = id
    renderMeme()
}


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

