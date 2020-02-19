
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

const mainEventsUl = document.querySelector('.main-event-ul');
const eventItem = document.querySelectorAll('.event-item');
const eventItemTitle = document.querySelectorAll('.event-item-title');
const eventItemDescription = document.querySelectorAll('.event-item-description');
const eventItemImage = document.querySelectorAll('.event-img')
const mapBlock = document.querySelector('.mapbox');


const viewEvents = {

    btn: [document.querySelector('#grid-events-btn'), document.querySelector('#list-events-btn'), document.querySelector('#map-events-btn')]

}
viewEvents.btn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        const flag = +elem.getAttribute('data-flag');
        elem.disabled = true;
        elem.className = 'active-btn';

        viewEvents.btn.map((elem, index) => {
            if (index !== flag) {
                elem.disabled = false;
                elem.className = ''
            }
        })
        if (flag === 2) {
            mapBlock.classList.add('mapActive');
            mapBlock.classList.remove('mapOff');
            mainEventsUl.style.display = 'none';

        } else {
            mapBlock.classList.remove('mapActive');
            mapBlock.classList.add('mapOff')
            mainEventsUl.style.display = "grid"
        }

        if (flag === 0) {
            mainEventsUl.classList.add('all-events-list');
            mainEventsUl.classList.remove('list-events-list');
            eventItem.forEach((elem) => {
                elem.classList.remove('event-item__list')
            })
            eventItemTitle.forEach((elem) => {
                elem.classList.remove('event-item-title--list')
            })
            eventItemDescription.forEach((elem) => {
                elem.classList.remove('event-item-description__list')

            })
            eventItemImage.forEach((elem) => {
                elem.classList.remove('event-img__list')
            })
        }
        if (flag === 1) {
            mainEventsUl.classList.add('list-events-list');
            mainEventsUl.classList.remove('all-events-list');
            eventItem.forEach((elem) => {
                elem.classList.add('event-item__list')
            })
            eventItemTitle.forEach((elem) => {
                elem.classList.add('event-item-title--list')
            })
            eventItemDescription.forEach((elem) => {
                elem.classList.add('event-item-description__list')

            })
            eventItemImage.forEach((elem) => {
                elem.classList.add('event-img__list')
            })
        }

    })
})


