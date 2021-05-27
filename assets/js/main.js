//Burger menu animation with greensock / gsap
var menu = $(".menu"),
  menuitem1 = $(".menu__item--1"),
  menuitem2 = $(".menu__item--2"),
  menuitem3 = $(".menu__item--3"),
  speed = 0.15;

//instantiate  timeline
var tl = new TimelineLite({ paused: true }); //pause default

//collapse menu
tl.to(menuitem1, speed, { top: 12, ease: Quint.easeOut }, "label--1")
  .to(menuitem3, speed, { top: -12, ease: Quint.easeOut }, "label--1")

  //rotate all items
  .to([menuitem1, menuitem2, menuitem3], speed, {
    rotation: -90,
    ease: Quint.easeOut,
  })

  //expand menu
  .to(menuitem1, speed, { left: 10, ease: Quint.easeOut }, "label--2")
  .to(menuitem3, speed, { right: 10, ease: Quint.easeOut }, "label--2");

// play timeline on click, reverse animation if active
menu.click(function () {
  $(this).toggleClass("active");

  if ($(this).hasClass("active")) {
    tl.play();
  } else {
    tl.reverse();
  }
});

/* ANIMATED SLIDES IN HOME */
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    autoplay: 2500,
    loop: true,
    parallax: true,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    grabCursor: true,
    speed: 900,

    onTransitionStart(mySwiper) {
      if ($(".swiper-slide-active").hasClass("Slide--projects")) {
        $("home__right").css("background-color", "#E16684");
      } else if ($(".swiper-slide-active").hasClass("Slide--snippets")) {
        $("home__right").css("background-color", "#EDCD5A");
      } else {
        $("home__right").css("background-color", "#0379A0");
      }
    },
  });
});
