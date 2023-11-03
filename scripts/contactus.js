// Get the Google Maps API key from the environment variable
var googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

function initMap() {
    // Initialize the Google Map using the API key and set the center and zoom level
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 29.80054117046171, lng: -95.41337116441802 }, // Replace with your actual latitude and longitude
        zoom: 15
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: { lat: 29.80054117046171, lng: -95.41337116441802 }, // Replace with your actual latitude and longitude
        map: map,
        title: 'Business Location'
    });
}

// Load the Google Maps JavaScript API script with your API key
function loadGoogleMapsScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey + '&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call the function to load the Google Maps API
window.addEventListener('load', loadGoogleMapsScript);


