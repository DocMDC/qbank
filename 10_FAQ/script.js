const questionOnePlusBtn = document.querySelector('.question-one-plus')
const questionTwoPlusBtn = document.querySelector('.question-two-plus')
const questionThreePlusBtn = document.querySelector('.question-three-plus')
const questionOneMinusBtn = document.querySelector('.question-one-minus')
const questionTwoMinusBtn = document.querySelector('.question-two-minus')
const questionThreeMinusBtn = document.querySelector('.question-three-minus')
const questionOneAnswer = document.querySelector('.question-one-answer')
const questionTwoAnswer = document.querySelector('.question-two-answer')
const questionThreeAnswer = document.querySelector('.question-three-answer')




questionOnePlusBtn.addEventListener('click', () => {
    questionOneMinusBtn.classList.toggle('hide')
    questionOneAnswer.classList.toggle('hide')
    questionOnePlusBtn.classList.toggle('hide')
})

questionOneMinusBtn.addEventListener('click', () => {
    questionOneMinusBtn.classList.toggle('hide')
    questionOneAnswer.classList.toggle('hide')
    questionOnePlusBtn.classList.toggle('hide')
})

questionTwoPlusBtn.addEventListener('click', () => {
    questionTwoMinusBtn.classList.toggle('hide')
    questionTwoAnswer.classList.toggle('hide')
    questionTwoPlusBtn.classList.toggle('hide')
})

questionTwoMinusBtn.addEventListener('click', () => {
    questionTwoMinusBtn.classList.toggle('hide')
    questionTwoAnswer.classList.toggle('hide')
    questionTwoPlusBtn.classList.toggle('hide')
})

questionThreePlusBtn.addEventListener('click', () => {
    questionThreeMinusBtn.classList.toggle('hide')
    questionThreeAnswer.classList.toggle('hide')
    questionThreePlusBtn.classList.toggle('hide')
})

questionThreeMinusBtn.addEventListener('click', () => {
    questionThreeMinusBtn.classList.toggle('hide')
    questionThreeAnswer.classList.toggle('hide')
    questionThreePlusBtn.classList.toggle('hide')
})