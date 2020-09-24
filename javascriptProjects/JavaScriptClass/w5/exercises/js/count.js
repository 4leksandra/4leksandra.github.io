// document.querySelector("#myInputString").addEventListener("oninput", check(), false);

// === COUNT LETTERS FUNCTION === 
function countLetters(myString) {

    let count = 0;
    let result = {};

    // Itterating each letter of the String and saving a key and a value;
    for (let i = 0; i < myString.length; i++) {
        //letter is equal to String charted at current index
        let myChar = myString.charAt(i);
        console.log('myChar is ', myChar);

        //if result object doesn't have the character, value of character is equal to 1. 
        if (result[myChar] === undefined) {
            result[myChar] = 1;
        } else {
            //if result object has the character, increase the value by 1.
            result[myChar] += 1;
        }
    }
    return result;

}

function showResults(result){
    document.querySelector("#letterCounter").innerHTML = JSON.stringify(result);
}

function check(){
    //get the value
    let userInput = document.querySelector("#myInputString").value;
    //calculate
    let result = countLetters(userInput);
    //inject the result
    showResults(result);
}

console.log(countLetters('apple'));
console.log(countLetters('banana'));

// NEXT CLASS

function printTitles(){
    // print the titles
    }
    
    function printAuthors(){
    //print arrays of authors
    //console.log
    }
    
    function findShortest(){
        //find the object with minimum page counts and print the title to that
        //console.log
    }
    
    function aboveThree(){
        let result = [];
        //returns array consisting ot the title of the books 
        //push title of the books where rating is >= 3
        //return result
    }
    
    function findAuthors(){
        let result = {};
        return result;
    
        //returns an object {"harry potter book title": [authors], etc}
    }