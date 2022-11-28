const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener('click', function(){
    //create new list item and store as variable 'addedList'
    let addedList = document.createElement('li');
    
    //transfer the input from the user generated field to the list
    addedList.textContent = inputField.value;

    //add a new list item to the ul 
    taskList.appendChild(addedList); 
    
    //click once to line-through new task item
    addedList.addEventListener('click', function() {
        addedList.style.textDecoration = "line-through"
    });

    //click twice to remove task item
    addedList.addEventListener('dblclick', function() {
        taskList.removeChild(addedList);
    })

    //once item is added, text field is empty
    inputField.value = '';
});