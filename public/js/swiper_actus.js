const swiperActus = new Swiper('#actualites .swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    615: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
})
