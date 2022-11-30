const btns = document.querySelectorAll('.buttons')
const numberEl = document.querySelector('.number')
numberEl.innerHTML = 0;
numberEl.style.fontSize = '7rem'
let number = 0

btns.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == 'Decrease') {
            number -= 1
            numberEl.innerHTML = number
        } else if (button.innerHTML == 'Reset') {
            number = 0
            numberEl.innerHTML = number
        } else if (button.innerHTML == 'Increase') {
            number += 1
            numberEl.innerHTML = number
        }
    })
})