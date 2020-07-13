console.log("SAI SARATH");
console.log("another line");
for(let i=0; i<10; i++) {
  console.log("increasing " + i);
}

let h1El = document.querySelector("h1");
h1El.style.color = "blue";

let content = document.createElement("p");
content.innerHTML = "Hey this is the content inside of the p tag";

document.querySelector("body h1").classList.add("huge");