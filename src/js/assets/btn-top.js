const offset = 0;
const btnTop = document.querySelector('.container__button-fixed');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    btnTop.classList.add('container__button-fixed--active');
  } else {
    btnTop.classList.remove('container__button-fixed--active');
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
