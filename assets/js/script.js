const header = document.querySelector('.header');
const navbar = document.querySelector('.header .navbar');
const menu = document.querySelector('#menu-btn');
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const imageCardProject = document.querySelector('.project-card-img');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 30) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }

  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

})

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})










