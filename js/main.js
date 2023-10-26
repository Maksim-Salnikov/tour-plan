const hotelSwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButtton = document.querySelector(".menu-button");
menuButtton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
  .querySelector(".navbar-menu")
  .classList.toggle("navbar-menu--visible")
});