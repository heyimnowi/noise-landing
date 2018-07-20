$(document).ready(function() {
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  var sr = ScrollReveal();
  sr.reveal('.image-wrapper', {
    duration: 500,
    delay: 500,
    origin: 'top'
  });
  sr.reveal('.ah-text', {
    duration: 500,
    delay: 500,
    origin: 'left'
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
  	ignore: '[data-scroll-ignore]',
  	header: null,
  	topOnEmptyHash: true,
  	speed: 500,
  	clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
  	easing: 'easeInOutCubic',
    offset: 50

  });

});
