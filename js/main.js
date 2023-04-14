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

$('.product-button').click(function() {
$(document).ready(function() {
  var currentIndex = 1;
  var totalProducts = $('.product-container').children().length;

  // Move to the previous product
  $('#button-left').click(function() {
    currentIndex--;
    if (currentIndex < 1) {
      currentIndex = totalProducts;
    }
    updateActiveProduct();
  });

  // Move to the next product
  $('#button-right').click(function() {
    currentIndex++;
    if (currentIndex > totalProducts) {
      currentIndex = 1;
    }
    updateActiveProduct();
  });

  // Update the active product and its surrounding products
  function updateActiveProduct() {
    $('.product-container').children().removeClass('product-active');
    $('.product-container').children().eq(currentIndex - 1).addClass('product-active');
    $('.product-container').children().eq(currentIndex - 2).addClass('product-left');
    $('.product-container').children().eq(currentIndex % totalProducts).addClass('product-right');
  }
});



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
