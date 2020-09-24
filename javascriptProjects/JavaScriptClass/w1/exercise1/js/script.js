console.log('Hello'); 
//Single of double quotes, it doesn't matter. 
//Semi column is optional but it is better to put it. 

//In Java, type of variable matters, in JavaScript it doesn't
var myName = 'Alex';
let temp = 12;
//Same as VAR. We prefer let than var 
const DAYS_IN_JAN = 31; 
//Constant, static : doesn't change

console.log(myName, temp, DAYS_IN_JAN);

let a = 2;
let b = 2.5;
let sum = a + b;
console.log(a, b, sum);

let result = (a == b);
// If you use == it compares the value only. 
// If you use === it compares the type too. 
console.log('Result: ', result);
console.log('Type of Result: ',typeof result);
//Prints what is the type of Result variable.

//HOW TO GET ELEMENTS FROM HTML
let content= document.getElementById('myText');
console.log(content);

//HOW TO CHANGE ELEMENTS FROM HTML
document.getElementById('myText').innerHTML = 'bye world';

//CLASS ACTIVITY
let ageInDaysNoLeap = 31 * 365;
let ageInDays;
let ageInMonths = 31 * 12;
let year = 0;

//While the year is leap, add one day to age in days
while(year >= 0){
    if(year % 4 == 00 && year % 100 == 0 && year % 400 == 0){
    ageInDays = ageInDaysNoLeap + 1;
    }
    year --
}
console.log('age in days: ',ageInDays);
//It is evenly divisible by 100.
//If it is divisible by 100, then it should also be divisible by 400.
//Except this, all other years evenly divisible by 4 are leap years.

document.getElementById('myAgeInDays').innerHTML = ageInDays;
document.getElementById('myAgeInMonths').innerHTML = ageInMonths;

//GETTING AGE STRING AND CONVERTING TO NUMBER
let age = document.getElementById('myAge').innerHTML.trim(); 
//gets text inside the element, trim makes sure there is no space
console.log(age);

let ageInNum = Number(age);
console.log(ageInNum);

let ageInMonth = ageInNum *12;
console.log(ageInMonth);

//lint, eslint, JsLint, Jshint : custom rules of compilation. Everything that matters how to visually read the code but it still works regardless