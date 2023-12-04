/*
2. Currency Converter

Write a program that converts between currencies and returns the value and the long form of each currency.
The program should have a set of exchange rates, the base of those conversions will be USD.
That may not be the base input of the user.
The user provides the amount to convert, three digit currency codes of the base currency and the converted currency.
Handle situations with invalid inputs.

Example:
 program("EUR", "AUD", 1000) -> 1484.32 AUD

Write a second program that helps a user lookup the currency code for currency and visa-versa.
Given a user input partial string, return a suggested list of currency codes.
Handle situations with invalid inputs.

Examples:
program("Dollar") -> {"AUD": "Australian Dollar", "CAD": "Canadian Dollar", "USD": "United States Dollar"}
program("British") -> {"GBP": "British Pound Sterling"}
program("AUD") -> {"AUD": "Australian Dollar"}

Known exchange rates:
*/
const tabOptions = ["first", "second", "third"]


const EXCHANGE_RATES = {
  "base": "USD",
  "date": "2022-09-24",
  "rates": {
    "AUD": 1.531863,
    "CAD": 1.36029,
    "CLP": 950.662057,
    "CNY": 7.128404,
    "EUR": 1.03203,
    "GBP": 0.920938,
    "INR": 81.255504,
    "JPY": 143.376504,
    "RUB": 57.875038,
    "ZAR": 17.92624
  }
}

//Known Symbols
const CURRENCY_CODE = {

    "AUD": "Australian Dollar",
    "CAD": "Canadian Dollar",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "EUR": "Euro",
    "GBP": "British Pound Sterling",
    "INR": "Indian Rupee",
    "JPY": "Japanese Yen",
    "RUB": "Russian Ruble",
    "USD": "United States Dollar",
    "ZAR": "South African Rand"

  }


function populateDropDowns(){

  lDrop = document.getElementById('left-dropdown')
  rDrop = document.getElementById('right-dropdown')

  codeKeys = Object.keys(CURRENCY_CODE)

  codeKeys.forEach((e)=>{
    label = document.createElement('label')
    label.innerText = e + CURRENCY_CODE[e]
    labal.classList.add("dropdown-item")
    rDrop.appendChild(label)
    lDrop.appendChild(label)
  })


}

//add listeners to id's 1-3
const addEventListeners = function(){
  for (let i = 0; i < 3; i++) {
    if(i >=1 && i <=3){
      console.log('done')
      document.getElementById(String(i)).addEventListener('click', openTab)
    }

  }
}

const openTab = function(event) {
  console.log('1')
  tab = tabOptions[event.target.id]
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onLoad = () =>{
  console.log('ran')
  populateDropDowns()
  addEventListeners()
}



