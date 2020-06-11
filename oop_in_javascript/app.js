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