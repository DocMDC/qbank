const questionAnswerChoice = document.querySelectorAll('.question-answer-choice')

questionAnswerChoice.forEach(el => {
    el.addEventListener('click', () => {
        if (el.style.textDecoration == 'line-through') {
            el.style.textDecoration = 'none'
        } else {
            el.style.textDecoration = 'line-through'
        }
    })
})