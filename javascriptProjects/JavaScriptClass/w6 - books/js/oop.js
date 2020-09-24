
// this function accepts initial values and returns an object where values are set to properties. 
// it is an acting CONSTRUCTOR. BUT NORMAL FUNCTION

function createNewPerson(theName){
    let obj = {};
    obj.name = theName;
    obj.greeting = function(){
        console.log("Hi, i\'m " + theName);
    }
    return obj;
}

//instead, do this.
//CONSTRUCTOR FUNCTION
function Person(theName){
this.name = theName;
this.greeting = function(){
    console.log("Hi, i\'m " + this.Name);
}
}

let p1 = createNewPerson("Sarah");
p1.greeting();
let p2 = createNewPerson("John");
p2.greeting();

//use with constructor function. 
let p3 = new Person("Bob");
p3.greeting();

console.log(p1);
console.log(p3);

//Using constructor functions, you can create a class. (books).

console.log(typeof p3);

let p4 = new Person("mary");
p4.greeting();

p3.greeting = function (){
    console.log("Hi, I am the new method");
}
p3.greeting();

// function Human(name, age, sex){
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }

// function Car(make, model, year, owner){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }


//PROTOTYPE STYLES = i have a variable called Rand, which is created by prototype Person. 

// CLASS EXERCISES



