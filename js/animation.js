/* jshint esversion:6 */
//When a section is -100px from its usual position, fade it in

const animatedTags = document.querySelectorAll(".aboutme, .proj, .contactme");

// fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0;
});


const fadeIn = function() {
  // Fade in elements according to their position from the top
  animatedTags.forEach(tag => {
    //Get reference to the distance of each tag we want to animate from the top
    let tagDistance = $(tag).offset().top;
    // console.log(tag, tagDistance);

    //Get reference to the scroll bar distance from top
    let scrollBarLocation = window.scrollY;
    // console.log(scrollBarLocation);

    // When the scrollbar gets -50px from the location of the tag, fade the tag in
    if (scrollBarLocation > (tagDistance - 400)) {
      //fade in the the tag
      tag.style.opacity = 1;
    } else {
      // fade out the tag
      tag.style.opacity = 0;
    }
  });
};


document.addEventListener("scroll", function() {
  fadeIn();
});