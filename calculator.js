function add(num1, num2) {
    res = num1 + num2;
    return res;
}

function subtract(num1, num2) {

    return num1 - num2;

}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {

    return num1 * num2;
}

function operate(arr) {
    if (arr[2] === null) {
        return arr
    } else operator = arr[2];
    num1 = +arr[0];
    num2 = +arr[1];
    operator = arr[2];

    switch (operator) {
        case "+": num1 = add(num1, num2); break;
        case "-": num1 = subtract(num1, num2); break;
        case "/": num1 = divide(num1, num2); break;
        case "*": num1 = multiply(num1, num2); break;
    }
    return [num1, null, null];
}

function ShowInDisplay(display, content) {
    content[2] != null ? display[2].textContent = content[2] : display[2].textContent = "";
    display[0].textContent = content[1];
    display[1].textContent = content[0];

}