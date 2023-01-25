const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')

export default class Calculator {
    constructor() {

    }
    
    allClear() {
        currentOperand.innerText = ''
        previousOperand.innerText = ''
    }

    compute() {
        let endIndex = previousOperand.innerText.length
        let operandValue = previousOperand.innerText.slice(endIndex - 1, endIndex)
        let updatedPreviousOperand = previousOperand.innerText.slice(0, endIndex - 1)
        let previousOperandNum =  parseFloat(updatedPreviousOperand)
        let currentOperandNum = parseFloat(currentOperand.innerText)
        let product 

        if (operandValue == 'x') {
            product = previousOperandNum * currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} x ${currentOperandNum}`
        } else if (operandValue == '÷') {
            product = previousOperandNum / currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} / ${currentOperandNum}`
        } else if (operandValue == '-') {
            product = previousOperandNum - currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} - ${currentOperandNum}`
        } else if (operandValue == '+') {
            product = previousOperandNum + currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} + ${currentOperandNum}`
        }        
    }

    updateCurrentDisplay(btn) {
        currentOperand.innerText += btn
    }

    updatePreviousDisplay(operation) {
        previousOperand.innerText = `${currentOperand.innerText} ${operation}`
        currentOperand.innerText = ''
    }
}
