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
// Get product images and buttons
var products = document.querySelectorAll('.product');
var buttons = document.querySelectorAll('.button');

// Set current product index to 0
var currentProduct = 0;

// Add click event listeners to buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Remove active class from current button and product
    buttons[currentProduct].classList.remove('active');
    products[currentProduct].classList.remove('center');
    products[currentProduct].classList.add('blur');
    
    // Update current product index
    currentProduct = parseInt(this.getAttribute('data-product'));
    
    // Add active class to clicked button and center product
    this.classList.add('active');
    products[currentProduct].classList.add('center');
    products[currentProduct].classList.remove('blur');
  });
}



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
