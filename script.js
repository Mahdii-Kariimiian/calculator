
const number = document.querySelector(".number")
let reserve = 0;
let buffer = "0"
let intBuffer;
let runningTotal = 0;
let previousOperator = null;
let screen = document.getElementById("result")
const clear = document.getElementById("clear")
const multiple = document.getElementById("multiple")
const substract = document.getElementById("substract")
const add = document.getElementById("add")
const equal = document.getElementById("equal")
const table = document.querySelector(".table")

/* click event */
table.addEventListener ( "click" , function(e){
    buttonClick( e.target.innerText)
})

/* separating numbers from symbols */
function buttonClick (value) {
    if (isNaN(parseInt(value))) {
        handleSymbol (value)
    } else { handleNumber (value)
       }
       reRender ()
}

/* numbers */
function handleNumber (number) {
    if (buffer === '0' ) {
        buffer = number;
 }   else ( buffer += number)
}

/* symbols */
function handleSymbol (symbol) {
    switch (symbol) {
        case 'C':
            buffer = "0";
            break;
        case '=' :
            if(previousOperator === null) {
                /* do nothing */
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = '' + runningTotal;
            runningTotal = 0;
            break;   
        case '<' :
            if (buffer.length === 1) {
                buffer = "0"
            } else {
                buffer = buffer.substring(0 , buffer.length - 1)
            }
            break;  
        case '+' :
        case '-' :
        case '×' : 
        case '÷' :
            handleMath (symbol)
            break;  
    } 

}

/* handle math */

function handleMath (value) {
    if (buffer === '0'){
        return /* do nothing */
    }
    intBuffer = parseInt(buffer);
    
    if  (runningTotal === 0) {
        runningTotal = intBuffer;
        
    } else {
        flushOperation (intBuffer)
    }
    previousOperator = value;
    buffer = '0';
}

function flushOperation (intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer
    }
}

/* rendering result on every click */
function reRender () {
    screen.innerText = buffer
}
