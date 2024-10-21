import View from "./view.js";
import previewView from "./previewView.js";
class resultView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recepi found for your query! Please try again 🙁';
  _message = '';

  // Generate the markup for the results
  _generateMarkup() {
    // Map through the data and return the markup for each result
    return this._data.map(result => {
      return previewView.render(result, false)
    }).join('')
  }
}

export default new resultView();