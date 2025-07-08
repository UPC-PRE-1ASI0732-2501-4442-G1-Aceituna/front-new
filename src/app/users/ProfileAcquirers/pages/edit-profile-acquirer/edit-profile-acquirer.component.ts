import { Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationComponent} from "../../components/confirmation/confirmation.component";
import {ProfileComponent} from "../../components/profile/profile.component";
import {TranslateModule} from "@ngx-translate/core";
import {HeaderAcquirerComponent} from '../../../../public/components/header-acquirer/header-acquirer.component';
import {UserService} from '../../../../auth/services/user.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-edit-profile-acquirer',
  standalone: true,
  imports: [
    ConfirmationComponent,
    ProfileComponent,
    TranslateModule,
    HeaderAcquirerComponent,
    CommonModule
  ],
  templateUrl: './edit-profile-acquirer.component.html',
  styleUrl: './edit-profile-acquirer.component.css'
})
export class EditProfileAcquirerComponent implements OnInit {
  user: any;
  @ViewChild('confirmation') confirmation!: ConfirmationComponent;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getbyId(1).subscribe(data => {
      this.user = data;
    });
  }

  userChange(updatedUser: any) {
    this.userService.update(this.user.id, updatedUser).subscribe((data: any) => {
      console.log('Usuario actualizado:', data);

      this.confirmation.message = 'Datos actualizados correctamente!';
      this.confirmation.show();
    });
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

  getSavedInterests(): number {
    // Esta podría ser una llamada a la API para obtener intereses guardados
    // Por ahora retornamos un valor simulado
    return Math.floor(Math.random() * 10) + 1;
  }
}
