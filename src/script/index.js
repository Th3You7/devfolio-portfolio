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

//jQuery
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
});
