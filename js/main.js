// Navigation scroll

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#navbar').removeClass('navbar-transparent');
    } else {
      $('#navbar').addClass('navbar-transparent');
    }
  });
});

// Courses accordion
// Gallery image click

$('.gallery-item').click(function() {
  var $this = $(this),
      newTitle = $this.find('.gallery-title').text(),
      newDesc = $this.data('desc'),
      newSrc = $this.data('img'),
      newPosition = $this.data('position');
  
  // Change product image and details
  $('.product-img img').attr({
    src: newSrc,
    alt: newTitle
  });
  $('.product-title').text(newTitle);
  $('.product-desc').text(newDesc);
  
  // Move gallery images
  $('.gallery-item').removeClass('active');
  $this.addClass('active');
  
  if (newPosition === 'left') {
    $('.gallery-item').removeClass('center right left');
    $('.gallery-item.active').prev().addClass('left');
    $('.gallery-item.active').prev().prev().addClass('center');
    $('.gallery-item.active').next().addClass('right');
    $('.gallery-item.active').next().next().addClass('righter');
  } else if (newPosition === 'right') {
    $('.gallery-item').removeClass('center right left');
    $('.gallery-item.active').next().addClass('right');
    $('.gallery-item.active').prev().addClass('left');
    $('.gallery-item.active').prev().prev().addClass('lefter');
    $('.gallery-item.active').next().next().addClass('center');
  } else {
    $('.gallery-item').removeClass('center right left lefter righter');
    $('.gallery-item.active').prev().prev().prev().addClass('left');
    $('.gallery-item.active').prev().prev().addClass('lefter');
    $('.gallery-item.active').next().next().next().addClass('right');
    $('.gallery-item.active').next().next().addClass('righter');
  }
});

// Footer year

var year = new Date().getFullYear();
$('#footer-year').text(year);



// Contact form submission

$('#contact-form').submit(function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $.ajax({
    url: 'https://api.example.com/contact',
    method: 'POST',
    data: {
      name: name,
      email: email,
      message: message
    },
    dataType: 'json',
    success: function(data) {
      $('#success-alert').fadeIn();
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    },
    error: function(xhr, status, error) {
      $('#error-alert').fadeIn();
    }
  });
});

// Footer year

var year = new Date().getFullYear();
$('#footer-year').text(year);
