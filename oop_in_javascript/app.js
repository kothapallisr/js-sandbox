// constructor function

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.stats = function() {
    return `${this.brand} ${this.model}!` ;
  };
}

let car1 = new Car("Lambo", "Huracan");
let car2 = new Car("Honda", "Civic");

console.log("Constructor Function");
console.log(car1.stats());
console.log(car2.stats());

// prototype

function Bike(brand, model) {
  this.brand = brand;
  this.model = model;
}

Bike.prototype.stats = function() {
  return `${this.brand} ${this.model}`;
}

let bike1 = new Bike("Honda", "CBR");
let bike2 = new Bike("Yamaha", "R1");

console.log("Prototype");
console.log(bike1.stats());
console.log(bike2.stats());

// Inheritance, Constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  return `I'm ${this.name} and I'm ${this.age} years old!`;
}
function Programmer(name, age, language) {
  Person.call(this, name, age);
  this.language = language;
}
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.Constructor = Programmer;

let coder = new Programmer("Gates", "30", "C++");
console.log(coder.greet());

const person1 = new Person("John", 23);

console.log(person1.greet());
console.log(coder.Constructor);