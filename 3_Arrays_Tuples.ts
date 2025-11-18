//examples for refrence
let scores: number[] = [90, 80, 70]; // declared that scores will only contain number type values
let user: [string, number] = ["Arpan", 19]; //here only to elements are eligble to stay in the tuple

// Create a number array marks and push a value.
let arr: number[] = [14, 25, 58];
arr.push(68);
console.log(arr);
// Create a tuple storing studentName + roll.
let student: [string, number] = ["Arpan", 173];
// Try to push “string” into number[] → see error.
// arr.push("Arpan") Argument of type 'string' is not assignable to parameter of type 'number' .
