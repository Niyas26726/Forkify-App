import View from "./view.js";
import previewView from "./previewView.js";

class bookMarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it 🙁';
  _message = '';

  // Add an event listener to the window to render the bookmarks when the page loads
  addHandlerRender(handler){
    window.addEventListener('load',handler);
  }

  // Generate the markup for the bookmarks
  _generateMarkup() {
    // Map through the bookmarks and render each one using the previewView class
    return this._data
    .map(bookMark =>{
      return previewView.render(bookMark, false)
    }).join('')
  }

}

export default new bookMarksView();