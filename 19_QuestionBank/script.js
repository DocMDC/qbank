import { questionsArray } from "./data.js"
import Calculator from "./calculator.js"

const markFlagContainer = document.querySelector('.mark-flag-container')
const flagCheckboxInput = document.querySelector('.flag-checkbox-input')
const formEl = document.querySelector('form')
const showAnswerBtn = document.querySelector('.show-answer-button')
const nextBtns = document.querySelectorAll('.next-button');
const previousBtn = document.querySelector('.previous-container')
const questionVignette = document.querySelector('.question-vignette')
const questionChoicesForm = document.querySelector('.question-choices-form')
const questionChoicesNoButton = document.querySelector('.question-choices-no-button')
const preloader = document.querySelector('.preloader')
const currentItemQuestionNumber = document.querySelector('.current-item-question-number')
const totalItemQuestionNumber = document.querySelector('.total-item-question-number')
const navParent = document.querySelector('.question-nav-container')
const questionChoicesNoBtn = document.querySelector('.question-choices-no-button')
const briefExplanationContainer = document.querySelector('.brief-explanation-container')
const explanationContentContainer = document.querySelector('.explanation-content-container')
const explanationContent = document.querySelector('.explanation-content')
const explanationReference = document.querySelector('.explanation-reference')
const copyrightInfo = document.querySelector('.copyright-info')
const totalBlockTime = document.querySelector('.time')
const labContentEl = document.querySelector('.lab-content')
const labContentContainer = document.querySelector('.lab-content-container')
const labFilterButtons = document.querySelectorAll('.lab-filter-btn')
const labBtn = document.querySelector('.lab-container')
const labSearch = document.querySelector('.lab-search')
const urineBtn = document.querySelector('.urine-and-bmi')
const bloodBtn = document.querySelector('.blood')
const serumBtn = document.querySelector('.serum')
const csfBtn = document.querySelector('.cerebrospinal')
const labSearchButton = document.querySelector('.lab-search-button') 
const calculatorIconBtn = document.querySelector('.calculator-container')
const calculatorEl = document.querySelector('.calculator')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')
const allClearBtn = document.querySelector('[data-all-clear]')
const equalsBtn = document.querySelector('[data-equal]')
const numberBtns = document.querySelectorAll('[data-calc-number]')
const operationBtns = document.querySelectorAll('[data-operations]')
const notesIconBtn = document.querySelector('.notes-container')
const notesContentContainer = document.querySelector('.notes-content-container')
const notesSaveBtn = document.querySelector('.notes-save-btn')
const notesDeleteBtn = document.querySelector('.notes-delete-btn')
const notesText = document.querySelector('.notes-text')
const lockBtn = document.querySelector('.lock')
const lockModal = document.querySelector('.lock-modal')
const unauthorizedBreakBtn = document.querySelector('.unauthorized-break-btn')
const returnToExamBtn = document.querySelector('.return-to-exam-btn')
const unauthorizedBreakModalEl = document.querySelector('.unauthorized-break-modal')
const unauthBreakReturnToExamBtn = document.querySelector('.unauthorized-break-return-to-exam-btn')
const rootEl = document.querySelector(':root')
const reverseColorBtn = document.querySelector('.reverse-container')
const endBlockBtn = document.querySelector('.stop')
const endBlockModalUnfinished = document.querySelector('.end-block-modal-unfinished')
const numberOfUnansweredItems = document.querySelector('.number-of-unanswered-items')
const remainInBlockUnfinishedBtn = document.querySelector('.remain-in-block-btn-unfinished')
const finalizedEndBlockBtnUnfinished = document.querySelector('.finalized-end-block-btn-unfinished')
const endBlockModalFinished = document.querySelector('.end-block-modal-finished')
const remainInBlockFinishedBtn = document.querySelector('.remain-in-block-btn-finished')
const finalizedEndBlockBtnFinished = document.querySelector('.finalized-end-block-btn-finished')
const completeScreen = document.querySelector('.complete-screen')
const resultsNumCorrect = document.getElementById('results-number-correct')
const resultsTotalQuestions = document.getElementById('results-total-questions')
const resultsPercentCorrect = document.getElementById('results-percent-correct')
const smallFontBtn = document.querySelector('.small-font')
const mediumFontBtn = document.querySelector('.medium-font')
const largeFontBtn = document.querySelector('.large-font')

let currentQuestionIndex = 0
let previousQuestionIndex 
let score = 0
let reversedColor = false
let examFinished = false
let totalPercentCorrect


const labArray = [
        'Serum - Alanine aminotransferase (ALT)', 'Serum - Aspartate aminotransferase (AST)', 'Serum - Alkaline phosphatase', 'Serum - Amylase', 'CSF - Cell count', 'CSF - Chloride', 'CSF - Gamma globulin', 'CSF - Glucose', 'Hematologic - Erythrocyte count', 'Hematologic - Male', 'Hematologic - Female', 'Hematologic - Chloride', 'Hematologic - Gamma globulin', 'Hematologic - Glucose', 'Urine - Calcium', 'Urine - Creatinine clearance', 'Urine - Male', 'Urine - Female', 'Urine - Osmolality', 'Urine - Oxalate'
]


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
        <input id="question-one-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[0]}">
        <span>
            A. 
            <div class="question-one-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[0]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-two-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[1]}">
        <span>
            B. 
            <div class="question-two-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[1]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-three-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[2]}">
        <span>
            C. 
            <div class="question-three-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[2]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-four-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[3]}">
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
        <input id="question-one-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[0]}">
        <span>
            A. 
            <div class="question-one-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[0]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-two-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[1]}">
        <span>
            B. 
            <div class="question-two-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[1]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-three-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[2]}">
        <span>
            C. 
            <div class="question-three-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[2]}</div>
        </span>
    </ul>
    <ul>
        <input id="question-four-input" class="question-inputs" type="radio" name="question" value="${arrayOfQuestions[currentQuestionIndex].choices[3]}">
        <span>
            D. 
            <div class="question-four-answer question-answer-choice">${arrayOfQuestions[currentQuestionIndex].choices[3]}</div>
        </span>
    </ul>`
        questionVignette.innerHTML = showQuestion
        questionChoicesNoButton.innerHTML = answerChoices
    } 

    displayExplanationWhenIncorrect(arrayOfQuestions) {
        briefExplanationContainer.innerHTML = `<div class="statistics">
        <div class="statistics-incorrect">
            <h4>Incorrect</h4>
            <p>Correct answer</p>
            <span>${arrayOfQuestions[currentQuestionIndex].correctAnswerLetter}</span>
        </div>
        <div class="statistics-percentage-correct">
            <div>
                <span class="material-symbols-outlined">
                    equalizer
                </span>
            </div>
            <div>
                <span>${arrayOfQuestions[currentQuestionIndex].percentageCorrect}</span>
                <p>Answered correctly</p>
            </div>
        </div>
        <div class="statistics-time-spent">
            <div>
                <span class="material-symbols-outlined">
                    schedule
                </span>
            </div>
            <div class='time-per-question'>
                <span>
                    <span class='question-hours'>:</span>
                    <span class='question-minutes'>:</span>
                    <span class='question-seconds'></span>  
                </span>
                <p>Time Spent</p>
            </div>
        </div>
        <div class="statistics-version-display">
            <div>
                <span class="material-symbols-outlined">
                    calendar_month
                </span>
            </div>
            <div>
                <span>2022</span>
                <p>Version</p>
            </div>
        </div>
    </div>`
        
    
    explanationContent.innerHTML = arrayOfQuestions[currentQuestionIndex].explanation
        explanationReference.innerHTML = `                    <div>
        <span>${arrayOfQuestions[currentQuestionIndex].subject}</span>
        <p>Subject</p>
    </div>
    <div>
        <span>${arrayOfQuestions[currentQuestionIndex].chapter}</span>
        <p>Chapter</p>
    </div>
    <div>
        <span>${arrayOfQuestions[currentQuestionIndex].section}</span>
        <p>Section</p>
    </div>`
        copyrightInfo.innerHTML = `<p>Copyright &#169; Physeo. All rights reserved.</p>`
    }

    displayExplanationWhenCorrect(arrayOfQuestions) {
        
        briefExplanationContainer.innerHTML = `<div class="statistics">
        <div class="statistics-correct">
            <h4>Correct</h4>
            <p>Correct answer</p>
            <span>${arrayOfQuestions[currentQuestionIndex].correctAnswerLetter}</span>
        </div>
        <div class="statistics-percentage-correct">
            <div>
                <span class="material-symbols-outlined">
                    equalizer
                </span>
            </div>
            <div>
                <span>${arrayOfQuestions[currentQuestionIndex].percentageCorrect}</span>
                <p>Answered correctly</p>
            </div>
        </div>
        <div class="statistics-time-spent">
            <div>
                <span class="material-symbols-outlined">
                    schedule
                </span>
            </div>
            <div class='time-per-question'>
                <span>
                    <span class='question-hours'>:</span>
                    <span class='question-minutes'>:</span>
                    <span class='question-seconds'></span>  
                </span>
                <p>Time Spent</p>
            </div>
        </div>
        <div class="statistics-version-display">
            <div>
                <span class="material-symbols-outlined">
                    calendar_month
                </span>
            </div>
            <div>
                <span>2022</span>
                <p>Version</p>
            </div>
        </div>
    </div>`
        const statistics = document.querySelector('.statistics')
        statistics.style.borderLeft = '9px solid green'
        explanationContent.innerHTML = arrayOfQuestions[currentQuestionIndex].explanation
        explanationReference.innerHTML = `                    <div>
        <span>${arrayOfQuestions[currentQuestionIndex].subject}</span>
        <p>Subject</p>
    </div>
    <div>
        <span>${arrayOfQuestions[currentQuestionIndex].chapter}</span>
        <p>Chapter</p>
    </div>
    <div>
        <span>${arrayOfQuestions[currentQuestionIndex].section}</span>
        <p>Section</p>
    </div>`
        copyrightInfo.innerHTML = `<p>Copyright &#169; Physeo. All rights reserved.</p>`
    }

    displaySerumLabs() {
        labContentEl.innerHTML = `
        <div class="lab-content-subtitle-container">
                        <h3>Serum</h3>
                        <h3>Reference Range</h3>
                    </div>
                    <div class="lab-content-general-div">
                        <div class="lab-name">
                            <h4>Alanine aminotransferase (ALT)</h4>
                        </div>
                        <div class="lab-value">
                            <h4>10-40 U/L</h4>
                        </div>
                    </div>
                    <div class="lab-content-general-div">
                        <div class="lab-name">
                            <h4>Aspartate aminotransferase (AST)</h4>
                        </div>
                        <div class="lab-value">
                            <h4>12-38 U/L</h4>
                        </div>
                    </div>
                    <div class="lab-content-general-div">
                        <div class="lab-name">
                            <h4>Alkaline phosphatase</h4>
                        </div>
                        <div class="lab-value">
                            <h4>25-100 U/L</h4>
                        </div>
                    </div>
                    <div class="lab-content-general-div">
                        <div class="lab-name">
                            <h4>Amylase</h4>
                        </div>
                        <div class="lab-value">
                            <h4>25-125 U/L</h4>
                        </div>
                    </div>
        `
    }

    displayCSFLabs() {
        labContentEl.innerHTML = `
        <div class="lab-content-subtitle-container">
                        <h3>Cerebrospinal Fluid</h3>
                        <h3>Reference Range</h3>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Cell count</h4>
                    </div>
                    <div class="lab-value">
                        <h4>0-5/mm^3</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Chloride</h4>
                    </div>
                    <div class="lab-value">
                        <h4>118-132 mEq/L</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Gamma globulin</h4>
                    </div>
                    <div class="lab-value">
                        <h4>3%-12% total proteins</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Glucose</h4>
                    </div>
                    <div class="lab-value">
                        <h4>40-70 mg/dL</h4>
                    </div>
                </div>
        `
    }

    displayBloodLabs() {
        labContentEl.innerHTML = `
        <div class="lab-content-subtitle-container">
                    <h3>Hematologic</h3>
                    <h3>Reference Range</h3>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Erythrocyte count</h4>
                        <h4>Male</h4>
                        <h4>Female</h4>
                    </div>
                    <div class="lab-value">
                        <br>
                        <h4>4.3-5.9 million/mm^3</h4>
                        <h4>3.5-5.5 million/mm^3</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Chloride</h4>
                    </div>
                    <div class="lab-value">
                        <h4>118-132 mEq/L</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Gamma globulin</h4>
                    </div>
                    <div class="lab-value">
                        <h4>3%-12% total proteins</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Glucose</h4>
                    </div>
                    <div class="lab-value">
                        <h4>40-70 mg/dL</h4>
                    </div>
                </div>
        `
    }

    displayUrineLabs() {
        labContentEl.innerHTML = `
        <div class="lab-content-subtitle-container">
                    <h3>Urine</h3>
                    <h3>Reference Range</h3>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Calcium</h4>
                    </div>
                    <div class="lab-value">
                        <h4>100-300 mg/24 h</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Creatinine clearance</h4>
                        <h4>Male</h4>
                        <h4>Female</h4>
                    </div>
                    <div class="lab-value">
                        <br>
                        <h4>94-137 mL/min</h4>
                        <h4>88-128 mL/min</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Osmolality</h4>
                    </div>
                    <div class="lab-value">
                        <h4>50-1200 mOsmol/kg H2O</h4>
                    </div>
                </div>
                <div class="lab-content-general-div">
                    <div class="lab-name">
                        <h4>Oxalate</h4>
                    </div>
                    <div class="lab-value">
                        <h4>8-40 microgram/mL</h4>
                    </div>
                </div>
        `
    }

    //hide the explanation to the question
    hideExplanation() {
        explanationContent.innerHTML = ''
        explanationReference.innerHTML = ''
        briefExplanationContainer.classList.add('hide')
        explanationContentContainer.classList.add('hide')
    }

    sessionStorageExplanationCorrect() {
        briefExplanationContainer.classList.remove('hide')
        explanationContentContainer.classList.remove('hide')
        this.displayExplanationWhenCorrect(questionsArray)
    }
    
    sessionStorageExplanationIncorrect() {
        briefExplanationContainer.classList.remove('hide')
        explanationContentContainer.classList.remove('hide')
        this.displayExplanationWhenIncorrect(questionsArray)
    }

    preventChangingAnswer() {
        if (!briefExplanationContainer.classList.contains('hide')) {
            let currentInputs = questionChoicesNoButton.querySelectorAll('.question-inputs')
            currentInputs.forEach(input => {
                input.addEventListener('click', (e) => {
                    e.preventDefault()
                })
            })  
        }                
    }

    //remove bullet if question has already been answered or if user selects choice
    sessionStorageRemoveBullets() {
        let bullet = navParent.children[currentQuestionIndex].querySelector('.question-number :nth-child(1)')
        let currentInputs = questionChoicesNoButton.querySelectorAll('.question-inputs')

        currentInputs.forEach(input => {
            if (input.checked == true) {
                bullet.style.visibility = 'hidden'
            }
        })

        currentInputs.forEach(input => {
            input.addEventListener('click', () => {
                if (input.checked == true) {
                    bullet.style.visibility = 'hidden'
                }
            })
        })
    }

    //strikethrough answer choices when user clicks
    strikeAnswerChoice() {
        let currentAnswerChoices = questionChoicesNoButton.querySelectorAll('.question-answer-choice')
        currentAnswerChoices.forEach(el => {
            el.addEventListener('click', () => {
                if (el.style.textDecoration == 'line-through') {
                    el.style.textDecoration = 'none'
                } else {
                    el.style.textDecoration = 'line-through'
                }
            })
        }) 
    }

    //search session storage and if selection has already been made, display that selection
    searchSessionStorageForMarkedInputs() {
        for (let i = 0; i < sessionStorage.length; i++) {
            let sessionStorageKey = sessionStorage.key(i)
            let sessionStorageValue = sessionStorage.getItem(sessionStorageKey)

            let newInputs = questionChoicesNoButton.querySelectorAll('.question-inputs')
            newInputs.forEach(input => {
                if (sessionStorageValue == input.value) {
                    input.setAttribute('checked', true)
                }
            })
        }
    }

    //update flag checkbox radio input in header if applicable
    updateFlag() {        
        if (navParent.children[currentQuestionIndex].children[2].children[0].classList.contains('hide')) {
            flagCheckboxInput.checked = false
        } else if (!navParent.children[currentQuestionIndex].children[2].children[0].classList.contains('hide')) {
            flagCheckboxInput.checked = true
        }
    }

    //highlight current nav item
    //return default styling of previous nav item
    updateNav() {
        if (reversedColor === false) {
            navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
            navParent.children[currentQuestionIndex].style.color = 'white'
            if ((previousQuestionIndex + 1) % 2 == 0) {
                navParent.children[previousQuestionIndex].style.backgroundColor = 'white'
                navParent.children[previousQuestionIndex].style.color = 'black'
            } else {
                navParent.children[previousQuestionIndex].style.backgroundColor = '#e2e2e2'
                navParent.children[previousQuestionIndex].style.color = 'black'
            }
        } else {
            navParent.children[currentQuestionIndex].style.backgroundColor = '#a1ddfe'
            navParent.children[currentQuestionIndex].style.color = 'white'
            if ((previousQuestionIndex + 1) % 2 == 0) {
                navParent.children[previousQuestionIndex].style.backgroundColor = 'black'
                navParent.children[previousQuestionIndex].style.color = 'white'
            } else {
                navParent.children[previousQuestionIndex].style.backgroundColor = '#717172'
                navParent.children[previousQuestionIndex].style.color = 'white'
            }
        }
        
    }

    //select inputs from the question (eg, previous question) just before displaying the new question
    saveSelectionInSessionStorage(num) {
        let inputs = questionChoicesNoButton.querySelectorAll('.question-inputs')
        inputs.forEach(input => {
            //if radio button checked, save to session storage BEFORE moving to next question
            if (input.checked == true) {
                sessionStorage.setItem(`${currentQuestionIndex + num}`, input.value)
            } else {
                return
            }
        })
    }

    //display quesiton vignette and answer choices
    displayQuestion() {
        if (questionsArray[currentQuestionIndex].image == null) {
            this.displayQuestionWithoutImage(questionsArray)
        } else {
            this.displayQuestionWithImage(questionsArray)
        }
    }

    //search session storage to see if answer has already been answered and if so display explanation
    searchAndDisplaySessionStorageExplanation() {
        for (let i = 0; i < sessionStorage.length; i++) {
            let sessionStorageKey = sessionStorage.key(i)
            let sessionStorageValue = sessionStorage.getItem(sessionStorageKey)

            if (sessionStorageKey == (100 + currentQuestionIndex) && sessionStorageValue == 'correct') {
                this.sessionStorageExplanationCorrect()
                this.preventChangingAnswer()

            } else if (sessionStorageKey == (100 + currentQuestionIndex) && sessionStorageValue == 'incorrect') {
                this.sessionStorageExplanationIncorrect()
                this.preventChangingAnswer()
            } 
        }
    }

    //search session storage and display the time spent on the corresponding question if that question has already been answered
    searchAndDisplaySessionStorageQuestionTime() {
        for (let i = 0; i < sessionStorage.length; i++) {
            let sessionStorageKey = sessionStorage.key(i)
            let sessionStorageValue = sessionStorage.getItem(sessionStorageKey)

            if (sessionStorageKey == (200 + currentQuestionIndex)) {
                let hours = sessionStorageValue.slice(0, 2)
                let minutes = sessionStorageValue.slice(3, 5)
                let seconds = sessionStorageValue.slice(6, 8)

                let timePerQuestion = document.querySelector('.time-per-question')
        timePerQuestion.innerHTML = `
            <span>    
                <span class='question-hours'>${hours}:</span>
                <span class='question-minutes'>${minutes}:</span>
                <span class='question-seconds'>${seconds}</span>
            </span>
            <p>Time Spent</p> 
        `
            }
        }
    }

    clearLabHighlighting() {
        urineBtn.style.backgroundColor = '#d9d9d9'
        serumBtn.style.backgroundColor = '#d9d9d9'
        csfBtn.style.backgroundColor = '#d9d9d9'
        bloodBtn.style.backgroundColor = '#d9d9d9'
        labSearch.value = ''
    }

    renderResults(result) {
        result.forEach(labItem => {
            if (labItem.includes('Urine')) {
                urineBtn.style.backgroundColor = 'yellow'
            } else if (labItem.includes('Serum')) {
                serumBtn.style.backgroundColor = 'yellow'
            } else if (labItem.includes('CSF')) {
                csfBtn.style.backgroundColor = 'yellow'
            } else if (labItem.includes('Hematologic')) {
                bloodBtn.style.backgroundColor = 'yellow'
            }
        })
    }

    reverseColor() {
        if (reversedColor === false) {
            rootEl.style.setProperty('--clr-white', 'black')
            rootEl.style.setProperty('--clr-black', 'white')
            rootEl.style.setProperty('--clr-primary-text', '#fcfcfc')
            rootEl.style.setProperty('--clr-secondary-text', 'black')
            rootEl.style.setProperty('--clr-nav-odd', '#444444')
            rootEl.style.setProperty('--clr-secondary', '#444444')
            rootEl.style.setProperty('--clr-mainBG', 'black')
            rootEl.style.setProperty('--clr-secondBG', 'black')
            rootEl.style.setProperty('--clr-gray', 'white')
            rootEl.style.setProperty('--clr-light-gray', 'white')
            rootEl.style.setProperty('--clr-box-shadow', 'black')
            rootEl.style.setProperty('--clr-lab-content', 'gray')
            rootEl.style.setProperty('--clr-brief-explanation', '#717172')
            reversedColor = true
        } else {
            rootEl.style.setProperty('--clr-white', 'white')
            rootEl.style.setProperty('--clr-black', 'black')
            rootEl.style.setProperty('--clr-primary-text', 'black')
            rootEl.style.setProperty('--clr-secondary-text', '#fcfcfc')
            rootEl.style.setProperty('--clr-nav-odd', '#e2e2e2')
            rootEl.style.setProperty('--clr-secondary', '#004975')
            rootEl.style.setProperty('--clr-mainBG', '#d7dced')
            rootEl.style.setProperty('--clr-secondBG', '#fcfcfc')
            rootEl.style.setProperty('--clr-gray', '#717172')
            rootEl.style.setProperty('--clr-light-gray', '#D3D3D3')
            rootEl.style.setProperty('--clr-box-shadow', '#4783bd')
            rootEl.style.setProperty('--clr-lab-content', '#d7dcec')
            rootEl.style.setProperty('--clr-brief-explanation', 'transparent')
            reversedColor = false
        }
    }

    adjustNavColors () {
        if (reversedColor === false) {
            for (let i = 0; i < navParent.children.length; i++) {
                let eachDiv = navParent.children[i]
                if (eachDiv.dataset.number % 2 == 0) {
                    eachDiv.style.backgroundColor = 'white'
                    eachDiv.style.color = 'black'
                } else {
                    eachDiv.style.backgroundColor = '#e2e2e2'
                    eachDiv.style.color = 'black'
                }
            }
            
            navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
            navParent.children[currentQuestionIndex].style.color = 'white'
        } else {
            for (let i = 0; i < navParent.children.length; i++) {
                let eachDiv = navParent.children[i]
                if (eachDiv.dataset.number % 2 == 0) {
                    eachDiv.style.backgroundColor = 'black'
                    eachDiv.style.color = 'white'
                } else {
                    eachDiv.style.backgroundColor = '#717172'
                    eachDiv.style.color = 'white'
                }
            }
            
            navParent.children[currentQuestionIndex].style.backgroundColor = '#a1ddfe'
        }
    }

    makeFontSmall() {
        rootEl.style.setProperty('--small-text', '1.3rem')
    }

    checkIfExamComplete() {
        let allBullets = navParent.querySelectorAll('.question-number span:nth-child(1)')
        let bulletsArray = Array.from(allBullets)

        function isHidden(el) {
            return el.style.visibility == 'hidden'
        }

        if (bulletsArray.every(isHidden) === true) {
            examFinished = true
        }
    }
}
class trackTotalTime {
    constructor(parentEl) {
        parentEl.innerHTML = trackTotalTime.displayMainTimer()

        this.childEl = {
            hours: parentEl.querySelector('.hours'),
            minutes: parentEl.querySelector('.minutes'),
            seconds: parentEl.querySelector('.seconds')
        }

        this.interval = null
        this.second = 1
        this.minute = this.second * 60
        this.hour = this.minute * 60
        this.day = this.hour * 24
        this.totalTime = 0
        this.beginCounter()
    }

    updateTimer() { 
        const hours = Math.floor((this.totalTime % this.day) / this.hour)
        const minutes = Math.floor((this.totalTime % this.hour) / this.minute)
        const seconds = Math.floor((this.totalTime % this.minute) / this.second)

        this.childEl.hours.textContent = hours.toString().padStart(2, '0')
        this.childEl.minutes.textContent = minutes.toString().padStart(2, '0')
        this.childEl.seconds.textContent = seconds.toString().padStart(2, '0')
    }

    stopCounter() {
        clearInterval(this.interval)
        this.interval = null;
    }

    beginCounter() {       
        this.interval = setInterval(() => {
            this.totalTime++
            this.updateTimer()
        }, 1000) 
    }

    static displayMainTimer() {
        return `
        <p>Block Time Elapsed: &nbsp</p>
        <span class='hours'></span>
        <span>:</span>
        <span class='minutes'></span>
        <span>:</span>
        <span class='seconds'></span>
        `
    }
}
class trackQuestionTime {
    constructor() {
        this.interval = null
        this.second = 1
        this.minute = this.second * 60
        this.hour = this.minute * 60
        this.day = this.hour * 24
        this.totalTime = 0.001
        this.hours
        this.minutes
        this.seconds
    }

    resetTimer() {
        clearInterval(this.interval)
        this.interval = null
        this.totalTime = 0.001
    }

    updateTimer(time) {
        clearInterval(this.interval)
        this.interval = null
        this.totalTime = time
    }

    displayTime(seconds, minutes, hours) {
        let timePerQuestion = document.querySelector('.time-per-question')
        timePerQuestion.innerHTML = `
            <span>    
                <span class='question-hours'>${hours.toString().padStart(2, '0')}:</span>
                <span class='question-minutes'>${minutes.toString().padStart(2, '0')}:</span>
                <span class='question-seconds'>${seconds.toString().padStart(2, '0')}</span>
            </span>
            <p>Time Spent</p> 
        `
    }

    trackTime() {        
        this.hours = Math.floor((this.totalTime % this.day) / this.hour)
        this.minutes = Math.floor((this.totalTime % this.hour) / this.minute)
        this.seconds = Math.floor((this.totalTime % this.minute) / this.second)    

        showAnswerBtn.addEventListener('click', () => {
            this.displayTime(this.seconds, this.minutes, this.hours)
            //set question time to session storage
            sessionStorage.setItem(`${200 + parseInt(currentQuestionIndex)}`, `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`)
        })        
    }

    beginCounter() {
        this.interval = setInterval(() => {
            this.totalTime++
            this.trackTime()
        }, 1000) 
    }
}

const calculator = new Calculator
const questionTimeTracker = new trackQuestionTime()
const totalTimeTracker = new trackTotalTime(document.querySelector('.time'))
const qbank = new QuestionBank

//preloader and initial load event
window.addEventListener('load', () => {
    sessionStorage.clear()
    setTimeout(() => {
        preloader.classList.add('hide-preloader')
    }, 1000)
    qbank.displayQuestion()
    questionTimeTracker.beginCounter()
    qbank.updateFlag()
    qbank.searchSessionStorageForMarkedInputs()
    qbank.sessionStorageRemoveBullets()
    qbank.strikeAnswerChoice()
    qbank.preventChangingAnswer()
    totalItemQuestionNumber.innerHTML = navParent.children.length
})

/*========== MOVE TO NEXT QUESTION ==========*/
nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        // prevent user from cycling beyond the number of questions
        if (currentQuestionIndex + 2 >= navParent.children.length) {
            currentQuestionIndex = navParent.children.length - 2
        }

        qbank.hideExplanation()
        if (!notesContentContainer.classList.contains('hide')) {
            notesContentContainer.classList.add('hide')
            notesText.value = ''
        }

        previousQuestionIndex = currentQuestionIndex
        currentQuestionIndex += 1
        currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1              

        qbank.updateNav()
        qbank.saveSelectionInSessionStorage(-1)
        qbank.displayQuestion()
        questionTimeTracker.resetTimer()
        questionTimeTracker.beginCounter()
        qbank.updateFlag()
        qbank.searchSessionStorageForMarkedInputs()
        qbank.searchAndDisplaySessionStorageExplanation()
        qbank.searchAndDisplaySessionStorageQuestionTime()
        qbank.sessionStorageRemoveBullets()
        qbank.strikeAnswerChoice()
        qbank.preventChangingAnswer()
    })
})

/*========== MOVE TO PREVIOUS QUESTION ==========*/
previousBtn.addEventListener('click', () => {
    //prevent user from going below the number of questions
    if (currentQuestionIndex <= 1) {
        currentQuestionIndex = 1
    }

    previousQuestionIndex = currentQuestionIndex
    
    currentQuestionIndex -= 1

    currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

    qbank.hideExplanation()
    if (!notesContentContainer.classList.contains('hide')) {
        notesContentContainer.classList.add('hide')
        notesText.value = ''
    }
    
    //highlight current nav item
    if (reversedColor === false) {
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
    } else {
        navParent.children[currentQuestionIndex].style.backgroundColor = '#a1ddfe'
        navParent.children[currentQuestionIndex].style.color = 'white'
    
        if ((previousQuestionIndex + 1) % 2 == 0 && previousQuestionIndex > 0) {
            navParent.children[previousQuestionIndex].style.backgroundColor = 'black'
            navParent.children[previousQuestionIndex].style.color = 'white'
        } else if ((previousQuestionIndex + 1) % 2 !== 0 && previousQuestionIndex > 0) {
            navParent.children[previousQuestionIndex].style.backgroundColor = '#717172'
            navParent.children[previousQuestionIndex].style.color = 'white'
        } else {
            return
        }
    }

    qbank.saveSelectionInSessionStorage(1)
    qbank.displayQuestion()
    questionTimeTracker.resetTimer()
    questionTimeTracker.beginCounter()
    qbank.updateFlag()   
    qbank.searchSessionStorageForMarkedInputs()
    qbank.searchAndDisplaySessionStorageExplanation()
    qbank.searchAndDisplaySessionStorageQuestionTime()
    qbank.sessionStorageRemoveBullets()
    qbank.strikeAnswerChoice()
    qbank.preventChangingAnswer() 
})

/*========== SELECT ANY QUESTION ==========*/
for (let i = 0; i < navParent.children.length; i++) {
        let child = navParent.children[i]
        child.addEventListener('click', (e) => {

            //select inputs from the question (eg, previous question) just before clicking the next question
            qbank.saveSelectionInSessionStorage(0)

            previousQuestionIndex = currentQuestionIndex
            
            let targetNumber = parseInt(e.target.dataset.number)
            currentQuestionIndex = targetNumber - 1

            qbank.hideExplanation()
            if (!notesContentContainer.classList.contains('hide')) {
                notesContentContainer.classList.add('hide')
                notesText.value = ''
            }

            //highlight current nav item
            if (reversedColor === false) {
                navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
                navParent.children[currentQuestionIndex].style.color = 'white'

            //remove styling for previous nav item
                if ((previousQuestionIndex + 1) % 2 == 0 && previousQuestionIndex !== currentQuestionIndex) {
                    navParent.children[previousQuestionIndex].style.backgroundColor = 'white'
                    navParent.children[previousQuestionIndex].style.color = 'black'
                } else if ((previousQuestionIndex + 1) % 2 !== 0 && previousQuestionIndex !== currentQuestionIndex) {
                    navParent.children[previousQuestionIndex].style.backgroundColor = '#e2e2e2'
                    navParent.children[previousQuestionIndex].style.color = 'black'
                } else {
                    return
                }
            } else {
                navParent.children[currentQuestionIndex].style.backgroundColor = '#a1ddfe'
                navParent.children[currentQuestionIndex].style.color = 'white'

                if ((previousQuestionIndex + 1) % 2 == 0 && previousQuestionIndex !== currentQuestionIndex) {
                    navParent.children[previousQuestionIndex].style.backgroundColor = 'black'
                    navParent.children[previousQuestionIndex].style.color = 'white'
                } else if ((previousQuestionIndex + 1) % 2 !== 0 && previousQuestionIndex !== currentQuestionIndex) {
                    navParent.children[previousQuestionIndex].style.backgroundColor = '#717172'
                    navParent.children[previousQuestionIndex].style.color = 'white'
                } else {
                    return
                }
            } 
            

            qbank.displayQuestion()
            questionTimeTracker.resetTimer()
            questionTimeTracker.beginCounter()

            //update the displayed current question in the header
            currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

            qbank.updateFlag()
            qbank.searchSessionStorageForMarkedInputs()
            qbank.searchAndDisplaySessionStorageExplanation()
            qbank.searchAndDisplaySessionStorageQuestionTime()
            qbank.sessionStorageRemoveBullets()
            qbank.strikeAnswerChoice()           
        })
    }

//show stats and explanations when clicking 'show answer' button

 showAnswerBtn.addEventListener('click', (e) => {
    //if user has already clicked show answer button and explanations are displayed, prevent them from clicking again
    if (!briefExplanationContainer.classList.contains('hide')) {
        e.preventDefault()
        e.stopImmediatePropagation()
    } else {
        
    briefExplanationContainer.classList.remove('hide')
    explanationContentContainer.classList.remove('hide')

    //if correct increase score and display explanation with green highlighted content, else display red highlighted content and show explanation and not increase score
    let userSelectedAnswerChoice = questionChoicesNoButton.querySelectorAll('.question-inputs')
    let checkedInput

    userSelectedAnswerChoice.forEach(choice => {
        if (choice.checked === true) {
            checkedInput = choice.value
        } else {
            return
        }
    })
    
    if (checkedInput === questionsArray[currentQuestionIndex].correctAnswer) {
        qbank.displayExplanationWhenCorrect(questionsArray)
        score += 1
        sessionStorage.setItem(`${100 + currentQuestionIndex}`, 'correct')
    } else {
        qbank.displayExplanationWhenIncorrect(questionsArray)
        sessionStorage.setItem(`${100 + currentQuestionIndex}`, 'incorrect')
    }

    //remove bullet if question is answered but nothing selected
    let bullet = navParent.children[currentQuestionIndex].querySelector('.question-number :nth-child(1)')
    bullet.style.visibility = 'hidden'
    }
    
    qbank.preventChangingAnswer()

    console.log(score)

 })

 //mark flag on click 
markFlagContainer.addEventListener('click', () => {
    if (flagCheckboxInput.checked == true) {
        flagCheckboxInput.checked = false
        
        //update check mark in nav
        navParent.children[currentQuestionIndex].children[2].children[0].classList.toggle('hide')

    } else {
        //update check mark in header
        flagCheckboxInput.checked = true

        //update check mark in nav
        navParent.children[currentQuestionIndex].children[2].children[0].classList.toggle('hide')
    }
})

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
})

labFilterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let category = e.target.dataset.name
        if (category === 'Serum') {
            qbank.displaySerumLabs()
        } else if (category === 'CSF') {
            qbank.displayCSFLabs()
        } else if (category === 'Blood') {
            qbank.displayBloodLabs()
        } else if (category === 'Urine') {
            qbank.displayUrineLabs()
        }
    })
})

labBtn.addEventListener('click', () => {
    labContentContainer.classList.toggle('hide')
    qbank.clearLabHighlighting()
})

labSearchButton.addEventListener('click', () => {
    urineBtn.style.backgroundColor = '#d9d9d9'
    serumBtn.style.backgroundColor = '#d9d9d9'
    csfBtn.style.backgroundColor = '#d9d9d9'
    bloodBtn.style.backgroundColor = '#d9d9d9'

    let results = []
    let searchInput = labSearch.value.toLowerCase()
    if (searchInput.length > 0) {
        results = labArray.filter(item => {
            return item.toLowerCase().includes(searchInput)
        })
    }
    qbank.renderResults(results)
    labSearch.value = ''
})

calculatorIconBtn.addEventListener('click', () => {
    calculatorEl.classList.toggle('hide')
})

allClearBtn.addEventListener('click', () => {
    calculator.allClear()
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperand.innerText.length <= 0) return
        if (previousOperand.innerText.includes('x') || previousOperand.innerText.includes('+') || previousOperand.innerText.includes('-') || previousOperand.innerText.includes('÷')) {
            calculator.compute()
        }
        calculator.updatePreviousDisplay(button.innerText)
    })
})

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '.' && currentOperand.innerText.includes('.') || currentOperand.innerText.length > 7) {
            return
        } else {
            calculator.updateCurrentDisplay(button.innerText)
        }
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute()
})

notesIconBtn.addEventListener('click', () => {
    notesContentContainer.classList.toggle('hide')
    for (let i = 0; i < sessionStorage.length; i++) {
        let sessionStorageKey = sessionStorage.key(i)
        let sessionStorageValue = sessionStorage.getItem(sessionStorageKey)

        if (sessionStorageKey == 300 + currentQuestionIndex) {
            notesText.value = sessionStorageValue
        }
    }
})

notesSaveBtn.addEventListener('click', () => {
    sessionStorage.setItem((currentQuestionIndex + 300), notesText.value)

    navParent.children[currentQuestionIndex].children[2].children[1].classList.remove('hide')
})

notesDeleteBtn.addEventListener('click', () => {
    sessionStorage.removeItem(currentQuestionIndex + 300)
    notesText.value = ''

    navParent.children[currentQuestionIndex].children[2].children[1].classList.add('hide')
})

//dark mode
reverseColorBtn.addEventListener('click', () => {
    qbank.reverseColor()
    qbank.adjustNavColors()
})

//change font size
smallFontBtn.addEventListener('click', () => {
    rootEl.style.setProperty('--extra-small-text', '0.9rem')
    rootEl.style.setProperty('--small-text', '1.1rem')
    rootEl.style.setProperty('--medium-text', '1.3rem')
    rootEl.style.setProperty('--large-text', '1.5rem')
    rootEl.style.setProperty('--proceed-btn', '1rem')
    rootEl.style.setProperty('--show-answer-btn', '0.9rem')
    rootEl.style.setProperty('--stats', '0.9rem')
    smallFontBtn.style.backgroundColor = '#d7dcec'
    mediumFontBtn.style.backgroundColor = 'transparent'
    largeFontBtn.style.backgroundColor = 'transparent'
    smallFontBtn.style.color = 'black'
    mediumFontBtn.style.color = 'white'
    largeFontBtn.style.color = 'white'
})

mediumFontBtn.addEventListener('click', () => {
    rootEl.style.setProperty('--extra-small-text', '1.1rem')
    rootEl.style.setProperty('--small-text', '1.3rem')
    rootEl.style.setProperty('--medium-text', '1.5rem')
    rootEl.style.setProperty('--large-text', '1.7rem')
    rootEl.style.setProperty('--proceed-btn', '1.1rem')
    rootEl.style.setProperty('--show-answer-btn', '1rem')
    rootEl.style.setProperty('--stats', '1.1rem')
    smallFontBtn.style.backgroundColor = 'transparent'
    mediumFontBtn.style.backgroundColor = '#d7dcec'
    largeFontBtn.style.backgroundColor = 'transparent'
    smallFontBtn.style.color = 'white'
    mediumFontBtn.style.color = 'black'
    largeFontBtn.style.color = 'white'
})

largeFontBtn.addEventListener('click', () => {
    rootEl.style.setProperty('--extra-small-text', '1.3rem')
    rootEl.style.setProperty('--small-text', '1.5rem')
    rootEl.style.setProperty('--medium-text', '1.7rem')
    rootEl.style.setProperty('--large-text', '1.9rem')
    rootEl.style.setProperty('--proceed-btn', '1.2rem')
    rootEl.style.setProperty('--show-answer-btn', '1.1rem')
    rootEl.style.setProperty('--stats', '1.2rem')
    smallFontBtn.style.backgroundColor = 'transparent'
    mediumFontBtn.style.backgroundColor = 'transparent'
    largeFontBtn.style.backgroundColor = '#d7dcec'
    smallFontBtn.style.color = 'white'
    mediumFontBtn.style.color = 'white'
    largeFontBtn.style.color = 'black'
    largeFontBtn.style.borderTopRightRadius = '9px'
    largeFontBtn.style.borderBottomRightRadius = '9px'

})

//lock exam
lockBtn.addEventListener('click', () => {
    lockModal.classList.toggle('hide')
})

returnToExamBtn.addEventListener('click', () => {
    lockModal.classList.add('hide')
})

unauthorizedBreakBtn.addEventListener('click', () => {
    unauthorizedBreakModalEl.classList.remove('hide')
})

unauthBreakReturnToExamBtn.addEventListener('click', () => {
    unauthorizedBreakModalEl.classList.add('hide')
    lockModal.classList.add('hide')
})

endBlockBtn.addEventListener('click', () => {
    qbank.checkIfExamComplete()
    if (examFinished === false) {
        //show modal warning that exam is incomplete
        endBlockModalUnfinished.classList.remove('hide')

        //display the number of unanswered items
        let numAnsweredArray = []
        let allBullets = navParent.querySelectorAll('.question-number span:nth-child(1)')
        let bulletsArray = Array.from(allBullets)
        
        bulletsArray.forEach(bullet => {         
            if (bullet.style.visibility == 'hidden') {
                //answered
                numAnsweredArray.push('answered')
            }
        })
        numberOfUnansweredItems.innerHTML = navParent.children.length - numAnsweredArray.length
        numAnsweredArray = []


    } else {
        //show modal showing that exam is complete
        endBlockModalFinished.classList.remove('hide')
    }
})

remainInBlockUnfinishedBtn.addEventListener('click', () => {
    endBlockModalUnfinished.classList.add('hide')
})

remainInBlockFinishedBtn.addEventListener('click', () => {
    endBlockModalFinished.classList.add('hide')
})

//clicked end block when questions are NOT complete and then clicked the "end block" confirm button
finalizedEndBlockBtnUnfinished.addEventListener('click', () => {
    completeScreen.classList.remove('hide')
    resultsNumCorrect.innerHTML = score
    resultsTotalQuestions.innerHTML = navParent.children.length 
    totalPercentCorrect = Math.ceil((score / navParent.children.length) * 100)
    resultsPercentCorrect.innerHTML = totalPercentCorrect
})

//clicked end block when questions ARE complete and then clicked the "end block" confirm button
finalizedEndBlockBtnFinished.addEventListener('click', () => {
    completeScreen.classList.remove('hide')
    resultsNumCorrect.innerHTML = score
    resultsTotalQuestions.innerHTML = navParent.children.length 
    totalPercentCorrect = Math.ceil((score / navParent.children.length) * 100) 
    resultsPercentCorrect.innerHTML = totalPercentCorrect
}) 
       