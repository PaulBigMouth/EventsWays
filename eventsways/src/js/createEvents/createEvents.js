import createMap from "../map/createMap";
mapboxgl.accessToken =
    "pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ";


let map = createMap('create-event-map', 5, [27.586669921875, 53.93021986394])


let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
});

map.addControl(nav, "bottom-right");

let geojson = {
    type: "FeatureCollection",
    features: [

    ]
}

const lngInput = document.querySelector('.lngInput');
const latInput = document.querySelector('.latInput');


map.on('click', (e) => {
    if (document.querySelectorAll('.marker').length) {
        document.querySelector('.marker').remove()
    }

    const geojson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: e.lngLat.toArray()
                },
                properties: {

                }
            }
        ]
    }

    //const input = document.querySelector('input');
    //input.value = e.lngLat.toArray()[0]




    var el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el)
        .setLngLat(e.lngLat.toArray())
        .addTo(map)
    lngInput.value = e.lngLat.toArray()[0];
    latInput.value = e.lngLat.toArray()[1];
    console.log(lngInput.value, latInput.value)
})


import Overlay from "../about/aboutOverlay";

let createEventOverlay = new Overlay(document.querySelector('#overviewOverlay'), ['choiceOverlayOpen', 'choiceOpen'], false)

function textAreaResize() {
    if (document.querySelector('html').clientWidth > 380) {
        document.querySelector('#id_body').cols = 40;
    } else {
        document.querySelector('#id_body').cols = 35;
    }
}

textAreaResize()


window.addEventListener('load', () => {
    setTimeout(() => {
        createEventOverlay.animateOverlay()
    }, 5000)
})

document.querySelector('.create-eventBtn-red').addEventListener('click', (e) => {
    e.preventDefault()
    createEventOverlay.animateOverlay()
})


window.addEventListener('resize', () => {
    textAreaResize()
})