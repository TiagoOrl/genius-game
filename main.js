

let order = [];
let clickedOrder = []
let score = 0

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue


const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('green')
const yellow = document.querySelector('yellow')


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
    }, number - 100);

    setTimeout(() => {
        elem.classList.remove('selected')
    }, time - 100);
}

function checkOrder() {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            lose()
            break
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`${score} points`)
    }
}