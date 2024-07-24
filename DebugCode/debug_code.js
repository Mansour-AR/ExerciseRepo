// Function to perform arithmetic operation

function performOperation() {
    // Get user input form input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers

    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
             let result1 = multiply(num1, num2);
             let result2 = addition(num1, num2);
             let result3 = division(num1, num2);

             // Display the result
             displayResult(result1, result2, result3);
    } else {
        displayResult('Please enter valid numbers');
    }

    function multiply(a,b) {
        // Introduce a debugger statement to pause execution
        debugger;

        // Multiply the numbers
        return a * b;
    }

    function addition(a,b) {
        // Introduce a debugger statement to pause execution 
        debugger;

        // Add the numbers
        return a + b;
    }

    function division(a,b) {
        // Introduce a debugger statement to pause execution
        debugger;

        // Divide the numbers
        return a / b;

    }

    function displayResult(result1, result2, result3) {
        // Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Addition Result: ${result2} ` +
        `Multiplication Result: ${result1} ` + `Divistion Result: ${result3}`;
    }
}