// Courses accordion

// Get DOM elements
const products = document.querySelectorAll('.product');
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    // Get target product ID
    const target = button.getAttribute('data-target');
    // Remove active class from all products
    products.forEach(product => product.classList.remove('active'));
    // Add active class to target product
    document.querySelector(`#${target}`).classList.add('active');
  });
});
