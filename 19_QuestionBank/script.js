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
        subject: 'Anatomy',
        chapter: 'Cardiology',
        section: 1,
        question: 'A 17-year-old female is brought to the emergency room by her parents after being hit in the side of the head with a softball during a softball game. She initially blacked out momentarily but appeared to be ok until an hour later when she developed a severe headache and started to vomit. It was at this point that she came to the ER. In the ER she is afebrile with a blood pressure of 131/82, pulse of 119/min, oxygen saturation of 97 percent. She is distressed and unable to consistently respond to questions. Neurologic exam reveals a 7mm left pupil, the right pupil is 3mm, with 5/5 strength in all four limbs. Her head CT is shown below. Damage to a branch of which of the following arteries is most likely causing this patient\’s symptoms?',
        image: 'Assets/answerImage1.png',
        choices: ['Anterior cerebral artery', 'External carotid artery', 'Internal carotid artery', 'Middle cerebral artery'],
        correctAnswer: 'External carotid artery',
        correctAnswerLetter: 'B',
        percentageCorrect: '45%',
        explanationImage: 'Assets/answerImage2.png',
        explanation: `<div class="explanation-image-container">
        <img src="${'Assets/answerImage2.png'}" alt="explanation-image">
    </div>
    <div class="explanation-content-text">
        <p>This patient presents with an epidural hematoma. An epidural hematoma may present with a lucid period in which the patient is relatively asymptomatic for a period of time prior to clinical decompensation. The expanding hematoma places pressure on the brain and can lead to herniation. One of the first signs of uncal herniation is an ipsilaterally dilated pupil due to external compression of cranial nerve III. Epidural hematomas are most commonly caused by trauma to the temporal bone which ruptures the middle meningeal artery. The middle meningeal artery comes off of the internal maxillary artery, which is a branch of the external carotid artery <strong>(Choice B)</strong>.</p><br>
        <p><strong>(Choice A)</strong> A cingulate herniation may lead to compression of the anterior cerebral artery. However, compression of the anterior cerebral would present with contralateral paralysis and sensory loss of the lower extremity, not an ipsilaterally dilated pupil.</p><br>
        <p><strong>(Choice C)</strong> The internal carotid artery supplies the various arteries that perfuse the brain. However, damage to the internal carotid artery does not result in an epidural hematoma.</p><br>
        <p><strong>(Choice D)</strong> Damage to the middle cerebral artery results in contralateral motor and sensory loss of the face and upper limb, and possibly expressive or receptive aphasia. It is not involved in the pathogenesis of an epidural hematoma.</p>`
    },
    {
        id: 2,
        subject: 'Anatomy',
        chapter: 'Cardiology',
        section: 1,
        question: 'A 14-year-old boy visits the clinic for a pre-sports physical. The patient\’s vitals show that he has a blood pressure of 160/90 mmHg in the right arm, and 150/90 mmHg in the left arm. A thorough cardiovascular exam shows that the patient has a radio-femoral lag, but bilaterally synchronous radial pulses. X-ray reveals notching along rib margins. The patient is suspected to have a postductal coarctation of the aorta. Which of the following branches of the subclavian artery will most likely will allow blood flow to reach aorta distal to the coarctation?',
        image: null,
        choices: ['Axillary artery', 'Brachiocephalic artery', 'Internal thoracic artery', 'Vertebral artery'],
        correctAnswer: 'Internal thoracic artery',
        correctAnswerLetter: 'C',
        percentageCorrect: '77%',
        explanationImage: 'Assets/answerImage3.png',
        explanation: `<div class="explanation-image-container">
        <img src="${'Assets/answerImage3.png'}" alt="explanation-image">
    </div>
    <div class="explanation-content-text">
        <p>The internal thoracic artery <strong>(Choice C) </strong> is a branch off the subclavian artery that courses deep to the sternum giving rise to segmental anterior intercostal arteries. The anterior intercostal arteries form collateral circuits with the posterior intercostal arteries that arise segmentally off the aorta. During coarctation of the aorta, the blood will reroute through the internal thoracic arteries →  anterior intercostal arteries →  posterior intercostal arteries →  aorta. This collatery circuitry allows the distal aorta to receive blood despite the coarctation in the aortic arch. It should be noted, that the stem states the patient presents with a radio-femoral lag and high blood pressure in both upper extremities which is consistent with aortic coarctation distal to the major arterial branches.</p><br>
        <p><strong>(Choice A)</strong> The axillary artery is a continuation of the subclavian artery that courses through the axilla and supplies blood to the upper extremity via the downstream branches. The axillary artery has no collateral blood flow with the aorta.</p><br>
        <p><strong>(Choice B)</strong> The brachiocephalic artery gives rise to the common carotid artery and subclavian artery on the right side of the body. The brachiocephalic artery has no collateral blood flow with the aorta.</p><br>
        <p><strong>(Choice D)</strong> The vertebral artery gives rise to the basilar artery, posterior inferior cerebellar artery, and various spinal arteries. The vertebral artery has no collateral blood flow with the aorta.</p>`
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

        //console.log(this.hours.toString().padStart(2, '0'), this.minutes.toString().padStart(2, '0'), this.seconds.toString().padStart(2, '0')) 

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

let questionTimeTracker = new trackQuestionTime()
let totalTimeTracker = new trackTotalTime(document.querySelector('.time'))
let qbank = new QuestionBank

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
})

/*========== MOVE TO NEXT QUESTION ==========*/
nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        qbank.hideExplanation()

        previousQuestionIndex = currentQuestionIndex
        currentQuestionIndex += 1
        currentItemQuestionNumber.innerHTML = currentQuestionIndex + 1      

        //search session storage for existing time on CURRENT question
        for (let i = 0; i < sessionStorage.length; i++) {
            let sessionStorageKey = sessionStorage.key(i)
            let sessionStorageValue = sessionStorage.getItem(sessionStorageKey)

            if (sessionStorageKey == 200 + (currentQuestionIndex)) {
                //there is a saved session storage time (question has been visited already but never answered)
                let string = sessionStorageValue
            }
        }

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
    } else {
        qbank.displayExplanationWhenIncorrect(questionsArray)
        sessionStorage.setItem(`${100 + currentQuestionIndex}`, 'incorrect')
    }

    //remove bullet if question is answered but nothing selected
    let bullet = navParent.children[currentQuestionIndex].querySelector('.question-number :nth-child(1)')
    bullet.style.visibility = 'hidden'
    }
    
    qbank.preventChangingAnswer()
 })
