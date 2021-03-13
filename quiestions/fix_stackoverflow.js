let list = new Array(6000).join(1.1).split(",");
console.log(list);
function removeItemsFromList() {
  let item = list.pop();

  if (item) {
    removeItemsFromList();
  }
}
removeItemsFromList();

console.log(list);
