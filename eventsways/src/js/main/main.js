const Main = () => {
  const headerInputBlock = document.querySelector(".header-input");
  const headerInput = document.querySelector(".header-input input");
  const headerSearchIcon = document.querySelector(".header-input i");

  headerInput.onblur = function() {
    headerInputBlock.style.borderColor = "#000";
    headerSearchIcon.style.color = "#000";
  };

  headerInput.onfocus = function() {
    headerInputBlock.style.borderColor = "#d2b356";
    headerSearchIcon.style.color = "#d2b356";
  };

  const inpCity = document.getElementById("city");
  const inpCityValue = inpCity.value;

  inpCity.addEventListener("input", inpval);

  function inpval(event) {
    let val = this.value;

    if (inpCityValue !== val) {
      inpCity.classList.add("cityInp");
    }
  }

  // FILTER
  const filt = document.querySelector(".filter");
  const filterPicker = document.querySelector(".main-filter-picker");
  const filterChevron = document.querySelector(".main-filter i");
  let filterFlag = false;
  console.log(filt, filterPicker);

  filt.addEventListener("click", function() {
    if (filterFlag) {
      filterPicker.style.height = 0;
      filterChevron.className = "fas fa-chevron-down";
      filterFlag = false;
    } else {
      filterPicker.style.height = 100 + "px";
      filterChevron.className = "fas fa-chevron-up";
      filterFlag = true;
    }
  });
};

export default Main;
