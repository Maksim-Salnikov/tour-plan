$(document).ready(function () {
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

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal-block__close-button")
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalBackside = $(".modal-backside");
    var modalBlock = $(".modal-block");
    modalBackside.addClass("modal-backside--visible");
    modalBlock.addClass("modal-block--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalBackside = $(".modal-backside");
    var modalBlock = $(".modal-block");
    modalBackside.removeClass("modal-backside--visible");
    modalBlock.removeClass("modal-block--visible");
  }

});