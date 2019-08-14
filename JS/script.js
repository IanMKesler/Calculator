function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,op){
    switch(true){
        case op == '+':
            return add(a,b);
        case op == '-':
            return subtract(a,b);
        case op == '*':
            return multiply(a,b);
        case op == '/':
            return divide(a,b);
        default:
            return 'ERROR';
    }
}


function evaluate(string) {
    let parsed = string.split(op);

    return operate(parseFloat(parsed[0]),parseFloat(parsed[1]),op);
    

}

function displayAnswer(expression) {
    answer = evaluate(expression).toString();
    if (answer == 'NaN'){
        answer = 'ERROR';
    
        
    }
    document.getElementById('answer').innerHTML = answer;
    op = undefined;
    exp = answer;
}

function setOp(operator) {
    if(operator) {
        op = operator[0];
    } 
}

function valid(command) {

    if(command.match(regExp) != null){ //checks operation
        switch(true) { 
            case string == '': //cannot start with operation
                return false;
            case string[string.length-1].match(regExp) != null: //cannot have two operations in a row
                return false;
            default:
                return true;
        }
    } else if(command == '.') {
        switch(true){ //prevent two decimals
            case !op && exp.includes('.'): //checks first number
                return false;
            case op && exp.split(op)[1].includes('.'): //checks second number
                return false;
            default:
                return true;
        }
    } else if(command == '=') {
        switch(true){
            case string[string.length-1].match(regExp) != null: //equals directly after operation
                return false;
            default:
                return true;
        }
    } 
    
    else {
        return true;
    }
    
}


function display(event) {
    let button = this.innerHTML;
    let operator = button.match(regExp);

    if(valid(button)){ //checks for errors
        if(operator && op) { //string together operators
            displayAnswer(exp);
        }
        setOp(operator);
    
        if(!answer){ //no answer has displayed
            string += button;
            exp += button;
    
            if (button=='=') {
                displayAnswer(string);
            } 
            
        } else if(string.includes('=')) { //pushed equals
            if(operator){
                string = answer + op;
                exp = string;
                
                answer = undefined;
            } else {
                string = button;
                exp = string;

            }

            document.getElementById('answer').innerHTML = '';
            
            
    
        } else if (operator) { //pushed operator
            string += button;
            exp += button;
        } else { //pushed anything else
            string += button;
            if(button != '='){
                exp += button;
                
            } else {
                displayAnswer(exp);
            }
            
        }

        
        
    
        document.getElementById('display').innerHTML = string;
    }

    
}

function clear(event) {
    string = '';
    exp = '';
    document.getElementById('display').innerHTML = string;
    document.getElementById('answer').innerHTML = '';
    op = undefined;
    answer = undefined;
}

function backspace(event) {
    if(string[string.length-1] != '='){
        string = string.slice(0,-1);
        if (exp.includes('ERROR')){
            exp = string;
        } else {
            exp = exp.slice(0,-1);
        }
        
        document.getElementById('display').innerHTML = string;
        if(op){
            op = undefined;
        }    
    }
}

function checkKey(event) {
    switch (true){
        case event.key == '1':
            oneButton.click();
            break;
        case event.key == '2':
            twoButton.click();
            break;
        case event.key == '3':
            threeButton.click();
            break;
        case event.key == '4':
            fourButton.click();
            break;
        case event.key == '5':
            fiveButton.click();
            break;
        case event.key == '6':
            sixButton.click();
            break;
        case event.key == '7':
            sevenButton.click();
            break;
        case event.key == '8':
            eightButton.click();
            break;
        case event.key == '9':
            nineButton.click();
            break;
        case event.key == '0':
            zeroButton.click();
            break;
        case event.key == '+':
            addButton.click();
            break;
        case event.key == '-':
            subtractButton.click();
            break;
        case event.key == '*':
            multiplyButton.click();
            break;
        case event.key == '/':
            divideButton.click();
            break;
        case event.key == '.':
            decimalButton.click();
            break;
        case event.key == 'Delete':
            clearButton.click();
            break;
        case event.key == 'Backspace':
            backspaceButton.click();
            break;
        case event.key == '=' || event.key == 'Enter':
            equalButton.click();
            break;

    }
}

let string = '';
let exp = '';
let regExp = /^[\+\-\*\/]*$/;
let op = undefined;
let answer = undefined;

var sevenButton = document.querySelector('.seven');
sevenButton.addEventListener('click', display);

var eightButton = document.querySelector('.eight');
eightButton.addEventListener('click', display);

var nineButton = document.querySelector('.nine');
nineButton.addEventListener('click', display);

var fourButton = document.querySelector('.four');
fourButton.addEventListener('click', display);

var fiveButton = document.querySelector('.five');
fiveButton.addEventListener('click', display);

var sixButton = document.querySelector('.six');
sixButton.addEventListener('click', display);

var oneButton = document.querySelector('.one');
oneButton.addEventListener('click', display);

var twoButton = document.querySelector('.two');
twoButton.addEventListener('click', display);

var threeButton = document.querySelector('.three');
threeButton.addEventListener('click', display);

var zeroButton = document.querySelector('.zero');
zeroButton.addEventListener('click', display);

var addButton = document.querySelector('.add');
addButton.addEventListener('click', display);

var subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener('click', display);

var multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', display);

var divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', display);

var clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

var equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', display);

var backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', backspace);

var decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', display);

document.onkeyup = checkKey;
