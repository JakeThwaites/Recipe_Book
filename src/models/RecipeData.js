import Recipe from './Recipe';

const ingredients = ["Bread", "Jam"];
const instructions = ["Put jam on a slice of bread", "Put another slice of bread on top of the first"];
const recipe1 = new Recipe("Jam Sandwich", ingredients, instructions);
const recipe2 = new Recipe("Jam Sandwich", ingredients, instructions);
const recipe3 = new Recipe("Jam Sandwich", ingredients, instructions);


const recipeData = [recipe1, recipe2, recipe3];

export default recipeData;
