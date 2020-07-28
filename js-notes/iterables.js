var arr = [10,20,30];

for (let val of arr) {
  console.log(val);
}

var greeting = "Hello World!";
var chars = [...greeting]; // spread operator
console.log(chars);

// Map() data structure
var buttonNames = new Map();
buttonNames.set(btn1,"Button 1");
buttonNames.set(btn2,"Button 2");

for (let [btn,btnName] of buttonNames) { // array destructuring
    btn.addEventListener("click",function onClick(){
        console.log(`Clicked ${ btnName }`);
    });
}