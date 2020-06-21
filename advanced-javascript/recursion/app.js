// finding factorial using recursion

function factorial(num) {
  if(num === 1) return 1; // base case
  return num * factorial(num - 1); // recursive call
}

console.log(factorial(5));

// summing all the numbers in an array

function sumArr(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArr(arr.slice(1));
}

console.log(sumArr([1,2,3,4]));

// sum all the digits in a number. Example: 456 -> 15

function sumAllDigits(n) {
  if(n < 10)  return n  ;
  return (n % 10) + sumAllDigits(Math.floor(n/10)); 
}

console.log(sumAllDigits(8870133569));

// count down timer

function countdown(count) {
  console.log(count);
  let id = setTimeout(function() {
    if(count === 0) {
      clearTimeout(id);
    } else {
      countdown(count - 1);
    }
  }, 500);
}

countdown(10);
