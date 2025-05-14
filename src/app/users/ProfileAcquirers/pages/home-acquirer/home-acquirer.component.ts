import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../../public/components/header/header.component";
import {MatCardImage} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {RouterLink} from "@angular/router";
import {VehicleService} from "../../../movilizing/services/vehicle.service";
import {Vehicle} from "../../../movilizing/model/vehicle.entity";
import {HeaderAcquirerComponent} from "../../../public/components/header-acquirer/header-acquirer.component";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-home-acquirer',
  standalone: true,
    imports: [
        HeaderComponent,
        MatCardImage,
        NgForOf,
        HeaderAcquirerComponent,
        TranslateModule,
        RouterLink
    ],
  templateUrl: './home-acquirer.component.html',
  styleUrl: './home-acquirer.component.css'
})
export class HomeAcquirerComponent implements OnInit{
  protected vehicleData: Vehicle[] = [];
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);

  getLogoUrl(url: string) {
    return this.Logo.getUrlToLogo(url);
  }
  options = [
    {path: '/postVehicle', title: 'Post Vehicle'}]
  ngOnInit(): void {
    this.getAllVehicles();
  }

  public redirectToVehicleDetails(vehicleId: number): void {
    console.log('Redirecting to vehicle ID:', vehicleId);
  }

  private getAllVehicles() {
    this.vehicleService.getAll().subscribe((response: any[]) => {
      console.log('🚗 Vehículos cargados:', response);
      this.vehicleData = response.map(v => new Vehicle(v)); // <-- Esto lo arregla
    });
  }

}
