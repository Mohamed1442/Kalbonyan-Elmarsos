import icon from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner = () => {
    const markup = `
    <div class="spinner">
    <svg>
      <use href="${icon}#icon-loader"></use>
    </svg>
  </div>
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  _clear() {
    this._parentElement.innerHTML = '';
  }

  // _generateMarkup() {
  //   return `
  //       <figure class="recipe__fig">

  //       <img src="${this._data.img}" crossOrigin = "anonymous" alt="${
  //     this._data.title
  //   }" class="recipe__img" />
  //       <h1 class="recipe__title">
  //         <span>${this._data.title}</span>
  //       </h1>
  //     </figure>

  //     <div class="recipe__details">
  //       <div class="recipe__info">
  //         <svg class="recipe__info-icon">
  //           <use href="${icon}#icon-clock"></use>
  //         </svg>
  //         <span class="recipe__info-data recipe__info-data--minutes">${
  //           this._data.cookingTime
  //         }</span>
  //         <span class="recipe__info-text">minutes</span>
  //       </div>
  //       <div class="recipe__info">
  //         <svg class="recipe__info-icon">
  //           <use href="${icon}#icon-users"></use>
  //         </svg>
  //         <span class="recipe__info-data recipe__info-data--people">${
  //           this._data.servings
  //         }</span>
  //         <span class="recipe__info-text">servings</span>

  //         <div class="recipe__info-buttons">
  //           <button class="btn--tiny btn--increase-servings">
  //             <svg>
  //               <use href="${icon}#icon-minus-circle"></use>
  //             </svg>
  //           </button>
  //           <button class="btn--tiny btn--increase-servings">
  //             <svg>
  //               <use href="${icon}#icon-plus-circle"></use>
  //             </svg>
  //           </button>
  //         </div>
  //       </div>

  //       <div class="recipe__user-generated">
  //         <svg>
  //           <use href="${icon}#icon-user"></use>
  //         </svg>
  //       </div>
  //       <button class="btn--round">
  //         <svg class="">
  //           <use href="${icon}#icon-bookmark-fill"></use>
  //         </svg>
  //       </button>
  //     </div>

  //     <div class="recipe__ingredients">
  //       <h2 class="heading--2">Recipe ingredients</h2>
  //       <ul class="recipe__ingredient-list">
  //       ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}

  //         <li class="recipe__ingredient">
  //           <svg class="recipe__icon">
  //             <use href="src/img/icons.svg#icon-check"></use>
  //           </svg>
  //           <div class="recipe__quantity">0.5</div>
  //           <div class="recipe__description">
  //             <span class="recipe__unit">cup</span>
  //             ricotta cheese
  //           </div>
  //         </li>
  //       </ul>
  //     </div>

  //     <div class="recipe__directions">
  //       <h2 class="heading--2">How to cook it</h2>
  //       <p class="recipe__directions-text">
  //         This recipe was carefully designed and tested by
  //         <span class="recipe__publisher">${
  //           this._data.publisher
  //         }</span>. Please check out
  //         directions at their website.
  //       </p>
  //       <a
  //         class="btn--small recipe__btn"
  //         href="${this._data.sourceUrl}"
  //         target="_blank"
  //       >
  //         <span>Directions</span>
  //         <svg class="search__icon">
  //           <use href="src/img/icons.svg#icon-arrow-right"></use>
  //         </svg>
  //       </a>
  //     </div>
  //     `;
  // }

  renderError(mes = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icon}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${mes}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(mes = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icon}#icon-smile"></use>
          </svg>
        </div>
        <p>${mes}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
