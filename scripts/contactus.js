// Display Google Maps with business location
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
        title: 'Supreme Solutions'
    });
}

// Load the Google Maps JavaScript API script with your API key
function loadGoogleMapsScript() {
    // Fetch the API key from the serverless function
    fetch('/.netlify/functions/api-key')
        .then(response => response.json())
        .then(data => {
            const apiKey = data.apiKey;
            // Use the apiKey in your Google Maps code
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        })
        .catch(error => {
            alert ('Failed to retrieve the API key:', error);
        });

}

// Call the function to load the Google Maps API
window.addEventListener('load', loadGoogleMapsScript);
