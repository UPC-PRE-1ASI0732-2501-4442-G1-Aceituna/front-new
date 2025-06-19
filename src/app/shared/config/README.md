# Configuración de APIs - EcoMovil

## Configuración Centralizad3. **Servicios**:
   - `src/app/vehicles/services/vehicle.service.ts`
   - `src/app/plans/services/planes-api.service.ts`
   - `src/app/shared/services/logo-api.service.ts`
   - `src/app/shared/services/google-maps-loader.service.ts` (nuevo) URLs

Se ha creado un archivo de configuración centralizado para gestionar todas las URLs de la aplicación de manera eficiente.

### Ubicación
- **Archivo**: `src/app/shared/config/api-config.ts`

### Cómo cambiar entre ambientes

Para alternar entre el servidor de Azure (producción) y un servidor local (pruebas), simplemente modifica los getters en el archivo `api-config.ts`:

#### Para usar Azure (Producción)
```typescript
get BASE_URL() {
  return this.AZURE_BASE_URL;
}

get ACTIVE_MAPS_KEY() {
  return this.MAPS_API_KEY_PRODUCTION;
}
```

#### Para usar Local (Pruebas)
```typescript
get BASE_URL() {
  // return this.AZURE_BASE_URL;  // Comenta esta línea
  return this.LOCAL_BASE_URL;    // Descomenta esta línea
}

get ACTIVE_MAPS_KEY() {
  // return this.MAPS_API_KEY_PRODUCTION;  // Comenta esta línea
  return this.MAPS_API_KEY_DEVELOPMENT;   // Descomenta esta línea
}
```

### URLs Configuradas

#### URLs de API Principal
- **Azure**: `https://app-250421124000.azurewebsites.net/api/v1`
- **Local**: `http://localhost:3000/api/v1` (configurable)

#### Google APIs
- **Maps API**: `https://maps.googleapis.com/maps/api/js`
- **Fonts**: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap`
- **Icons**: `https://fonts.googleapis.com/icon?family=Material+Icons`
- **Maps API Key (Producción)**: `AIzaSyDVjw97Z_7fg3Dvz41SaAVD4jSoBeugLD8`
- **Maps API Key (Desarrollo)**: `AIzaSyDMV3i8LKs4cJYqnT0I_hwv-mw_u55x4VE`

#### URLs Externas
- **WhatsApp**: Para contacto directo con vendedores
- **Servicio de Logos**: Para imágenes de logos
- **Imagen por Defecto**: Para vehículos sin imagen
- **PayPal SDK**: Para procesamiento de pagos

### Archivos Actualizados

Los siguientes archivos han sido modificados para usar la configuración centralizada:

1. **Environments**:
   - `src/environments/environment.ts`
   - `src/environments/environment.development.ts`

2. **Servicios**:
   - `src/app/vehicles/services/vehicle.service.ts`
   - `src/app/plans/services/planes-api.service.ts`
   - `src/app/shared/services/logo-api.service.ts`

3. **Componentes**:
   - `src/app/vehicles/pages/vehicle-post/vehicle-post.component.ts`
   - `src/app/vehicles/pages/vehicle-details/vehicle-details.component.ts`
   - `src/app/vehicles/pages/vehicle-details-acquirer/vehicle-details-acquirer.component.ts`
   - `src/app/public/pages/vehicle-details-acquirer/vehicle-details-acquirer.component.ts`

### Ventajas

✅ **Cambio rápido**: Un solo lugar para cambiar todas las URLs  
✅ **Mantenimiento fácil**: Configuración centralizada  
✅ **Pruebas locales**: Fácil alternancia entre ambientes  
✅ **Consistencia**: Todas las URLs en un solo lugar  
✅ **Documentación clara**: URLs comentadas y organizadas

### Uso en el Código

```typescript
import { API_CONFIG } from '../shared/config/api-config';

// Para usar la URL base de la API
const url = `${API_CONFIG.BASE_URL}/endpoint`;

// Para usar URLs externas
const whatsapp = API_CONFIG.EXTERNAL_URLS.WHATSAPP;
const defaultImage = API_CONFIG.EXTERNAL_URLS.DEFAULT_IMAGE;

// Para usar Google APIs
const mapsKey = API_CONFIG.GOOGLE_APIS.ACTIVE_MAPS_KEY;
const mapsUrl = API_CONFIG.GOOGLE_APIS.MAPS_API_URL;
const fontsUrl = API_CONFIG.GOOGLE_APIS.FONTS_URL;

// Para usar PayPal
const paypalSdk = API_CONFIG.EXTERNAL_URLS.PAYPAL_SDK;
```

### Servicio para Google Maps

Se ha creado un servicio `GoogleMapsLoaderService` que facilita la carga dinámica de Google Maps:

```typescript
import { GoogleMapsLoaderService } from '../shared/services/google-maps-loader.service';

// Inyectar el servicio
constructor(private googleMapsLoader: GoogleMapsLoaderService) {}

// Cargar Google Maps dinámicamente
async loadMaps() {
  try {
    await this.googleMapsLoader.loadGoogleMaps();
    console.log('Google Maps cargado exitosamente');
  } catch (error) {
    console.error('Error cargando Google Maps:', error);
  }
}
```
