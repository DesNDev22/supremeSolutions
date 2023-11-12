// // Display Google Maps with business location
// function initMap() {
//     const location = { lat: 29.80054117046171, lng: -95.41337116441802 };

//     const map = new google.maps.Map(document.getElementById('map'), {
//         center: location,
//         zoom: 15
//     });

//     const marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         title: 'Marker Title'
//     });
// }
// contact-map.js
function initMap() {
    const location = { lat: 29.80054117046171, lng: -95.41337116441802 };
  
    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15,
    });
  
    new google.maps.Marker({ position: location, map: map });
  }
  
  // Load the Google Maps API with the API key
  function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBi3djoAF0tnGEvLm7Yxbl0ChbYBB9ZCNE&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  }
  
  // Ensure the Google Maps API is loaded before calling initMap
  if (typeof google === 'object' && typeof google.maps === 'object') {
    initMap();
  } else {
    // If the API is not yet loaded, load the script
    window.addEventListener('load', loadGoogleMapsScript);
  }
  