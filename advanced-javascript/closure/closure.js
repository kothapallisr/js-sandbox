// Closures

// Example 1
// any function that's using variables outside it's own scope 
// is a Closure.
let a = 6;
 function product(){
   let b = 7;
   return a*b;
 }
 console.log(product());

 // Example 2 
 // a closure a an inner function that uses it's outer function 
 // variable 

 function outer() {
   let varA = "Hi! ";
   function inner() {
     return varA + "Bye!"
   }
   return inner();
 }

 console.log(outer());

 // Example 3 

 function greeting(type) {
    return function(name) {
      console.log(`${type}, ${name}!!!`);
    }
 }

 let sayHello = greeting("Hello");
 let sayHi = greeting("Hi");
 let sayBonjour = greeting("Bonjour");

 sayHello("John!");
 sayHello("Mike!");
 sayHi("Nicholas!");
 sayBonjour("Zidane!");


