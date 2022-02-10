

let order = [];
let clickedOrder = []
let score = 0

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue


const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


function shufferOrder() {
    let colorOrder = Math.floor(Math.random() * 4) // 0 -> 3
    order[order.length] = colorOrder
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}


function lightColor(elem, number) {
    number *= 500
    setTimeout(() => {
        elem.classList.add('selected')
    }, number);

    setTimeout(() => {
        elem.classList.remove('selected')
    });
}

function checkOrder() {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            lose()
            break
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`${score} points\n Next level...`)
        nextLevel()
    }
}


function nextLevel() {

}


function click(color) {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250);

    
}

function createColorElement(color) {
    if (color == 0) {
        return green
    }

    if (color === 1) {
        return red
    }

    if (color === 2) {
        return yellow
    }

    if (color === 3)
        return blue
}

function nextLevel() {
    score++
    shufferOrder()
}

function lose() {
    alert(`You Lose: ${score} points`)
    order = []
    clickedOrder = []

    playGame()
}

function playGame() {
    score = 0
    nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()