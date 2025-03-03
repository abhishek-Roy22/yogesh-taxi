$(document).ready(function () {
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
