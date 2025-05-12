
function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if (operation === 'add') result = num1 + num2;
    else result = num1 * num2;
    document.getElementById('mathResult').textContent = `Result: ${result}`;
}


function checkEvenOdd() {
    const number = parseInt(document.getElementById('evenOddInput').value);
    document.getElementById('evenOddResult').textContent =
        number % 2 === 0 ? "Even" : "Odd";
}


function checkVotingAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    document.getElementById('votingResult').textContent =
        age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}


function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function showPrimes() {
    const limit = parseInt(document.getElementById('primeInput').value);
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    document.getElementById('primeResult').textContent = primes.join(', ');
}


function handleFormSubmit(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    event.target.reset();
}


const colors = ['#E76F51', '#2A9D8F', '#E9C46A'];
function changeColor(circle) {
    const currentIndex = parseInt(circle.getAttribute('data-color-index')) || 0;
    const newIndex = (currentIndex + 1) % colors.length;
    circle.style.backgroundColor = colors[newIndex];
    circle.setAttribute('data-color-index', newIndex);
}


function calculateGrade() {
    const marks = parseInt(document.getElementById('marksInput').value);
    let grade;
    if (marks >= 75) grade = 'A+';
    else if (marks >= 70) grade = 'A';
    else if (marks >= 65) grade = 'A-';
    else if (marks >= 60) grade = 'B+';
    else if (marks >= 55) grade = 'B';
    else if (marks >= 50) grade = 'B-';
    else if (marks >= 45) grade = 'C+';
    else if (marks >= 40) grade = 'C';
    else if (marks >= 35) grade = 'C-';
    else if (marks >= 30) grade = 'D';
    else grade = 'F';
    document.getElementById('gradeResult').textContent = `Grade: ${grade}`;
}


let clickCount = 0, dblClickCount = 0, hoverCount = 0;
document.addEventListener('DOMContentLoaded', () => {
    const counterButton = document.getElementById('counterButton');
    counterButton.addEventListener('click', () => {
        document.getElementById('clickCount').textContent = ++clickCount;
    });

    counterButton.addEventListener('dblclick', () => {
        document.getElementById('dblClickCount').textContent = ++dblClickCount;
    });

    counterButton.addEventListener('mouseover', () => {
        document.getElementById('hoverCount').textContent = ++hoverCount;
    });
});


const colorInputs = document.querySelectorAll('.color-mixer input');
const colorPreview = document.getElementById('colorPreview');
function updateColor() {
    const r = document.getElementById('red').value;
    const g = document.getElementById('green').value;
    const b = document.getElementById('blue').value;
    const color = `rgb(${r}, ${g}, ${b})`;
    colorPreview.style.backgroundColor = color;
    document.getElementById('colorName').textContent = color;
}
colorInputs.forEach(input => input.addEventListener('input', updateColor));
updateColor();


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        if (isNaN(result)) throw new Error('Invalid calculation');
        document.getElementById('display').value = result;
    } catch {
        alert('Invalid calculation');
        clearDisplay();
    }
}


function addNote() {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');

    if (noteInput.value.trim() === '') {
        alert('Please write something before adding a note.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = noteInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);
    notesList.appendChild(li);

    noteInput.value = ''; // Clear the input field
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task before adding.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear the input field
}


function changeText() {
    const domText = document.getElementById('domText');
    domText.textContent = 'The text has been changed!';
}

function changeBackgroundColor() {
    const domText = document.getElementById('domText');
    domText.style.backgroundColor = '#FFD700'; // Gold color
    domText.style.color = '#000'; // Black text for contrast
}


function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
