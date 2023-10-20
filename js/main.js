const swiper = new Swiper('.hotel-swiper', {
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