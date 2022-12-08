let questionsArray = [
    {
        id: 1,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 1,
        question: 'A 57-year-old male is brought to the emergency department by his wife with shortness of breath that started 4 hours ago. Associated symptoms include a worsening cough. The patient has a past medical history of chronic obstructive pulmonary disease. He continues to smoke 1 pack per day for the past 30 years. His temperature is 99.3 F (37.4 C), pulse is 111/min, respirations are 22, blood pressure is 129/83 mmHg, and O2 saturation is 86%. Physical examination reveals respiratory distress, prolonged expiratory phase of respiration, and diffuse wheezing. Which of the following methods of cellular transport occurs in the lungs when oxygen and carbon monoxide are exchanged?',
        image: 'Assets/testQuestion.png',
        choices: ['Simple Diffusion', 'Faciliated Diffusion', 'Primary Active Transport', 'Secondary Active Transport',],
        correctAnswer: 'Simple Diffusion'
    },
    {
        id: 2,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'A 27-year-old female comes to the clinic complaining of intermittent palpitations over the past 2 days. She states she has been sweating more and experiencing a general feeling of nervousness. Her temperature is 99.7 F (37.6 C), pulse is 157/min, respirations are 14, blood pressure is 139/87 mmHg, and O2 saturation is 99%. Physical examination shows tachycardia and an irregularly irregular pulse. An electrocardiogram (EKG) is ordered and confirms atrial fibrillation. Laboratory studies are ordered and reveal the following',
        image: null,
        choices: ['Balh', 'asdf', 'booger', 'snake'],
        correctAnswer: 'Balh'
    }
];

const markFlagContainer = document.querySelector('.mark-flag-container')
const flagCheckboxInput = document.querySelector('.flag-checkbox-input')
const questionAnswerChoice = document.querySelectorAll('.question-answer-choice')
const formEl = document.querySelector('form')
const showAnswerBtn = document.querySelector('.show-answer-button')
const briefExplanationContainer = document.querySelector('.brief-explanation-container')
const explanationContentContainer = document.querySelector('.explanation-content-container')
const nextBtns = document.querySelectorAll('.next-button');
const questionVignette = document.querySelector('.question-vignette')
const questionChoicesForm = document.querySelector('.question-choices-form')
const questionChoicesNoButton = document.querySelector('.question-choices-no-button')

let currentQuestionIndex = 1


function displayQuestion(arrayOfQuestions) {
    let showQuestion = `
        <p>${arrayOfQuestions[currentQuestionIndex - 1].question} </p>
        <div class="question-vignette-image-container">
            <img src=${arrayOfQuestions[currentQuestionIndex - 1].image} alt="test-question-image">
        </div>`
    let answerChoices = `<ul>
    <input id="question-one-input" type="radio" name="question">
    <span>
        A. 
        <div class="question-one-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex - 1].choices[0]}</div>
    </span>
</ul>
<ul>
    <input id="question-two-input" type="radio" name="question">
    <span>
        B. 
        <div class="question-two-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex - 1].choices[1]}</div>
    </span>
</ul>
<ul>
    <input id="question-three-input" type="radio" name="question">
    <span>
        C. 
        <div class="question-three-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex - 1].choices[2]}</div>
    </span>
</ul>
<ul>
    <input id="question-four-input" type="radio" name="question">
    <span>
        D. 
        <div class="question-four-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex - 1].choices[3]}</div>
    </span>
</ul>`
    questionVignette.innerHTML = showQuestion
    questionChoicesNoButton.innerHTML = answerChoices
} 

displayQuestion(questionsArray) 


nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        console.log('success')
        currentQuestionIndex += 1
        displayQuestion(questionsArray)
    })
})


//mark flag on click 
markFlagContainer.addEventListener('click', () => {
    if (flagCheckboxInput.checked == true) {
        flagCheckboxInput.checked = false
    } else {
        flagCheckboxInput.checked = true
    }
})

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

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
})

//show stats and explanations when clicking 'show answer' button

 showAnswerBtn.addEventListener('click', () => {
    briefExplanationContainer.classList.remove('hide')
    explanationContentContainer.classList.remove('hide')
 })