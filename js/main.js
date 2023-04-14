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

let currentIndex = 0; // 当前显示产品的索引
const products = document.querySelectorAll('.product'); // 获取所有产品元素
const leftBtn = document.querySelector('.left-btn'); // 获取左切换按钮元素
const rightBtn = document.querySelector('.right-btn'); // 获取右切换按钮元素

// 点击左切换按钮
leftBtn.addEventListener('click', function() {
  if (currentIndex > 0) { // 如果当前不是第一个产品，则将索引减1，并将当前产品隐藏，显示前一个产品
    products[currentIndex].classList.remove('show');
    currentIndex--;
    products[currentIndex].classList.add('show');
  }
});

// 点击右切换按钮
rightBtn.addEventListener('click', function() {
  if (currentIndex < products.length - 1) { // 如果当前不是最后一个产品，则将索引加1，并将当前产品隐藏，显示后一个产品
    products[currentIndex].classList.remove('show');
    currentIndex++;
    products[currentIndex].classList.add('show');
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
