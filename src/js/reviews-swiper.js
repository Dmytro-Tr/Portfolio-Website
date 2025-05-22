var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: true,
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 2,
      centerInsufficientSlides: true,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
