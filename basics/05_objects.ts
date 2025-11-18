// In TS we have to decalre the types of the objects items before declaring a object
type User = {
  name: string;
  age: number;
};
//for creating a new object we have  to write : Obj
let u1: User = { name: "Arpan", age: 19 };
console.log(u1);

// Create a type Product with name, price, inStock.
type Product = {
  name: string;
  price: number;
  isStock: boolean;
};
const laptop: Product = {
  name: "Laptop",
  price: 1000000,
  isStock: true,
};

console.log(laptop);

// Make one field optional.
type Product2 = {
  name: string;
  price: number;
  isStock: boolean;
  rating?: number;
};

const mobile: Product2 = {
  name: "Mobile",
  price: 10000,
  isStock: true,
  rating: 5,
};
console.log(mobile);
// Create an object using your custom type.
const headphone: Product2 = {
  name: "Headphone",
  price: 5000,
  isStock: true,
};
