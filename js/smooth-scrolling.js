/* jshint esversion:6 */

$("nav a").on("click", function() {

  let sectionId = this.getAttribute("href");
  console.log(sectionId);

  let sectionDistance = $(sectionId).offset().top;

  console.log(sectionDistance);

  $("html, body").animate({
    scrollTop: sectionDistance
  }, "slow");
});