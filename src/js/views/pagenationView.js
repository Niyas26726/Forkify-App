import icons from '../../img/icons.svg';
import view from './view.js'

class pagenationView extends view {
  _parentEl = document.querySelector('.pagination');

  // Add event listener for click event
  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      // Get the closest button element
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      // Get the page number from the data attribute
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    })
  }

  // Generate the markup for the pagination
  _generateMarkup() {
    const numOfPages = Math.ceil((this._data.length || this._data.results.length) / this._data.resultsPerPage);

    let currentPage = this._data.page;

    // page 1 and there are other pages
    if (currentPage === 1 && numOfPages > 1) {
      return `
              <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </button>
            `
    }
    // last page
    if (currentPage === numOfPages && numOfPages > 1) {
      return `
              <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
              </button>
            `
    }
    // other page
    if (currentPage < numOfPages) {
      return `
              <button data-goto="${currentPage - 1}" button class="btn--inline pagination__btn--prev" >
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
              </button >
              <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </button>
            `
    }
    // page 1 and there are no other pages
    return ''

  }
}

export default new pagenationView();