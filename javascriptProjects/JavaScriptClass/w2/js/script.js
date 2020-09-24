"use strict";

//console.log('HELLO'); // calling a predefined function 
//
//// HOW TO CREATE A NEW FUNCTION
//
//let salary = 90000;
////
//function calculateTax(salary) { //we don't need to define return type
//    let m3 = 103915;
//    let m2 = 85405;
//    let m1 = 42705;
//    
//    let r3 = 0.2575;
//    let r2 = 0.24;
//    let r1 = 0.20;
//    
//    let tax;
//
//    if (salary > m3) {
//        tax = (salary - m3) * r3 + (m3 - m2) * r2 + (m2 - m1) * r1;
//        return tax;
//    } else if (salary > m2) {
//        tax = (salary - m2) * r2 + (m2 - m1) * r1;
//        return tax;
//    } else if (salary > m1) {
//        tax = salary - m1 * r1;
//        return tax;
//    } else {
//        tax = 0;
//        return tax;
//    }
//}
//
//let tax = calculateTax(salary);
//
//////replace the whole function call to the value of tax
//console.log("salary is:",salary);
//console.log("tax is:",tax);
//console.log("netSalary is:", salary - tax);


//EXERCISE
//Define a function called isWorkingDay
//Where for a given day of the week, Sunday, it returns true if it is a working day and false if it is weekend

let day = 'monday';

//function isWorkingDay(day) {
//        switch (day) {
//            case 'saturday':
//            case 'sunday':
//                return false;
//        default:
//                return true;
//    }
//}


//function isWorkingDay(day){
//    return (day !== 'saturday' && day !== 'sunday');
//}
//
//if (isWorkingDay('sunday')){
//    console.log('YAY');
//}


//Do not repeat yourself. DRY CODE. 
//Make functions! Code reusability is the purpose of functions. 
// With function signature, we understand what it does. Don't need to understand the logic.


//ADDING DEFAULT VALUES

//function average(n1,n2,n3){
//    if (n3 === undefined){
//        n3 = 0;
//    }
//    return(n1 + n2 + n3) / 3;
//}
//
//let avg = average(1,2); 
////if you pass more arguments, it will ignore it. If you pass less, it gives you undefined. 
//console.log(avg);
//
//function average(n1 = 0,n2 = 1 ,n3 = 0){ //if n3 is undefined, it is equal to 0;
//     return(n1 + n2 + n3) / 3;
//}
//let avg = average(); 
//console.log(avg);›

// === DIFF WAY TO DEFINE FUNCTIONS ===
// YOU CAN SAVE A FUNCTION INTO A VARIABLE
//var average3 = function (n1,n2,n3){
//    return(n1 + n2 + n3) / 3;
//}
//const avg = average3();
//
//// === DIFF WAY TO DEFINE FUNCTIONS ===
////FAT ARROW
//
//let average4 = (n1, n2, n3) => { //average is a function that supports 3 variables that does this
//    return(n1 + n2 + n3)/3;
//}


