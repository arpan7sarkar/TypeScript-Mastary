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
