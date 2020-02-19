
mapboxgl.accessToken =
  "pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 11,
  center: [-77.032, 38.913],
  pitch: 45,
  bearing: 17.6,
  trackResize: true
});
map.on('dataloading', () => {
  window.dispatchEvent(new Event('resize'));
  // mapboxObj.resize(); also work
});
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

map.on("load", () => {
  const events = document.querySelectorAll('.event-item');
  map.loadImage('../../../media/img/0cea943396e58ff6b1338f64f3221d1f_Um5BWTk.jpg',
    function (error, image) {
      if (error) throw error;
      map.addImage('marker', image);
      events.forEach((elem) => {
        geojson.features.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [+elem.getAttribute('data-lng'), +elem.getAttribute('data-lat')]
          },
          properties: {
            title: elem.getAttribute('data-title'),
            date: elem.getAttribute('data-date'),
            time: elem.getAttribute('data-time'),
            place: elem.getAttribute('data-place'),
            description: elem.getAttribute('data-description'),
            href: elem.getAttribute('data-href'),
            image: elem.getAttribute('data-image')
          }
        })
      })
      map.addSource("pointsSource", {
        type: 'geojson',
        data: geojson
      })
      map.addLayer({
        id: "points",
        source: "pointsSource",
        type: "symbol",
        layout: {
          "icon-image": "marker",
          "icon-size": 0.1
        }


      })
    }

  )



})

map.on("click", (e) => {
  const result = map.queryRenderedFeatures(e.point, { layers: ["points"] });
  if (result.length) {
    map.panTo(e.lngLat)
    const popup = new mapboxgl.Popup({ closeButton: false });
    popup.setLngLat(e.lngLat)
      .setHTML(`<section class="event-item">
            <div class="event-img">
              <a href=${result[0].properties.href} class="event-link-img">
                <img src=${result[0].properties.image} alt="" />
              </a>
            </div>
            <div class="container">
              <div class="event-item-title">
                <a href=${result[0].properties.href}>${result[0].properties.title}</a>
              </div>
              <p class="event-item-date">
                <i class="far fa-calendar-alt"> ${result[0].properties.date}</i> 
                <i class="far fa-clock"> ${result[0].properties.time}</i> 
              </p>
              <p class="event-item-description">
                ${result[0].properties.description}
              </p>
              <p class="event-item-place">${result[0].properties.place}</p>
            </div>
          </section>`)
      .addTo(map)
  }
})