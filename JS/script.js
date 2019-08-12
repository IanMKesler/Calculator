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

    return operate(parseInt(parsed[0]),parseInt(parsed[1]),op);
    

}

function display(event) {
    let button = this.innerHTML;
    let operator = button.match(regExp);
    if(operator) {
        op = operator[0];
    } 
    
    string += button;
    
    document.getElementById('display').innerHTML = string;

    if (button=='=') {
        let answer = evaluate(string).toString();
        answer != 'NaN' ? string += answer: string += 'ERROR';
        document.getElementById('display').innerHTML = string;
        
    }
}

function clear(event) {
    string = '';
    document.getElementById('display').innerHTML = string;
}

let string = '';
let regExp = /^[\+\-\*\/]*$/;
let op;

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

