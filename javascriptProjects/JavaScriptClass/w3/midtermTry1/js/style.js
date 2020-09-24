// === CALCULATE TAX === 
//function calculateTax(salary) { 
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

// - Another way to write this function
// === CALCULATE TAX ===

let taxes = (salary) => { 
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
        tax = salary - m1 * r1;
        return tax;
    } else {
        tax = 0;
        return tax;
    }
}

function validate(){
    document.getElementById('salary').innerHTML.trim();
    let salaryStr = document.getElementById('salary').innerHTML;
    
    if (salaryStr === undefined){
        console.log("Error, you MUST enter a number.")
    }
    return salaryStr;
}

// === GENERAL CALCULATE FUNCTION === 
function calculate(){
   //remote spaces first, if any
    
    let salaryStr = validate();
    let salary = Number(salaryStr).toFixed(2);
    let tax = taxes(salary).toFixed(2);
    console.log("Salary: ",salary);
    console.log("Deductions:", tax);
    console.log("Net Salary: ", (salary - tax).toFixed(2));
}

