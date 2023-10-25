import { crimeObj } from './load-crimes.js';

let dataLayer;
let map;
let iconLayer;

function initializeMap(crimeName) {
  map = L.map('map').setView([39.96, -75.15], 13);
  const baseTileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/xiaofan-98/clo393cm800du01oy9f1mhoyq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieGlhb2Zhbi05OCIsImEiOiJjbG1tYTUyeDYwZ3Z0MnJsMXp5bzlhbmhuIn0.o4NFKmmhKwaWErRm16MjHA');
  baseTileLayer.addTo(map);

  dataLayer = L.layerGroup().addTo(map);
  iconLayer = L.layerGroup().addTo(map);
  addCrimesToMap(crimeName);
} // create a new map and initialize the view for the map, return it


function addCrimesToMap(crimeName) {
  dataLayer.clearLayers();

  for (const crime of crimeObj[crimeName]) {
    const name = crime.text_general_code;

    const marker = L.circleMarker([crime.lat, crime.lng], {
      radius: 1,
      title: name,
      alt: name,
      fillColor: 'rgb(255, 255, 120)',
      fillOpacity: 0.7,
      color: 'rgb(255, 255, 120)',
      opacity: 0.2,
    });
    dataLayer.addLayer(marker);
    
  }
}


function addSearchLocation(lat, lng) {
  iconLayer.clearLayers();

  const icon = L.icon({
    iconUrl: '../img/add_location.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 32], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // //shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  const marker = L.marker([lat, lng], {
    icon: icon
  });

  iconLayer.addLayer(marker);

  map.setView([lat, lng], 15);
}


export {
  initializeMap,
  addCrimesToMap,
  addSearchLocation
}; // export the function, so we could use it in main.js
