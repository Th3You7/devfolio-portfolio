const typedPara = document.querySelector(".typed");

//** Typed */
const options = {
  strings: [
    "CEO DevFolio",
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Graphic Designer",
  ],
  typeSpeed: 80,
  loop: true,
  backDelay: 1100,
  backSpeed: 30,
  cursorChar: "|",
};

const typed = new Typed(typedPara, options);

//*** jQuery */
$(function () {
  //Toggle
  $(".nav_toggle").on("click", function () {
    if ($(window).scrollTop() < 100) {
      $(".bar").toggleClass("open");
      $(".navbar").toggleClass("scroll");
      $(".nav_items").slideToggle();
    } else {
      $(".bar").toggleClass("open");
      $(".nav_items").slideToggle();
    }
  });

  // handle navbar trouble when you load the page
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("scroll");
  }

  //scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("scroll");
    } else {
      $(".navbar").removeClass("scroll");
      //check if navbar is opened
      if ($(".bar").hasClass("open")) {
        $(".bar").removeClass("open");
        $(".nav_items").slideUp();
      }
    }
  });

  //carousl
  $(".owl-carousel").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
