

mapboxgl.accessToken =
  "pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 5,
  center: [27.586669921875, 53.93021986394],
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





var size = 100;

// implementation of CustomLayerInterface to draw a pulsing dot icon on the map
// see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
var pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  // get rendering context for the map canvas when layer is added to the map
  onAdd: function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
  },

  // called once before every frame where the icon will be used
  render: function () {
    var duration = 1000;
    var t = (performance.now() % duration) / duration;

    var radius = (size / 2) * 0.3;
    var outerRadius = (size / 2) * 0.7 * t + radius;
    var context = this.context;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(
      this.width / 2,
      this.height / 2,
      outerRadius,
      0,
      Math.PI * 2
    );
    context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(
      this.width / 2,
      this.height / 2,
      radius,
      0,
      Math.PI * 2
    );
    context.fillStyle = 'rgba(255, 100, 100, 1)';
    context.strokeStyle = 'white';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(
      0,
      0,
      this.width,
      this.height
    ).data;

    // continuously repaint the map, resulting in the smooth animation of the dot
    map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
};








map.addControl(nav, "bottom-right");

let geojson = {
  type: "FeatureCollection",
  features: [

  ]
}

map.on("load", () => {
  const events = document.querySelectorAll('.event-item');
  map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
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
      'icon-image': 'pulsing-dot'
    }


  })
}

)




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