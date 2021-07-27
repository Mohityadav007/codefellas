$(document).ready(function(){
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $('.go-to-top').on('click', function(e){
      e.preventDefault();
      var offset = $('.top').offset().top;
      $("html, body").animate({
          scrollTop: offset
      }, 700);
  });

  // hide navbar when click outside navbar
  $(document).click(function () {
       $('.navbar-collapse').collapse('hide');
  });

  // emailjs
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = Math.random() * 100000 | 0;

      // these IDs from the previous steps
      emailjs.sendForm('service_ivq121a', 'template_y7sw4qk', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
  });
});


// Add smooth scrolling to all links in navbar + footer link
$(".navbar a, section .single-customer-content a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900);
  } // End if
});

// auto collapse navbar dropdown on clicking on links
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
