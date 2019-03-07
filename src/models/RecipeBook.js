class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe){
    this.recipes.push(recipe)
  }
}

module.exports = RecipeBook;
