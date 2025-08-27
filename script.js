// Part 1: JavaScript Basics - Variables, Conditionals

// Function to check age eligibility
function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    let message;
    
    if (isNaN(age)) {
        message = 'Please enter a valid age.';
    } else if (age < 18) {
        message = `You are ${age} years old. You are not eligible to vote.`;
    } else {
        message = `You are ${age} years old. You are eligible to vote!`;
    }
    
    document.getElementById('ageOutput').innerHTML = message;
}

// Function to compare two numbers
function compareNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
    } else if (num1 > num2) {
        result = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        result = `${num2} is greater than ${num1}`;
    } else {
        result = `${num1} and ${num2} are equal`;
    }
    
    document.getElementById('comparisonOutput').innerHTML = result;
}

// Part 2: JavaScript Functions

// Function to calculate circle area
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate and display area
function calculateArea() {
    const radius = parseFloat(document.getElementById('radiusInput').value);
    
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('areaOutput').innerHTML = 'Please enter a valid radius.';
        return;
    }
    
    const area = calculateCircleArea(radius);
    document.getElementById('areaOutput').innerHTML = 
        `Area of circle with radius ${radius} = ${area.toFixed(2)}`;
}

// Function to format text based on selected option
function formatText(text, format) {
    switch(format) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'capitalize':
            return text.replace(/\b\w/g, c => c.toUpperCase());
        default:
            return text;
    }
}

// Function to format and display text
function formatTextDisplay() {
    const text = document.getElementById('textInput').value;
    const format = document.getElementById('formatSelect').value;
    
    if (!text) {
        document.getElementById('formatOutput').innerHTML = 'Please enter some text.';
        return;
    }
    
    const formattedText = formatText(text, format);
    document.getElementById('formatOutput').innerHTML = formattedText;
}

// Part 3: JavaScript Loops

// Function to generate a number sequence
function generateSequence() {
    const count = parseInt(document.getElementById('loopCount').value);
    const outputElement = document.getElementById('sequenceOutput');
    outputElement.innerHTML = '';
    
    if (isNaN(count) || count <= 0 || count > 50) {
        outputElement.innerHTML = 'Please enter a number between 1 and 50.';
        return;
    }
    
    // Using a for loop to generate numbers
    for (let i = 1; i <= count; i++) {
        const numberCircle = document.createElement('div');
        numberCircle.className = 'number-circle';
        numberCircle.textContent = i;
        outputElement.appendChild(numberCircle);
    }
}

// Function to generate multiplication table
function generateMultiplicationTable() {
    const number = parseInt(document.getElementById('multiplicationNumber').value);
    const outputElement = document.getElementById('multiplicationOutput');
    
    if (isNaN(number) || number <= 0 || number > 20) {
        outputElement.innerHTML = 'Please enter a number between 1 and 20.';
        return;
    }
    
    let tableHTML = `<h4>Multiplication Table for ${number}</h4>`;
    
    // Using a for loop to create the table
    for (let i = 1; i <= 12; i++) {
        tableHTML += `<p>${number} × ${i} = ${number * i}</p>`;
    }
    
    outputElement.innerHTML = tableHTML;
}

// Part 4: DOM Manipulation

// Function to create new DOM elements
function createElement() {
    const text = document.getElementById('elementText').value;
    const type = document.getElementById('elementType').value;
    const outputElement = document.getElementById('elementOutput');
    
    if (!text) {
        outputElement.innerHTML = 'Please enter some text.';
        return;
    }
    
    const newElement = document.createElement(type);
    newElement.textContent = text;
    newElement.className = 'dom-element interactive';
    
    // Add event listener to remove the element when clicked
    newElement.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
    
    outputElement.appendChild(newElement);
    document.getElementById('elementText').value = '';
}

// Function to change color of the style box
function changeColor() {
    const box = document.getElementById('styleBox');
    const colors = ['#4caf50', '#f44336', '#2196f3', '#ff9800', '#9c27b0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

// Function to change size of the style box
function changeSize() {
    const box = document.getElementById('styleBox');
    const sizes = ['100px', '150px', '80px', '120px', '200px'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    box.style.width = randomSize;
    box.style.height = randomSize;
}

// Function to reset style of the style box
function resetStyle() {
    const box = document.getElementById('styleBox');
    box.style.backgroundColor = '#4caf50';
    box.style.width = '100px';
    box.style.height = '100px';
}

// Function to toggle content visibility
function toggleContent() {
    const content = document.getElementById('toggledContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Initialize the page with event listeners
function init() {
    // Part 1 event listeners
    document.getElementById('checkAgeBtn').addEventListener('click', checkAge);
    document.getElementById('compareBtn').addEventListener('click', compareNumbers);
    
    // Part 2 event listeners
    document.getElementById('calculateAreaBtn').addEventListener('click', calculateArea);
    document.getElementById('formatTextBtn').addEventListener('click', formatTextDisplay);
    
    // Part 3 event listeners
    document.getElementById('generateSequenceBtn').addEventListener('click', generateSequence);
    document.getElementById('multiplicationTableBtn').addEventListener('click', generateMultiplicationTable);
    
    // Part 4 event listeners
    document.getElementById('createElementBtn').addEventListener('click', createElement);
    document.getElementById('changeColorBtn').addEventListener('click', changeColor);
    document.getElementById('changeSizeBtn').addEventListener('click', changeSize);
    document.getElementById('resetStyleBtn').addEventListener('click', resetStyle);
    document.getElementById('toggleContentBtn').addEventListener('click', toggleContent);
    
    // Initialize with some content
    generateSequence();
    generateMultiplicationTable();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);