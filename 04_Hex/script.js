//make a random hex value created from an array of all the possible different hex values, loop through them, and concatenate 6 different values to a String that begun with the # character.

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

function sliceArray (arr) {
    sliceStart = Math.floor(Math.random() * arr.length)
    sliceEnd = sliceStart + 1
    let newArray = arr.slice(sliceStart, sliceEnd)
    for (let i = 0; i < newArray.length; i++) {
        return newArray[i]
    }
}

let randomElement = sliceArray(hexArray)

let btn = document.createElement('button')
document.body.appendChild(btn)
btn.innerHTML = 'Click'
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
btn.style.width = '100px'
btn.style.height = '50px'
btn.style.borderRadius = '5px'


document.body.style.height = '100vh'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = `#${sliceArray(hexArray)}${sliceArray(hexArray)}${sliceArray(hexArray)}${sliceArray(hexArray)}${sliceArray(hexArray)}${sliceArray(hexArray)}`
})







