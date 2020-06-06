const loadingBarItemEl = document.querySelector(".loadingbar__item");

let width = 1;

let loadingbar = setInterval(function(){
  if(width >= 100){
    clearInterval(loadingbar);
  } else {
    width++;
    loadingBarItemEl.style.width = width + "%";
  }
}, 28)