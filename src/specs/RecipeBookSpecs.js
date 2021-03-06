const assert = require('assert');
const Recipe = require('../models/Recipe.js');
const RecipeBook = require('../models/RecipeBook.js');


describe('recipeBook', function() {
  let recipe;
  let recipeBook;

  beforeEach(function(){
    const ingredients = ["Bread", "Jam"];
    const instructions = ["Put jam on a slice of bread", "Put another slice of bread on top of the first"];
    recipe = new Recipe("Jam Sandwich", ingredients, instructions);
    recipeBook = new RecipeBook();

  })

  it('should start empty', function(){
    assert.strictEqual(0, recipeBook.recipes.length);
  })

  it('should be able to add a recipe', function(){
    recipeBook.addRecipe(recipe);
    assert.strictEqual(1, recipeBook.recipes.length);
  })

})
