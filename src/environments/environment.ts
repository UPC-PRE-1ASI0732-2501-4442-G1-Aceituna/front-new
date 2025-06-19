import { API_CONFIG } from '../app/shared/config/api-config';

export const environment = {
  production: true,
  serverBasePath: API_CONFIG.BASE_URL,
  keyGoogle: API_CONFIG.GOOGLE_APIS.ACTIVE_MAPS_KEY
};
