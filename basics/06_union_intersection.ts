//example
let id: number | string; // here i have used union ( OR )
id = 10;
id = "ABC123";
// UNION / OR = |
// INTERTSECTION/AND = &
// Create status type = "success" | "error" | "loading".
let statusType: "success" | "error" | "loading"; // this line refers that statusType can only contain this three

statusType = "success";
statusType = "error";
console.log(statusType);

// Create a variable that accepts number or null.
let variable: number | null;
variable = null;
variable = 15587;
console.log(variable);

// Combine two types using intersection.
type Name = {
  name: string;
};
type Age = {
  age: number;
};
type Users = Name & Age;

const u2: Users = { name: "Arpan", age: 78 };
console.log(u2);
