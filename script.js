// Initialize tasks array
let tasks = [];

// DOM Elements
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name');
const dueDateInput = document.getElementById('due-date');
const completedInput = document.getElementById('completed');

// Display tasks
function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.name} - Due: ${task.dueDate}</span>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Add new task
function addTask(event) {
    event.preventDefault();
    const name = taskNameInput.value;
    const dueDate = dueDateInput.value;
    const completed = completedInput.checked;

    tasks.push({ name, dueDate, completed });
    updateLocalStorage();
    taskForm.reset();
    displayTasks();
}

// Edit task
function editTask(index) {
    const newName = prompt('Edit task name:', tasks[index].name);
    if (newName !== null) {
        tasks[index].name = newName;
        updateLocalStorage();
        displayTasks();
    }
}

// Delete task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        updateLocalStorage();
        displayTasks();
    }
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}

// Event listeners
taskForm.addEventListener('submit', addTask);

// Load tasks on page load
loadTasks();

// Sort tasks by due date
function sortByDueDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    displayTasks();
}

// Sort tasks by completion status
function sortByCompletion() {
    tasks.sort((a, b) => a.completed - b.completed);
    displayTasks();
}

// Filter tasks by completion status
function filterTasks(completedStatus) {
    const filteredTasks = tasks.filter(task => task.completed === completedStatus);
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.name} - Due: ${task.dueDate}</span>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Filter tasks by category
function filterByCategory(category) {
    const filteredTasks = tasks.filter(task => task.category === category);
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.name} - Due: ${task.dueDate}</span>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}
// ... (Previous JavaScript code) ...

