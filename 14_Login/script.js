const emailInput = document.querySelector('.email-input')
const emailLabel = document.querySelector('.email-label')
const form = document.querySelector('.form')


form.addEventListener('submit', (e) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailRegex.test(emailInput.value) == false) {
        e.preventDefault()
        emailLabel.innerHTML = 'Please provide a valid email address'
        emailLabel.style.color = 'red'

    } else return
}) 

emailInput.addEventListener('input', () => {
    emailLabel.innerHTML = 'Email'
    emailLabel.style.color = '#F2F5EA'
})