//structure
function keywordBreakdown() {
  const func = 'function';
  const identity = 'identity';
  const typeParam = 'T';
  const valueParam = 'value';
  const returnType = 'T';
  
  console.log(`${func}: This is a keyword used to declare a function`);
  console.log(`${identity}: This is the name of the function`);
  console.log(`${typeParam}: This is a type parameter`);
  console.log(`${valueParam}: This is a parameter of the function`);
  console.log(`${returnType}: This is the return type of the function`);
}

// keywordBreakdown();

function identity<T>(value: T): T {
  return value;
}

//we can easily implement many types of functions using generic function this will increase the readibility and 
//save our time
const example = identity<number>(10);
const bool=identity<boolean>(true);
const arr=identity<number[]>([1,2,55,1,55])
console.log(example,bool); 


// 1. Create a generic function `wrap<T>(value: T)` that returns an object `{ value: T }`.
function wrap<T>(value:T):T{
  return value;
}
const obj=wrap<{x:string,y:string}>({x:"hello",y:"bro"})
console.log(obj);

// 2. Write a generic array function that returns the first element.
function firstElem<T>(arr: T[]): T | undefined {
  return arr[0];
}
// while working with ds such as array linked list ets always remeber to wtite T | undefined in return type

const arr2=firstElem<number>([1,2,5,8])
console.log(arr2);

// 5. Create a generic function that accepts two different types `combine<A, B>(a: A, b: B)` and returns a tuple.

function combine<A,B>(a:A,b:B):[A,B]{
  return [a,b];
}
const newTuple=combine<number,string>(69,"Arpan")
console.log(newTuple);

