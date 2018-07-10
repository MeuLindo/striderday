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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
