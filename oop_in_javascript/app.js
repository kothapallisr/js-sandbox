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