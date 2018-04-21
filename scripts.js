var map;

// simple script that initializes the embedded Google Map
function initMap() {

  // create new map centered in Troy, NY
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.734852, lng: -73.791304},
    zoom: 14
  });
  // place a marker at overpass
  var deleted1= new google.maps.LatLng(42.727218, -73.799254);
  var deleted2= new google.maps.LatLng(42.728664, -73.796741);

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

  var erase1= new google.maps.Polyline({
    path:[deleted1, deleted2],
    strokeColor: "#ff0000",
    strokeOpacity: 1.0,
    strokeWeight: 5
  });

  erase1.setMap(map)
}
