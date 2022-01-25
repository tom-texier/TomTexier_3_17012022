const swiperActus = new Swiper('#actualites .swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  on: {
    init: function () {
      console.log('swiper initialized')
    }
  }
})
