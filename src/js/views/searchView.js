class searchView {
  _parentEl = document.querySelector('.search');

  // Get the query from the search input field
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Clear the search input field
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Add an event listener to the search view to handle the search submission
  addHandlerSearch(handler) {
    // Add an event listener to the search view
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
