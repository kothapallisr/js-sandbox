console.log(3 === 3.0);              // true
console.log("yes" === "yes");        // true
console.log(null === null);          // true
console.log(false === false);        // true
console.log(42 === "42");            // false
console.log("hello" === "Hello");    // false
console.log(true === 1);             // false
console.log(0 === null);             // false
console.log("" === null);            // false
console.log(null === undefined);     // false

/* But the === operator does have some nuance to it, 
   The === operator is designed to lie in two cases of 
   special values: NaN and -0. Consider: */

console.log(NaN === NaN); // false
console.log(0 === -0);    // true

console.log("\nNumber is NaN: ");
console.log(Number.isNaN(NaN));

console.log(Object.is(NaN));

                 