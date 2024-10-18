import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJson } from "./helper";
import { RES_PER_PAGE } from "./config";

export const state = {
  recipe: {},
  search:{
    query:'',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
}

export const loadRecipes = async function (id) {
  try {

    const url = `${API_URL}${id}`

    const data = await getJson(url);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
  } catch (error) {
    console.log(`${error}💥💥💥💥`);
    throw error;
  }

}

export const loadSearchResults = async function (query) {
  try {
    const url = `${API_URL}?search=${query}`;
    state.search.query = query;
    const data = await getJson(url);
    state.search.results =  data.data.recipes.map(rec => {
      return {
        
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url
      }
    })
  } catch (error) {
    console.log(`${error}💥💥💥💥`);
    throw error;
  }
}
export const getSearchResultsPage = function (page = state.search.page) {
  console.log("page => ", page);
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 10
  return state.search.results.slice(start, end);
}

export const updateServings = function (newServings) {
  console.log("newServings => ", newServings);
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  })
  state.recipe.servings = newServings;
}