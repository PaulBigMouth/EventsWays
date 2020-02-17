import "./assets/scss/main.scss";


(function Main() {
  const headerInputBlock = document.querySelector(".header-input");
  const headerInput = document.querySelector(".header-input input");
  const headerSearchIcon = document.querySelector(".header-input i");
  const html = document.querySelector("html");
  headerInput.onblur = function () {
    headerInputBlock.style.borderColor = "#000";
    headerSearchIcon.style.color = "#000";
  };

  headerInput.onfocus = function () {
    headerInputBlock.style.borderColor = "#d2b356";
    headerSearchIcon.style.color = "#d2b356";
  };

  const burgerMenu = document.querySelector(".toggle-menu i");
  const headerList = document.querySelector(".header-list");
  const headerItemSearch = document.querySelector(".header-item-search");
  let flag = false;

  burgerMenu.addEventListener("click", function () {
    let w = html.clientWidth;

    //console.log(w);

    if (w < 640) {
      if (flag) {
        headerItemSearch.style.transition = "height " + 0.2 + "s " + "ease-out";
        headerItemSearch.style.height = 0;
        burgerMenu.className = "fas fa-bars";
        headerList.style.transition = "height " + 0.2 + "s " + "ease-out";
        headerList.style.height = 0;
        flag = !flag;
      } else {
        headerItemSearch.style.transition = "height " + 0.2 + "s " + "ease-out";
        headerItemSearch.style.height = 33.6 + "px";
        burgerMenu.className = "fas fa-times";
        headerList.style.transition = "height " + 0.2 + "s " + "ease-out";
        headerList.style.height = 195 + "px";
        flag = !flag;
      }
    } else {
      if (flag) {
        headerList.style.transition = "height " + 0.2 + "s " + "ease-out";
        headerList.style.height = 0;
        burgerMenu.className = "fas fa-bars";
        flag = !flag;
      } else {
        headerList.style.transition = "height " + 0.2 + "s " + "ease-out";
        headerList.style.height = 195 + "px";
        burgerMenu.className = "fas fa-bars";
        flag = !flag;
      }
    }
  });

  // header scroll

  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (!flag) {
      if (window.pageYOffset < 150) {
        header.style.top = -window.pageYOffset + "px";
      }
      if (window.pageYOffset > 830) {
        header.style.animationName = "header";
        setTimeout(() => {
          header.style.top = 0;
        }, 600);
      } else if (
        window.pageYOffset < 830 &&
        header.style.animationName == "header"
      ) {
        header.style.animationName = "reverseHeader";
        setTimeout(() => {
          header.style.top = -150 + "px";
        }, 600);
      }
    }
  });
})();
