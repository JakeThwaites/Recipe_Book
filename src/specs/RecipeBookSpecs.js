const assert = require('assert');
const Recipe = require('../models/Recipe.js');
const RecipeBook = require('../models/RecipeBook.js');


describe('recipeBook', function() {
  let recipe;
  let recipeBook;

  beforeEach(function(){
    ingredients = ["Bread", "Jam"];
    instructions = ["Put jam on a slice of bread", "Put another slice of bread on top of the first"];
    recipe = new Recipe("Jam Sandwich", ingredients, instructions);
    recipeBook = new RecipeBook();

  })

  it('should start empty', function(){
    assert.strictEqual(0, recipeBook.recipes.length);
  })

})
