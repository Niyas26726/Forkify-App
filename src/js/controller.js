import * as model from './model.js'; // Importing the model.js file
import recipiView from './views/recipiView.js';
import searchView from './views/searchView.js';

// import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Function to controll the recipe
const controlRecipes = async function () {
  try {

    // Get the id from the url
    const id = window.location.hash.slice(1);

    // If there is no id, return
    if (!id) return;

    // Rendering Spinner
    recipiView.renderSpinner();

    // Loading recipe
    await model.loadRecipes(id);

    // Rendering recipe
    recipiView.render(model.state.recipe);

  } catch (error) {
    console.log(error);
    recipiView.renderError();
  }
}

const controllSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    console.log(model.state.search.results);

  } catch (error) {

  }
}

controllSearchResults()

// Event listener for the hashchange event and load event to load the recipe
const init = function () {
  recipiView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controllSearchResults); 
}
init()