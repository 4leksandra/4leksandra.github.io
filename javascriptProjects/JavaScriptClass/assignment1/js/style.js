// === EVENT LISTENNER ===
// - Instead of putting events in the html - 

document.querySelector("button#calculations").addEventListener("click", calculate, false);


// === CALCULATE TAX FUNCTION===

let calculateTax = (salary) => { 
    let m3 = 103915;
    let m2 = 85405;
    let m1 = 42705;
    
    let r3 = 0.2575;
    let r2 = 0.24;
    let r1 = 0.20;
    
    let tax;

    if (salary > m3) {
        tax = (salary - m3) * r3 + (m3 - m2) * r2 + (m2 - m1) * r1;
        return tax;
    } else if (salary > m2) {
        tax = (salary - m2) * r2 + (m2 - m1) * r1;
        return tax;
    } else if (salary > m1) {
        tax = (salary - m1) * r1;
        return tax;
    } else {
        tax = 0;
        return tax;
    }
}

// === VALIDATE FUNCTION === 
// - validating user input - 

function validate(){

    //triming additional spaces and saving in a string
    let salaryStr = document.querySelector("input#salary").value.trim();
    
    if (isNaN(salaryStr)){
        document.querySelector("p#message").className = "show";
        document.querySelector("#results").className = "hide";
        return ('NaN');
        
    }
    else{
        document.querySelector("p#message").className = 'hide';
            return salaryStr;

    }
}

// === SHOWRESULTS FUNCTION ===

function showResults(validatedStr,taxFormatted,netFormatted){

    if (validatedStr!= 'NaN'){
        //inserting salary, deductions and net salary in the html, with right format
        document.querySelector("p#deductions").innerHTML = "Deductions: " + "$" + taxFormatted;
        document.querySelector("p#netIncome").innerHTML = "Net Income: " + "$" +netFormatted;
        //changing hide to show, showing elements in the browser
        document.querySelector("#results").className = ".show";
        document.querySelector("#deductions").className = ".show";
        document.querySelector("#netIncome").className = ".show";
        }
}

// === FORMATCURRENCY FUNCTION === 

function formatCurrency(number){
    return number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

// === RESET ===
// -- Resetting error messages or previous calculations

function reset(){
    if (document.querySelector("p").className = "show"){
        document.querySelector("p").className = "hide";
    }
}


// === GENERAL CALCULATE FUNCTION === 

function calculate(){

    //resetting error messages or previous calculations
    reset();

    //validating if string is a number
    let salaryStr = validate();

    //converting salary to a number
    let salaryNum = Number(salaryStr);

    //calling calculateTax function
    let tax = calculateTax(salaryNum);

    //formatting -- also works with .toFixed(2) 
    let taxFormatted = formatCurrency(tax);
    let netIncome = salaryNum-tax;
    let netFormatted = formatCurrency(netIncome);
    
    //Only if user input is valid, show resulting elements 
    showResults(salaryStr,taxFormatted,netFormatted);
}

