Basic Calculator 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview

A simple calculator with the ability to perform four basic operations and a clear and undo button

### Screenshot
### Links
-Netlify: 

## My process
 The calculator first receives the value inside each button with "target.innerText". If it is a number, it executes "handleNumber()" and if it is a symbol, it executes "handleSymbol()". If the buffer, which is a pre-defined variable and equal to zero, is equal to zero, it does nothing. The buffer is later filled with the number selected by the user. In "handleSymbol()" written with "switch", nothing is done if clear is selected and buffer is equal to zero. In the equal section, a new variable called "previousOperator" is used. If this variable is empty, nothing will be done. But if it is filled with one of the four main actions chosen by the user. Its value is passed to a function called flushOperation. In this function, according to the symbol, which is one of the four basic mathematical operations, mathematical operations are performed on the two numbers entered by the user, and the result is displayed to the user. Back to the "handleSymbol()" again. If the undo option is selected and the buffer is not already zero, numbers will be reduced one by one from the end of the buffer until the buffer length reaches one. At this stage, a buffer equal to zero is placed. If the selected symbol is one of the four main operations, its value is passed to "handleMath()". Mathematical operations are performed on it and the result is displayed to the user.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I used

Here is a glimpse of what I used to build this mini project.
````

JavaScript
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


````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


