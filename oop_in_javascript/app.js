// constructor function

// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.stats = function() {
//     return `${this.brand} ${this.model}!` ;
//   };
// }

// let car1 = new Car("Lambo", "Huracan");
// let car2 = new Car("Honda", "Civic");

// console.log("Constructor Function");
// console.log(car1.stats());
// console.log(car2.stats());

// // prototype

// function Bike(brand, model) {
//   this.brand = brand;
//   this.model = model;
// }

// Bike.prototype.stats = function() {
//   return `${this.brand} ${this.model}`;
// }

// let bike1 = new Bike("Honda", "CBR");
// let bike2 = new Bike("Yamaha", "R1");

// console.log("Prototype");
// console.log(bike1.stats());
// console.log(bike2.stats());

// // Inheritance, Constructor

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.greet = function() {
//   return `I'm ${this.name} and I'm ${this.age} years old!`;
// }
// function Programmer(name, age, language) {
//   Person.call(this, name, age);
//   this.language = language;
// }
// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.Constructor = Programmer;

// let coder = new Programmer("Gates", "30", "C++");
// console.log(coder.greet());

// const person1 = new Person("John", 23);
// Person.prototype.Constructor = Person;

// console.log(person1.greet());
// console.log(person1.Constructor);
// console.log(coder.Constructor);

// // method overriding
// Programmer.prototype.greet = function() {
//   return `${Person.prototype.greet.call(this)}. I code in ${this.language}`;
// }

// console.log(coder.greet());

// ES6 Classes
class Car {
  constructor(name, model){
    this.name = name;
    this.model = model;
  }
  aboutCar() {
    return `This is ${this.name} ${this.model}!`;
  }
}

class Suv extends Car {
  constructor(name, model, feature){
    super(name, model);
    this.feature = feature;
  }
  aboutCar() { // method overriding
    return `${super.aboutCar()} featured with ${this.feature}!`;
  }
}

let car = new Car("Honda", "Civic");
console.log(car.aboutCar());

let suv = new Suv("Ford", "Endeavour", "Four Wheel Drive");
console.log(suv.aboutCar());
