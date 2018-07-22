$(document).ready(function() {
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  var sr = ScrollReveal();
  sr.reveal('.left-scroll', {
    duration: 500,
    delay: 400,
    origin: 'left'
  });
  sr.reveal('.right-scroll', {
    duration: 500,
    delay: 400,
    origin: 'right'
  });
  sr.reveal('.top-scroll', {
    duration: 500,
    delay: 400,
    origin: 'top'
  });
  sr.reveal('.bottom-scroll', {
    duration: 500,
    delay: 400,
    origin: 'bottom'
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

  $(".icon-menu" ).click(function() {
    $('nav').toggleClass('responsive');
  });

  $("nav .smooth-scroll" ).click(function() {
    $('nav').removeClass('responsive');
  });
});
