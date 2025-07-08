import {Component, inject, OnInit} from '@angular/core';
import {NgIf, CommonModule} from "@angular/common";
import {UserService} from "../../../auth/services/user.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {RouterLink} from "@angular/router";
import {HeaderAcquirerComponent} from "../../components/header-acquirer/header-acquirer.component";

@Component({
  selector: 'app-profile-acquirer',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    RouterLink,
    HeaderAcquirerComponent
  ],
  templateUrl: './profile-acquirer.component.html',
  styleUrl: './profile-acquirer.component.css'
})
export class ProfileAcquirerComponent implements OnInit{
  private Logo = inject(LogoApiService);
  user: any = {};  // Cambiado a un solo objeto
  options = [
    {path: '/editProfileAcquirer', title: 'sellereditProfile'}
  ]

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    // Llamada al servicio para obtener un solo usuario
    this.userService.getUserById(1).subscribe(data => {
      this.user = data;
      console.log('Usuario obtenido:', this.user);
    });
  }
  
  getLogoUrl(url: string | undefined) {
    return this.Logo.getUrlToLogo(url);
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getProfileCompletion(): number {
    if (!this.user) return 0;
    
    let completed = 0;
    const total = 4; // name, email, phone, image
    
    if (this.user?.name) completed++;
    if (this.user?.email) completed++;
    if (this.user?.phone) completed++;
    if (this.user?.url) completed++;
    
    return Math.round((completed / total) * 100);
  }
}
