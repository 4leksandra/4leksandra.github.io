"use strict";

// === ISPALINDROMIC FUNCTION ===
// long version for understanding

function isPalindromic(name){
    let nameArray = name.toLowerCase().split('');
    //saving the string into array of strings(of length 1)
    
    let revArray = nameArray.reverse();
    //saving the reverse array of the original array
    
    let revStr = revArray.join('');
    //converting reverse array into a string
    
    return (name.toLowerCase() === revStr)
    //comparing the name str and the reversed str
    //If same, return true. If not, return false.
    
}

// === ISPALINDROMIC FUNCTION ===
// short version for faster coding

function isPalindromic2(userInput){
    let spaceFree = userInput.split(' ').join(''); //K ayak > 'K', 'ayak' > 'Kayak'
    return (spaceFree
            .toLowerCase() //Kayak > kayak
        .split('') //array replaces str // 'k''a''y''a''k'
        .reverse() // array is reversed // 'k''a''y''a''k'
        .join('') === spaceFree.toLowerCase()); //str after methods is compared to first str
    //'k''a''y''a''k' > 'kayak' > 'kayak' == 'kayak'
}

// === SUBMIT FORM FUNCTION ===
//This function is called from the event in HTML 
//Gets input from user, calls function isPalindromic and alerts user

function submitForm(){
    let text = document.querySelector('#myId').value; 
    // document.getElementByID('') or class.
    //if it's an input, you put value. If inside html div, INNER HTML
    alert(isPalindromic2(text));
    
//    document.querySelector('.hide');
//    .className = 'show';
    //.style = "display: block;"
    
}

// === GENERATE RANDOM FUNCTION ===

let generateRandom = (min = 0, max = 1000) => {
//    Math.random() //generate between 0(inclusive) and 1(exclusive)
    
    let random = Math.floor(Math.random() * (max - min) + min); 
    return random;
}

random = generateRandom(1,100);
console.log(random);

