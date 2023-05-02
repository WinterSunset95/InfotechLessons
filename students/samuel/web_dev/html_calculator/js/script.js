const display = document.getElementById('main_display')
let operator = ''
let firstNum = ''
let secondNum = ''
const clearScreen = () => {
    display.value = '0'
}
const calculate = (input) => {
    let result  
    if (firstNum && operator && secondNum) {
        if (operator == '-' ) {
            result = Number(firstNum) - Number(secondNum)
        } else if (operator == '+') {
            result = Number(firstNum) + Number(secondNum)
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
        console.log("not calculated")
    }
}
const clickHandler = (num) => {
    if (typeof num == 'number') {
        if (operator) {
            secondNum = secondNum + num.toString()
        } else {
            firstNum = firstNum + num.toString()
        }
    } else {
        calculate()
        operator = num != '=' ? num : ''
        num = ''
    }
    console.log(firstNum, operator, secondNum)
    display.value = firstNum + operator + secondNum
}
