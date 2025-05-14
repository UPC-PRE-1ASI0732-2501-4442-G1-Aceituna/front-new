import {Component, inject} from '@angular/core';
import {PlanesApiService} from "../../../SelectionPlanes/services/planes-api.service";
import {Plan} from "../../../SelectionPlanes/model/plan";
import {PlanListComponent} from "../../../SelectionPlanes/components/plan-list/plan-list.component";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {PaymentComponent} from "../../../SelectionPlanes/components/payment/payment.component";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-planes-page',
  standalone: true,
  imports: [
    PlanListComponent,
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgIf,
    PaymentComponent,
    HeaderComponent
  ],
  templateUrl: './planes-page.component.html',
  styleUrl: './planes-page.component.css'
})
export class PlanesPageComponent {
  planes: Array<Plan> = [];
  private planesApi: PlanesApiService = inject(PlanesApiService);

  constructor() {
    this.getPlans();
  }

  getPlans(){
    this.planesApi.getSources().subscribe((data: any) => {

      this.planes = data;
    })
  }

}
