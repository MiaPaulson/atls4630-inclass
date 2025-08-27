/* semicolon is optional - be consistent tho!
    tabs does not matter either - but make sure can read!
    multi-line comments are : /* .... */
    // single line commetns are : //

/* console.log()
print anything you want to JS console
Access JS console through browser
    f12 can open
    can select inspect element - then find console
    can access through various menus throughout browser
quick and easy debugging!
*/

/* variables
DO NOT USE VAR - only use "let" keyword
var - doesn't obey scopes in same way others do (old way to do it)
let - 2015 obeys scopes (ie {})
    using let improves code predictability and reduces debugging time and frustration
*/

/* constants
const - act like variable, can't be reassigned
good to always start with const until realize it needs changing - great for memory and speed of program
*/

let myVariable = 2;
console.log(myVariable);
myVariable = 3;
console.log(myVariable);

const myConstant = 'dog';
console.log(myConstant);
// below will get an error!
// myConstant = 7;

/* strings
either '' or ""
string literals (template literals): {} can inject as much JS into a string as wanted
    USE BACK TICK KEY
    `This person is ${age} years old`
*/

console.log('this is a string with "double quotes" inside of it');
console.log("this is a string with 'single quotes' inside of it");
console.log(`this string has myVariable in it... myVariable: ${myVariable}`);

/* arrays
AKA lists - collection of variables of the same type, grouped
into a single variable/constant
can be flexible in length in JavaScript
created using square brackets:
    let myArray = [0, 1, 2];
    const animals = [‘dog’, ‘cat’, ‘cow’];
bracket-index notation:
    animals[0] is ‘dog’
*/
const myArray = ["dogs","hats","horses"];
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray);
//add
myArray.push("birds");
console.log(myArray);


/* objects
key and value pairs - keys = strings, values = any type
    don't need to put keys in quptes
Created using curly brackets - keys separated with colon, pairs separated with comma
let classroom = {
    building: "ATLAS",
    room: 104
    };

dot notation:
classroom.building is ATLAS
if doesn't work, do brackets
classroom[room]
*/

const classroom = {
    building: "ATLAS",
    room: 104
    };

console.log(classroom.building);
console.log(classroom.room);
// this will be undefined since key doesn't exist - but won't be an error
console.log(classroom.build);

// can add in new stuff
classroom.build = "ATLAS";
console.log(classroom.build);

// can log whole object
console.log(classroom);

/* conditionals
if, else if, else

=== or == works - just use the three!!!
*/

if (myVariable === 2) {
    console.log("myVar is 2!");
}
else {
    console.log("myVar is not 2!");
}

/* while loops
continue to run code until condition is met - if never true, will never run
while (condition) {
}
*/
let myWhileLoopVar = 1;

while(myWhileLoopVar < 5) {
    console.log(myWhileLoopVar);
    myWhileLoopVar++;
}

/* for loops
for (initial; condition; update to initial) {
}
*/

for (let i = 1; i < 5; i++) {
    console.log(i);
}

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* for-of loops
can't run forever, goes through the values of object/array
*/
for (const animal of myArray) {
    console.log(animal);
}

/* for-in loops - DON'T WORRY!
*/

/* .forEach loops
appended onto array/object, uses another function as callback to something on each element
*/

/* function
function = keyword
function doSomething(paramter1, parameter2) {
// do something
}
*/
function myLog(variable) {
    console.log(variable);
}

/* arrow functions
less characters to write out - const as keyword
const myArrowFunction = (parameter) => {
// do something
}
parentheses around the parameters can be left out if only one parameter
curly brackets around the function body can be left out if only a single line/statement
*/
const addAndLog = (var1, var2) => {
    const added = var1 + var2;
    console.log(added);
}

const plusOne = input => input + 1;
const plusOneExtraSyntax = (input) => {
    return input + 1;
}
const plusOneAndLog = input => {
    console.log(input + 1);
}

/* for-each
*/
myArray.forEach(animal => console.log(animal));
myArray.forEach(myLog);
// myArray is strings - doing this will just add 1 to the end of the string and makes the number a string
myArray.forEach(plusOneAndLog);


/* anonymous functions
never given a name
either be immediately called/passed into another fn as parameter (makes them callback functions) because will be called at some point by another function
*/

// () ouside empty parenthesis calls the function immediately
(function() {
    console.log("abc");
})();
(() => {
    console.log("def");
})();

/* Document Object Model (DOM)
model JS interacts with HTML and CSS
HTML elements/notdes obtained through queries or through tree navigation stored into JS variables
elements/nodes can have attributes and CSS properties manipulated as if JS objects
JS must be running after rest of document has been loaded in order for entire DOM to be accessible to the script
    script should still go in the head (non-content part of the page)
    add defer to the link
    <script src = "script.js" defer></script>
*/

/* Get objects with DOM Queries
document.getElementByID("some-id") retrieves element with id "some-id"
    can't share ids with elements
document.getElementsByClassName("some-classname") gets list of elements with class "some-classname"
    share classes with elements
document.querySelector("#some-id") retrieves element with id "some-id"
document.querySelector(".some-classname") retrieves first element in document with class "some-classname"
document.querySelectorAll(".some-classname") retrieves a list of elements with class "some-classname"
*/

const mySpecialListItem = document.getElementById("mySpecialListItem");
console.log(mySpecialListItem);

const myListItems = document.getElementsByClassName("listItem");
console.log(myListItems);

const myListItemsQuerySelected = document.querySelectorAll(".listItem");
console.log(myListItemsQuerySelected);

// can just select elements not by class name or id
const myH1 = document.querySelector("h1");
console.log(myH1);

const firstListItem = document.querySelector(".listItem:first-child");
console.log(firstListItem);

/* Modifying Object Properties
href or src can be manipulated
style in CSS too!
let link = document.querySelector("a");
link.href = "https://www.google.com";
let myDiv = document.getElementById(“my-div”);
myDiv.style.backgroundColor = “#ffff00”;
*/

// changing element attributes
console.log(firstListItem.textContent);
firstListItem.textContent = `myVariable: ${myVariable}`;
console.log(firstListItem.textContent);

myH1.style.backgroundColor = "#ff0000";

/* DOM Events and Event Listeners
event model allows you to write code that reacts to changes in DOM
EVENT LISTENERS IS MODERN WAY!

element.addEventListener(event, callback);
*/
myH1.addEventListener('click', () => {
    //Math.random() = # between 0 and 1 that's random
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;

    myH1.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
})