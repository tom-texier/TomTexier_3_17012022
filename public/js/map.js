// Initialize and add the map
function initMap() {
    // The location of Uluru
    const parc_monceau = { lat: 48.879470, lng: 2.309120 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: parc_monceau,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: parc_monceau,
      map: map,
    });
}