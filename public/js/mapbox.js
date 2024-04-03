/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRuYW50YWoiLCJhIjoiY2x1aWk4NGNsMDU1dDJrbnljc3czMWg4cCJ9._HVsWw5u8ZjBkYSKFXqRdA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/adnantaj/cluix6ffr01al01pr53um1mcv', // style URL
  scrollZoom: false, // scroll
  // center: [9.764588114423313, 55.56270719827677], // starting position [lng, lat]
  // zoom: 9 // starting zoom
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});