let Ball = function(ballType){
  this.ballType = ballType || "Regular";
}

let b = new Ball();
console.log(b.ballType);

// color Ghost -> random color

var Ghost = function() {
  let colors = ["yellow", "green", "blue", "white", "red"];
  let random = Math.round(Math.random() * 4);
  this.color = colors[random];
}

let a = new Ghost();
console.log(a.color);

