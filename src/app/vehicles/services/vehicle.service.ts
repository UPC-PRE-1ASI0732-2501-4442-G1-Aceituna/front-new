import { Injectable } from '@angular/core';
import { Vehicle } from "../model/vehicle.entity";
import { BaseService } from '../../shared/services/base.service';
import { API_CONFIG } from '../../shared/config/api-config';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends BaseService<Vehicle> {

  constructor() {
    super();
    this.resourceEndPoint = '/vehicles';
  }

  getMyVehicles() {
    return this.http.get<Vehicle[]>(`${API_CONFIG.BASE_URL}/vehicles/my-vehicles`);
  }

  getByType(type: string) {
    return this.http.get<Vehicle[]>(`${API_CONFIG.BASE_URL}/vehicles/type/${type}`);
  }
}
