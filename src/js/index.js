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
});
