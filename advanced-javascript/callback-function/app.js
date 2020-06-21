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