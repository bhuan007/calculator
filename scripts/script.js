let displayValue = "";
let solution = "";
let display = document.querySelector('.display');
let history = document.querySelector('.sideBarContent');

let number = undefined;
let operator;
let isClear;
let isOpPressed = true;
let historyString = "";

window.onload = function () {
    display.textContent = displayValue;
}

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
            break;

        case "subtract":
            return subtract(num1, num2);
            break;

        case "multiply":
            return multiply(num1, num2);
            break;

        case "divide":
            return divide(num1, num2);
            break;

        default:
            console.log("Operate function broke.")
            break;
    }
}

function addBtn() {
    if (isOpPressed) {
        continiousOp()
        number = Number(displayValue);
        operator = "add";
        isClear = true;
        historyString += " + ";
        isOpPressed = false;

    }
}

function subBtn() {
    if (isOpPressed) {
        continiousOp()
        number = Number(displayValue);
        operator = "subtract";
        isClear = true;
        historyString += " - ";
        isOpPressed = false;

    }
}

function multiplyBtn() {
    if (isOpPressed) {
        continiousOp()
        number = Number(displayValue);
        operator = "multiply";
        isClear = true;
        historyString += " * ";
        isOpPressed = false;

    }
}

function divideBtn() {
    if (isOpPressed) {
        continiousOp()
        number = Number(displayValue);
        operator = "divide";
        isClear = true;
        historyString += " / ";
        isOpPressed = false;
    }
}

function enterBtn() {
    if (isOpPressed) {
        let number2 = Number(displayValue);
        if (number !== undefined) {
            let solution = operate(operator, number, number2);
            displayValue = solution;
            display.textContent = displayValue;
            operator = undefined;

            historyString += ` = ${solution}`;

            //Pin to child element of sideBar, then clear the historyString afterwards
            let node = document.createElement('li');
            let textNode = document.createTextNode(historyString);
            node.appendChild(textNode);
            history.appendChild(node);
            historyString = "";
            isClear = true;
            isOpPressed = false;
            number = undefined;
        }
    }

}

function checkOp() {
    if (isClear) {
        displayValue = "";
        display.textContent = displayValue;
    }
    isClear = false;
}

function continiousOp() {
    if (operator) {
        let number2 = Number(displayValue);
        let solution = operate(operator, number, number2);
        displayValue = solution;
        display.textContent = displayValue;
        operator = undefined;
    }
}

function changeDisplay(aString) {
    displayValue += aString;
    display.textContent = displayValue;
    historyString += aString;
    isOpPressed = true;
}

function buttonPress(number) {
    switch (number) {
        case 1:
            checkOp();
            changeDisplay('1');
            break;
        case 2:
            checkOp();
            changeDisplay('2');
            break;
        case 3:
            checkOp();
            changeDisplay('3');
            break;
        case 4:
            checkOp();
            changeDisplay('4');
            break;
        case 5:
            checkOp();
            changeDisplay('5');
            break;
        case 6:
            checkOp();
            changeDisplay('6');
            break;
        case 7:
            checkOp();
            changeDisplay('7');
            break;
        case 8:
            checkOp();
            changeDisplay('8');
            break;
        case 9:
            checkOp();
            changeDisplay('9');
            break;
        case 0:
            checkOp();
            changeDisplay('0');
            break;
        case ".":
            checkOp();
            changeDisplay('.');
            break;
        case "clear":
            checkOp();
            displayValue = '';
            display.textContent = displayValue;
            operator = undefined;
            break;
        case "del":
            if (displayValue.toString().length > 0) {
                historyString = historyString.slice(0, -1);
            }
            displayValue = displayValue.toString().slice(0, -1);
            display.textContent = displayValue;
            break;
        default:
            console.log("Something went wrong in buttonPress");
            break;
    }
}


window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 8:
            buttonPress("del");
            break;

        case 13:
            enterBtn();
            break;

        case 46:
            buttonPress("clear");
            break;

        case 96:
            buttonPress(0);
            break;

        case 97:
            buttonPress(1);
            break;

        case 98:
            buttonPress(2);
            break;

        case 99:
            buttonPress(3);
            break;

        case 100:
            buttonPress(4);
            break;

        case 101:
            buttonPress(5);
            break;

        case 102:
            buttonPress(6);
            break;

        case 103:
            buttonPress(7);
            break;

        case 104:
            buttonPress(8);
            break;

        case 105:
            buttonPress(9);
            break;

        case 106:
            multiplyBtn();
            break;

        case 107:
            addBtn();
            break;

        case 109:
            subBtn();
            break;

        case 110:
            buttonPress(".");
            break;

        case 111:
            divideBtn();
            break;



        default:
            console.log("Invalid keydown");
            break;
    }
});