/*
3. Calculator
Create a program that functions as a calculator.
The program stores each user input one at a time until an "=" sign is input.
At which point the values input should be processed as a calculator would.
1000 + 5 * 3 =
Assume this is input one at a time. [1,0,0,0,"+",5,"*",3,"="]

Order of operations must be considered. Parenthesis and Exponents need not be handled nor do you have to handle decimals.
Major Extra credit if you handle the PE in PEMDAS and add decimals.

Values it must handle.
[0,1,2,3,4,5,6,7,8,9,"+","-","/","*","="]

*/
equationArray = []
tickerString = ""
symbolArray = ['+','-', '/', '*']

/**
 * Main function of the program, called when button on webpage is clicked
 */
function setup(){

    initEventListeners()
}

/**
 *
 * @param {Array} options array of vaild non numeral characters
 * @returns {Array} Array of character input from user defining an equation
 */
function initEventListeners(){

    childArray = Array.from(document.getElementById('calculator').children)

    childArray.forEach((e) => {

        if(e.id === "C"){
            e.addEventListener('click', clearArray)
        }else if(e.id === "="){
            e.addEventListener('click', submit)
        }else if(e.id === "display-container"){
            //do not add eventlistener
        }else if(e.id === "+/-"){
                //do not add eventlistener
        }else{
            e.addEventListener('click', addToString)
        }


    });

}

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}

function divide(a,b){
    return a/b
}

function mult(a,b){
    return a*b
}

function calculateArray(){

    hold = 0
    value = 0

}

  const addToString = (event) => {

        equationArray.push(event.target.id)

        updateDisplay("calc-display", formatEqArray())

  }

  const clearArray = () =>{

    equationArray = []

    updateDisplay('calc-display', formatEqArray())
  }

  const submit = () =>{

    calculateArray()
    addTickerElement(formatEqArray())
    clearArray()

  }

function updateDisplay(display, value){
    elem = document.getElementById(display)
    elem.innerText = value
}

function formatEqArray(){
    str = ""

    equationArray.forEach((e) =>{
        str += e
    })

    return str
}window.onload = setup

function addTickerElement(value){
    p = document.createElement("p")
    p.innerText = value
    document.getElementById("output-display").appendChild(p)

    clear = document.createElement('p')
    clear.innerText = "------clear---------"
    document.getElementById('output-display').appendChild(clear)

}

setup()
console.log("run")
