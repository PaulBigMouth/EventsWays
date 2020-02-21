



let eventDetail = {
    descriptionFlag: false,
    mapFlag: false,
    heightChangeHandler(elem, flag, indexBtn, minHeight, icon, closeClassName = 'fas fa-angle-down', openClassName = 'fas fa-angle-up') {
        if (!flag) {
            elem.style.height = minHeight;
            icon.className = openClassName

        } else {
            elem.style.height = 0;
            icon.className = closeClassName
        }
        this.changeFlag(indexBtn)

    },
    changeFlag(index) {
        if (index) {
            this.mapFlag = !this.mapFlag
        } else {
            this.descriptionFlag = !this.descriptionFlag
        }
    }
}



let text = document.querySelector('.form-event-description-text div').offsetHeight;
text = text + 'px'



const descriptionBtn = document.querySelector('.description-btn')
const mapBtn = document.querySelector('.map-btn');
const addressLink = document.querySelector('.form-event-address')

descriptionBtn.addEventListener('click', () => {
    eventDetail.heightChangeHandler(document.querySelector('.form-event-description-text'), eventDetail.descriptionFlag, 0, text, document.querySelector('.description-btn i'))
})
mapBtn.addEventListener('click', () => {
    eventDetail.heightChangeHandler(document.querySelector('.form-event-mapbox'), eventDetail.mapFlag, 1, '300px', document.querySelector('.map-btn i'))
})

addressLink.addEventListener('click', () => {
    this.preventDefault
    document.querySelector('.form-event-map').scrollIntoView({ block: "start", behavior: "smooth" })
    setTimeout(() => {
        eventDetail.heightChangeHandler(document.querySelector('.form-event-mapbox'), eventDetail.mapFlag, 1, '300px', document.querySelector('.map-btn i'))
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
