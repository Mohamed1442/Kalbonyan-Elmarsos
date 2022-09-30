// import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(data => this._generateMarkupPreview(data)).join('');
  }

  _generateMarkupPreview(result) {
    console.log('key', this._data);
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" crossOrigin = "anonymous"  alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();
