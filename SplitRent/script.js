let map;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapId: 'dea96e39db72c40e8c77d2a2'
    });
}
initMap();
