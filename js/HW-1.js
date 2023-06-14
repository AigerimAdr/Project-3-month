const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp = /\w+(\.\w+)*@gmail\.com$/

emailCheck.onclick = () => {
    if (regExp.test(emailInput.value) === "") {
        emailResult.innerHTML = "Введите почтовый адрес"
        emailResult.style.color = "red"
    } else if (regExp.test(emailInput.value)) {
        emailResult.innerHTML = 'Правильный почтовый адрес'
        emailResult.style.color = 'green'
    } else {
        emailResult.innerHTML = 'Невалидный почтовый адрес'
        emailResult.style.color = 'red'
    } 
}


// HW 1 part 2

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
let positionZ = 0
let positionW = 0

const moveBlock = () => {
    if (positionX < 449) {
        positionX += 2;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveBlock, 10);
    } else if (positionY < 449) {
        positionY += 2;
        childBlock.style.top = `${positionY}px`;
        setTimeout(moveBlock, 10);
    } else if (positionZ < 449) {
        positionZ += 2;
        childBlock.style.right = `${positionZ}px`;
        setTimeout(moveBlock, 10);
    } else if (positionZ >= 449 && positionW < 449) {
        positionW += 2;
        childBlock.style.top = `${positionW}px`;
        setTimeout(moveBlock, 10);
    }
};

moveBlock();