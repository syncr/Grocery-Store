var groceryStore = function(items) {
  //var shoppingList = {}
  var shoppingList = items.split(', ');
  console.log(shoppingList);
  var banana = {price:0.99, calories:80}
  var chocolate = {price:1.99, calories:240}
  var inventory = [banana,chocolate];
  var totalCalories = 0;
  console.log(inventory);

  for (var i=0; i<shoppingList.length; i++){
    if (shoppingList[i] !== undefined){
      totalCalories+=inventory[i].calories
      console.log(totalCalories);
    }
  }
  return totalCalories;
};
