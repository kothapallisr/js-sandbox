function first(name) {
  console.log(`Yo, ${name}!`);
}

function second(alias, callback) {
  callback(alias);
}

second("Mike", function (name) {
  console.log(`Yo, ${name}!`);
});

second("John", first);

let greeter = (name, callback) => {
  callback(name);
}

let english = (name) => {
  console.log(`Hello, ${name}!`);
}

let french = (name) => {
  console.log(`Bonjour, ${name}!`);
}

greeter("Mitchell", english);
greeter("Didier", french);

const masterZap = (arr, callback) => {
  let result = [];
  for(let item of arr) {
    result.push(callback(item));
  }
  return result;
}

let square = (item) => Math.pow(item, 2);
let double = (item) => item * 2;
let uppercase = (item) => item.toUpperCase();

console.log(masterZap([2,3,4], square));
console.log(masterZap([2,3,4], double));
console.log(masterZap(["apple", "mango", "orange"], uppercase));