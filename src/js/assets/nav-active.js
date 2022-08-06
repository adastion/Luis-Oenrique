const navBtn = document.querySelectorAll('.navigation__link');

navBtn.forEach((item) => {
  item.addEventListener('click', () => {
    navBtn.forEach((i) => {
      i.classList.remove('navigation__link--active');
      item.classList.add('navigation__link--active');
    });
  });
});
