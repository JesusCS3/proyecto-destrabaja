import { Component, OnInit } from '@angular/core';
import { extras } from './models/extras.model';
import { ExtrasService } from './services/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  /***** variables for save information *****/
  extras:extras[] = [];

  /* variables for extras */

  extraInput:string;
  checkboxInitialPlanExtra: boolean;
  checkboxPlusPlanExtra: boolean;
  checkboxPremiumPlanExtra: boolean;

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

  constructor(private extrasService:ExtrasService) { }

  ngOnInit(): void {
    this.extras = this.extrasService.extras;
  }

  /* delete extra information */
  deleteExtra(extras:extras){
    this.extrasService.delete(extras);
  }

  /* save extra information */
  addExtra(){
    this.extrasService.extras.push(new extras(this.extraInput, this.checkboxInitialPlanExtra,
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

}
