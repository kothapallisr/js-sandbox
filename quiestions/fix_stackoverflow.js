let list = new Array(6000).join(1.1).split(',');
console.log(list);
function removeItemsFromList() {
  let item = list.pop();

  if(item) {
    removeItemsFromList();
  }
}
removeItemsFromList();
<<<<<<< HEAD
console.log(list);
=======
console.log(list);
>>>>>>> d8f9922bc43977c7d5b2e7b8152e5e20116e0f08
