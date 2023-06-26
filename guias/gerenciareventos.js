document.addEventListener('click', function(event) {
    var offcanvas = document.querySelector('.offcanvas');
    var toggleButton = document.querySelector('[data-bs-target="#offcanvasScrolling"]');
  
    if (!offcanvas.contains(event.target) && !toggleButton.contains(event.target)) {
      var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasInstance.hide();
    }
  });

/**/ 

