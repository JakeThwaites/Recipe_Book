const assert = require('assert');
const ShoppingList = require('../models/ShoppingList.js');


describe('shoppingList', function() {
  let shoppingList;

  beforeEach(function(){
    ingredients = ["Bread", "Jam"];
    shoppingList = new ShoppingList("Jam Sandwich", ingredients);
  })

  it('should have a name', function(){
    assert.strictEqual("Jam Sandwich", shoppingList.name);
  })

  it('should have a list of ingredients', function(){
    assert.strictEqual(2, shoppingList.ingredients.length);
  })

})
