
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  
    var options = {
        hover:true
    };
    var elems = document.querySelector('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  })