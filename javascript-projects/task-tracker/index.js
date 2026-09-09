// State management: Array of task objects
let tasks = [
    {id: 1, description: "Build a modern task tracker", completed: false},
    {id: 2, description: "Review array rendering mechanics", completed: true},
];

// DOM element selectors
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Re-render the entire task list UI based on the updated state array
// Clears the parent DOM node and rebuilds nodes dynamically
function renderTasks() {
    // Remove all existing task nodes from the DOM
    taskList.innerHTML = " ";

    // Sort tasks so completed ones move to the end of the array display
    const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

    // Re-build HTML elements based on state entries
    sortedTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? 'completed' : ''}`;

        // Left container (checkbox + text)
        const leftDiv = document.createElement('div');
        leftDiv.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        // Trigger state change on checking/unchecking
        checkbox.addEventListener('change', () => toggleTaskStatus(task.id));

        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.description;
        
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(textSpan);

        // Right container (delete action)
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;' // Render 'x' icon
        deleteBtn.setAttribute('arial-label', `Delete task: ${task.description}`);
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        // Assembly 
        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
// Adds a new task object to the state array
function addTask(description) {
    const newTask = {
        id: Date.now(), // Generate a unique identifier
        description: description,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
};

// Toggles a task's completed boolean state and prompts visual update
function toggleTaskStatus(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed};
        }
        return task;
    });
    renderTasks();
};

// Delete a task target by filtering it out of the array state
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
};

// Event listeners

// Handle task submission form
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();

    if (text) {
        addTask(text);
        taskInput.value = ''; // Reset input element focus point
        taskInput.focus();
    }
});

// Run the initial setup paint when the page loads
renderTasks();
