/**
 * Closure is when a function remembers and continues to access its variables 
 * from outside its scope, even when the function is executed outside its scope.
 * 
 * When a function is defined it is attached to its enclosing scope via closure.
 */

 function greeting(msg) {
   return function who(name) {
     console.log(`${msg}, ${name} !`);
   }
 }

 var hello = greeting("Hello");
 var howdy = greeting("Howdy");
 hello("Kyle");
 hello("Sri");
 howdy("Srk");