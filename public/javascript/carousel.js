document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  
    var options = {
      fullWidth: true,
      indicators: true
    };
    var elems = document.querySelector('.carousel.no-autoinit');
    var instances = M.Carousel.init(elems, options);
  })