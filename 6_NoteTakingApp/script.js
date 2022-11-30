const btn = document.getElementById("btn");
const savedNotes = document.getElementById("savedNotes");
const modalContainer = document.getElementById("modal_container");
const modalButton = document.getElementById("modal_button");
const modalParagraph = document.getElementById("modal_paragraph");
const allInputs = document.getElementById("noteInput");
btn.addEventListener("click", addNote);

function addNote () {
    //capture value of input and create new text element within new div
    const noteInputField = document.getElementById("noteInput").value;
    const newText = document.createTextNode(noteInputField);

    //create three new divs
    const newDiv = document.createElement('div');
    const newDivTwo = document.createElement('div');

    //create new paragraph element
    const newParagraph = document.createElement('p');

    //add paragraph as child to 'new-div'
    newDiv.appendChild(newParagraph);

    //create button within new div
    const newButton = document.createElement("button");

    //add css classes to newly created divs, paragraph, and button
    newDiv.classList.add('new-div');
    newButton.classList.add('new-button'); 
    newDivTwo.classList.add('new-div-two');
    newParagraph.classList.add('new-paragraph');

    //Add new div to the bottom portion of the webpage (eg, 'savedNotes' div)
    savedNotes.appendChild(newDiv);

    //Add user generated input into newly created div and paragraph
    newParagraph.appendChild(newText);    

    //Add second div within the newly created div
    newDiv.appendChild(newDivTwo); 

    //Add button to new div 
    newDivTwo.appendChild(newButton);

    //add text to button
    const buttonText = document.createTextNode('View details');
    newButton.appendChild(buttonText);

    
    //when clicking "view details" button, modal pops up with user generated input
    newButton.addEventListener('click', function () {
        modalContainer.classList.add('show');

        modalParagraph.appendChild(newText); 
    })

    //closes modal pop up when clicked, removes text element from modal, and adds it back into the saved notes area
    modalButton.addEventListener('click', function () {
        modalParagraph.removeChild(newText);
        modalContainer.classList.remove('show');
        newParagraph.appendChild(newText);
    })

    //reset input field 
    function resetInputFields() {
        allInputs.value = '';
        }
    
    resetInputFields();
 }


