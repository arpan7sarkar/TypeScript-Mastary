// example
interface Person {
  name: string;
  age: number;
}

const p: Person = { name: "Arpan", age: 19 };

// Create an interface Car with model, year, brand.
interface Car{
    model:string,
    year:number,
    brand:string
}
const bmw:Car={
    model:"v1",
    year:2008,
    brand:"BMW"
}
console.log(bmw);

// Extend it → ElectricCar with battery: number.
interface ElectricCar extends Car{
    battary:number
}
// Create an object of type ElectricCar.

const tesla:ElectricCar={
    model:"v2",
    year:2034,
    brand:"Tesla",
    battary:1000
}
console.log(tesla);

