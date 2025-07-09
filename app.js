document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value.trim() !== '') {
            addTodo(input.value.trim());
            input.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.className = 'delete-btn';
        btn.addEventListener('click', function() {
            list.removeChild(li);
        });
        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);
    }

    const rouletteButton = document.getElementById('roulette-btn');
    const rouletteResult = document.getElementById('roulette-result');

    rouletteButton.addEventListener('click', function() {
        const spans = Array.from(list.querySelectorAll('li span'))
            .filter(span => !span.parentElement.classList.contains('completed'));
        if (spans.length === 0) {
            rouletteResult.textContent = 'No hay tareas disponibles para la ruleta.';
            return;
        }
        const randomIndex = Math.floor(Math.random() * spans.length);
        const selectedSpan = spans[randomIndex];
        const selectedTask = selectedSpan.textContent;
        rouletteResult.textContent = 'Tarea seleccionada: ' + selectedTask;
        // Eliminar la tarea seleccionada
        const li = selectedSpan.parentElement;
        list.removeChild(li);
    });
});
