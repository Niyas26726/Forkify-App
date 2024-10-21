import view from './view.js'

// Class to handle the add recipe view
class addRecipeView extends view {
  // Select the parent element and the message to be displayed
  _parentEl = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)'
  // Select the overlay and the window elements
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  // Select the open and close buttons
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  // Constructor to add event listeners to the open and close buttons
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  // Function to toggle the overlay and window elements
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  // Function to add event listener to the open button
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  // Function to add event listener to the close button and the overlay
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  // Function to add event listener to the submit button
  addHandlerUpload(handler){
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      // Get the form data and convert it to an object
      const dataArr = [...new FormData(this)]
      const data = Object.fromEntries(dataArr);
      handler(data)
    })
  }

}

export default new addRecipeView();