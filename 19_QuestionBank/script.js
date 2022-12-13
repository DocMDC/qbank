let questionsArray = [
    {
        id: 0,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 1,
        question: 'A 57-year-old male is brought to the emergency department by his wife with shortness of breath that started 4 hours ago. Associated symptoms include a worsening cough. The patient has a past medical history of chronic obstructive pulmonary disease. He continues to smoke 1 pack per day for the past 30 years. His temperature is 99.3 F (37.4 C), pulse is 111/min, respirations are 22, blood pressure is 129/83 mmHg, and O2 saturation is 86%. Physical examination reveals respiratory distress, prolonged expiratory phase of respiration, and diffuse wheezing. Which of the following methods of cellular transport occurs in the lungs when oxygen and carbon monoxide are exchanged?',
        image: 'Assets/testQuestion.png',
        choices: ['Simple Diffusion', 'Faciliated Diffusion', 'Primary Active Transport', 'Secondary Active Transport',],
        correctAnswer: 'Simple Diffusion',
        correctAnswerLetter: 'A',
        percentageCorrect: '65%',
        explanationImage: 'Assets/answerImage.png',
        explanation: `<div class="explanation-image-container">
        <img src="${'Assets/answerImage.png'}" alt="explanation-image">
    </div>
    <div class="explanation-content-text">
        <p>The patient in the vignette shows classic signs and symptoms of acute exacerbation of chronic obstructive pulmonary disease. Typical presentation includes increased dyspnea, increased cough frequency or severity, and sputum production. Diagnostic workup may include a chest x-ray which would reveal hyperinflation and arterial blood gas which would reveal hypoxia and CO2 retention. In the lungs, alveoli exchange inhaled O2 for CO2 from capillaries. The exchange of both of these goes from a high concentration to a low concentration <strong>(Choice A)</strong>. Thus, the transport of O2 and CO2 cannot be an example of active transport. Only transport from low to high concentration requires active transport or the use of energy in the form of ATP. In general, it is important to remember the list of these 4 molecules that undergo simple diffusion: O2, CO2, lipids, and steroids.</p><br>
        <p><strong>(Choice B)</strong> Facilitated diffusion, although similar to simple diffusion in that it involves the transport of a molecule along its concentration gradient, has an important difference. Facilitated diffusion involves the use of a transporter or channel whereas in simple diffusion, molecules move freely across the cell membrane without the help of any proteins.</p><br>
        <p><strong>(Choice C)</strong> Primary active transport is one form of active transport. This means that it involves the transport of a molecule from low concentration to high concentration; something that is not energetically favorable. Therefore, energy in the form of ATP is utilized to push the molecule into the already crowded area.</p><br>
        <p><strong>(Choice D)</strong> Secondary active transport must be distinguished from primary active transport. As another form of active transport, secondary active transport also involves the transport of a molecule against its concentration gradient. With that said, secondary active transport occurs as a result of the actions of primary active transport. For example, primary active transport can result in a sodium gradient. This sodium gradient can be used by another molecule, such as glucose, to help it flow against its concentration gradient. Since the ATP was not used directly in the transferring of the glucose in this situation, it would be an example of secondary active transport.</p>`
    },
    {
        id: 1,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'A 27-year-old female comes to the clinic complaining of intermittent palpitations over the past 2 days. She states she has been sweating more and experiencing a general feeling of nervousness. Her temperature is 99.7 F (37.6 C), pulse is 157/min, respirations are 14, blood pressure is 139/87 mmHg, and O2 saturation is 99%. Physical examination shows tachycardia and an irregularly irregular pulse. An electrocardiogram (EKG) is ordered and confirms atrial fibrillation. Laboratory studies are ordered and reveal the following',
        image: null,
        choices: ['Balh', 'asdf', 'booger', 'snake'],
        correctAnswer: 'Balh',
        correctAnswerLetter: 'A',
        percentageCorrect: '45%',
        explanationImage: null,
        explanation: 'balh is the best explanation'
    },
    {
        id: 2,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What color is the sky?',
        image: null,
        choices: ['Red', 'Blue', 'Orange', 'Green'],
        correctAnswer: 'Blue',
        correctAnswerLetter: 'B',
        percentageCorrect: '99%',
        explanationImage: null,
        explanation:'Everyone knows the sky is blue'
    },
    {
        id: 3,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What is 2 + 2?',
        image: null,
        choices: ['2', '3', '4', '5'],
        correctAnswer: '4',
        correctAnswerLetter: 'C',
        percentageCorrect: '96%',
        explanationImage: null,
        explanation: 'It is math.'
    },
    {
        id: 4,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'Which of the following is a bug?',
        image: null,
        choices: ['Ant', 'Dog', 'Cat', 'Fish'],
        correctAnswer: 'Ant',
        correctAnswerLetter: 'A',
        percentageCorrect: '88%',
        explanationImage: null,
        explanation: 'An ant is a bug. The others are animals.'
    },
    {
        id: 5,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'How many books are in the Harry Potter Series?',
        image: null,
        choices: ['7', '8', '9', '10'],
        correctAnswer: '7',
        correctAnswerLetter: 'A',
        percentageCorrect: '67%',
        explanationImage: null,
        explanation: 'She wrote 7 books'
    },
    {
        id: 6,
        subject: 'Physiology',
        chapter: 'General Principles',
        section: 2,
        question: 'What is the capital of Utah?',
        image: null,
        choices: ['Salt Lake City', 'Nashville', 'Boise', 'Bountiful'],
        correctAnswer: 'Salt Lake City',
        correctAnswerLetter: 'A',
        percentageCorrect: '82%',
        explanationImage: null,
        explanation: 'It is simple geography.'
    },
    
];

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

let currentQuestionIndex = 0
let previousQuestionIndex 
let score = 0
       
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
            <div>
                <span>${'need to create timer'}</span>
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
            <div>
                <span>${'need to create timer'}</span>
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
        if (navParent.children[currentQuestionIndex].children[2].classList.contains('hide')) {
            flagCheckboxInput.checked = false
        } else if (!navParent.children[currentQuestionIndex].children[2].classList.contains('hide')) {
            flagCheckboxInput.checked = true
        }
    }

    //highlight current nav item
    //return default styling of previous nav item
    updateNav() {
        navParent.children[currentQuestionIndex].style.backgroundColor = '#004975'
        navParent.children[currentQuestionIndex].style.color = 'white'
        if ((previousQuestionIndex + 1) % 2 == 0) {
            navParent.children[previousQuestionIndex].style.backgroundColor = 'white'
            navParent.children[previousQuestionIndex].style.color = 'black'
        } else {
            navParent.children[previousQuestionIndex].style.backgroundColor = '#e2e2e2'
            navParent.children[previousQuestionIndex].style.color = 'black'
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
}
class trackTime {
    constructor(parentEl) {
        parentEl.innerHTML = trackTime.displayMainTimer()

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
        this.totalTime = 0.001
        this.beginCountdown()
    }

    updateTimer() { //updateInterfaceTime()
        const hours = Math.floor((this.totalTime % this.day) / this.hour)
        const minutes = Math.floor((this.totalTime % this.hour) / this.minute)
        const seconds = Math.floor((this.totalTime % this.minute) / this.second)

        this.childEl.hours.textContent = hours.toString().padStart(2, '0')
        this.childEl.minutes.textContent = minutes.toString().padStart(2, '0')
        this.childEl.seconds.textContent = seconds.toString().padStart(2, '0')
    }

    stopCountdown() {
        clearInterval(this.interval)
        this.interval = null;
    }

    beginCountdown() {
        if (this.totalTime === 0) return;
        
        this.interval = setInterval(() => {
            this.totalTime++
            this.updateTimer()
        }, 1000) 

        if (this.remainingSeconds === 0) {
            this.stopCountdown()
        }
    }

    static displayMainTimer() {
        return `
            <div>
                <p>Block Time Elapsed:</p>
                <span class='hours'></span>
                <span>:</span>
                <span class='minutes'></span>
                <span>:</span>
                <span class='seconds'></span>
            </div>
        `
    }
}

let tracker = new trackTime(document.querySelector('.time'))

let qbank = new QuestionBank


//preloader and initial load event
window.addEventListener('load', () => {
    sessionStorage.clear()
    setTimeout(() => {
        preloader.classList.add('hide-preloader')
    }, 1000)
    qbank.displayQuestion()
    qbank.updateFlag()
    qbank.searchSessionStorageForMarkedInputs()
    qbank.sessionStorageRemoveBullets()
    qbank.strikeAnswerChoice()
    qbank.preventChangingAnswer()
})

/*========== MOVE TO NEXT QUESTION ==========*/
nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        qbank.hideExplanation()

        previousQuestionIndex = currentQuestionIndex
        currentQuestionIndex += 1
        currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1      

        qbank.updateNav()
        qbank.saveSelectionInSessionStorage(-1)
        qbank.displayQuestion()
        qbank.updateFlag()
        qbank.searchSessionStorageForMarkedInputs()
        qbank.searchAndDisplaySessionStorageExplanation()
        qbank.sessionStorageRemoveBullets()
        qbank.strikeAnswerChoice()
        qbank.preventChangingAnswer()
    })
})

/*========== MOVE TO PREVIOUS QUESTION ==========*/
previousBtn.addEventListener('click', () => {
    previousQuestionIndex = currentQuestionIndex
    currentQuestionIndex -= 1
    if (currentQuestionIndex <= 0) {
        currentQuestionIndex = 0
    }
    if (previousQuestionIndex <= 0) {
        previousQuestionIndex = 0
    }

    currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

    qbank.hideExplanation()
    qbank.updateNav()
    qbank.saveSelectionInSessionStorage(1)
    qbank.displayQuestion()
    qbank.updateFlag()   
    qbank.searchSessionStorageForMarkedInputs()
    qbank.searchAndDisplaySessionStorageExplanation()
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

            //highlight current nav item
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

            qbank.displayQuestion()

            //update the displayed current question in the header
            currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1

            qbank.updateFlag()
            qbank.searchSessionStorageForMarkedInputs()
            qbank.searchAndDisplaySessionStorageExplanation()
            qbank.sessionStorageRemoveBullets()
            qbank.strikeAnswerChoice()           
        })
    }

//mark flag on click 
markFlagContainer.addEventListener('click', () => {
    if (flagCheckboxInput.checked == true) {
        flagCheckboxInput.checked = false
        
        //update check mark in nav
        navParent.children[currentQuestionIndex].children[2].classList.toggle('hide')

    } else {
        //update check mark in header
        flagCheckboxInput.checked = true

        //update check mark in nav
        navParent.children[currentQuestionIndex].children[2].classList.toggle('hide')
    }
})

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
})

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
        console.log(`The current score is: ${score}`)
    } else {
        qbank.displayExplanationWhenIncorrect(questionsArray)
        sessionStorage.setItem(`${100 + currentQuestionIndex}`, 'incorrect')
        console.log(`The current score is: ${score}`)
    }

    //remove bullet if question is answered but nothing selected
    let bullet = navParent.children[currentQuestionIndex].querySelector('.question-number :nth-child(1)')
    bullet.style.visibility = 'hidden'
    }
    
    qbank.preventChangingAnswer()
 })
