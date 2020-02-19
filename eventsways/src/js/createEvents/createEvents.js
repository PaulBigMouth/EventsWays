
mapboxgl.accessToken =
    "pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ";


let map = new mapboxgl.Map({
    container: "create-event-map",
    style: "mapbox://styles/mapbox/streets-v9",
    zoom: 5,
    center: [27.586669921875, 53.93021986394],
    pitch: 45,
    bearing: 17.6,
    trackResize: true
})

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



map.on('click', (e) => {
    if (document.querySelectorAll('.marker').length) {
        document.querySelector('.marker').remove()
    }
    console.log(e.lngLat.toArray())
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
})