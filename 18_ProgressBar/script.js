const formContent = [
    {
        id: 0,
        title: 'Name',
        subtitle: 'Email',
    },
    {
        id: 1,
        title: 'University',
        subtitle: 'Medical School',
    },
    {
        id: 2,
        title: 'Current Year',
        subtitle: 'Desired Residency Program',
    },
    {
        id: 3,
        title: 'USMLE Step 1 Score',
        subtitle: 'Desired USMLE Step 2 Score',
    }
]

const barOne = document.querySelector('.bar-one');
const barTwo = document.querySelector('.bar-two');
const barThree = document.querySelector('.bar-three');
const circleOne = document.querySelector('.circle-one');
const circleTwo = document.querySelector('.circle-two');
const circleThree = document.querySelector('.circle-three');
const circleFour = document.querySelector('.circle-four');

const titleInputEl = document.querySelector('.title-input');
const subtitleInputEl = document.querySelector('.subtitle-input')
const titleEl = document.querySelector('.title')
const subtitleEl = document.querySelector('.subtitle')

const buttons = document.querySelectorAll('.buttons')

let currentIndex = 0;
console.log(titleInputEl.value.length)

function changeContent() {
    titleEl.innerHTML = formContent[currentIndex].title
    subtitleEl.innerHTML = formContent[currentIndex].subtitle
    titleInputEl.value = '';
    subtitleInputEl.value = '';
}

function updateProgressBar() {
    if (titleEl.innerHTML == formContent[0].title) {
        circleOne.style.backgroundColor = '#F6AE2D'
        barOne.style.backgroundColor = '#dedede'
        circleTwo.style.backgroundColor = '#dedede'
        barTwo.style.backgroundColor = '#dedede' 
        circleThree.style.backgroundColor = '#dedede' 
        barThree.style.backgroundColor = '#dedede' 
        circleFour.style.backgroundColor = '#dedede' 
    } else if (titleEl.innerHTML == formContent[1].title) {
        circleOne.style.backgroundColor = '#F6AE2D'
        barOne.style.backgroundColor = '#F6AE2D'
        circleTwo.style.backgroundColor = '#F6AE2D'
        barTwo.style.backgroundColor = '#dedede' 
        circleThree.style.backgroundColor = '#dedede' 
        barThree.style.backgroundColor = '#dedede' 
        circleFour.style.backgroundColor = '#dedede' 
    } else if (titleEl.innerHTML == formContent[2].title) {
        circleOne.style.backgroundColor = '#F6AE2D'
        barOne.style.backgroundColor = '#F6AE2D'
        circleTwo.style.backgroundColor = '#F6AE2D'
        barTwo.style.backgroundColor = '#F6AE2D' 
        circleThree.style.backgroundColor = '#F6AE2D' 
        barThree.style.backgroundColor = '#dedede' 
        circleFour.style.backgroundColor = '#dedede' 
    } else {
        circleOne.style.backgroundColor = '#F6AE2D'
        barOne.style.backgroundColor = '#F6AE2D'
        circleTwo.style.backgroundColor = '#F6AE2D'
        barTwo.style.backgroundColor = '#F6AE2D' 
        circleThree.style.backgroundColor = '#F6AE2D' 
        barThree.style.backgroundColor = '#F6AE2D' 
        circleFour.style.backgroundColor = '#F6AE2D' 
    }
}

buttons.forEach(button => {    
    button.addEventListener('click', () => {
        if (button.classList.contains('previous-button')) {
            currentIndex -= 1
                if (currentIndex < 0) {
                    currentIndex = 0
                }
                changeContent()
                updateProgressBar()
        } else if (button.classList.contains('next-button') && titleInputEl.reportValidity() == true && subtitleInputEl.reportValidity() == true) {
            currentIndex += 1
                if (currentIndex > formContent.length - 1) {
                    currentIndex = formContent.length - 1
                }
                changeContent()
                updateProgressBar()
        }
    })
})


/*

searchInput.addEventListener('keyup', (e) => {
    let results = []
    let input = searchInput.value
    if (input.length > 0) {
        results = drugArray.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase())
        })
    }
    renderResults(results);
})

*/


/*
console.log(nextBtn)
console.log(circleOne)


nextBtn.addEventListener('click', () => {
    if (circleOne.classList.contains('show')) {
        barOne.classList.add('show')
        circleTwo.classList.add('show')
        userInformation.innerHTML = `            <input type="text" required>
        <label>University</label>
        <input type="text" required>
        <label>Medical School</label>`
    } else if (circleTwo.classList.contains('show')) {
        barTwo.classList.add('show')
        circleThree.classList.add('show')
        userInformation.innerHTML = `            <input type="text" required>
        <label>Current Year</label>
        <input type="text" required>
        <label>Desired Residency Program</label>`
    }
})

*/