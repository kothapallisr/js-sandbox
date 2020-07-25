/* function declaration statement 
   The association between the identifier awesomeFunction and the function value happens
   during the compile phase of the code, before that code is executed.
*/
function awesomeFunction(coolThings) {
  // ..
  return amazingStuff;
}

/* function expression 
   a function expression is not associated with its identifier 
   until that statement during runtime.
*/
// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function(coolThings) {
  // ..
  return amazingStuff;
};