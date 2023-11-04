// Display Google Maps with business location
function initMap() {
    const location = { lat: 29.80054117046171, lng: -95.41337116441802 }; // Replace with your actual latitude and longitude

    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Marker Title'
    });
}

// Call the function to load the Google Maps API
window.addEventListener('load', initMap);