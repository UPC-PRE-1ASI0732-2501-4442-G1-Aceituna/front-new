export const API_CONFIG = {
  // URL base para el backend de Azure (producción)
  AZURE_BASE_URL: 'https://app-250421124000.azurewebsites.net/api/v1',
  
  // URL alternativa para testing local (descomenta cuando hagas pruebas locales)
  // LOCAL_BASE_URL: 'http://localhost:3000/api/v1',
  
  // URL activa (cambia entre AZURE_BASE_URL y LOCAL_BASE_URL según necesites)
  get BASE_URL() {
    return this.AZURE_BASE_URL;
    // return this.LOCAL_BASE_URL; // Descomenta esta línea para usar local
  },

  // Otras URLs externas utilizadas en la aplicación
  EXTERNAL_URLS: {
    WHATSAPP: 'https://wa.me/51934893731?text=Hello%20I%20am%20interested%20in%20your%20vehicle',
    LOGO_SERVICE: 'https://i.ibb.co/',
    DEFAULT_IMAGE: 'https://www.oxfordstore.pe/media/catalog/product/cache/aae873136fa0fde5dba4b938a53c66f6/b/d/bd2979_sierra_29_negro_2021_01.jpg'
  }
};
