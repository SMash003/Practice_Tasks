

let display = document.getElementById("display");



let firstNumber = "";
let secondNumber = "";
let operator = "";



function inputToDisp(value) {
    display.value = display.value + value;
}



function clrDisp() {
    display.value = "";

    firstNumber = "";
    secondNumber = "";
    operator = "";
}



function deleteRmostNumber() {
    display.value = display.value.slice(0, -1);
}


function add() {
    firstNumber = Number(display.value);
    operator = "+";

    display.value = "";
}



function subtract() {
    firstNumber = Number(display.value);
    operator = "-";

    display.value = "";
}


function multiply() {
    firstNumber = Number(display.value);
    operator = "*";

    display.value = "";
}


function divide() {
    firstNumber = Number(display.value);
    operator = "/";

    display.value = "";
}


function calculate() {

    secondNumber = Number(display.value);

    let result;


    if (operator === "+") {
        result = firstNumber + secondNumber;
    }


    if (operator === "-") {
        result = firstNumber - secondNumber;
    }


    if (operator === "*") {
        result = firstNumber * secondNumber;
    }


    if (operator === "/") {
        result = firstNumber / secondNumber;
    }


    display.value = firstNumber + operator + secondNumber + "=" + result;
}


document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        inputToDisp(event.key);
    }

    if (event.key === ".") {
        inputToDisp(".");
    }

    if (event.key === "+") {
        add();
    }

    if (event.key === "-") {
        subtract();
    }

    if (event.key === "*") {
        multiply();
    }

    if (event.key === "/") {
        divide();
    }

    if (event.key === "Enter") {
        calculate();
    }

    if (event.key === "Backspace") {
        deleteRmostNumber();
    }

    if (event.key === "c") {
        clrDisp();
    }

});

