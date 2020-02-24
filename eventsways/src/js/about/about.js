import Overlay from "./aboutOverlay";
import EventDetails from "../utilts";


const descriptionBtn = document.querySelector('.description-btn')
const mapBtn = document.querySelector('.map-btn');

const addressLink = document.querySelector('.form-event-address')

let description = new EventDetails(document.querySelector('.form-event-description-text'), false, document.querySelector('.description-btn i'), document.querySelector('.form-event-description-text div'))


descriptionBtn.addEventListener('click', () => {
    description.heightChangeHandler()
})


let mapDetails = new EventDetails(document.querySelector('.form-event-mapbox'), false, document.querySelector('.map-btn i'), document.querySelector('#form-event-map'))

mapBtn.addEventListener('click', () => {
    mapDetails.heightChangeHandler()
})

addressLink.addEventListener('click', function () {
    this.preventDefault
    document.querySelector('#form-event-map').scrollIntoView({ block: "start", behavior: "smooth" })
    setTimeout(() => {
        if (!mapDetails.isOpen()) {
            mapDetails.heightChangeHandler()
        }
    }, 300)
})




let overviewOverlay = new Overlay(document.querySelector('#overviewOverlay'), ['choiceOverlayOpen', 'choiceOpen'], false)
let overviewOverlayBtns = [document.querySelector('.choiceCloseIcon i'), document.querySelector('.choiceOverlayEvent'), document.querySelector('.choiceButton button')]


overviewOverlayBtns.forEach((elem) => {
    elem.addEventListener('click', () => {
        overviewOverlay.animateOverlay()
    })
})
document.querySelector('.choiceOverlayEvent').addEventListener('click', function () {
    console.log(this)
})
