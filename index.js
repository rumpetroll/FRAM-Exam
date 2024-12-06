function toggleMenu() {
    document.body.classList.toggle("menu-open");
}

function initMap() {
    const location = { lat: 60.3639, lng: 10.6087 }; // Example coordinates for Braastad Gaard
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 10, // Adjust zoom level as needed
    });
    
    // Optionally, add a marker to the location
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Braastad Gaard",
    });
}
