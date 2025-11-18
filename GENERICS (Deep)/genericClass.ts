//structure
class Box<T> {
  constructor(public item: T) {}
  
}
const numberBox=new Box<number>(288)
console.log(numberBox);

// 4. Make a generic class `KeyValue<K, V>`.
class KeyValue<K,V>{
    constructor(public key:K, public value:V){
        this.key=key,
        this.value=value
    }
    print(){
        return `${this.key} is connected to ${this.value}`;
    }
}
const details=new KeyValue<number,string>(7,"Arpan")
console.log(details.print());

