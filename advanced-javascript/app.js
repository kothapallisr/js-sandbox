console.log("hello".toUpperCase());
console.log(typeof new String("hello"));
console.log(typeof "hello");

// Pass by value and Pass by reference

let name = "Tom";
let nameCopy = name;
name += " Hardy";

console.log(name);
console.log(nameCopy); // pass by value

let fruits = ["cherry", "mango"];
let fruitscopy = fruits;  // pass by reference
fruits.push("apple", "banana");

console.log(fruits);
console.log(fruitscopy);

// hoisting

greet();  

function greet() {
  console.log("Hello, How are you?");
}

// ES5 Hoisting
console.log(rand5);
var rand5 = "Tom";

// ES6 Temporal Dead Zone
//console.log(rand6);
//let rand6 = "Jerry";

// function declarations and function expressions

function alpha() {
  console.log("alpha speaking!");
}
alpha(); 
function alpha() { // function declarations are getting hoisted
  console.log("new alpha speaking!");
}

var beta = function() {
  console.log("beta speaking!")
} 
beta();
var beta = function() { // function expressions are not getting hoisted
  console.log("new beta speaking!");
}

