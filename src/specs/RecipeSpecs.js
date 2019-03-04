const assert = require('assert');
const Recipe = require('../models/Recipe.js');


describe('recipe', function() {
  let recipe;

  beforeEach(function(){
    ingredients = ["Bread", "Jam"];
    instructions = ["Put jam on a slice of bread", "Put another slice of bread on top of the first"];
    recipe = new Recipe("Jam Sandwich", ingredients, instructions);
  })

  it('should have a name', function(){
    assert.strictEqual("Jam Sandwich", recipe.name);
  })

  it('should have instructions', () => {
    assert.strictEqual(instructions, recipe.instructions)
  })

  it('should have ingredients', () => {
    assert.strictEqual(ingredients, recipe.ingredients)
  })

})
