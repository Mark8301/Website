var map;

// simple script that initializes the embedded Google Map
function initMap() {

  // create new map centered in Troy, NY
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.734852, lng: -73.791304},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  // place a marker at overpass
  var deleted1= new google.maps.LatLng(42.727218, -73.799254);
  var deleted2= new google.maps.LatLng(42.728664, -73.796741);
  var deleted3= new google.maps.LatLng(42.730674, -73.792064);
  var deleted4= new google.maps.LatLng(42.732462, -73.791210); 
  var deleted5= new google.maps.LatLng(42.737158, -73.785668); 
  var deleted6= new google.maps.LatLng(42.732008, -73.793095); 
  var deleted7= new google.maps.LatLng(42.731894, -73.792561); 
  var deleted8= new google.maps.LatLng(42.731925, -73.792209); 
  var deleted9= new google.maps.LatLng(42.732059, -73.791745); 
  var deleted10= new google.maps.LatLng(42.732462, -73.791210); 
  var deleted11= new google.maps.LatLng(42.735932, -73.787230); 
  var deleted12= new google.maps.LatLng(42.736241, -73.786525); 
  var deleted13= new google.maps.LatLng(42.736573, -73.785654); 
  var deleted14= new google.maps.LatLng(42.737088, -73.785026); 
  var ramp1= new google.maps.LatLng(42.737158, -73.785668);
  var ramp2= new google.maps.LatLng(42.736130, -73.785830);

  var legendImage = "Legend.png";
  var legendLocation= new google.maps.LatLng(42.724995, -73.769896);


  var bridge1 = new google.maps.Marker({
    position: {lat: 42.725565, lng: -73.802443},
    map: map
  });
  // place a marker at Underpass1
  var Underpass1 = new google.maps.Marker({
    position: {lat: 42.728245, lng: -73.796006},
    map: map
  });
  // place a marker at Underpass2
  var Underpass2 = new google.maps.Marker({
    position: {lat: 42.738427, lng: -73.783303},
    map: map
  });


  var legend = new google.maps.Marker({
    position: legendLocation, 
    map: map,
    icon: legendImage

  });

  var erase1= new google.maps.Polyline({
    path:[deleted1, deleted2],
    strokeColor: "#ff0000",
    strokeOpacity: 1.0,
    strokeWeight: 5
  });

 var erase2= new google.maps.Polyline({
    path:[deleted3, deleted4, deleted5],
    strokeColor: "#ff0000",
    strokeOpacity: 1.1,
    strokeWeight: 5
  });

 var erase3= new google.maps.Polyline({
    path:[deleted6, deleted7, deleted8, deleted9, deleted10],
    strokeColor: "#ff0000",
    strokeOpacity: 1.1,
    strokeWeight: 5
  });

var erase4= new google.maps.Polyline({
    path:[deleted11, deleted12, deleted13, deleted14],
    strokeColor: "#ff0000",
    strokeOpacity: 1.1,
    strokeWeight: 5
  });

var newRamp1= new google.maps.Polyline({
    path:[ramp1, ramp2], 
    strokeColor: "#fffcaf",
    strokeOpacity: 1.1,
    strokeWeight: 5
  });

  erase1.setMap(map);
  erase2.setMap(map);
  erase3.setMap(map);
  erase4.setMap(map);
  newRamp1.setMap(map);
}

