'use strict';

///////////////////////////////////////
// DOM elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1EL = document.querySelector('#section--1');
const navLinks = document.querySelector('.nav__links');
const tabContainer = document.querySelector('.operations__tab-container');
const contentContainer = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling to sections

btnScrollTo.addEventListener('click', function () {
  section1EL.scrollIntoView({ behavior: 'smooth' });
});

///////// Event delegation
// Page navigation

navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (!e.target.classList.contains('nav__link')) return;
  const sectionTo = document.querySelector(e.target.getAttribute('href'));
  sectionTo.scrollIntoView({ behavior: 'smooth' });
});

// Tapped component

tabContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('operations__tab')) return;
  // Tabs changing
  const btnClicked = e.target.closest('.operations__tab');
  [...this.children].forEach(el =>
    el.classList.remove('operations__tab--active')
  );
  btnClicked.classList.add('operations__tab--active');
  const tapData = btnClicked.dataset.tab;
  // Content changing
  contentContainer.forEach(el =>
    el.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${tapData}`)
    .classList.add('operations__content--active');
});

// Fade out effict
const opacityChange = function (e) {
  if (!e.target.classList.contains('nav__link')) return;
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  siblings.forEach(el => {
    if (el !== link) {
      el.style.opacity = this;
    }
  });
  logo.style.opacity = this;
};

nav.addEventListener('mouseover', opacityChange.bind(0.5));

nav.addEventListener('mouseout', opacityChange.bind(1));

//**************sticky navigation**************
// Intersection Observer API
console.log();
const obsOptions = {
  root: null,
  threshold: 0,
  // rootMargin: `-${getComputedStyle(nav).height}`,
};

const obsCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(document.querySelector('header'));

// **************NOT RECOMMENDED FOR PEROFORMANCE**************
// document.addEventListener('scroll', function () {
//   const navHeight = nav.getBoundingClientRect().height;
//   const section1Coordinates = section1EL.getBoundingClientRect().top;
//   if (
//     window.pageYOffset >=
//     section1Coordinates + window.pageYOffset - navHeight
//   ) {
//     nav.classList.add('sticky');

//     console.log(1);
//   } else {
//     nav.classList.remove('sticky');

//     console.log(2);
//   }
// });

//**************Reveal on scroll**************

const callback = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};

const options = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(callback, options);

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

////////////////////////////////////////////////////
///////// Lazy loading img

const imgCallback = function (entries, observer) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

document
  .querySelectorAll('img[data-src]')
  .forEach(img => imgObserver.observe(img));

//////////////////////////////////////////
///// SLider
// 1) Arrow buttons

const slides = document.querySelectorAll('.slide');

const btnSliderLeft = document.querySelector('.slider__btn--left');
const btnSliderRight = document.querySelector('.slider__btn--right');

const dotContainer = document.querySelector('.dots');

// Initials

let currentSlide = 0;
const maxSlides = slides.length;

// main functions
const slideNumber = function (currentSlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translate(${(index - currentSlide) * 100}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideNumber(currentSlide);
  dotReveal(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  slideNumber(currentSlide);
  dotReveal(currentSlide);
};

const dotReveal = function (number) {
  // dotContainer.querySelectorAll('.dots__dot').forEach(btn => {
  //   if (Number(btn.dataset.number) === number) {
  //     btn.classList.add('dots__dot--active');
  //   } else {
  //     btn.classList.remove('dots__dot--active');
  //   }
  // });
  dotContainer
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-number='${number}']`)
    .classList.add('dots__dot--active');
};

slideNumber(0);

btnSliderRight.addEventListener('click', nextSlide);

btnSliderLeft.addEventListener('click', prevSlide);

// 2)Keyboard arrows

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

// 3)dots

slides.forEach((_, index) => {
  const btn = `<button class='dots__dot' data-number='${index}'></button>`;
  dotContainer.insertAdjacentHTML('beforeend', btn);
});

dotReveal(currentSlide);

dotContainer.addEventListener('click', function (e) {
  const btnClicked = e.target;
  if (!btnClicked.classList.contains('dots__dot')) return;
  currentSlide = Number(btnClicked.dataset.number);
  slideNumber(currentSlide);
  dotReveal(currentSlide);
});
