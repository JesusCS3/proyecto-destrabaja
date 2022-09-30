import { Component, OnInit } from '@angular/core';
import { deliverables } from './models/deliverables/deliverables.model';
import { features } from './models/features/features.model';
import { extras } from './models/extras/extras.model';
import { plans } from './models/plans/plans.model';
import { DeliverablesService } from './services/deliverables/deliverables.service';
import { FeaturesService } from './services/features/features.service';
import { ExtrasService } from './services/extras/extras.service';
import { PlansService } from './services/plans/plans.service';

@Component({
  selector: 'app-service-levels',
  templateUrl: './service-levels.component.html',
  styleUrls: ['./service-levels.component.css']
})
export class ServiceLevelsComponent implements OnInit {

  deliverables:deliverables[] = [];
  features:features[] = [];
  extras:extras[] = [];

  plans:plans[] = [];

  /* variables for deliverables */
  deliverableInput:string = "";
  deliverableInputInitialPlan: boolean = false;
  deliverableInputPlusPlan: boolean = false;
  deliverableInputPremiumPlan: boolean = false;

  /* variables for features */

  /* delivery time */
  deliveryTimeInitialPlan: number = 0;
  deliveryTimePlusPlan: number = 0;
  deliveryTimePremiumPlan: number = 0;

  /* comments */
  commentInitialPlan: string = "";
  commentPlusPlan: string = "";
  commentPremiumPlan: string = "";

  /* price */
  priceInitialPlan: number = 0;
  pricePlusPlan: number = 0;
  pricePremiumPlan: number = 0;
  
  /* price see */
  priceSeeInitialPlan: number = 0;
  priceSeePlusPlan: number = 0;
  priceSeePremiumPlan: number = 0;

  constructor(private deliverableService:DeliverablesService, private featuresService:FeaturesService,
              private extrasService:ExtrasService, private plansService:PlansService) {
                this.features = featuresService.features;
                this.extras = extrasService.extras;
                this.plans = plansService.plans;
               }

  ngOnInit(): void {

    this.deliverables = this.deliverableService.deliverables;
    this.features = this.featuresService.features;
  }

  deleteDeliverable(deliverables:deliverables){
    this.deliverableService.delete(deliverables);
  }

  addDeliverable(){
    this.deliverableService.deliverables.push(new deliverables(this.deliverableInput,
    this.deliverableInputInitialPlan,this.deliverableInputPlusPlan,this.deliverableInputPremiumPlan));
  }

}
