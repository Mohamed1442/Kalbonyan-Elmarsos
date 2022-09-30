'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, duration, distance) {
    this.coords = coords;
    this.duration = duration;
    this.distance = distance;
  }

  _setDescribtion() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.describtion = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, duration, distance, cadence) {
    super(coords, duration, distance);
    this.cadence = cadence;
    this.calcPace();
    this._setDescribtion();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, duration, distance, elevationGain) {
    super(coords, duration, distance);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescribtion();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  workouts = [];
  constructor() {
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Couldn't find your location");
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.workouts.forEach(item => {
      this._renderMarker(item);
    });
  }

  _showForm(mapEv) {
    inputDistance.focus();
    this.#mapEvent = mapEv;
    form.classList.remove('hidden');
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    const checkPositive = (...inputs) => {
      return inputs.every(input => input > 0);
    };

    const checkNumber = (...inputs) => {
      return inputs.every(input => Number.isFinite(input));
    };
    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    // Check for validation of data
    if (checkNumber(distance, duration) && checkPositive(distance, duration)) {
      if (type === 'running') {
        const cadence = +inputCadence.value;
        if (!checkNumber(cadence) || !checkPositive(cadence))
          return alert('You must enter a positive number');
        // if type is running, create Running object
        workout = new Running([lat, lng], duration, distance, cadence);
      }
      if (type == 'cycling') {
        const elevation = +inputElevation.value;
        if (!checkNumber(elevation))
          return alert('You must enter a positive number');
        // if type is cycling, create Cycling object
        workout = new Cycling([lat, lng], duration, distance, elevation);
      }
      // push workout to workouts
      this.workouts.push(workout);
      this._setLocalStorage();

      // Render marker
      this._renderMarker(workout);
      // Render list
      this._renderList(workout);
      // Hide form and clear input fields
      inputDistance.value =
        inputDuration.value =
        inputCadence.value =
        inputElevation.value =
          '';
      form.style.display = 'none';
      form.classList.add('hidden');
      setTimeout(() => (form.style.display = 'grid'), 1000);
    } else {
      alert('You must enter a positive number');
    }
  }

  _renderMarker(workout) {
    const marker = L.marker(workout.coords);
    marker
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.describtion}`
      )
      .openPopup();
  }

  _renderList(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.describtion}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;
    if (workout.type === 'running') {
      html += `
          <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    }

    form.insertAdjacentHTML('afterend', html);
    document
      .querySelector('ul')
      .querySelector('li')
      .addEventListener(
        'click',
        function (e) {
          const clickedWorkout = this.workouts.find(
            workout => +workout.id === +e.currentTarget.dataset.id
          );

          this.#map.setView(clickedWorkout.coords, 13, {
            animate: true,
            pan: {
              duration: 1,
            },
          });
        }.bind(this)
      );
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.workouts = data;
    this.workouts.forEach(item => {
      this._renderList(item);
    });
  }
}

const app = new App();
/////////////////////////////// vip

// let fo = function (callback) {
//   ///// This will happen behind the scenes
//   // callback = function() {
//   //    console.log(this.name);
//   //    this here undefined (function inside function not function inside object(method))
//   // }
//   callback();
// };
// const obj = {
//   name: 'mohamed',

//   printName() {
//     console.log(this.name);
//   },

//   printNameV2: function () {
//     fo(this.printName.bind(this));
//   },
// };

// obj.printNameV2();
