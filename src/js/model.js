import { AJAX } from "./helper";
import { API_URL, RES_PER_PAGE, KEY } from "./config";

// Application state
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
  bookMarks: [],
}

// Function to create a recipe object from the data received from the API
const createRecipeObject = function (data) {
  const { recipe } = data.data;
 return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.sourceUrl,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && {key: recipe.key}), // Check if the recipe has a key and add it to the object
  }

}

// Function to load a recipe from the API
export const loadRecipes = async function (id) {
  try {

    const url = `${API_URL}${id}?key=${KEY}`

    const data = await AJAX(url);

    state.recipe = createRecipeObject(data);

    // Check if the current recipe is bookmarked
    if (state.bookMarks.some(bookMark => bookMark.id === id)) state.recipe.bookMarked = true;
    else state.recipe.bookMarked = false;

  } catch (error) {
    throw error;
  }

}

// Function to load search results from the API
export const loadSearchResults = async function (query) {
  try {
    const url = `${API_URL}?search=${query}&key=${KEY}`;
    state.search.query = query;
    const data = await AJAX(url);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      }
    })
    state.search.page = 1;
  } catch (error) {
    throw error;
  }
}
// Function to get a specific page of search results
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 10
  return state.search.results.slice(start, end);
}

// Function to update the servings of a recipe
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  })
  state.recipe.servings = newServings;
}

// Function to persist bookmarks to local storage
const persistBookmarks = function () {
  localStorage.setItem('bookMarks', JSON.stringify(state.bookMarks));
}

// Function to add a bookmark
export const addBookmark = function (recipe) {

  state.bookMarks.push(recipe);
  // Mark current recipe as bookmarked
  if (state.recipe.id === recipe.id) state.recipe.bookMarked = true;
  persistBookmarks();
}

// Function to delete a bookmark
export const deleteBookmark = function (id) {
  const index = state.bookMarks.findIndex(bookMark => bookMark.id == id);

  state.bookMarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (state.recipe.id === id) state.recipe.bookMarked = false;
  persistBookmarks();
}

// Function to get bookmarks from local storage
const init = function () {
  const storage = localStorage.getItem('bookMarks');
  if (storage) state.bookMarks = JSON.parse(storage);
}
init(); // Call the function to get bookmarks from local storage at the starting of the application

// Function to clear bookmarks from local storage for dev purposes
const clearBookmarks = function () {
  localStorage.clear('bookMarks');
}
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '') // Filter out empty ingredients
      .map(ing => {
        // Convert the ingredient into the correct format
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description }
      });


    // Create a new recipe object
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients
    }

    // Send the new recipe to the API (POST)
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data); // Update the state with the new recipe
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }

}