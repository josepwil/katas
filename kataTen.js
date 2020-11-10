// Kata 10 - The Great Codeville Bake-off

/*
We need to complete a function called chooseRecipe(), which will receive three parameters: 
  - An array of ingredients in stock at Bakery A 
  - An array of ingredients in stock at Bakery B 
  - An array of recipe objects. 
Each recipe has a name property(string) and an ingredient property(array)
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  let foundA = false;
  let foundB = false;
  
  for (const recipe of recipes) {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      for (const bakeryAIngredient of bakeryA) {
        if (bakeryAIngredient === recipe.ingredients[i]) {
          foundA = true;
        }
      }
      for (const bakeryBIngredient of bakeryB) {
        if (bakeryBIngredient === recipe.ingredients[i]) {
          foundB = true;
        }
      }
      if (foundA && foundB) {
        return recipe.name;
      }
    }
    foundA = false;
    foundB = false;
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));