const openModalTriggerEl = document.querySelector(".trigger");
const closeModalTriggerEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal");

function triggerModal() {
  openModalTriggerEl.addEventListener("click", function(){
    modalEl.classList.add("open");
  })
  closeModalTriggerEl.addEventListener("click", function() {
    modalEl.classList.remove("open");
  })  
  window.addEventListener("click", function(event) {
    if(event.target === modalEl) {
      modalEl.classList.remove("open");
    }
  })
}

triggerModal();