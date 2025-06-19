// Environment: development
// This is the development environment configuration file.
// It contains the configuration settings for the development environment.
// Note: In real scenarios, this file is not committed to the source
//control.

import { API_CONFIG } from '../app/shared/config/api-config';

export const environment = {
  production: false,
  serverBasePath: API_CONFIG.BASE_URL,
  keyGoogle: API_CONFIG.GOOGLE_APIS.ACTIVE_MAPS_KEY
};
