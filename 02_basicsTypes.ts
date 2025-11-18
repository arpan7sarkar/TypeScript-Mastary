// TypeScript is a superset of JavaScript that adds optional static typing and other features.
// It helps catch errors early and improves code maintainability, making it a popular choice among developers.
// Js is a subset of Ts
let age: number = 18;
let nam: string = "Arpan";
let isStudent: boolean = true;
console.log(nam);

// TODO
// Create variables: username (string), price (number), isActive (boolean).
let username: string = "arpan7sarkr";
let price: number = 69;
let isActive: boolean = true;
// Change a variable's type and observe TypeScript error.
let num:number=19;
// num="arpan" this one is clearly giving typeerror

// Declare a variable without type → let TS infer it.
let num2=19
// num2="arpan" ts automatically detects and boud the typing with the initialized value