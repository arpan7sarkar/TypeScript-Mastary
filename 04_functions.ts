//example 
function add(a: number, b: number): number {
  return a + b;
}

// as I can clearly in functions i have to put the typings of params and also the return type

// Write a function greet(name: string): string.
const great=(name:string):string=> `Welcome ${name}`;

// Write a function square(n: number): number.
const sqr=(n:number):number=> n*n

// Make a parameter optional (age?: number) and test.
const emp=(name:string,age?:number)=> `${name} is ${age} years old `

console.log(emp("Arpan"));
console.log(emp("notArpan",18));

//Hoisting also restircted in ts that means we cant call a function before declaring it

const areYouAdult=(age:number)=> age>=18?"Adult":"child"
console.log(areYouAdult(7));