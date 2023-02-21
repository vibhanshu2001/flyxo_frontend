$(document).ready(function () {
  
  $("#featuredflightslider").owlCarousel({
    loop: true,
    onInitialized: counter,
    onChanged: counter,
    responsiveClass: true,
    nav:true,
    responsive: {
      0: {
        items: 1,
        nav:false,
      },
      600: {
        items: 2,
        nav:false,
      },
      1000: {
        items: 4,
        nav:true,
        loop:true,
      },
    },
  });
  function counter(event) {
    var element = event.target; // DOM element of the carousel
    var items = event.item.count; // Number of items
    var item = event.item.index; // Position of the current item
    if (items > 1) {
      $('.featured-owl-counter').text(item + ' of ' + items);
    } else {
      $('.featured-owl-counter').text('1 of 1');
    }
  }
  $('.custom-owl-prev').click(function() {
    console.log('Next button clicked');
    $("#featuredflightslider").trigger('next.owl.carousel');
  });
  
  $('.custom-owl-next').click(function() {
    console.log('prev button clicked');
    $("#featuredflightslider").trigger('prev.owl.carousel');
  });
});
$(document).ready(function() {
    $('.play-button').magnificPopup({
      type: 'iframe'
    });
  });