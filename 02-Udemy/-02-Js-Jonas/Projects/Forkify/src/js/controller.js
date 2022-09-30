import * as model from './model';
import recipeView from './views/recipeView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import { async } from 'regenerator-runtime';
import addRecipeView from './views/addRecipeView';
import bookmarksView from './views/bookmarksView';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    console.log(model.state.recipe);
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    const { recipe } = model.state;

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

// controlRecipes();

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    await model.loadSearchResults(query);
    console.log('spinner', model.state.search.results);
    resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {}
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.render(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.render(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    console.log('from controller***', model.state.recipe);

    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    setTimeout(function () {
      closeWindow.toggleWindow();
    }, 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  bookmarksView.addHandlerRender(controlBookmarks);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

// controlSearchResults();

init();
