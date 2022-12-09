let questionsArray = [
    {
        id: 0,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 1,
        question: 'A 57-year-old male is brought to the emergency department by his wife with shortness of breath that started 4 hours ago. Associated symptoms include a worsening cough. The patient has a past medical history of chronic obstructive pulmonary disease. He continues to smoke 1 pack per day for the past 30 years. His temperature is 99.3 F (37.4 C), pulse is 111/min, respirations are 22, blood pressure is 129/83 mmHg, and O2 saturation is 86%. Physical examination reveals respiratory distress, prolonged expiratory phase of respiration, and diffuse wheezing. Which of the following methods of cellular transport occurs in the lungs when oxygen and carbon monoxide are exchanged?',
        image: 'Assets/testQuestion.png',
        choices: ['Simple Diffusion', 'Faciliated Diffusion', 'Primary Active Transport', 'Secondary Active Transport',],
        correctAnswer: 'Simple Diffusion'
    },
    {
        id: 1,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'A 27-year-old female comes to the clinic complaining of intermittent palpitations over the past 2 days. She states she has been sweating more and experiencing a general feeling of nervousness. Her temperature is 99.7 F (37.6 C), pulse is 157/min, respirations are 14, blood pressure is 139/87 mmHg, and O2 saturation is 99%. Physical examination shows tachycardia and an irregularly irregular pulse. An electrocardiogram (EKG) is ordered and confirms atrial fibrillation. Laboratory studies are ordered and reveal the following',
        image: null,
        choices: ['Balh', 'asdf', 'booger', 'snake'],
        correctAnswer: 'Balh'
    },
    {
        id: 2,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What color is the sky?',
        image: null,
        choices: ['Red', 'Blue', 'Orange', 'Green'],
        correctAnswer: 'Blue'
    },
    {
        id: 3,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What color is the grass?',
        image: null,
        choices: ['Red', 'Blue', 'Orange', 'Green'],
        correctAnswer: 'Green'
    },
    {
        id: 4,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What color is an orange fruit?',
        image: null,
        choices: ['Red', 'Blue', 'Orange', 'Green'],
        correctAnswer: 'Orange'
    },
    {
        id: 5,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'How many books are in the Harry Potter Series?',
        image: null,
        choices: ['7', '8', '9', '10'],
        correctAnswer: '7'
    },
    {
        id: 6,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What is the capital of Utah?',
        image: null,
        choices: ['Salt Lake City', 'Nashville', 'Boise', 'Bountiful'],
        correctAnswer: 'Salt Lake City'
    },
    
];

const markFlagContainer = document.querySelector('.mark-flag-container')
const flagCheckboxInput = document.querySelector('.flag-checkbox-input')
const formEl = document.querySelector('form')
const showAnswerBtn = document.querySelector('.show-answer-button')
const briefExplanationContainer = document.querySelector('.brief-explanation-container')
const explanationContentContainer = document.querySelector('.explanation-content-container')
const nextBtns = document.querySelectorAll('.next-button');
const previousBtn = document.querySelector('.previous-container')
const questionVignette = document.querySelector('.question-vignette')
const questionChoicesForm = document.querySelector('.question-choices-form')
const questionChoicesNoButton = document.querySelector('.question-choices-no-button')
const preloader = document.querySelector('.preloader')
const currentItemQuestionNumber = document.querySelector('.current-item-question-number')
const totalItemQuestionNumber = document.querySelector('.total-item-question-number')
const navParent = document.querySelector('.question-nav-container')


let selectedQuestions = {
    number: [] 
}

class QuestionBank {
    constructor() {

    }

    displayQuestionWithImage(arrayOfQuestions) {
        let showQuestion = `
            <p>${arrayOfQuestions[currentQuestionIndex].question} </p>
            <div class="question-vignette-image-container">
                <img src=${arrayOfQuestions[currentQuestionIndex].image} alt="test-question-image">
            </div>`
        let answerChoices = `<ul>
        <input id="question-one-input" type="radio" name="question">
        <span>
            A. 
            <div class="question-one-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[0]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-two-input" type="radio" name="question">
        <span>
            B. 
            <div class="question-two-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[1]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-three-input" type="radio" name="question">
        <span>
            C. 
            <div class="question-three-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[2]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-four-input" type="radio" name="question">
        <span>
            D. 
            <div class="question-four-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[3]}</div>
        </span>
    </ul>`
        questionVignette.innerHTML = showQuestion
        questionChoicesNoButton.innerHTML = answerChoices
    } 

    displayQuestionWithoutImage(arrayOfQuestions) {
        let showQuestion = `
            <p>${arrayOfQuestions[currentQuestionIndex].question} </p>`
        let answerChoices = `<ul>
        <input id="question-one-input" type="radio" name="question">
        <span>
            A. 
            <div class="question-one-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[0]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-two-input" type="radio" name="question">
        <span>
            B. 
            <div class="question-two-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[1]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-three-input" type="radio" name="question">
        <span>
            C. 
            <div class="question-three-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[2]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-four-input" type="radio" name="question">
        <span>
            D. 
            <div class="question-four-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[3]}</div>
        </span>
    </ul>`
        questionVignette.innerHTML = showQuestion
        questionChoicesNoButton.innerHTML = answerChoices
    } 
}

let qbank = new QuestionBank

//preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide-preloader')
    }, 1000)
})

let currentQuestionIndex = 0
let previousQuestionIndex 

qbank.displayQuestionWithImage(questionsArray) 

//move to next question 
nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        previousQuestionIndex = currentQuestionIndex
        currentQuestionIndex += 1
        if (currentQuestionIndex >= selectedQuestions.number[0] - 1) {
            currentQuestionIndex = selectedQuestions.number[0] - 1
        }

        currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

        //highlight current nav item
        navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
        navParent.children[currentQuestionIndex].style.color = 'white'

        //return default styling of previous nav item
        if ((previousQuestionIndex + 1) % 2 == 0) {
            navParent.children[previousQuestionIndex].style.backgroundColor = 'white'
            navParent.children[previousQuestionIndex].style.color = 'black'
        } else {
            navParent.children[previousQuestionIndex].style.backgroundColor = '#e2e2e2'
            navParent.children[previousQuestionIndex].style.color = 'black'
        }
           

        if (questionsArray[currentQuestionIndex].image == null) {
            qbank.displayQuestionWithoutImage(questionsArray)
        } else {
            qbank.displayQuestionWithImage(questionsArray)
        }
    })
})

//move to previous question
previousBtn.addEventListener('click', () => {
    previousQuestionIndex = currentQuestionIndex
    currentQuestionIndex -= 1
    if (currentQuestionIndex <= 0) {
        currentQuestionIndex = 0
    }
    if (previousQuestionIndex <= 0) {
        previousQuestionIndex = 0
    }
    console.log(previousQuestionIndex)

    currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

    //highlight current nav item
    navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
    navParent.children[currentQuestionIndex].style.color = 'white'

    //return default styling of previous nav item
    if ((previousQuestionIndex + 1) % 2 == 0 && previousQuestionIndex > 0) {
        navParent.children[previousQuestionIndex].style.backgroundColor = 'white'
        navParent.children[previousQuestionIndex].style.color = 'black'
    } else if ((previousQuestionIndex + 1) % 2 !== 0 && previousQuestionIndex > 0) {
        navParent.children[previousQuestionIndex].style.backgroundColor = '#e2e2e2'
        navParent.children[previousQuestionIndex].style.color = 'black'
    } else {
        return
    }

    if (questionsArray[currentQuestionIndex].image == null) {
        qbank.displayQuestionWithoutImage(questionsArray)
    } else {
        qbank.displayQuestionWithImage(questionsArray)
    }
})

//select any question
    for (let i = 0; i < navParent.children.length; i++) {
        let child = navParent.children[i]
        child.addEventListener('click', (e) => {
            previousQuestionIndex = currentQuestionIndex
            
            let targetNumber = parseInt(e.target.dataset.number)
            currentQuestionIndex = targetNumber - 1
            console.log(currentQuestionIndex)

            //highlight current nav item
            navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
            navParent.children[currentQuestionIndex].style.color = 'white'

            //remove styling for previous nav item
            if ((previousQuestionIndex + 1) % 2 == 0) {
                navParent.children[previousQuestionIndex].style.backgroundColor = 'white'
                navParent.children[previousQuestionIndex].style.color = 'black'
            } else {
                navParent.children[previousQuestionIndex].style.backgroundColor = '#e2e2e2'
                navParent.children[previousQuestionIndex].style.color = 'black'
            }

            if (questionsArray[currentQuestionIndex].image == null) {
                qbank.displayQuestionWithoutImage(questionsArray)
            } else {
                qbank.displayQuestionWithImage(questionsArray)
            }

            currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1
        })
    }

//mark flag on click 
markFlagContainer.addEventListener('click', () => {
    if (flagCheckboxInput.checked == true) {
        flagCheckboxInput.checked = false
    } else {
        flagCheckboxInput.checked = true
    }
})

/* 

//strikethrough answer choices
questionAnswerChoice.forEach(el => {
    el.addEventListener('click', () => {
        if (el.style.textDecoration == 'line-through') {
            el.style.textDecoration = 'none'
        } else {
            el.style.textDecoration = 'line-through'
        }
    })
}) 

*/

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
})

//show stats and explanations when clicking 'show answer' button

 showAnswerBtn.addEventListener('click', () => {
    briefExplanationContainer.classList.remove('hide')
    explanationContentContainer.classList.remove('hide')
 })