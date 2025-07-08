import {Component, inject, OnInit} from '@angular/core';
import {NgIf, CommonModule} from "@angular/common";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {UserService} from "../../../auth/services/user.service";
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {ProfileApiService} from '../../../users/ProfileAcquirers/services/profile-api.service';

@Component({
  selector: 'app-profile-university',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    RouterLink,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './profile-university.component.html',
  styleUrl: './profile-university.component.css'
})

export class ProfileUniversityComponent implements OnInit {
  private id!: number;
  private Logo = inject(LogoApiService);
  user: any = {};  // Cambiado a un solo objeto
  options = [
      {path: '/sellereditProfile', title: 'sellereditProfile'}

  ]

  constructor(private profileService: ProfileApiService,private userService: UserService, private authService: AuthenticationService) { }
    ngOnInit(): void {
        // Llamada al servicio para obtener un solo usuario
      this.profileService.getMyProfile().subscribe(data => {
        this.user = data;
        console.log('Perfil obtenido:', this.user);
      });
    }
  getLogoUrl(url: string | undefined) {
    return this.Logo.getUrlToLogo(url);
  }
  getFirstName(fullName: string): string {
    return fullName?.split(' ')[0] || '';
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getProfileCompletion(): number {
    if (!this.user) return 0;
    
    let completed = 0;
    const total = 4; // name, email, phone, image
    
    if (this.user?.fullName || this.user?.name) completed++;
    if (this.user?.email) completed++;
    if (this.user?.phoneNumber || this.user?.phone) completed++;
    if (this.user?.image || this.user?.url) completed++;
    
    return Math.round((completed / total) * 100);
  }
}
