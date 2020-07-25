function hello(myName) { // named parameter myName is treated as var
  console.log(`Hello ${myName}`);
}
hello("Kyle");
myName = "Simpson";
console.log(myName);

try {
  //someError();
}
catch (err) {
  console.log(err);
  //The err is a block-scoped variable that exists only inside the catch clause, 
  //as if it had been declared with let.
}