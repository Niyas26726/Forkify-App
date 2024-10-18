import * as model from './model.js'; // Importing the model.js file
import recipiView from './views/recipiView.js'; //
import searchView from './views/searchView.js'; // // Importing all the Views
import resultView from './views/resultView.js'; //
import pagenationView from './views/pagenationView.js';

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

    // Loading recipe
    await model.loadRecipes(id);

    // Rendering recipe
    recipiView.render(model.state.recipe);

    controllServings(4);


  } catch (error) {
    console.log(error);
    recipiView.renderError();
  }

}

// Function to controll the search results
const controllSearchResults = async function () {
  try {

    // Get the query from the search view
    const query = searchView.getQuery();
    console.log(query);

    // Render Spinner only if there is a query
    if(query) resultView.renderSpinner(); 

    // If there is no query, return
    if (!query) return;

    // Loading search results
    await model.loadSearchResults(query);

    // Rendering search results
    console.log("before render");

    resultView.render(model.getSearchResultsPage());
    
    console.log("after render");

    // Rendering initial pagenation buttons
    pagenationView.render(model.state.search);

  } catch (error) {
    resultView.renderError();
  }
}

// Function to controll the pagenation
const controlPagenation = function (goToPage) {
  console.log("controlPagenation");
  // Rendering the new pagenation buttons

  pagenationView.render(model.getSearchResultsPage(goToPage));
  console.log("Fininshed goToPage");
  // Rendering the new search results

  console.log("before render");
  pagenationView.render(model.state.search);
  resultView.render(model.getSearchResultsPage(goToPage));
}

// Function to controll the servings
const controllServings = function (servings) {

  // update the servings in the state
  model.updateServings(servings);

  // update the recipe view
  recipiView.render(model.state.recipe);
  
}

// Event listener for the hashchange event and load event to load the recipe
const init = function () {
  recipiView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controllSearchResults); 
  pagenationView.addHandlerClick(controlPagenation);
}
init() // Calling the init function to start the app