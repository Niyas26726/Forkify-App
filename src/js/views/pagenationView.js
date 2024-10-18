import icons from '../../img/icons.svg';
import view from './view.js'
import { Fraction } from 'fraction.js';

class pagenationView extends view {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    })
  }

  _generateMarkup() {

    console.log("data",this._data);
    const numOfPages = Math.ceil((this._data.length || this._data.results.length) / this._data.resultsPerPage);
    let currentPage = this._data.page;
    console.log("numOfPages data", this._data);
    console.log(numOfPages);


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