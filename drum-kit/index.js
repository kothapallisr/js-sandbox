var numberofButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");
  })
}