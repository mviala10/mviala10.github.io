const counters = [];

function addCounter() {
    const category_name = document.getElementById('category_name').value;
    const counter_name = document.getElementById('counter_name').value;

    // Verifica si ya existe un contador con ese nombre y categoría
    if (!counters.some(counter => counter.name === counter_name && counter.category === category_name)) {
        counters.push({ name: counter_name, category: category_name, value: 0 });
        updateCounters();
    }
}

function updateCounters() {
    const countersDiv = document.getElementById('counters');
    countersDiv.innerHTML = '';

    counters.forEach(counter => {
        const counterDiv = document.createElement('div');
        counterDiv.className = 'counter';

        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.onclick = () => decrement(counter);

        const valueSpan = document.createElement('span');
        valueSpan.textContent = `${counter.category} - ${counter.name}: ${counter.value}`;

        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.onclick = () => increment(counter);

        counterDiv.appendChild(decrementButton);
        counterDiv.appendChild(valueSpan);
        counterDiv.appendChild(incrementButton);

        countersDiv.appendChild(counterDiv);
    });
}

function increment(counter) {
    counter.value++;
    updateCounters();
}

function decrement(counter) {
    counter.value--;
    updateCounters();
}

// Inicializa la visualización de contadores
updateCounters();