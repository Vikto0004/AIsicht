const swiperTestimonial = new Swiper(".swiperTestimonial", {
  spaceBetween: 40,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination-testimonial",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-testimonial",
    prevEl: ".swiper-button-prev-testimonial",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

const swiperBlog = new Swiper(".swiperBlog", {
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next-blog",
    prevEl: ".swiper-button-prev-blog",
  },
  pagination: {
    el: ".swiper-pagination-blog",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 2,
    },
  },
});

const swiperServices = new Swiper(".swiperServices", {
  spaceBetween: 27,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next-services",
    prevEl: ".swiper-button-prev-services",
  },
  pagination: {
    el: ".swiper-pagination-services",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
