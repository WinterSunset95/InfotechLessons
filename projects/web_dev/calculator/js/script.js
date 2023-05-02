const display = document.getElementById('display')

let operator
let firstNum
let secondNum
const clearScreen = () => {
    display.innerHTML = 0
}
const calculate = () => {
    let result
    if (firstNum && operator && secondNum) {
        if (operator == '+') {
            result = Number(firstNum) + Number(secondNum)
        } else if (operator == '-') {
            result = Number(firstNum) - Number(secondNum)
        } else if (operator == 'x') {
            result = Number(firstNum) * Number(secondNum)
        } else if (operator == '/') {
            result = Number(firstNum) / Number(secondNum)
        } else {
            print('Invalid')
        }
        firstNum = result.toString()
        secondNum = ''
    } else {
        console.log('not calculated')
    }
}
const handleClick = (num, type) => {
    if (type != 'number') {
        calculate()
        operator = num != '=' ? num : undefined
        num = ''
    }
    if (operator) {
        secondNum = secondNum ? secondNum + num.toString() : num.toString()
    } else {
        firstNum = firstNum ? firstNum + num.toString() : num.toString()
    }
    console.log(firstNum, operator, secondNum)
    firstNum ? firstNum : (firstNum = '')
    operator ? operator : (operator = '')
    secondNum ? secondNum : (secondNum = '')
    display.innerHTML = firstNum + operator + secondNum
}
