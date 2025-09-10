import './style.css'

// how to not strictly type them
// let meaningOfLife = 42;

// how to strictly type them
let meaningOfLife: number = 42;

// can't change the type like this!!!
// meaningOfLife = "42";

console.log(meaningOfLife);

// input and output are numbers
function plusOne(input: number): number {
  return input + 1;
}

// DOESN'T WORK SINCE INPUT NOT #!
//console.log(plusOne("5"));

console.log(plusOne(100));


type ClassroomInfo = {
  building: string;
  room: string;
  capacity: number;
};

const classroomInfoFor104: ClassroomInfo = {
  building: "ATLS",
  room: "104",
  capacity: 30
};

console.log(classroomInfoFor104.room);


// type unions |
  // can be either of two types

let something: string | boolean = false;
console.log(something);

something = "hello world!";
console.log(something);

type ServerResult = {
  success: boolean;
  // ? means optional type
  output?: string;
  // declare array type
  errors?: string[];
}

function doServerCall(input: boolean) : ServerResult {
  if (input) {
    return {
    success: true,
    output: "hello world!",
    }
  }
  return {
    success: false,
    errors: ["hello world", "this is an error"],
  }
}

// function doLog(input: string) {
//   console.log(input);
// }

const serverResult = doServerCall(true);

if (serverResult.success) {
  console.log(serverResult.output);
}


const app = document.getElementById("app");

if (!app) {
  throw new Error("app is null!");
}

const appDiv = app as HTMLDivElement;
console.log(appDiv);