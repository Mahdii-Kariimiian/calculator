
/* const zero = document.querySelector(".zero")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine") */
const number = document.querySelector(".number")
let reserve = 0;
let buffer = "0";

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
            console.log("c") ;
            buffer = "0";
            break;
        case '=' :
            console.log("equal") ;
            break;   
        case '<' :
            console.log("<") ;
            break;  
        case '+' :
        case '-' :
        case '*' : 
        case '/' :
            console.log("math") ;
            break;  
    } 


    if (symbol === "+") {
        addFunc(symbol)
        screen.innerText = ''
    }
}



/* add */
function addFunc (add)  {
    console.log(add)
    firstNum = screen.innerText
    console.log(firstNum)
}

/* rendering result on every click */
function reRender () {
    screen.innerText = buffer
}
