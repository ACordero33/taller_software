// Preguntas y opciones
const questions = [
    {
        q: '¿Qué color prefieres?',
        options: ['Rojo', 'Plateado', 'Azul', 'Naranja']
    },
    {
        q: '¿Qué cualidad te define mejor?',
        options: ['Valiente', 'Preciso', 'Persistente', 'Arriesgado']
    },
    {
        q: '¿Qué circuito te gusta más?',
        options: ['Mónaco', 'Monza', 'Silverstone', 'Spa']
    },
    {
        q: '¿Qué animal te representa?',
        options: ['León', 'Águila', 'Tiburón', 'Zorro']
    },
    {
        q: '¿Qué comida prefieres?',
        options: ['Pasta', 'Sushi', 'Hamburguesa', 'Paella']
    },
    {
        q: '¿Qué música escuchas?',
        options: ['Rock', 'Clásica', 'Pop', 'Electrónica']
    }
];

// Pilotos y perfiles
const pilots = [
    { name: 'Lewis Hamilton', profile: 'Preciso, persistente y amante de la música.' },
    { name: 'Max Verstappen', profile: 'Arriesgado, rápido y competitivo.' },
    { name: 'Fernando Alonso', profile: 'Valiente, astuto y experimentado.' },
    { name: 'Charles Leclerc', profile: 'Joven, talentoso y apasionado.' }
];

// Lógica para mostrar preguntas
const questionsDiv = document.getElementById('questions');
questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question';
    const label = document.createElement('label');
    label.textContent = (i+1) + '. ' + q.q;
    div.appendChild(label);
    q.options.forEach((opt, j) => {
        const optDiv = document.createElement('div');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'q'+i;
        radio.value = j;
        radio.required = true;
        optDiv.appendChild(radio);
        optDiv.appendChild(document.createTextNode(opt));
        div.appendChild(optDiv);
    });
    questionsDiv.appendChild(div);
});

// Lógica para calcular resultado
const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        const val = form['q'+i].value;
        answers.push(parseInt(val));
    }
    // Suma los valores y asigna piloto
    const sum = answers.reduce((a,b) => a+b, 0);
    let pilot;
    if (sum <= 5) pilot = pilots[2]; // Alonso
    else if (sum <= 8) pilot = pilots[0]; // Hamilton
    else if (sum <= 12) pilot = pilots[3]; // Leclerc
    else pilot = pilots[1]; // Verstappen
    resultDiv.textContent = `¡Eres ${pilot.name}! ${pilot.profile}`;
});
