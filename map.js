function initMap() {
    // Coordinates for Purani Mandi, Ajmer
    const puraniMandi = { lat: 26.4552, lng: 74.6360 };
    
    // Create map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: puraniMandi,
    });
    
    // Create marker
    const marker = new google.maps.Marker({
        position: puraniMandi,
        map: map,
        title: "Purani Mandi, Ajmer",
    });
}