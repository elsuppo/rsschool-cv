const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item');

function burgerMenu() {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('is-active');
  shadow.classList.toggle('shadow-enabled');
};
burger.addEventListener('click', burgerMenu);

for (let navItem of navItems) {
  navItem.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    shadow.classList.remove('shadow-enabled');
    burger.classList.remove('is-active');
  });
};