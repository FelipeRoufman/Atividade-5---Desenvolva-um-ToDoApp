document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const avatar = document.getElementById('avatar');
    const avatarMessage = document.getElementById('avatarMessage');
    const happyBtn = document.getElementById('happyBtn');
    const sadBtn = document.getElementById('sadBtn');
    const neutralBtn = document.getElementById('neutralBtn');

    const avatarReactions = {
        happy: {
            img: 'componentes/images/Sprite-0003.png',
            message: 'Que bom que você está feliz!',
        },
        sad: {
            img: 'componentes/images/Sprite-0004.png',
            message: 'Tristesa é importate, mas o melhor é saber que a noite siginifica que ja é quase de manha!',
        },
        neutral: {
            img: 'componentes/images/Sprite-0002.png',
            message: '=)',
        },
    };

    const setAvatarReaction = (reaction) => {
        avatar.src = avatarReactions[reaction].img;
        avatarMessage.textContent = avatarReactions[reaction].message;
    };

    setTimeout(() => {
        avatarMessage.textContent = 'O que deve ser feito hoje?';
    }, 1000);

    happyBtn.addEventListener('click', () => setAvatarReaction('happy'));
    sadBtn.addEventListener('click', () => setAvatarReaction('sad'));
    neutralBtn.addEventListener('click', () => setAvatarReaction('neutral'));

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = '';
        tasks.forEach((task, index) => renderTask(task, index));
    };

    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTask = (task, index) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskItem = document.createElement('li');
        taskItem.className = `flex items-center justify-between border-b py-2 ${task.completed ? 'line-through text-gray-500' : ''}`;

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskItem.appendChild(taskText);

        const actions = document.createElement('div');

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? 'Voltar' : 'Completa';
        toggleBtn.className = `mr-2 px-3 py-1 rounded ${task.completed ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`;
        toggleBtn.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks(tasks);
            loadTasks();
        };
        actions.appendChild(toggleBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.className = 'mr-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600';
        editBtn.onclick = () => {
            const newTask = prompt('Editar Tarefa:', task.text);
            if (newTask !== null) {
                tasks[index].text = newTask;
                saveTasks(tasks);
                loadTasks();
            }
        };
        actions.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.className = 'bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600';
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks(tasks);
            loadTasks();
        };
        actions.appendChild(deleteBtn);

        taskItem.appendChild(actions);
        taskList.appendChild(taskItem);
    };

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return alert('A Tarefa Precisa de um Nome!');

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        saveTasks(tasks);
        taskInput.value = '';
        loadTasks();
    });

    loadTasks();
});
