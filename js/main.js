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

// Store the current active image index
let currentImageIndex = 2;

// Get the image container and all images
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('img');

// Get the left and right arrow buttons
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Add event listeners to the arrow buttons
leftArrow.addEventListener('click', () => {
  currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  updateImages();
});

rightArrow.addEventListener('click', () => {
  currentImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  updateImages();
});

// Update the images based on the current active index
function updateImages() {
  // Set the current active image class to inactive
  images[currentImageIndex].classList.add('active');
  images[currentImageIndex].classList.remove('inactive');

  // Set the images on the left and right of the active image to be slightly smaller and faded out
  let leftIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  let rightIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  images[leftIndex].classList.remove('active');
  images[leftIndex].classList.add('inactive');

  images[rightIndex].classList.remove('active');
  images[rightIndex].classList.add('inactive');
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
