const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.classList.add('task-text');
  span.addEventListener('click', () => {
    span.parentElement.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
