import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { deliverables } from './models/deliverables/deliverables.model';
import { features, featuresPlus, featuresPremium } from './models/features/features.model';
import { DeliverablesService } from './services/deliverables/deliverables.service';
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
  deliverables:deliverables[] = [];

  /* variables to disable plans*/
  checkboxPlusPlan:boolean = false;
  checkboxPremiumPlan:boolean = false;

  /* disabled price inputs */
  readOnlyPriceClient:boolean = false;
  readOnlyPrice:boolean = false;
  readOnlyPricePlusClient:boolean = false;
  readOnlyPricePlus:boolean = false;
  readOnlyPricePremiumClient:boolean = false;
  readOnlyPricePremium:boolean = false;

  /***** variables to share information for preview *****/

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

  constructor(private deliverableService:DeliverablesService) {}

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

    /* clear input and checkbox to add deliverable */
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

  /* calculate the customer price */
  clientPrice(){
    if(this.priceInitialPlan != undefined){
      this.priceClientInitialPlan = Math.ceil(this.priceInitialPlan * 1.3625);
      this.readOnlyPriceClient = true;
    }

    if(this.priceClientInitialPlan === 0){
      this.readOnlyPriceClient = false;
    }
  }

  clientPricePlus(){
    if(this.pricePlusPlan != undefined){
      this.priceClientPlusPlan = Math.ceil(this.pricePlusPlan * 1.3625);
      this.readOnlyPricePlusClient = true;
    }

    if(this.priceClientPlusPlan === 0){
      this.readOnlyPricePlusClient = false;
    }
  }

  clientPricePremium(){
    if(this.pricePremiumPlan != undefined){
      this.priceClientPremiumPlan = Math.ceil(this.pricePremiumPlan * 1.3625);
      this.readOnlyPricePremiumClient = true;
    }

    if(this.priceClientPremiumPlan === 0){
      this.readOnlyPricePremiumClient = false;
    }
  }

  /* calculate price */
  price(){
    if(this.priceClientInitialPlan != undefined){
      this.priceInitialPlan = Math.ceil(this.priceClientInitialPlan * 0.733944495);
      this.readOnlyPrice = true;
    }

    if(this.priceInitialPlan === 0){
      this.readOnlyPrice = false;
    }
  }

  pricePlus(){
    if(this.priceClientPlusPlan != undefined){
      this.pricePlusPlan = Math.ceil(this.priceClientPlusPlan * 0.733944495);
      this.readOnlyPricePlus = true;
    }

    if(this.pricePlusPlan === 0){
      this.readOnlyPricePlus = false;
    }
  }

  pricePremium(){
    if(this.priceClientPremiumPlan != undefined){
      this.pricePremiumPlan = Math.ceil(this.priceClientPremiumPlan * 0.733944495);
      this.readOnlyPricePremium = true;
    }

    if(this.pricePremiumPlan === 0){
      this.readOnlyPricePremium = false;
    }
  }

  /* clear input and checkbox to plus plan */
  clearPlusPlan(){
    if(this.checkboxPlusPlan === false){
      this.plusPlanName = '';
      this.deliverableInputPlusPlan = false;
      this.deliveryTimePlusPlan = 0;
      this.commentPlusPlan = '';
      this.pricePlusPlan = 0;
      this.priceClientPlusPlan = 0;
    }
  }

  /* clear input and checkbox to plus plan */
  clearPremiumPlan(){
    if(this.checkboxPremiumPlan === false){
      this.premiumPlanName = '';
      this.deliverableInputPremiumPlan = false;
      this.deliveryTimePremiumPlan = 0;
      this.commentPremiumPlan = '';
      this.pricePremiumPlan = 0;
      this.priceClientPremiumPlan = 0;
    }
  }

}
