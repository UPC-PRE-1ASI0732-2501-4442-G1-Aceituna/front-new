import {Component, inject} from '@angular/core';
import {PaymentComponent} from "../../../SelectionPlanes/components/payment/payment.component";
import {PlanListComponent} from "../../../SelectionPlanes/components/plan-list/plan-list.component";
import {PaymentService} from "../../../shared/services/payment.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    PaymentComponent,
    PlanListComponent,
    RouterLink
  ],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {

  protected paymentService: PaymentService = inject(PaymentService);
  options = [
    {path: '/postVehicle', title: 'Post Vehicle'}]

}
