import { Routes } from '@angular/router';
import {LogInComponent} from "./auth/pages/log-in/log-in.component";
import { VehiclesComponent } from './vehicles/pages/vehicles/vehicles.component';
import { authenticationGuard } from './auth/services/authentication.guard';
import { VehiclePostComponent } from './vehicles/pages/vehicle-post/vehicle-post.component';
import {VehicleDetailsComponent} from './vehicles/pages/vehicle-details/vehicle-details.component';
import { RegisterAcquirerComponent } from './users/ProfileAcquirers/pages/register-acquirer/register-acquirer.component';
import {ProfilePageComponent} from './users/ProfileAcquirers/pages/profile-page/profile-page.component';
import {EditProfileAcquirerComponent} from './users/ProfileAcquirers/pages/edit-profile-acquirer/edit-profile-acquirer.component';
import {ProfileAcquirerComponent} from './users/ProfileAcquirers/pages/profile-acquirer/profile-acquirer.component';
import {VehicleDetailsAcquirerComponent} from './vehicles/pages/vehicle-details-acquirer/vehicle-details-acquirer.component';
import {FilterAcquirerComponent} from './users/ProfileAcquirers/pages/filter-acquirer/filter-acquirer.component';
import {HomeAcquirerComponent} from './users/ProfileAcquirers/pages/home-acquirer/home-acquirer.component';
import {PlanesPageComponent} from './plans/pages/planes-page/planes-page.component';
import {PaymentPageComponent} from './plans/pages/payment-page/payment-page.component';


export const routes: Routes = [
  {path:'myVehicles', component: VehiclesComponent, canActivate: [authenticationGuard]},
  {path: 'postVehicle', component: VehiclePostComponent, canActivate: [authenticationGuard]},
  {path: 'vehicleDetails', component: VehicleDetailsComponent, canActivate: [authenticationGuard]},
  { path: 'plans', component: PlanesPageComponent, canActivate: [authenticationGuard]},
  {path: 'login', component: LogInComponent},
  {path: 'registerAcquirer', component: RegisterAcquirerComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sellereditProfile', component: ProfilePageComponent, canActivate: [authenticationGuard]},
  { path: 'payment', component: PaymentPageComponent , canActivate: [authenticationGuard]}, // Ruta para "payment"
  {path: 'home', component: HomeAcquirerComponent, canActivate: [authenticationGuard]},//, canActivate: [authenticationGuard]
  {path: 'filter', component: FilterAcquirerComponent, canActivate: [authenticationGuard]},
  { path: 'vehicleDetailsAcquirer/:id', component: VehicleDetailsAcquirerComponent, canActivate: [authenticationGuard] },
  {path: 'profileAdquiriente', component: ProfileAcquirerComponent, canActivate: [authenticationGuard]},
  {path: 'editProfileAcquirer', component: EditProfileAcquirerComponent, canActivate: [authenticationGuard]},
];
