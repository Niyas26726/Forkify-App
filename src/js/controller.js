import * as model from './model.js'; // Importing the model.js file
import recipiView from './views/recipiView.js';
import resultView from './views/resultView.js';
import searchView from './views/searchView.js'; //Importing all the Views
import pagenationView from './views/pagenationView.js';
import bookMarksView from './views/bookMarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';
// import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

// Function to controll the recipe
const controlRecipes = async function () {

  try {
    // Get the id from the url
    const id = window.location.hash.slice(1);

    // If there is no id, return
    if (!id) return;

    // Rendering Spinner
    recipiView.renderSpinner();

    // Updating the active link
    resultView.update(model.getSearchResultsPage());

    // Updating the bookmark view
    bookMarksView.update(model.state.bookMarks);

    // Loading recipe
    await model.loadRecipes(id);

    // Rendering recipe
    recipiView.render(model.state.recipe);


  } catch (error) {
    console.error(error);
    // Render error message
    recipiView.renderError();
  }

}

// Function to controll the search results
const controllSearchResults = async function () {
  try {

    // Get the query from the search view
    const query = searchView.getQuery();

    // Render Spinner only if there is a query
    if (query) resultView.renderSpinner();

    // If there is no query, return
    if (!query) return;

    // Loading search results
    await model.loadSearchResults(query);

    // Rendering search results
    resultView.render(model.getSearchResultsPage());

    // Rendering initial pagenation buttons
    pagenationView.render(model.state.search);

  } catch (error) {
    resultView.renderError();
  }
}

// Function to controll the pagenation
const controlPagenation = function (goToPage) {
  
  // Rendering the new search results
  pagenationView.render(model.getSearchResultsPage(goToPage));
  
  // Rendering the new pagenation buttons
  pagenationView.render(model.state.search);

  resultView.render(model.getSearchResultsPage(goToPage));
}

// Function to controll the servings
const controllServings = function (newServings) {

  // update the servings in the state
  model.updateServings(newServings);

  // update the recipe view
  recipiView.update(model.state.recipe);

}

// Function to controll the adding and removing of bookmark
const controllAddBookmark = function () {
  // Add or remove bookmark
  if (!model.state.recipe.bookMarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view
  recipiView.update(model.state.recipe);

  // Render bookmarks
  bookMarksView.render(model.state.bookMarks);
}

// Function to controll the bookmark
const controllBookMarks = function () {
  bookMarksView.render(model.state.bookMarks);
}

// Function to controll the add recipe
const controllAddRecipe = async function (newRecipe) {

  try {

    // Show loading spinner
    addRecipeView.renderSpinner();

    // upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // render recipe
    recipiView.render(model.state.recipe);

    // success message
    addRecipeView.renderMessage();

    // render bookmark view
    bookMarksView.render(model.state.bookMarks);

    // change ID in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);                  // state, title, url

    //close form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

  } catch (error) {
    console.error("Error uploading recipe", error);
    addRecipeView.renderError(error)
  }
}
// Event listener for the hashchange event and load event to load the recipe
const init = function () {
  bookMarksView.addHandlerRender(controllBookMarks);
  recipiView.addHandlerRender(controlRecipes);
  recipiView.addHandlerRenderUpdateServings(controllServings);
  recipiView.addHandlerRenderBookmark(controllAddBookmark);
  searchView.addHandlerSearch(controllSearchResults);
  pagenationView.addHandlerClick(controlPagenation);
  addRecipeView.addHandlerUpload(controllAddRecipe);
}
init() // Calling the init function to start the app