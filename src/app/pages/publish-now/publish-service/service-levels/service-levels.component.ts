import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { deliverables } from './models/deliverables/deliverables.model';
import { features, featuresPlus, featuresPremium } from './models/features/features.model';
import { extras } from './models/extras/extras.model';
import { plans } from './models/plans/plans.model';
import { DeliverablesService } from './services/deliverables/deliverables.service';
import { ExtrasService } from './services/extras/extras.service';
import { PlansService } from './services/plans/plans.service';
import { planName } from './models/plan-name/plan-name.model';

@Component({
  selector: 'app-service-levels',
  templateUrl: './service-levels.component.html',
  styleUrls: ['./service-levels.component.css']
})
export class ServiceLevelsComponent implements OnInit {

  /* share with the publish service component */
  @Output() sharePlanName = new EventEmitter<planName>();
  @Output() shareFeatures = new EventEmitter<features>();
  @Output() shareFeaturesPlus = new EventEmitter<featuresPlus>();
  @Output() shareFeaturesPremium = new EventEmitter<featuresPremium>();

  /***** variables for save information *****/

  /* objects */
  deliverables:deliverables[] = [];

  /***** variables to share information for preview *****/

  /* objects */
  deliv:any;

  /* variables for plan name */
  initialPlanName:string;
  plusPlanName:string;
  premiumPlanName:string;

  /* variables for deliverables */
  deliverableInput:string;
  deliverableInputInitialPlan: boolean;
  deliverableInputPlusPlan: boolean;
  deliverableInputPremiumPlan: boolean;

  /* variables for features */

  /* delivery time */
  deliveryTimeInitialPlan: number;
  deliveryTimePlusPlan: number;
  deliveryTimePremiumPlan: number;

  /* comments */
  commentInitialPlan: string;
  commentPlusPlan: string;
  commentPremiumPlan: string;

  /* price */
  priceInitialPlan: number;
  pricePlusPlan: number;
  pricePremiumPlan: number;
  
  /* price see */
  priceClientInitialPlan: number;
  priceClientPlusPlan: number;
  priceClientPremiumPlan: number;

  constructor(private deliverableService:DeliverablesService) {
               }

  ngOnInit(): void {

    this.deliverables = this.deliverableService.deliverables;
  }

  /* delete deliverables information */
  deleteDeliverable(deliverables:deliverables){
    this.deliverableService.delete(deliverables);
  }

  /* save deliverables information */
  addDeliverable(){
    this.deliverableService.deliverables.push(new deliverables(this.deliverableInput,
    this.deliverableInputInitialPlan,this.deliverableInputPlusPlan,this.deliverableInputPremiumPlan));
  }

  /* clear input and check box to add deliverable */
  clear() {
    this.deliverableInput = '';
    this.deliverableInputInitialPlan = false;
    this.deliverableInputPlusPlan = false;
    this.deliverableInputPremiumPlan = false;
  }

  /* sharing the new service-levels objects with the publish service component */
  shareAddPlanName(){
    let sharePlanName = new planName(this.initialPlanName, this.plusPlanName, this.premiumPlanName);
    this.sharePlanName.emit(sharePlanName);
  }

  shareAddFeatures(){
    let shareFeatures = new features(this.deliveryTimeInitialPlan, this.commentInitialPlan,
      this.priceInitialPlan,this.priceClientInitialPlan);
      this.shareFeatures.emit(shareFeatures);
  }

  shareAddFeaturesPlus(){
    let shareFeaturesPlus = new featuresPlus(this.deliveryTimePlusPlan, this.commentPlusPlan, this.pricePlusPlan,
      this.priceClientPlusPlan);
      this.shareFeaturesPlus.emit(shareFeaturesPlus);
  }

  shareAddFeaturesPremium(){
    let shareFeaturesPremium = new featuresPremium(this.deliveryTimePremiumPlan, this.commentPremiumPlan, this.pricePremiumPlan,
      this.priceClientPremiumPlan);
      this.shareFeaturesPremium.emit(shareFeaturesPremium);
  }

}
