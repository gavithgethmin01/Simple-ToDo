// DOM Elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the list item (li)
    const li = document.createElement('li');
    
    // Add text to the li
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);

    // Toggle completed state on click
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Delete task on click
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevents triggering the li click event
        todoList.removeChild(li);
    });

    // Append the new item to the list
    todoList.appendChild(li);

    // Clear input field
    todoInput.value = "";
}

// Event listener for button click
addBtn.addEventListener('click', addTask);

// Event listener for pressing "Enter" key
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

