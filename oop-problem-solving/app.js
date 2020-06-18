let Ball = function(ballType){
  this.ballType = ballType || "Regular";
}

let b = new Ball();
console.log(b.ballType);

// color Ghost -> random color

var Ghost = function() {
  let colors = ["yellow", "green", "blue", "white", "red"];
  let random = Math.round(Math.random() * 4);
  this.color = colors[random];
}

let a = new Ghost();
console.log(a.color);

// ES5
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function(targetName) {
  return `Hello ${targetName}, this is ${this.name}`
}
let sr = new Person("Sri");
console.log(sr.greet("Karl"));

// ES6
class Person1 {
  constructor(name) {
    this.name = name;
  }
  greet(targetName) {
    return `Hello ${targetName}, this is ${this.name}`
  } 
}
let sri = new Person1("Sri");
console.log(sri.greet("Kate"));

// JavaScript class like Objects
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`
  }
}

let an = new Animal("rockey", "dog");
console.log(an.toString());