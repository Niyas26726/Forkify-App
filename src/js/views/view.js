import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const markUp = this._generateMarkup();
    // console.log("markUp => ", markUp);
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

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