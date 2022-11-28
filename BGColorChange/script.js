// https://jsbeginners.com/javascript-projects-for-beginners/

const btn = document.createElement('button')
btn.innerHTML = 'Click'
btn.style.fontSize = '16px'
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
btn.style.width = '150px'
btn.style.height = '50px'
btn.style.borderRadius = '5px'
btn.classList.add('color-button')

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.height = '100vh'

document.body.appendChild(btn)

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`
})

//`hsl(${Math.random() * 360}, 50%, 50%)`