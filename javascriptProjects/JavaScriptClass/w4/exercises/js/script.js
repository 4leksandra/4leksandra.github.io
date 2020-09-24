"use strict";
//try to define variables locally not globally
// console is just for testing, we want to display array on website for users.

// TO DO
//Change error message

let myArray = []; // need to define this in a global scope

// === PUSH ===

function push() {
    let value = document
        .querySelector('#myId')
        .value;
    if (value != "") {
        document.querySelector("#errorMessage").innerHTML = "";
        myArray.push(value);
        showArray();
    } else {
        document.querySelector("#errorMessage").innerHTML = "INVALID! You cannot enter nothing!";
    }
    document.querySelector('#myId').value = "";
    //Clear the user input
}

// === POP ===

function pop() {
    myArray.pop();
    showArray();

}

// === SHIFT ===

function shift() {
    myArray.shift();
    showArray();

}

// === UNSHIFT ===

function unshift() {
    let value = document
        .querySelector('#myId')
        .value;

    myArray.unshift(value);
    showArray();


    document.querySelector('#myId').value = "";
    //Clear the user input
}

// === REVERSE ===

function reverse() {
    myArray.reverse();
    showArray();

}

// === SHOW ARRAY ===

function showArray() {
    showFancyArray2();
    document
        .querySelector('#myList')
        .innerHTML =
        '[' + myArray.join(', ') + ']';
    //saving array to div
}

// =========== FUN ONES ==========

// === SLICE ===
// - Doesn't change the array, but gives you a slice of the array. first element is included, second is excluded

function slice() {
    //adds another div that displays array without first and last element
    let myArraySliced = myArray.slice(1, myArray.length - 1);
    showSlicedArray(myArraySliced);

}

function showSlicedArray(input) {
    document
        .querySelector('#myListSliced')
        .innerHTML =
        '[' + input.join(', ') + ']';
}

//=== SORT ===
// - sort treats numbers as words (10 is before 5 because 1 is smaller)
// whenever you want a custom sort, need to pass a function to the argument.
//compareFunction
function sort() {
    myArray.sort(compareNumbers);
    showArray();
}

function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    }
    if (b < a) {
        return 1;
    }

    return 0;
}

showArray();

// === SHOW FANCY ARRAY ===

function showFancyArray1() {

    let myFancyString = '';
    //saving empty string

    for (let i = 0; i < myArray.length; i++) {

        // - Tried to add LI another way - ASK TEACHER

        // let node = document.createElement("li");                 // Create a <li> node
        // var textnode = document.createTextNode(myArray[i]);         // Create a text node
        // node.appendChild(textnode);                              // Append the text to <li>
        // document.querySelector("#myFancyList").appendChild(node);     // Append <li> to <ul> with id="myList"

        myFancyString += '<li>' + myArray[i] + '</li>\n';
        console.log(myFancyString);

        //itterating array, and saving each element of array to string and adding the elements as List Items

    }

    // - Using forEach function - ASK TEACHER

    // myArray.forEach(element => {
    //     console.log(myArray[element]);
    //     myFancyString += '<li>' + myArray[element] + '</li>\n';
    // });

    document
        .querySelector('#myFancyList')
        .innerHTML = myFancyString;

    //put all li into the html

}

// === SPLICE === (Homework) 
// - Taking out the middle -

function splice() {
    let mySplicedArray = [];

    for (let i = 0; i < myArray.length; i++) {
        mySplicedArray[i] = myArray[i];
    }

    // myArray.forEach(element => {
    //     mySplicedArray[element]= myArray[element];
    // });

    let halfArray = mySplicedArray.length / 2;


    if (mySplicedArray.length % 2 == 0) {
        mySplicedArray.splice(halfArray - 1, 2);
    } else {
        let middleIndex = Math.floor(mySplicedArray.length / 2);
        console.log(middleIndex);
        mySplicedArray.splice(middleIndex, 1);
    }

    showSplicedArray(mySplicedArray);
}

function showSplicedArray(input) {
    document
        .querySelector('#myListSpliced')
        .innerHTML =
        '[' + input.join(', ') + ']';
}


// === FUNCTION SHOWFANCYARRAY2 ===
// - using forEach - 

function createListItem(item) {
    text += '<li>' + item + '</li>\n';
}

function showFancyArray2() {

    let text = '';
    //saving empty string
    myArray.forEach(function (item)) {
        createListItem(item);
    }


    document
        .querySelector('#myFancyList')
        .innerHTML = myFancyString;

}