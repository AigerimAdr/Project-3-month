// const emailInput = document.querySelector('#emailInput')
// const emailCheck = document.querySelector('#emailCheck')
// const emailResult = document.querySelector('.emailResult')

// const regExp = /\w+(\.\w+)*@gmail\.com$/

// emailCheck.onclick = () => {
//     if (regExp.test(emailInput.value) === "") {
//         emailResult.innerHTML = "Введите почтовый адрес"
//         emailResult.style.color = "red"
//     } else if (regExp.test(emailInput.value)) {
//         emailResult.innerHTML = 'Правильный почтовый адрес'
//         emailResult.style.color = 'green'
//     } else {
//         emailResult.innerHTML = 'Невалидный почтовый адрес'
//         emailResult.style.color = 'red'
//     } 
// }


// // HW 1 part 2

// const childBlock = document.querySelector('.child_block')

// let positionX = 0
// let positionY = 0

// const moveBlock = () => {
//     if (positionX <= 449 && positionY <= 0) {
//         positionX += 2
//         childBlock.style.left = `${positionX}px`
//         setTimeout(moveBlock, 10)
//     } else if (positionX >= 449 && positionY <= 449) {
//         positionY += 2
//         childBlock.style.top = `${positionY}px`
//         setTimeout(moveBlock, 10)
//     } else if (positionX >= 0 && positionY >= 449) {
//         positionX -= 2
//         childBlock.style.left = `${positionX}px`
//         setTimeout(moveBlock, 10)
//     } else if (positionX <= 449 && positionY >= 0) {
//         positionY -= 2
//         childBlock.style.top = `${positionY}px`
//         setTimeout(moveBlock, 10)
//     }
// }

// moveBlock()


// // HW 2 part 1

// const startButton = document.querySelector('.start')
// const stopButton = document.querySelector('.stop');
// const resumeButton = document.querySelector('.resume')
// const clearButton = document.querySelector('.clear')
// const counter = document.querySelector('#clock').style.color = 'yellow'

// let second = 0;
// let interval;

// const start = () => {
//     const begin = () => {
//         second++;
//         clock.innerHTML = second;
//     }
//     begin()
//     interval = setInterval(begin, 1000)
// }

// const clear = () => {
//     clearInterval(interval);
//     second = 0;
//     clock.innerHTML = second;
// }

// const stop = () => { clearInterval(interval); }
// const resume = () => { start() }

// startButton.onclick = () => start()
// stopButton.onclick = () => stop()
// resumeButton.onclick = () => resume()
// clearButton.onclick = () => clear()

// HomeWork 5

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')


const convert = (element, targetElement, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "change.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (element === som ) {
                targetElement.value = (element.value / response.usd).toFixed(2)
                targetElement2.value = (element.value / response.eur).toFixed(2)
            } else if (element === usd) {
                targetElement.value = (element.value * response.usd).toFixed(2)
                targetElement2.value = (element.value * response.usdToEur).toFixed(2) 
            } else if (element === eur) {
                targetElement.value = (element.value * response.eur).toFixed(2)
                targetElement2.value = (element.value * response.euroToUsd).toFixed(2)
            }
            
            if (element.value === '') {
                targetElement.value = ''
                targetElement2.value = ''
            }
        }
    }
}

convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)