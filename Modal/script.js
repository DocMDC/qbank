const openBtn = document.querySelector('.open-button')
const modal = document.querySelector('.modal-parent-container')
const modalBtn = document.querySelector('.close-button')

openBtn.addEventListener('click', () => {
    openBtn.classList.add('hide')
    modal.classList.remove('hide')
})

modalBtn.addEventListener('click', () => {
    modal.classList.add('hide')
    openBtn.classList.remove('hide')
})