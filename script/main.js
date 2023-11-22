import { initializeMap } from './crimes-map.js';
import { initializeList } from './crimes-list.js';
import { initializeAddressEntry } from './address-entry.js';
import { initFilters } from './filters.js';

initFilters();
initializeMap("all");
initializeList("all");
initializeAddressEntry();

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);