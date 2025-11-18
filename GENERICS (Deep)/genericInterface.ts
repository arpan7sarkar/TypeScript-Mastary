//structure
interface ApiResponse<T> {
  data: T;
  isStudent: boolean;
}

const userResponce:ApiResponse<{name:string,age:number}>={
  data:{name:"Arpan",age:18},
  isStudent:true
}
// 3. Create `ApiResponse<T>` and use it with a list of products.
interface ApiRespons<T> {
  products: T[];
  isAvilable: boolean[];
}
const products:ApiRespons<{name:string,price:number}>={
products:[{name:"Mobile",price:12000},{name:"Laptop",price:72000},{name:"Earphone",price:800}],
  isAvilable:[true,true,false]
}
console.log(products);


// 6. Create a generic constraint:

//   Accept only objects with a `name` key

interface Mandtory{
  name:string;
}
function nameOnly<T extends Mandtory>(arg:T):T{
  return arg;
}
const func=nameOnly<{name:string,y:number}>({name:"hello",y:4})
const func2=nameOnly<{name:string}>({name:"hello"})