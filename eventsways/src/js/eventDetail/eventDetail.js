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



function createModal() {
    const modal = document.createElement('div')
    modal.classList.add('overlay')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="overlay-window">
      <img src="${document.querySelector('.form-event-image img').src}"/>
    </div>
  `)
    document.body.appendChild(modal)
    return modal

}

const modal = function () {
    const ANIMATION_SPEED = 150
    const $modal = createModal()
    let closing = false


    let modalMethonds = {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }

    }

    return modalMethonds

}


const _modal = modal();
const image = document.querySelector('.form-event-image-overlay')

image.addEventListener('click', () => {
    _modal.open()
})

document.querySelector('.overlay').addEventListener('click', () => {
    _modal.close()
})
