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
const questionAnswerChoice = document.querySelectorAll('.question-answer-choice')
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
const selectNumOfQuestionsEl = document.querySelector('.select-number-of-questions-container')
const questionRangeSubmitBtn = document.querySelector('.question-range-submit-button')
const selectNumOfQuestionsInput = document.getElementById('num-of-questions')
const currentItemQuestionNumber = document.querySelector('.current-item-question-number')
const totalItemQuestionNumber = document.querySelector('.total-item-question-number')
const questionNavContainer = document.querySelector('.question-nav-container')


let selectedQuestions = {
    number: [], 
    navArray: []
}

//display nav bar with corresponding number of questions selected by user
function displayQuestionNavContainer(num) {
    if (num == 1) {
        questionNavContainer.innerHTML = `<div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 2) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 3) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 4) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 5) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 6) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 7) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 8) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 9) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 10) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 11) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 12) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 13) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 14) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 15) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 16) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 17) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 18) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 19) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 20) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 21) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 22) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 23) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 24) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 25) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 26) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 27) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 28) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 29) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 30) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 31) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 32) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 33) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 34) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 35) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${35}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 36) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${35}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${36}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 37) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${35}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${36}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${37}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 38) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${35}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${36}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${37}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${38}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else if (num == 39) {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${35}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${36}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${37}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${38}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${39}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    } else {
        questionNavContainer.innerHTML = `          <div class="question-number">
        <span>&#x2022</span>
        <span>${1}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${2}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${3}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${4}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${5}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${6}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${7}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${8}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${9}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${10}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${11}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${12}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${13}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${14}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${15}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${16}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${17}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${18}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${19}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${20}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${21}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${22}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${23}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${24}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${25}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${26}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${27}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${28}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${29}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${30}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${31}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${32}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${33}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${34}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${35}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${36}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${37}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${38}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${39}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>
    <div class="question-number">
        <span>&#x2022</span>
        <span>${40}</span>
        <div class="question-number-flag-container hide">
            <img src="Assets/blackFlag.png" alt="flag-image">
        </div>
    </div>`
    }
}


function init() {
    currentItemQuestionNumber.innerText = 1
    totalItemQuestionNumber.innerText = selectedQuestions.number[0]
    displayQuestionNavContainer(selectedQuestions.number[0])
}

//select number of questions 
questionRangeSubmitBtn.addEventListener('click', () => {
    if (isNaN(selectNumOfQuestionsInput.value) == true || selectNumOfQuestionsInput.value < 1 || selectNumOfQuestionsInput.value > 40) {
        alert('please select a valid number')
    } else {
        selectNumOfQuestionsEl.classList.add('hide-select-number-of-questions')
        selectedQuestions.number.push(selectNumOfQuestionsInput.value)
        init()
    }
})

//preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide-preloader')
    }, 1000)
})

let currentQuestionIndex = 0


function displayQuestionWithImage(arrayOfQuestions) {
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

function displayQuestionWithoutImage(arrayOfQuestions) {
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



displayQuestionWithImage(questionsArray) 

//move to next question 
nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentQuestionIndex += 1
        if (currentQuestionIndex >= selectedQuestions.number[0] - 1) {
            currentQuestionIndex = selectedQuestions.number[0] - 1
        }
        console.log(currentQuestionIndex)
        currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1
        

        if (questionsArray[currentQuestionIndex].image == null) {
            displayQuestionWithoutImage(questionsArray)
        } else {
            displayQuestionWithImage(questionsArray)
        }
    })
})

//move to previous question
previousBtn.addEventListener('click', () => {
    currentQuestionIndex -= 1
    if (currentQuestionIndex <= 0) {
        currentQuestionIndex = 0
    }
    console.log(currentQuestionIndex)
    currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

    if (questionsArray[currentQuestionIndex].image == null) {
        displayQuestionWithoutImage(questionsArray)
    } else {
        displayQuestionWithImage(questionsArray)
    }
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