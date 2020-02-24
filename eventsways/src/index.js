import "./assets/scss/main.scss";




(function Main() {

  const html = document.querySelector("html");


  const burgerMenu = document.querySelector(".toggle-menu i");
  const headerList = document.querySelector(".header-list");
  let flag = false;

  burgerMenu.addEventListener("click", function () {
    if (flag) {
      burgerMenu.className = "fas fa-bars";
      headerList.classList.remove('openMenu')
    } else {
      burgerMenu.className = "fas fa-times";
      headerList.classList.add('openMenu')
    }
    flag = !flag;

  });

  // header scroll

  const header = document.querySelector(".header");
  let scroll = window.pageYOffset
  window.addEventListener("scroll", () => {
    if (!flag) {
      if (scroll < window.pageYOffset) {
        header.classList.add('fixed-header');
      } else if (scroll > window.pageYOffset && header.classList.contains('fixed-header')) {
        header.classList.remove('fixed-header')
      }
      scroll = window.pageYOffset
    }
  });

  window.addEventListener('load', () => {

    setTimeout(() => {
      document.querySelector('.loader-wrapper').style.display = 'none';
      document.body.style.height = '100%';
    }, 1000)
  })
})();
