import EventDetails from "../utilts";
import ViewEvents from "./viewEvents"

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




const viewEventsBtn = [document.querySelector('#grid-events-btn'), document.querySelector('#list-events-btn'), document.querySelector('#map-events-btn')]

const classes = [
    {
        name: 'default',
        ulClass: 'all-events-list'
    },
    {
        name: 'grid',
        ulClass: 'list-events-list',
        classes: ['event-item__list', 'event-item-title--list', 'event-item-description__list', 'event-img__list']
    },
    {
        name: 'map',
        classes: 'mapActive'
    }
]

let viewEvents = new ViewEvents(viewEventsBtn, classes, mapBlock, mainEventsUl)
viewEventsBtn.forEach((elem) => {
    elem.addEventListener('click', function () {
        viewEvents.changeViewHandler(this)
    })
})

if (sessionStorage.getItem('btnflag')) {
    viewEvents.changeViewHandler(false)
}



const select = document.querySelector('.selection');
const options = document.querySelector('.options')
const optionsUl = document.querySelector('.options-ul')
const option = document.querySelectorAll('.options-ul li');
const countryInput = document.querySelector('.filter-country input')
const selection = new EventDetails(options, false, document.querySelector('.selection-icon i'), optionsUl)

option.forEach((elem) => {
    elem.addEventListener('click', function () {

        let name = this.innerHTML;
        document.querySelector('.selected-option').innerHTML = name;
        console.log(selection.flag)
        countryInput.value = name

    })
})
select.addEventListener('click', () => {
    selection.heightChangeHandler()
})



const checkboxInput = document.querySelectorAll('.category-checkbox-list-item input');
const checkboxListItem = document.querySelectorAll('.category-checkbox-list-item')



checkboxListItem.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        if (checkboxInput[index].checked) {
            checkboxInput[index].checked = false;
            elem.classList.remove('cheked-item')
        } else {
            checkboxInput[index].checked = true;
            elem.classList.add('cheked-item')
        }

    })
})


