import { Component, OnInit } from '@angular/core';
import { extraService } from '../models/extras-service.model';
import { ExtrasServiceService } from '../services/extras-service.service';

@Component({
  selector: 'app-extras-service',
  templateUrl: './extras-service.component.html',
  styleUrls: ['./extras-service.component.css']
})
export class ExtrasServiceComponent implements OnInit {
  /***** variables for save information *****/
  extraService:extraService[] = [];

  /* variables for extras */

  extraInput:string;
  checkboxInitialPlanExtra: boolean;
  checkboxPlusPlanExtra: boolean = false;
  checkboxPremiumPlanExtra: boolean = false;

  /* disabled price inputs */
  readOnlyPriceClientExtra:boolean = false;
  readOnlyPriceExtra:boolean = false;
  readOnlyPricePlusClientExtra:boolean = false;
  readOnlyPricePlusExtra:boolean = false;
  readOnlyPricePremiumClientExtra:boolean = false;
  readOnlyPricePremiumExtra:boolean = false;

  /* delivery time */
  deliveryTimeExtra: number;
  deliveryTimeExtraPlus: number;
  deliveryTimeExtraPremium: number;

  /* price */
  priceExtra: number;
  priceExtraPlus: number;
  priceExtraPremium: number;
  
  /* price see */
  priceClientExtra: number;
  priceClientExtraPlus: number;
  priceClientExtraPremium: number;

  constructor(private extrasServiceService:ExtrasServiceService) { }

  ngOnInit(): void {
    this.extraService = this.extrasServiceService.extraService;
  }

  /* delete extra information */
  deleteExtra(extraService:extraService){
    this.extrasServiceService.delete(extraService);
  }

  /* save extra information */
  addExtra(){
    this.extrasServiceService.extraService.push(new extraService(this.extraInput, this.checkboxInitialPlanExtra,
      this.deliveryTimeExtra, this.priceExtra, this.priceClientExtra, this.checkboxPlusPlanExtra,
      this.deliveryTimeExtraPlus, this.priceExtraPlus, this.priceClientExtraPlus, this.checkboxPremiumPlanExtra,
      this.deliveryTimeExtraPremium, this.priceExtraPremium, this.priceClientExtraPremium));
  }

  /* clear input and check box to add extra */
  clear() {
    this.extraInput = '';
    this.checkboxInitialPlanExtra = false;
    this.deliveryTimeExtra = 0; 
    this.priceExtra = 0; 
    this.priceClientExtra = 0; 
    this.checkboxPlusPlanExtra = false;
    this.deliveryTimeExtraPlus = 0; 
    this.priceExtraPlus = 0; 
    this.priceClientExtraPlus = 0; 
    this.checkboxPremiumPlanExtra = false;
    this.deliveryTimeExtraPremium = 0; 
    this.priceExtraPremium = 0; 
    this.priceClientExtraPremium = 0; 
  }

  /* calculate the customer price */
  clientPriceExtra(){
    if(this.priceExtra != undefined){
      this.priceClientExtra = Math.ceil(this.priceExtra * 1.3625);
      this.readOnlyPriceClientExtra = true;
    }

    if(this.priceClientExtra === 0){
      this.readOnlyPriceClientExtra = false;
    }
  }

  clientPricePlusExtra(){
    if(this.priceExtraPlus != undefined){
      this.priceClientExtraPlus = Math.ceil(this.priceExtraPlus * 1.3625);
      this.readOnlyPricePlusClientExtra = true;
    }

    if(this.priceClientExtraPlus === 0){
      this.readOnlyPricePlusClientExtra = false;
    }
  }

  clientPricePremiumExtra(){
    if(this.priceExtraPremium != undefined){
      this.priceClientExtraPremium = Math.ceil(this.priceExtraPremium * 1.3625);
      this.readOnlyPricePremiumClientExtra = true;
    }

    if(this.priceClientExtraPremium === 0){
      this.readOnlyPricePremiumClientExtra = false;
    }
  }

  /* calculate price */
  priceExtraInitial(){
    if(this.priceClientExtra != undefined){
      this.priceExtra = Math.ceil(this.priceClientExtra * 0.733944495);
      this.readOnlyPriceExtra = true;
    }

    if(this.priceExtra === 0){
      this.readOnlyPriceExtra = false;
    }
  }

  pricePlusExtra(){
    if(this.priceClientExtraPlus != undefined){
      this.priceExtraPlus = Math.ceil(this.priceClientExtraPlus * 0.733944495);
      this.readOnlyPricePlusExtra = true;
    }

    if(this.priceExtraPlus === 0){
      this.readOnlyPricePlusExtra = false;
    }
  }

  pricePremiumExtra(){
    if(this.priceClientExtraPremium != undefined){
      this.priceExtraPremium = Math.ceil(this.priceClientExtraPremium *  0.733944495);
      this.readOnlyPricePremiumExtra = true;
    }

    if(this.priceExtraPremium === 0){
      this.readOnlyPricePremiumExtra = false;
    }
  }
  
}
