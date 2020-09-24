//HOMEWORK ACTIVITY

//REMOVE SPACES FROM SALARY STRING AND SAVE TO VARIABLE
document.getElementById('salary').innerHTML.trim();
let salary = document.getElementById('salary').innerHTML;
console.log('Salary in a string: ',salary);

let salaryInNum = Number(salary);
console.log('Salary converted to number:',salaryInNum);

//VARIABLES
let deductions;
let netSalary;

//CALCULATIONS 
//$42,705 to $85,405	20%
//$85,405 to $103,915	24%
//More than $103,915	25.75%
//
//Note: If I make $90,000, I pay 20% on the $85,405 of it and %24 on the rest ($4,595)

let max3 = 103915;
let max2 = 85405;
let max1 = 42705

let tax1 = 0.20;
let tax2 = 0.24;
let tax3 = 0.2575;

if(salaryInNum > max3){
    deductions = (max2 - max1)* tax1 + (max3 - max1) * tax2 + (salaryInNum - max3) * tax3 
    netSalary = salaryInNum - deductions;
}
else if(salaryInNum > max2){
    deductions = max2 * tax1 + (salaryInNum - tax2) * tax2;
    netSalary = salaryInNum - deductions;
}
else if(salaryInNum > max1){
    deductions = salaryInNum - max1 * tax1;
    netSalary = salaryInNum - deductions;
}
else {
    deductions = 0;
    netSalary = salaryInNum;
}

//PUT INTO HTML

document.getElementById('deductions').innerHTML= deductions;
document.getElementById('netSalary').innerHTML= netSalary;

console.log('Salary: ', salaryInNum);
console.log('Deductions: ', deductions);
console.log('NetSalary: ', netSalary);

