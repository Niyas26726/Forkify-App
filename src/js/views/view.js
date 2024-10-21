import icons from '../../img/icons.svg';

export default class View {
  _data;

  // Render the data to the DOM
  render(data, render = true) {
    // If no data or an empty array is passed, render the error message
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
    this._data = data;
    const markUp = this._generateMarkup();

    
    // If render is false, return the markup
    if (!render) return markUp;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  // Update the DOM with new data
  update(data) {
    this._data = data;
    const newMarkUp = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentEl.querySelectorAll('*'));
    // Loop through the new elements and update the current elements if they are different
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update changed TEXT
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      // Update changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        // Loop through the attributes of the new element and update the current element
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        })
      }
    })
  }

  // Clear the DOM
  _clear() {
    this._parentEl.innerHTML = '';
  }

  // Render a spinner
  renderSpinner() {
    const html = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  // Render an error message
  renderError(message = this._errorMessage) {
    const markUp = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  // Render a message
  renderMessage(message = this._message) {
    const markUp = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

}