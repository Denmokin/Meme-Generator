'use strict'

function addListeners() {
    formListener()
    addMouseListeners()
}


function addMouseListeners() {
    gElCanvas.addEventListener('click', onMouseClick)
    gElCanvas.addEventListener('mousemove', onMouseMove)
}

function resizeCanvas() {
    const gElCanvasContainer = document.querySelector('.canvas-container')
    gElCanvasContainer.width = gElCanvas.width + 'px'
    gElCanvasContainer.height = gElCanvas.height + 'px'
}

function syncFormDefaults() {
    const elForm = document.querySelector('.meme-form')
    const line = gMeme.lines[gMeme.selectedLineIdx]
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

    elForm.addEventListener('click', (ev) => {
        if (ev.target.name === 'switch') onLineSwitch()
    })

    elForm.addEventListener('click', (ev) => {
        if (ev.target.name === 'add') onAddLine()
    })
}

function onTextEdit(ev, elForm) {
    const formData = new FormData(elForm)
    const sizeDiff = (ev.target.name === 'size') ? ev.target.value : 0
    setLineTxt(formData, sizeDiff)
}


function onLineSwitch() {
    switchLine()
}

function onAddLine() {
    addLine()
}

function onMouseClick(ev) {
    gStartPos = getEvPos(ev)
    isLineSelected(gStartPos)
}

function onMouseMove(ev) {
    const pos = getEvPos(ev)
    isLineHovered(pos)
}


function getEvPos(ev) {
    // console.log('x:', ev.offsetX, 'y:', ev.offsetY)
    return {
        x: ev.offsetX,
        y: ev.offsetY,
    }
}

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `memes/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        meme.lines.forEach((line, idx) => {
            drawText(line)

            // If Line selected --> add rectangle
            if (idx === meme.selectedLineIdx) {
                const width = gCtx.measureText(line.txt).width + 20
                const height = (+line.size) + 20
                drawRect(line.pos.x, line.pos.y, height, width, line.color)
            }
        })
    }
}


function drawText(line) {
    gCtx.font = `${line.size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillStyle = line.color
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)

    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 0.1
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    getTextWidth(line)
}

function drawRect(x, y, height, width, color) {
    gCtx.beginPath()
    gCtx.strokeStyle = color
    gCtx.lineWidth = 1
    gCtx.strokeRect(x - width / 2, y - height / 2, width, height)
}

function onDownloadMeme(el) {
    var memeContent = gElCanvas.toDataURL();
    console.log('memeContent: ', memeContent)
    el.href = memeContent
    el.download = 'myMeme'
}