// target the input element
let task = document.querySelector('input')
//  target the Ul div where the tasks will be added to
const todoStore = document.querySelector('#location')
// Targeting the Button 
let addBtn = document.querySelector('#addBtn')

// Creating a functon to add the task on the click of the add button
function addTask() {
    // Setting a unique date and time for every task
    let id = new Date().getTime()

    let currentDate = new Date().getDate()
    let cuttentHour = new Date().getHours()
    let cuttentMinutes = new Date().getMinutes()
    let cuttentSeconds = new Date().getSeconds()
    let cuttentYear = new Date().getFullYear()
    let cuttentDay = new Date().getDay()

    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    cuttentDay = days[cuttentDay]

    // if (currentDate == 1) {
    //     currentDate += "st"
    // } else if (currentDate == 2) {
    //     currentDate += "nd"
    // } el

    let showTime = ` ${cuttentDay} ${currentDate},${cuttentHour}:${cuttentMinutes}:${cuttentSeconds}`

    // Getting the value of the input
    let taskValue = task.value.trim()

    // creating a new li element and adding it to the parent element
    let addedTask = document.createElement('li')

    // Targeting the just created li element
    addedTask.style.display = 'flex'
    addedTask.style.justifyContent = 'space-evenly'
    addedTask.style.alignItems = 'center'

    // Giving the added div content
    addedTask.innerHTML = 
                        `   <input type="checkbox" id="${id}" onchange="markAsDone(this)">
                            <span>${taskValue}</span>
                            <span>${showTime}</span>
                            <button onclick="deleteTodo(${id})">Delete</button>
                        `
  
    todoStore.appendChild(addedTask)
   
}

addBtn.addEventListener('click', addTask)

function markAsDone(checkbox) {
    let item = checkbox.parentElement; // Go to the li
    let spans = item.querySelectorAll('span'); // Get all spans inside the li
    let taskText = spans[0]; // First span = task text
    let taskDate = spans[1]; // Second span = date

    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
        taskText.style.color = 'gray';
        taskDate.style.textDecoration = 'line-through';
        taskDate.style.color = 'gray';
        console.log('Checkbox is ticked!');
    } else {
        taskText.style.textDecoration = 'none';
        taskText.style.color = 'black';
        taskDate.style.textDecoration = 'none';
        taskDate.style.color = 'black';
        console.log('Checkbox is not ticked!');
    }
}



// Deleting an item from the list
function deleteTodo(id) {
    let input = document.getElementById(id)
    let item = input.parentElement;
    item.remove()
}