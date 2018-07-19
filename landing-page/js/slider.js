'use strict';

let leftButton = document.querySelector('.btn-left');
let rightButton = document.querySelector('.btn-right');
let sliderContainer = document.querySelector('.slider-image-container');
let firstSlide = document.querySelector('.slider-image:first-child');
let lastSlide = document.querySelector('.slider-image:last-child');
let activeSlide = document.querySelector('.active-slide');
let marginLeft = parseInt(getComputedStyle(sliderContainer).marginLeft);

rightButton.onclick = function() {
  if (activeSlide !== lastSlide) {
    sliderContainer.style.marginLeft = marginLeft - 1200 + 'px';
    marginLeft -= 1200;
    activeSlide.classList.remove('active-slide');
    activeSlide.nextElementSibling.classList.add('active-slide');
    activeSlide = activeSlide.nextElementSibling;
  }
}

leftButton.onclick = function() {
  if (activeSlide !== firstSlide) {
    sliderContainer.style.marginLeft = marginLeft + 1200 + 'px';
    marginLeft += 1200;
    activeSlide.classList.remove('active-slide');
    activeSlide.previousElementSibling.classList.add('active-slide');
    activeSlide = activeSlide.previousElementSibling;
  }
}