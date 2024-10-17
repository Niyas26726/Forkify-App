import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJson } from "./helper";

export const state = {
  recipe: {},
  search:{
    query:'',
    results: [],
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
    console.log(state.recipe);

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
    console.log("query => ", query);
    console.log(data); 
    console.log(state.search.results);

  } catch (error) {
    console.log(`${error}💥💥💥💥`);
    throw error;
  }
}
