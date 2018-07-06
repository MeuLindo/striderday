$(function() {
  $('.navbar').on('click', '.nav-link', function(event) {
    event.preventDefault();
    if (screen.width < 992) $('#main-navbar-content').collapse('hide');
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    });
  });
});

window.addEventListener('load', function() {
  document.addEventListener('mousemove', function(event) {
    var centerX = screen.availWidth / 2;
    var centerY = screen.availHeight / 2;
    var deltaX = event.clientX - centerX;
    var deltaY = event.clientY - centerY;

    var multiplier = 1.15;

    document.querySelectorAll('[data-parallax-depth]').forEach(function(element) {
      var depth = element.getAttribute('data-parallax-depth');
      element.style.transform = 'translate3d(' + -deltaX * depth * multiplier + 'px, ' + -deltaY * depth * multiplier + 'px, 0)';
    });
  }, false);
}, false);