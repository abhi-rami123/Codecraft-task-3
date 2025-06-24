let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== '') {
    let taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    let deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskItem.remove();
    });
  }
}