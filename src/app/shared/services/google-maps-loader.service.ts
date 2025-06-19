import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsLoaderService {

  constructor() { }

  /**
   * Carga dinámicamente el script de Google Maps
   */
  loadGoogleMaps(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Verificar si Google Maps ya está cargado
      if (typeof google !== 'undefined' && google.maps) {
        resolve();
        return;
      }

      // Crear el script de Google Maps
      const script = document.createElement('script');
      script.src = `${API_CONFIG.GOOGLE_APIS.MAPS_API_URL}?key=${API_CONFIG.GOOGLE_APIS.ACTIVE_MAPS_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps API'));
      
      document.head.appendChild(script);
    });
  }

  /**
   * Obtiene la URL completa para Google Maps con la clave API
   */
  getGoogleMapsUrl(): string {
    return `${API_CONFIG.GOOGLE_APIS.MAPS_API_URL}?key=${API_CONFIG.GOOGLE_APIS.ACTIVE_MAPS_KEY}`;
  }

  /**
   * Obtiene las URLs de Google Fonts
   */
  getGoogleFontsUrls() {
    return {
      roboto: API_CONFIG.GOOGLE_APIS.FONTS_URL,
      icons: API_CONFIG.GOOGLE_APIS.ICONS_URL
    };
  }

  /**
   * Obtiene la URL de PayPal SDK
   */
  getPayPalSdkUrl(): string {
    return API_CONFIG.EXTERNAL_URLS.PAYPAL_SDK;
  }
}
