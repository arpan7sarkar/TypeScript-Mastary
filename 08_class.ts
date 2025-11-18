//example
class Student {
  constructor(public name: string, private roll: number) {}
}

// Make a class Animal with a constructor.
class Animal {
    
// Use private for one property and public for another.

  constructor(public name: string, private color: string,public bark:string) {
    this.name=name;
    this.color=color
    this.bark=bark
  }
  
// Add a method inside the class.
  talk(){
    console.log(`${this.name} is ${this.bark}ing`)
  }
}

