import $ from 'jquery';
import { API_KEY} from './config'
import {inputContainer, formContainer, mapContainer} from './components';

let script = document.createElement('script'); //this is how to create elements in javascript, can also be div,span, etc

script.id = 'google_api';
script.async = true;
script.defer = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;


//getelementsbytagname always returns an array
document.getElementsByTagName('head')[0].appendChild(script);

//optimization technique uses load to control what to load first
script.addEventListener('load', function(e){
  insertComponents();
}, false);

function insertComponents(){
  //appends in a specific order
  $('#root').append([inputContainer(), formContainer(), mapContainer()]);
};
