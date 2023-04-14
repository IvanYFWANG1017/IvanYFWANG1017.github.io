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

// 获取元素
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// 计算slide的宽度和margin-right
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);

// 设置slider的宽度
slider.style.width = slideWidth * slides.length + "px";

// 初始化当前slide的index
let currentSlide = 0;

// 点击prev按钮时，向左移动
prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
});

// 点击next按钮时，向右移动
nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
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
