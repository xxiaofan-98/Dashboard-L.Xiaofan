let dataLayer = null;

function initializeMap(schools) {
  const map = L.map('map').setView([39.96, -75.15], 13);
  const baseTileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/xiaofan-98/clo393cm800du01oy9f1mhoyq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieGlhb2Zhbi05OCIsImEiOiJjbG1tYTUyeDYwZ3Z0MnJsMXp5bzlhbmhuIn0.o4NFKmmhKwaWErRm16MjHA');
  baseTileLayer.addTo(map);

  dataLayer = L.layerGroup();
  dataLayer.addTo(map);

  addSchoolsToMap(schools);

  return map;
} // create a new map and initialize the view for the map, return it


function addSchoolsToMap(schools) {
  for (const school of schools) {
    const [lon, lat] = school.geom.coordinates;
    const name = school.name;

    const marker = L.circleMarker([lat, lon], {
      radius: 3,
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

export {
  initializeMap,
}; // export the function, so we could use it in main.js
