const openBtn = document.querySelector('.open-button')
const modal = document.querySelector('.modal-parent-container')
const modalBtn = document.querySelector('.close-button')

openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('hide')
    modal.classList.toggle('hide')
})

modalBtn.addEventListener('click', () => {
    modal.classList.toggle('hide')
    openBtn.classList.toggle('hide')
})