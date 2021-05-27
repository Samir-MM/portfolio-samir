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

/* ANIMATED MAGNETIC BUTTON */
const buttonMagnetic = document
  .querySelectorAll(".home__button > .button")
  .forEach((el) =>
    el.addEventListener("mousemove", function (e) {
      const pos = this.getBoundingClientRect();
      const mx = e.clientX - pos.left - pos.width / 2;
      const my = e.clientY - pos.top - pos.height / 2;

      this.style.transform =
        "translate(" + mx * 0.15 + "px, " + my * 0.3 + "px)";
      this.style.transform +=
        "rotate3d(" + mx * -0.1 + ", " + my * -0.3 + ", 0, 12deg)";
      this.children[0].style.transform =
        "translate(" + mx * 0.025 + "px, " + my * 0.075 + "px)";
    })
  );

const buttonMagneticAlt = document
  .querySelectorAll(".home__button > .button")
  .forEach((el) =>
    el.addEventListener("mouseleave", function () {
      this.style.transform = "translate3d(0px, 0px, 0px)";
      this.style.transform += "rotate3d(0, 0, 0, 0deg)";
      this.children[0].style.transform = "translate3d(0px, 0px, 0px)";
    })
  );
document.addEventListener("DOMContentLoaded", function (event) {
  const mobileDisplay = matchMedia("(max-width: 1068px)");
  mobileDisplay.addEventListener(buttonMagnetic);
  buttonMagnetic(mobileDisplay);
  mobileDisplay.addEventListener(buttonMagneticAlt);
  buttonMagneticAlt(mobileDisplay);
});
