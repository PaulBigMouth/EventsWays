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


window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.bottom-span').style.animationName = 'aboutBannerBottomSpan';
        document.querySelector('.right-span').style.animationName = 'aboutBannerRightSpan';
        document.querySelector('.top-span').style.animationName = 'aboutBannerTopSpan';
        document.querySelector('.left-span').style.animationName = 'aboutBannerLeftSpan';
        document.querySelector('.overview-banner-inner h1').style.animationName = 'aboutBannerBackground';
    }, 2000);
})
const overviewSocialIcons = document.querySelectorAll('.overview-social-item i')
function overviewRemoveClass() {
    return overviewSocialIcons.forEach(elem => {
        elem.classList.remove('fa-3x');
        elem.classList.add('fa-2x')
    })
}
if (document.querySelector('html').clientWidth < 500) {
    overviewRemoveClass()
}


//Практичность
//Надежность
//Активность
//Пассивность
//