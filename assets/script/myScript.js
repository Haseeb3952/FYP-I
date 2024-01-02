// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
  });
  
  'use strict';

  // Go to Top Button Hide on Top of the Page

const goTopBtn = document.getElementById("go-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  /* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */
  
  (function($) {
  
    // Init empty gallery array
    var container = [];
  
    // Loop over gallery items and push it to the array
    $('#gallery').find('figure').each(function() {
      var $link = $(this).find('a'),
        item = {
          src: $link.attr('href'),
          w: $link.data('width'),
          h: $link.data('height'),
          title: $link.data('caption')
        };
      container.push(item);
    });
  
    // Define click event on gallery item
    $('a').click(function(event) {
  
      // Prevent location change
      event.preventDefault();
  
      // Define object and gallery options
      var $pswp = $('.pswp')[0],
        options = {
          index: $(this).parent('figure').index(),
          bgOpacity: 0.85,
          showHideOpacity: true
        };
  
      // Initialize PhotoSwipe
      var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
      gallery.init();
    });
  
  }(jQuery));


  // Image Gallery

  