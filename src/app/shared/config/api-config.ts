export const API_CONFIG = {
  // URL base para el backend de Azure (producción)
  AZURE_BASE_URL: 'https://app-250708224357.azurewebsites.net/api/v1',
  //AZURE_BASE_URL: 'http://localhost:8082/api/v1',


  // URL alternativa para testing local (descomenta cuando hagas pruebas locales)
  //LOCAL_BASE_URL: 'http://localhost:3000/api/v1',

  // URL activa (cambia entre AZURE_BASE_URL y LOCAL_BASE_URL según necesites)
  get BASE_URL() {
    return this.AZURE_BASE_URL;
    // return this.LOCAL_BASE_URL; // Descomenta esta línea para usar local
  },

  // Google APIs
  GOOGLE_APIS: {
    MAPS_API_URL: 'https://maps.googleapis.com/maps/api/js',
    FONTS_URL: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
    ICONS_URL: 'https://fonts.googleapis.com/icon?family=Material+Icons',

    // Google Maps API Keys (diferentes para cada ambiente)
    MAPS_API_KEY_PRODUCTION: 'AIzaSyDmujZ9vQUmWZriYf8I7saamNfNHgHfwXI', // Clave actual que funciona
    MAPS_API_KEY_DEVELOPMENT: 'AIzaSyDVjw97Z_7fg3Dvz41SaAVD4jSoBeugLD8', // Clave alternativa para desarrollo

    // Key activa (puedes cambiar entre las dos según el ambiente)
    get ACTIVE_MAPS_KEY() {
      return this.MAPS_API_KEY_PRODUCTION;
      // return this.MAPS_API_KEY_DEVELOPMENT; // Descomenta para usar key de desarrollo
    }
  },

  // Otras URLs externas utilizadas en la aplicación
  EXTERNAL_URLS: {
    WHATSAPP: 'https://wa.me/51934893731?text=Hello%20I%20am%20interested%20in%20your%20vehicle',
    LOGO_SERVICE: 'https://i.ibb.co/',
    DEFAULT_IMAGE: 'https://www.oxfordstore.pe/media/catalog/product/cache/aae873136fa0fde5dba4b938a53c66f6/b/d/bd2979_sierra_29_negro_2021_01.jpg',
    PAYPAL_SDK: 'https://www.paypal.com/sdk/js?currency=USD&client-id=AWajIxT2cpvXcj8djyl9wYXSefyMEsUV0APCXrCgjLMrK9LD9JOlBhM3E7dnSPfS8pH-gdHi10mABKwH'
  }
};
