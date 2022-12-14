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

  /* disabled price inputs */
  readOnlyPriceClientExtra:boolean = false;
  readOnlyPriceExtra:boolean = false;
  readOnlyPricePlusClientExtra:boolean = false;
  readOnlyPricePlusExtra:boolean = false;
  readOnlyPricePremiumClientExtra:boolean = false;
  readOnlyPricePremiumExtra:boolean = false;

  /* variables for extras service */

   nameExtra:string;

   /* initial plans */
   initialPlanExtra: boolean;
   deliveryTimeInitialPlanExtra: number;
   priceInitialPlanExtra: number;
   priceClientInitialPlanExtra: number;

   /* plus plan */
   plusPlanExtra: boolean;
   deliveryTimePlusPlanExtra: number;
   pricePlusPlanExtra: number;
   priceClientPlusPlanExtra: number;
 
   /* premium plan */
   premiumPlanExtra: boolean;
   deliveryTimePremiumPlanExtra: number;
   pricePremiumPlanExtra: number;
   priceClientPremiumPlanExtra: number;

   /* edit extras */
  editExtras: boolean = false;


  constructor(
    private extrasServiceService:ExtrasServiceService
  ) { }

  ngOnInit(): void {

    this.actualizarInfo();

    //eliminar despues esta linea
    this.extraService = this.extrasServiceService.extraService;

    /* fill with previously saved values */
    this.receiveInfo();

    /* name extra */
    this.extrasServiceService.nameExtraObservable.subscribe(response => {
      this.nameExtra = response;
    });

    /* initial plan */

    this.extrasServiceService.initialPlanExtraObservable.subscribe(response => {
      this.initialPlanExtra = response;
    });

    this.extrasServiceService.deliveryTimeInitialPlanExtraObservable.subscribe(response => {
      this.deliveryTimeInitialPlanExtra = response;
    });

    this.extrasServiceService.priceInitialPlanExtraObservable.subscribe(response => {
      this.priceInitialPlanExtra = response;
    });

    this.extrasServiceService.priceClientInitialPlanExtraObservable.subscribe(response => {
      this.priceClientInitialPlanExtra = response;
    });

    /* plus plan */

    this.extrasServiceService.plusPlanExtraObservable.subscribe(response => {
      this.plusPlanExtra = response;
    });

    this.extrasServiceService.deliveryTimePlusPlanExtraObservable.subscribe(response => {
      this.deliveryTimePlusPlanExtra = response;
    });

    this.extrasServiceService.pricePlusPlanExtraObservable.subscribe(response => {
      this.pricePlusPlanExtra = response;
    });

    this.extrasServiceService.priceClientPlusPlanExtraObservable.subscribe(response => {
      this.priceClientPlusPlanExtra = response;
    });

    /* premium plan */

    this.extrasServiceService.premiumPlanExtraObservable.subscribe(response => {
      this.premiumPlanExtra = response;
    });

    this.extrasServiceService.deliveryTimePremiumPlanExtraObservable.subscribe(response => {
      this.deliveryTimePremiumPlanExtra = response;
    });

    this.extrasServiceService.pricePremiumPlanExtraObservable.subscribe(response => {
      this.pricePremiumPlanExtra = response;
    });

    this.extrasServiceService.priceClientPremiumPlanExtraObservable.subscribe(response => {
      this.priceClientPremiumPlanExtra = response;
    });
  }

  /* fill with previously saved values */
  receiveInfo(){
  /* name extra */
  this.nameExtra = this.extrasServiceService.nameExtra;
  /* initial plan */  
  this.initialPlanExtra = this.extrasServiceService.initialPlanExtra;
  this.deliveryTimeInitialPlanExtra = this.extrasServiceService.deliveryTimeInitialPlanExtra;
  this.priceInitialPlanExtra = this.extrasServiceService.priceInitialPlanExtra;
  this.priceClientInitialPlanExtra = this.extrasServiceService.priceClientInitialPlanExtra;
  /* plus plan */
  this.plusPlanExtra = this.extrasServiceService.plusPlanExtra;
  this.deliveryTimePlusPlanExtra = this.extrasServiceService.deliveryTimePlusPlanExtra;
  this.pricePlusPlanExtra = this.extrasServiceService.pricePlusPlanExtra;
  this.priceClientPlusPlanExtra = this.extrasServiceService.priceClientPlusPlanExtra;
  /* premium plan */
  this.premiumPlanExtra = this.extrasServiceService.premiumPlanExtra;
  this.deliveryTimePremiumPlanExtra = this.extrasServiceService.deliveryTimePremiumPlanExtra;
  this.pricePremiumPlanExtra = this.extrasServiceService.pricePremiumPlanExtra;
  this.priceClientPremiumPlanExtra = this.extrasServiceService.priceClientPremiumPlanExtra;

  /* 
  
  if(this.deliveryTimeExtraPlus != undefined || this.deliveryTimeExtraPlus != null){
    this.plusPlanExtra = true;
  }
  
  if(this.deliveryTimeExtraPlus === 0){
    this.plusPlanExtra = false;
  }
  
  if(this.deliveryTimeExtraPremium != undefined || this.deliveryTimeExtraPremium != null){
    this.premiumPlanExtra = true;
  }

  if(this.deliveryTimeExtraPremium === 0){
    this.premiumPlanExtra = false;
  } */

  }

  /* send info name extra */
  sendNameExtra(nameExtra: any) {
    this.extrasServiceService.nameExtraData(nameExtra.target.value);
  }

  /* send info initial plan extra */

  sendInitialPlanExtra() {
    this.extrasServiceService.initialPlanExtraData(this.initialPlanExtra);
  }

  sendDeliveryTimeInitialPlanExtra(deliveryTimeInitialPlanExtra: any) {
    this.extrasServiceService.deliveryTimeInitialPlanExtraData(deliveryTimeInitialPlanExtra.target.value);
  }

  sendPriceInitialPlanExtra(priceInitialPlanExtra: any) {
    this.extrasServiceService.priceInitialPlanExtraData(priceInitialPlanExtra.target.value);
  }

  sendPriceClientInitialPlanExtra(priceClientInitialPlanExtra: any) {
    this.extrasServiceService.priceClientInitialPlanExtraData(priceClientInitialPlanExtra.target.value);
  }

  /* send info plus plan extra*/

  sendPlusPlanExtra() {
    this.extrasServiceService.plusPlanExtraData(this.plusPlanExtra);
  }

  sendDeliveryTimePlusPlanExtra(deliveryTimePlusPlanExtra: any) {
    this.extrasServiceService.deliveryTimePlusPlanExtraData(deliveryTimePlusPlanExtra.target.value);
  }

  sendPricePlusPlanExtra(pricePlusPlanExtra: any) {
    this.extrasServiceService.pricePlusPlanExtraData(pricePlusPlanExtra.target.value);
  }

  sendPriceClientPlusPlanExtra(priceClientPlusPlanExtra: any) {
    this.extrasServiceService.priceClientPlusPlanExtraData(priceClientPlusPlanExtra.target.value);
  }

  /* send info premium plan extra*/

  sendPremiumPlanExtra() {
    this.extrasServiceService.premiumPlanExtraData(this.premiumPlanExtra);
  }

  sendDeliveryTimePremiumPlanExtra(deliveryTimePremiumPlanExtra: any) {
    this.extrasServiceService.deliveryTimePremiumPlanExtraData(deliveryTimePremiumPlanExtra.target.value);
  }

  sendPricePremiumPlanExtra(pricePremiumPlanExtra: any) {
    this.extrasServiceService.pricePremiumPlanExtraData(pricePremiumPlanExtra.target.value);
  }

  sendPriceClientPremiumPlanExtra(priceClientPremiumPlanExtra: any) {
    this.extrasServiceService.priceClientPremiumPlanExtraData(priceClientPremiumPlanExtra.target.value);
  }

  /* calculate the customer price */
  clientPriceInitialPlanExtra(){
    if(this.priceInitialPlanExtra != undefined){
      this.priceClientInitialPlanExtra = Math.ceil(this.priceInitialPlanExtra * 1.376263);
      this.extrasServiceService.priceClientInitialPlanExtraData(this.priceClientInitialPlanExtra);
      this.readOnlyPriceClientExtra = true;
    }

    if(this.priceClientInitialPlanExtra === 0){
      this.readOnlyPriceClientExtra = false;
    }
  }

  clientPricePlusPlanExtra(){
    if(this.pricePlusPlanExtra != undefined){
      this.priceClientPlusPlanExtra = Math.ceil(this.pricePlusPlanExtra * 1.376263);
      this.extrasServiceService.priceClientPlusPlanExtraData(this.priceClientPlusPlanExtra);
      this.readOnlyPricePlusClientExtra = true;
    }

    if(this.priceClientPlusPlanExtra === 0){
      this.readOnlyPricePlusClientExtra = false;
    }
  }

  clientPricePremiumPlanExtra(){
    if(this.pricePremiumPlanExtra != undefined){
      this.priceClientPremiumPlanExtra = Math.ceil(this.pricePremiumPlanExtra * 1.376263);
      this.extrasServiceService.priceClientPremiumPlanExtraData(this.priceClientPremiumPlanExtra);
      this.readOnlyPricePremiumClientExtra = true;
    }

    if(this.priceClientPremiumPlanExtra === 0){
      this.readOnlyPricePremiumClientExtra = false;
    }
  }

  /* calculate price */
  priceExtraInitialPlan(){
    if(this.priceClientInitialPlanExtra != undefined){
      this.priceInitialPlanExtra = Math.ceil(this.priceClientInitialPlanExtra / 1.376263);
      this.extrasServiceService.priceInitialPlanExtraData(this.priceInitialPlanExtra);
      this.readOnlyPriceExtra = true;
    }

    if(this.priceInitialPlanExtra === 0){
      this.readOnlyPriceExtra = false;
    }
  }

  priceExtraPlusPlan(){
    if(this.priceClientPlusPlanExtra != undefined){
      this.pricePlusPlanExtra = Math.ceil(this.priceClientPlusPlanExtra / 1.376263);
      this.extrasServiceService.pricePlusPlanExtraData(this.pricePlusPlanExtra);
      this.readOnlyPricePlusExtra = true;
    }

    if(this.pricePlusPlanExtra === 0){
      this.readOnlyPricePlusExtra = false;
    }
  }

  priceExtraPremiumPlan(){
    if(this.priceClientPremiumPlanExtra != undefined){
      this.pricePremiumPlanExtra = Math.ceil(this.priceClientPremiumPlanExtra / 1.376263);
      this.extrasServiceService.pricePremiumPlanExtraData(this.pricePremiumPlanExtra);
      this.readOnlyPricePremiumExtra = true;
    }

    if(this.pricePremiumPlanExtra === 0){
      this.readOnlyPricePremiumExtra = false;
    }
  }

  /* *** save information *** */
  saveInfoExtraService:any;

  saveExtraService(){
    this.saveInfoExtraService = this.extrasServiceService.saveExtraService();
    console.log(this.initialPlanExtra);
  }

  /* *** update info *** */

  editExtrasInfo(){
    this.editExtras = true;
  }
  
  updateInfo(extraServiceUpdate:extraService){
    const index: number = this.extraService.indexOf(extraServiceUpdate);

    for(let extras of this.extraService){
      let extraServiceNewExtra = new extraService(extras.nameExtra, extras.initialPlanExtra, 
        extras.deliveryTimeExtra, extras.priceExtra, extras.priceClientExtra,
        extras.plusPlanExtra, extras.deliveryTimeExtraPlus, extras.priceExtraPlus, 
        extras.priceClientExtraPlus, extras.premiumPlanExtra, extras.deliveryTimeExtraPremium, 
        extras.priceExtraPremium, extras.priceClientExtraPremium);
        
      this.extraService.splice(index, 1, extraServiceNewExtra);
      console.log(extras);
      console.log(index);
    }
  }

  cancelEdit(){
    this.editExtras = false;
  }

  /* save extra information */
  addExtra(){
    this.extrasServiceService.extraService.push(new extraService(this.nameExtra, this.initialPlanExtra, 
      this.deliveryTimeInitialPlanExtra, this.priceInitialPlanExtra, this.priceClientInitialPlanExtra,
      this.plusPlanExtra, this.deliveryTimePlusPlanExtra, this.pricePlusPlanExtra, 
      this.priceClientPlusPlanExtra, this.premiumPlanExtra, this.deliveryTimePremiumPlanExtra, 
      this.pricePremiumPlanExtra, this.priceClientPremiumPlanExtra));
  }

  /* *** clear information *** */

  clearInfoExtra: any;
  clearInfo(){
    this.nameExtra = '';

    /* initial plans */
    this.initialPlanExtra = false;
    this.deliveryTimeInitialPlanExtra = 0;
    this.priceInitialPlanExtra = 0;
    this.priceClientInitialPlanExtra = 0;
 
    /* plus plan */
    this.plusPlanExtra = false;
    this.deliveryTimePlusPlanExtra = 0;
    this.pricePlusPlanExtra = 0;
    this.priceClientPlusPlanExtra = 0;
  
    /* premium plan */
    this.premiumPlanExtra = false;
    this.deliveryTimePremiumPlanExtra = 0;
    this.pricePremiumPlanExtra = 0;
    this.priceClientPremiumPlanExtra = 0; 

    /* clear info on service */
    this.clearInfoExtra = this.extrasServiceService.clearInfo();
  }

  /* extra funciones antes de modificacion  */


    //eliminar despues esta funcion
  /* delete extra information */
  deleteExtra(extraService:extraService){
    this.extrasServiceService.delete(extraService);
  }

  actualizarInfo(){
    var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
    var removed = myFish.splice(0, 4, 'parrot', 'anemone', 'blue');

    console.log('original: ' + myFish);
    console.log('removido: ' + removed);
  }
  
}
