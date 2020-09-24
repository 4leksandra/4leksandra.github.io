"use strict";


let test; // undefined
console.log(test);

// === DEFINING OBJECT === 
// in JavaScript you don't need a class for object oriented programming. 
// You don't need a class for an object. (no blueprints)
let myObject = new Object();

let myOtherObject = {
    color: 'blue', 
    size: null,
    number: 12,
    authors: ['A','B'],
    address:{
        postalCode: 'H2H 2H2',
        streetNumber: 123
    }
};

function printValue(myKey){
    // console.log(myOtherObject.myKey)
    // this will print undefined

    console.log(myOtherObject[myKey]);
    //This is a notation used to put a variable as a key (dynamic) and when key has a hyphen.
}

printValue('size');
printValue('address');

// you can add keys after! 
myOtherObject.name = 'Cup';
myOtherObject.color = 'RED';

console.log(myOtherObject.address.streetNumber);
console.log(myOtherObject.authors[1]);

//These two print the same
console.log(myOtherObject.address);
console.log(myOtherObject['address']);

//These four are the same
console.log(myOtherObject.address.streetNumber);
console.log(myOtherObject.address['streetNumber']);
console.log(myOtherObject['address'].streetNumber);
console.log(myOtherObject['address']['streetNumber']);
