const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')
const allClearBtn = document.querySelector('[data-all-clear]')
const deleteBtn = document.querySelector('[data-delete]')
const equalsBtn = document.querySelector('[data-equal]')
const numberBtns = document.querySelectorAll('[data-number]')
const operationBtns = document.querySelectorAll('[data-operations]')

class Calculator {
    constructor() {

    }
    
    allClear() {
        currentOperand.innerText = ''
        previousOperand.innerText = ''
    }

    delete() {
        let lastIndex = currentOperand.innerText.length
        let updatedOperand = currentOperand.innerText.slice(0, lastIndex - 1)
        currentOperand.innerText = updatedOperand
    }

    compute() {
        let endIndex = previousOperand.innerText.length
        let operandValue = previousOperand.innerText.slice(endIndex - 1, endIndex)
        let updatedPreviousOperand = previousOperand.innerText.slice(0, endIndex - 1)
        let previousOperandNum =  parseFloat(updatedPreviousOperand)
        let currentOperandNum = parseFloat(currentOperand.innerText)
        let product 

        if (operandValue == 'x') {
            //console.log('multiply')
            product = previousOperandNum * currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} x ${currentOperandNum}`
        } else if (operandValue == '÷') {
            //console.log('divide')
            product = previousOperandNum / currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} / ${currentOperandNum}`
        } else if (operandValue == '-') {
            //console.log('subtract')
            product = previousOperandNum - currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} - ${currentOperandNum}`
        } else if (operandValue == '+') {
            //console.log('add')
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

const calculator = new Calculator

deleteBtn.addEventListener('click', () => {
    calculator.delete()
})

allClearBtn.addEventListener('click', () => {
    calculator.allClear()
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperand.innerText.length <= 0) return
        if (previousOperand.innerText.includes('x') || previousOperand.innerText.includes('+') || previousOperand.innerText.includes('-') || previousOperand.innerText.includes('÷')) {
            calculator.compute()
        }
        calculator.updatePreviousDisplay(button.innerText)
    })
})

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '.' && currentOperand.innerText.includes('.') || currentOperand.innerText.length > 7) {
            return
        } else {
            calculator.updateCurrentDisplay(button.innerText)
        }
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute()
})


