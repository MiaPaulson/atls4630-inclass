// throw
// throw ‘some error’;
// Or even better:
// throw new Error(‘some error’);


// try...catch
// try {
//     throw "some error";
// }
// catch (e) {
//     console.log(e);
// }


import './style.css';
try {
  throw new Error("hello world!");
} catch(e) {
  console.error(e);
} finally {
  console.log("in finally block!");
}

console.log("after the error");


// not working rn?
// const app = document.getElementById("appp");


// (!app) means if app is null
if (!app) {
  throw new Error("cannot find element with id 'appp'");
}



try {
  app.addEventListener("click", () => console.log("hello from event listener!"));
} catch (e) {
  console.error("something went wrong");
  console.error(e)
}



/* finally block (shown up above in code)
try..catch ... finally
ALWAYS runs no matter what
useful for performing "clean up" tasks
*/

/* callback functions and setTimeout()
callback run asynchronously
setTimeout() is built in browser function that allows to run any given function as callback after certain amount of time
can combine timer of 0 to force any function to run asynchronously but effective "immediately"

function myFunction () {}
setTimeout(myFunction, 0);
*/

function addOne(num) {
  return num+1;
}
function logNumber(num) {
  console.log(num);
}

function addOneandLog() {
  const result = addOne(1);
  logNumber(result);
}

// even if this was 0, still logs in After setTimeout first
// ALWAYS does synchronous stuff before asynch
setTimeout(addOneandLog, 1000);

console.log("After setTimeout");

/* promises - NOT REALLY USED IN CLASS
modern (ES6+) handling asynchronous - better error handling than callback functions
promises chained together using .then(), errors handled with .catch()
*/

/* asynch/await - USED
async functions level of "syntax sugar" over normal promises, that when combined with await, help bridge gab between sync and async
aasync keywork makes creating promises easier
await makes using promises more similar to synchronous functions, but must be used in async context to begin with
*/

async function addOneAsync(num) {
  // the catch statement will catch this!
  if(num > 6) {
    throw new Error("num is too big!");
  }
  return num + 1;
}

const resultSync = addOne(2);
console.log(resultSync);

// .then() makes the 2 an actual number, not just a "promise" of a number
const resultAsync = addOneAsync(1).then(result => console.log(result));
addOneAsync(3).then(logNumber);
addOneAsync(4).then(addOneAsync).then(addOneAsync).then(addOneAsync).then(addOneAsync).then(addOneAsync).then(logNumber)
.catch(e => console.error(e));


//await
// but be in an async function to begin with
const addOneToThreeThenLog = async () => {
  const result = await addOneAsync(3);
  console.log(`result is ${result}`);
}

addOneToThreeThenLog();


/* JS event loop
single-threaded language, "how does it run async"?
"async" code separatied into two groups: tasks and microtasks
one "clock cycle":
1. run all sync code
2. run first task in task queue
3. run all microtasks in microtask queue
4. re-render page and start over

interative loop visualizer: https://www.jsv9000.app/

setTimeOut = task
promise = microtask
*/

//loops
function loop () {
  console.log("loop timeout");
  // runs 30 times per section
  setTimeout(loop, 1000 / 30);
};

//loop();


// with set Interval, can end loop whever!
function loopInterval () {
  console.log("loop interval"); 
}
//const intervalId = setInterval(loopInterval, 1000 / 30);
// will go until click on the page
//document.addEventListener("click", () => clearInterval(intervalId));

//animation frame - good for games!
function loopAnimationFrame() {
  console.log("loop request animation");
  requestAnimationFrame(loopAnimationFrame);
}
//requestAnimationFrame(loopAnimationFrame);