/**
 * Closure is when a function remembers and continues to access its variables 
 * from outside its scope, even when the function is executed outside its scope.
 */

 function greeting(msg) {
   return function who(name) {
     console.log(`${msg}, ${name} !`);
   }
 }

 var hello = greeting("Hello");
 hello("Kyle");
 hello("Sri");