import { initializeMap } from './school-map.js';
import { initializeList } from './school-list.js';
import { initializeAddressEntry } from './address-entry.js';


const schoolsResp = await fetch('schools.json');
// make HTTP request at the address
// fetch function submit a request, from the request generate a response
const schools = await schoolsResp.json();
// json function get the data contained in the response


initializeMap(schools);
initializeList(schools);
initializeAddressEntry();
