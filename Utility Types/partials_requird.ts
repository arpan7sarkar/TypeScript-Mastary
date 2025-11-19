// Partial<T> → makes all properties optional
interface User {
  name: string;
  age: number;
}
const u: Partial<User> = { name: "Arpan" };
//that means here we didn't have to write all the fields of the main interface
console.log(u);

// 1. Convert a `Product` type into a `Partial<Product>`.
interface Product{
  name:string,
  price:number,
  rating:number,
  isAvilable:boolean
}
const p1: Partial<Product>={name:"S15",price:75000}
console.log(p1);


// **Required<T>** → makes all optional properties required

interface Config { url?: string; timeout?: number; }
let c: Required<Config> = { url: "a", timeout: 3000 };
//this is used for changing all fields to required

// Readonly<T>

// Makes all properties immutable (cannot change after set).

const d:Readonly<User>={name:"Arpan",age:18}
// d.name="Accha" here we can't change any field because here we used Readonly


//Make all fields required for a Settings type.

interface Seetings{
  profile:object,
  theme:"light" | "dark",
  password:string
}
const s:Required<Seetings>={profile:{
  name:"Arpan",age:18
},theme:"dark",password:"areBawa@12"}

console.log(s);

