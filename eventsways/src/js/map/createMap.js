export default function createMap(container, zoom, center) {
    let map = new mapboxgl.Map({
        container: container,
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: zoom,
        center: center,
        pitch: 45,
        bearing: 17.6
    });
    return map
} 