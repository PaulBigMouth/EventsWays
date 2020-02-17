
const eventsFilters = document.querySelector(".filters");
const eventsFiltersInner = document.querySelector(".filters-inner");
const html = document.querySelector('html');

const eventsFiltersBtn = document.querySelector(".events-filters-btn button");

const filterObject = {
    flag: false,
    changeFlag: function () {
        this.flag = !this.flag;
    },
    openFilter() {
        if (!this.flag) {
            eventsFilters.style.display = "block";
            setTimeout(() => {
                eventsFiltersInner.style.left = 0;
                document.querySelector("#overlay").style.display = "block";
                document.querySelector(".filters-close i").style.display = "block";
            }, 100);
            this.changeFlag();
        } else {
            eventsFiltersInner.style.left = -500 + "px";
            document.querySelector("#overlay").style.display = "none";
            this.changeFlag();
        }
    }
};

const closeElements = [
    document.querySelector("#overlay"),
    document.querySelector(".filters-close i"),
    eventsFiltersBtn
];

closeElements.forEach(elem => {
    elem.addEventListener("click", () => {
        filterObject.openFilter();
    });
});
