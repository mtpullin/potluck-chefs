document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  
    var options = {
        opacity: .5,
        dismissible: false
    };
    var elems = document.querySelector('.modal');
    var instances = M.Modal.init(elems, options);
  })