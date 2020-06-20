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
