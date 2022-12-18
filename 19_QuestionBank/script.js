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
const finalizedEndBlockBtnUnfinished = document.querySelector('finalized-end-block-btn-unfinished')
const endBlockModalFinished = document.querySelector('.end-block-modal-finished')
const remainInBlockFinishedBtn = document.querySelector('.remain-in-block-btn-finished')
const finalizedEndBlockBtnFinished = document.querySelector('finalized-end-block-btn-finished')

let currentQuestionIndex = 0
let previousQuestionIndex 
let score = 0
let reversedColor = false
let examFinished = false


const questionsArray = [
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
        subject: 'Biochemistry',
        chapter: 'Cellular Biology',
        section: 2,
        question: 'During sepsis, the adherens junctions between endothelial cells weaken, causing swelling and leukocyte extravasation. The cytoskeletal component connected to adherens junctions is also the primary proteinaceous component of which of the following structures?',
        image: null,
        choices: ['Spermatocyte flagellum', 'Cilia on airway epithelium', 'Axons', 'Intestinal microvilli'],
        correctAnswer: 'Intestinal microvilli',
        correctAnswerLetter: 'D',
        percentageCorrect: '47%',
        explanationImage: null,
        explanation: `<div class="explanation-content-text">
        <p>Adherens junctions are connected to the actin cytoskeleton, and the only other structure listed that is primarily composed of actin are intestinal microvilli <strong>(Choice D)</strong>. Understanding which structures are composed of actin vs. microtubules is important clinically, since many cancer drugs inhibit or promote polymerization of actin or microtubules.</p><br>
        <p><strong>(Choice A)</strong> The structural protein component of flagella is the microtubule, not actin.</p><br>
        <p><strong>(Choice B)</strong> The structural protein component of cilia is the microtubule, not actin.</p><br>
        <p><strong>(Choice C)</strong> Axons contain long tracks of microtubules along which the cell can transport vesicles and proteins to and from the cell body.</p>`
    },
    {
        id: 4,
        subject: 'Biochemistry',
        chapter: 'Genetics',
        section: 5,
        question: 'All of the following scenarios violate assumptions of Hardy Weinberg EXCEPT:',
        image: null,
        choices: ['Homozygosity for a disease allele is lethal.', 'A large proportion of a population emigrates to a different country during wartime.', 'Historic royal families selecting mates from a small pool of other families', 'Onset of a disease phenotype in women occurs after menopause'],
        correctAnswer: 'Onset of a disease phenotype in women occurs after menopause',
        correctAnswerLetter: 'D',
        percentageCorrect: '43%',
        explanationImage: null,
        explanation: `<div class="explanation-content-text">
        <p>The five assumptions of the Hardy Weinberg Principle are 1) No natural selection, 2) Random mating, 3) Large populations, 4) No mutation, and 5) No migration (“gene flow”). Of the answer choices, only <strong>(Choice D)</strong> does not violate any of these assumptions. A disease phenotype that occurs only in postmenopausal women would not be subject to natural selection (no decrease in mating fitness, since the disease occurs after reproductive years).</p><br>
        <p><strong>(Choice A)</strong> If homozygosity for an allele were lethal, this would cause significant selective pressure against that allele, violating the “no natural selection” assumption.</p><br>
        <p><strong>(Choice B)</strong> This answer choice violates the “no migration,” commonly referred to as no “gene flow,” assumption.</p><br>
        <p><strong>(Choice C)</strong> This answer choice violates the random mating assumption and the large population assumption. For instance, knowing the global prevalence of hemophilia B (“the royal disease”) during the 19th century would not enable one to use Hardy Weinberg to account for the high prevalence of this disease in royal European families.</p>`
    },
    {
        id: 5,
        subject: 'Immunology',
        chapter: 'Basic Immunology',
        section: 11,
        question: 'A 18-month old boy is brought to the physician for recurrent abscesses present on his face and scalp. In addition, he has also had multiple episodes of sinusitis and otitis that have been treated with antibiotics, as well as episodes of diffuse eczema several weeks after he was born. The mother says her pregnancy and delivery were uncomplicated, but the delivering physician had noted a broad nasal bridge. Further karyotyping revealed no abnormalities. Vital signs are within normal limits. Physical examination of the abscesses reveals that they are cold and lack erythema. Laboratory testing is performed and reveals elevated levels of IgE and eosinophils. Which of the following cell types is likely deficient in this patient?',
        image: null,
        choices: ['B-cells', 'Treg cells', 'Th17 cells', 'Neutrophils'],
        correctAnswer: 'Th17 cells',
        correctAnswerLetter: 'C',
        percentageCorrect: '67%',
        explanationImage: null,
        explanation: `<div class="explanation-content-text">
        <p>This young boy is presenting with recurrent infections, cold abscesses, facial dysmorphism, eczema, and elevated serum IgE levels; this is likely indicative of hyperimmunoglobulin E syndrome, also known as Job syndrome. Job syndrome is due to a mutation in STAT3, which results in a deficiency of Th17 cells <strong>(Choice C)</strong>. Th17 cells are a subset of T helper cells that secrete IL-17. IL-17 plays a vital role in neutrophil and macrophage recruitment to the site of infection. Susceptibility to infection is due to the deficiency of Th17 cells, which results in impaired neutrophil proliferation and chemotaxis, decreased inflammation, and increased susceptibility to Candida and bacterial infections. The lack of neutrophils at sites of infections explain the presence of cold abscesses, lacking warmth and erythema, since neutrophils normally secrete inflammatory cytokines.</p><br>
        <p><strong>(Choice A)</strong> B-cells fail to develop in X-linked (Bruton) agammaglobulinemia. This is caused by a defect in the gene BTK and results in no B-cell maturation. Although these patients also have recurrent bacterial and enteroviral infections, this patient\’s other symptoms of eczema and cold skin abscesses suggest a different immunodeficiency.</p><br>
        <p><strong>(Choice B)</strong> A dysfunction in the regulatory T-cell lineage can lead to a condition known as immune dysregulation, polyendocrinopathy, enteropathy, X-linked (IPEX) syndrome. The loss of Treg cells leads to autoimmunity as a result of disordered tolerance to self-antigens. These patients may also present with recurrent infections and eczema, but the cold abscesses seen in this patient suggest a different immunodeficiency. </p><br>
        <p><strong>(Choice D)</strong> Neutrophil deficiency, or neutropenia, can be seen in various conditions, such as bone marrow damage, and in certain viral infections. Chediak-Higashi is a specific immunodeficiency that causes pancytopenia, and can result in neutropenia. These patients typically present with recurrent infections, progressive neurodegeneration, and a characteristic albinism.</p>`
    },
    {
        id: 6,
        subject: 'Embryology',
        chapter: 'Nephrology',
        section: 2,
        question: 'A 2-week-old newborn male is seen at the hospital with palpable masses on both sides of his abdomen. Ultrasound shows a thickened bladder wall, enlarged kidneys, and dilated ureters that are filled with fluid. He has slight facial flatness in the region of the left forehead, clubbed feet, and a history of respiratory distress as a newborn. What is the most likely underlying cause of his condition?',
        image: null,
        choices: ['Duplex collecting system', 'Multicystic dysplastic kidney', 'Polycystic kidney disease', 'Posterior urethral valves'],
        correctAnswer: 'Posterior urethral valves',
        correctAnswerLetter: 'D',
        percentageCorrect: '66%',
        explanationImage: 'Assets/answerImage4.png',
        explanation: `<div class="explanation-image-container">
        <img src="${'Assets/answerImage4.png'}" alt="explanation-image">
    </div>
    <div class="explanation-content-text">
        <p>This newborn is likely suffering from the presence of posterior urethral valves. The newborn is male, and the ultrasound shows the key signs of the presence of posterior valves - this causes outflow obstruction which leads to a hypertrophied, thickened bladder wall, and hydronephrosis, as indicated by the enlarged kidneys and dilated ureters filled with fluid. Further, there is evidence that the patient developed Potter syndrome as indicated by the facial abnormalities, the clubbed feet, and the respiratory distress  which indicates likely pulmonary hypoplasia. Recall that posterior urethral valves <strong>(Choice C)</strong> can obstruct flow of urine cause bladder wall thickening hydronephrosis and lead to oligohydramnios and without enough amniotic fluid, the fetus can be compressed leading to potter syndrome which includes the visual abnormalities and pulmonary hypoplasia which is present in our patient.</p><br>
        <p><strong>(Choice A)</strong> Duplex collecting systems wouldn\’t lead to potter syndrome since its a unilateral defect. Plus, there is no reason why a duplex collecting system would cause bladder wall hypertrophy</p><br>
        <p><strong>(Choice B)</strong> Although this can be a bilateral issue and lead to potter syndrome the problem is cysts directly causing nonfunctional kidneys so you wouldn\’t get hydronephrosis or bladder wall hypertrophy.</p><br>
        <p><strong>(Choice C)</strong> This is wrong for the same reasons as choice B.</p>`
    },
    
];

const labArray = [
        'Serum - Alanine aminotransferase (ALT)', 'Serum - Aspartate aminotransferase (AST)', 'Serum - Alkaline phosphatase', 'Serum - Amylase', 'CSF - Cell count', 'CSF - Chloride', 'CSF - Gamma globulin', 'CSF - Glucose', 'Hematologic - Erythrocyte count', 'Hematologic - Male', 'Hematologic - Female', 'Hematologic - Chloride', 'Hematologic - Gamma globulin', 'Hematologic - Glucose', 'Urine - Calcium', 'Urine - Creatinine clearance', 'Urine - Male', 'Urine - Female', 'Urine - Osmolality', 'Urine - Oxalate'
]

class Calculator {
    constructor() {

    }
    
    allClear() {
        currentOperand.innerText = ''
        previousOperand.innerText = ''
    }

    compute() {
        let endIndex = previousOperand.innerText.length
        let operandValue = previousOperand.innerText.slice(endIndex - 1, endIndex)
        let updatedPreviousOperand = previousOperand.innerText.slice(0, endIndex - 1)
        let previousOperandNum =  parseFloat(updatedPreviousOperand)
        let currentOperandNum = parseFloat(currentOperand.innerText)
        let product 

        if (operandValue == 'x') {
            product = previousOperandNum * currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} x ${currentOperandNum}`
        } else if (operandValue == '÷') {
            product = previousOperandNum / currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} / ${currentOperandNum}`
        } else if (operandValue == '-') {
            product = previousOperandNum - currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} - ${currentOperandNum}`
        } else if (operandValue == '+') {
            product = previousOperandNum + currentOperandNum
            currentOperand.innerText = product
            previousOperand.innerText = `${previousOperandNum} + ${currentOperandNum}`
        }        
    }

    updateCurrentDisplay(btn) {
        currentOperand.innerText += btn
    }

    updatePreviousDisplay(operation) {
        previousOperand.innerText = `${currentOperand.innerText} ${operation}`
        currentOperand.innerText = ''
    }
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
        console.log(score)
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

reverseColorBtn.addEventListener('click', () => {
    qbank.reverseColor()
    qbank.adjustNavColors()
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

        console.log('before reset array ' + numAnsweredArray)

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