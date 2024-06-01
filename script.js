document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks-list');

    
    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => tasksList.removeChild(li);

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.classList.add('done-button');
            doneButton.onclick = () => li.classList.toggle('done');

            li.appendChild(doneButton);
            li.appendChild(deleteButton);
            tasksList.appendChild(li);

            newTaskInput.value = '';
            newTaskInput.focus();
        }
    };

    
    addTaskButton.addEventListener('click', addTask);


    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
