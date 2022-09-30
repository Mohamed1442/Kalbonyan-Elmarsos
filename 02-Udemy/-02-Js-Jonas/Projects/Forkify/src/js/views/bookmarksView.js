// import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './view.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No Bookmarks';
  _message = '';

  _generateMarkup() {
    console.log('this is data', this._data);
    return this._data.map(data => this._generateMarkupPreview(data)).join('');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" crossOrigin="anonymous"  alt="Test" />
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

export default new BookmarksView();
