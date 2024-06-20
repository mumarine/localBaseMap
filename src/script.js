var map = L.map('map').setView({lon: 100, lat: 70}, 4);

// add the OpenStreetMap tiles
L.tileLayer('../tiles/Mapnik/{z}/{x}/{y}.png', {
maxZoom: 6,
attribution: 'MTH'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);
