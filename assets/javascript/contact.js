var mymap = L.map('mapid').setView([41.229812, -105.721152], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGttZWFkZSIsImEiOiJjanF4MnE5eTgwd2w4NDRsMDZtYjM4YnlnIn0.cLxq_EN3XcGe2QeAZvoemw'
}).addTo(mymap);

// L.marker(<LatLng> 41.249910, -105.712520, <Marker options> icon);

var marker = L.marker([41.229812, -105.721152]).addTo(mymap);