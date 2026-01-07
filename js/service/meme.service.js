'use strict'

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


function isLineHovered(pos) {
    const hoveredLine = gMeme.lines.find(line => {

        const halfWidth = line.width / 2
        const halfHeight = (line.size / 2)

        const isInsideX = pos.x >= line.pos.x - halfWidth &&
            pos.x <= line.pos.x + halfWidth

        const isInsideY = pos.y >= line.pos.y - halfHeight &&
            pos.y <= line.pos.y + halfHeight


        return isInsideX && isInsideY
    })

    // If Line is already selected don't add hover
    const idx = gMeme.lines.findIndex(line => line === hoveredLine)

    if (hoveredLine && gMeme.selectedLineIdx !== idx) {
        gElCanvas.classList.add('pointer')
    } else {
        gElCanvas.classList.remove('pointer')
    }
}

function isLineSelected(pos) {

    const selectedLine = gMeme.lines.findIndex(line => {

        const halfWidth = line.width / 2
        const halfHeight = (line.size / 2)

        const isInsideX = pos.x >= line.pos.x - halfWidth &&
            pos.x <= line.pos.x + halfWidth

        const isInsideY = pos.y >= line.pos.y - halfHeight &&
            pos.y <= line.pos.y + halfHeight


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

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

