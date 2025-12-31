const burgerBtn = document.querySelector('.header_burger-button');
const burger = document.querySelector('.header_burger');
const overlay = document.querySelector('.header_burger-overlay');

burgerBtn.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  burger.classList.remove('active');
  overlay.classList.remove('active');
});

document.querySelectorAll('.header_burger .nav-parent').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    item.parentElement.classList.toggle('active');
  });
});
