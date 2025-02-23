function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Replace % with /100 for calculation
        let expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle percentage calculation
 function appendPercentage() {
    let display = document.getElementById('display');
    display.value += '%';
} 