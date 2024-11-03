export default class Map {
  #mapElement = document.querySelector("#map");
  #googleMapsApiKey = 'AIzaSyBMukzRcxV0QEUWhIAQiDALNq0PoVqyghs'; // Replace with your actual API key
  #map;
  #location = { lat: 40.745191, lng: -73.985870 };

  /**
   * Loads the Google Maps script asynchronously
   * @returns {Promise<void>}
   */
  async #loadGoogleMapsScript() {
    return new Promise((resolve, reject) => {
      if (document.querySelector('script[data-google-maps]')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.#googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.dataset.googleMaps = true;

      script.onload = resolve;
      script.onerror = () => reject(new Error('Google Maps API failed to load.'));
      document.head.appendChild(script);
    });
  }

  /**
   * Initializes the map and marker
   */
  #initializeMap = () => {
    this.#map = new google.maps.Map(this.#mapElement, {
      center: this.#location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: true,
    });

    this.#addMarker();
  }

  /**
   * Adds a marker to the initialized map
   */
  #addMarker() {
    if (!this.#map) return;

    new google.maps.Marker({
      position: this.#location,
      map: this.#map,
      title: "The Church of The Transfiguration",
    });
  }

  /**
   * Public method to initialize the map if the map element is present
   */
  init = () => {
    if (this.#mapElement) {
      // Set up Google Maps callback and load the script
      window.initMap = this.#initializeMap;
      this.#loadGoogleMapsScript().catch((error) => console.error(error));
    } else {
      console.warn("Map element (#map) not found.");
    }
  }
}
