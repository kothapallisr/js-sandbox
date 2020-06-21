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


