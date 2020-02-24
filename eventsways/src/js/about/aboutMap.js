import createMap from "../map/createMap";
import pulsingMarker from "../map/marker";


mapboxgl.accessToken =
    "pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ";

const elem = document.querySelector('.form-create-block')
const marker = [77, 77];
let map = createMap('form-event-map', 13, marker)



let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
});


map.addControl(nav, "bottom-right");


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