var map;
var markers = [];
var myLatLng = {lat: 46.0112777, lng: 24.8382907};

function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(myLatLng),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(mapCanvas, mapOptions)
}

function addStaticMarker() {
    var pos = getRandomPosition();
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'A static marker!'
    });
    markers.push(pos);
}

function getRandomPosition(){
    var randLatLng = {lat: (myLatLng["lat"] + (Math.random() * 1.7) - (Math.random() * 3)),
        lng: (myLatLng["lng"] + (Math.random() * 2.2) - (Math.random() * 3))};

    return randLatLng;
}