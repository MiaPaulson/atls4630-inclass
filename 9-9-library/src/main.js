import "./style.css";

//import { classroomInformation, plusOne } from "./myModule";
//console.log(classroomInformation);
//console.log(plusOne(5));



// importas all 
import * as myModule from "./myModule";
console.log(myModule.classroomInformation);
console.log(myModule.plusOne(5));

// renaming
//import {classroomInformation as myClassroomInformation} from "./myModule";
//console.log(myClassroomInformation);


// for default exports - only exporting single thing per file
import plusTwo from "./myModuleDefaultExports";
console.log(plusTwo(7));


// using new LIBRARY
import _ from "lodash";
// chunk separates array into arrays of length 2 (since # on end)
console.log(_.chunk(['a','b','c','d'], 2));

function search(value) {
  console.log(value);

}

// makes sure doesn't add every single letter typed in as new searches to console
// waits until typing stops for 200 ms then prints it out
const debounchedSear = _.debounce(search, 200);
const searchBar = document.getElementById("search");

// can write own "debounce" function
let timeoutId;
searchBar.addEventListener("input", () => {
  //search(searchBar.value);
  debounchedSear(searchBar.value);

  // own debounce function stuff:
  // if timeout ID has value, then return right away
  // if (timeoutId) {
  //   clearTimeout(timeoutId);
  // }
  // timeoutId = setTimeout(() => {
  //   search(searchBar.value);
  //   timeOUtId = undefined;
  //  }, 200);
})

// typescript is JS with STRONG TYPES 
  // here, "2" != 2 (like in JS)
  // cant be run natively in browser, so Vite with compile it down to JS