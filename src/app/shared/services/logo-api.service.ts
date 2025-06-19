import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = API_CONFIG.EXTERNAL_URLS.LOGO_SERVICE;
  endUrl = '/image.png'

  constructor() { }

  getUrlToLogo(source: any) {
    return `${this.baseUrl}${source}`;
  }
}
