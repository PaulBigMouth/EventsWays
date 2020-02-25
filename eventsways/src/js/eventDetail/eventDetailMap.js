
mapboxgl.accessToken =
    "pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ";



import createMap from "../map/createMap";

const elem = document.querySelector('.form-event-up-content')
const marker = [+elem.getAttribute('data-lng'), +elem.getAttribute('data-lat')];
let map = createMap('form-event-map', 13, marker)



let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
});


map.addControl(nav, "bottom-right");



import pulsingMarker from "../map/marker";


map.on('load', () => {
    map.addSource('points', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': marker
                    }
                }
            ]
        }
    });

    map.addImage('pulsing-dot', pulsingMarker(map, 150), { pixelRatio: 2 });
    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
            'icon-image': 'pulsing-dot'
        }
    });

})