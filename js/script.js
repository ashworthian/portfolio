/* jshint esversion:6 */

const bigTitleTag = document.querySelector(".big-title");
const fixedNavTag = document.querySelector(".fixed");
const hiddenTextTag = document.querySelector(".hidden-text");
const navTag = document.querySelector("nav");

document.addEventListener("scroll", function() {

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);
  if (distanceFromTop > 0) {
    bigTitleTag.style.top = "50%";
  } else {
    bigTitleTag.style.top = "-200px";
  }

  if (distanceFromTop > 4544) {
    bigTitleTag.style.opacity = "0";
    navTag.style.opacity = "0";
    hiddenTextTag.style.bottom = "35%";
  } else {
    bigTitleTag.style.opacity = "1";
    navTag.style.opacity = "1";
    hiddenTextTag.style.bottom = "-1000px";
  }


});

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});