function funkyCapitalize(letter, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
  }
  return result;
}

function mumbling(str) {
  let result = [];
  let letters = str.split("");
  let counter = 1;
  for (let letter of letters) {
    result.push(funkyCapitalize(letter, counter));
    counter++;
  }
  return result.join("-");
}

console.log(mumbling("hello"));
console.log(mumbling("sridhar"));
console.log(mumbling("suhas"));
