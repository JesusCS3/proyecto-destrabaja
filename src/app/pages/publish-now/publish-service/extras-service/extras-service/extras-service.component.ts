import { initialPlan } from './../../levels-service/models/levels-service/levels-service.model';
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

  /* disabled price inputs */
  readOnlyPriceClientExtra:boolean = false;
  readOnlyPriceExtra:boolean = false;
  readOnlyPricePlusClientExtra:boolean = false;
  readOnlyPricePlusExtra:boolean = false;
  readOnlyPricePremiumClientExtra:boolean = false;
  readOnlyPricePremiumExtra:boolean = false;

  /* *** initial plan *** */
  checkboxInitialPlanExtra: boolean;
  deliveryTimeExtra: number;
  priceExtra: number;
  priceClientExtra: number;

  /* *** plus plan *** */
  checkboxPlusPlanExtra: boolean = false;
  deliveryTimeExtraPlus: number;
  priceExtraPlus: number;
  priceClientExtraPlus: number;

  /* *** premium plan *** */
  checkboxPremiumPlanExtra: boolean = false;
  deliveryTimeExtraPremium: number;
  priceExtraPremium: number;
  priceClientExtraPremium: number;

   /* variables for extras service */

   nameExtra:string;

   /* initial plans */
   initialPlanExtra: boolean = true;
   deliveryTimeInitialPlanExtra: number;
   priceInitialPlanExtra: number;
   priceClientInitialPlanExtra: number;

   /* plus plan */
   plusPlanExtra: boolean = false;
   deliveryTimePlusPlanExtra: number;
   pricePlusPlanExtra: number;
   priceClientPlusPlanExtra: number;
 
   /* premium plan */
   premiumPlanExtra: boolean = false;
   deliveryTimePremiumPlanExtra: number;
   pricePremiumPlanExtra: number;
   priceClientPremiumPlanExtra: number;


  constructor(
    private extrasServiceService:ExtrasServiceService
  ) { }

  ngOnInit(): void {

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

  sendInitialPlanExtra(initialPlanExtra: any) {
    this.extrasServiceService.initialPlanExtraData(initialPlanExtra.target.value);
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

  sendPlusPlanExtra(plusPlanExtra: any) {
    this.extrasServiceService.plusPlanExtraData(plusPlanExtra.target.value);
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

  sendPremiumPlanExtra(premiumPlanExtra: any) {
    this.extrasServiceService.premiumPlanExtraData(premiumPlanExtra.target.value);
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
      this.readOnlyPriceClientExtra = true;
    }

    if(this.priceClientInitialPlanExtra === 0){
      this.readOnlyPriceClientExtra = false;
    }
  }

  clientPricePlusPlanExtra(){
    if(this.pricePlusPlanExtra != undefined){
      this.priceClientPlusPlanExtra = Math.ceil(this.pricePlusPlanExtra * 1.376263);
      this.readOnlyPricePlusClientExtra = true;
    }

    if(this.priceClientPlusPlanExtra === 0){
      this.readOnlyPricePlusClientExtra = false;
    }
  }

  clientPricePremiumPlanExtra(){
    if(this.pricePremiumPlanExtra != undefined){
      this.priceClientPremiumPlanExtra = Math.ceil(this.pricePremiumPlanExtra * 1.376263);
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
      this.readOnlyPriceExtra = true;
    }

    if(this.priceInitialPlanExtra === 0){
      this.readOnlyPriceExtra = false;
    }
  }

  priceExtraPlusPlan(){
    if(this.priceClientPlusPlanExtra != undefined){
      this.pricePlusPlanExtra = Math.ceil(this.priceClientPlusPlanExtra / 1.376263);
      this.readOnlyPricePlusExtra = true;
    }

    if(this.pricePlusPlanExtra === 0){
      this.readOnlyPricePlusExtra = false;
    }
  }

  priceExtraPremiumPlan(){
    if(this.priceClientPremiumPlanExtra != undefined){
      this.pricePremiumPlanExtra = Math.ceil(this.priceClientPremiumPlanExtra / 1.376263);
      this.readOnlyPricePremiumExtra = true;
    }

    if(this.pricePremiumPlanExtra === 0){
      this.readOnlyPricePremiumExtra = false;
    }
  }

  /* *** clear information *** */
  clearInfoPlusPlanExtra: any;
  clearInfoPremiumPlanExtra: any;

  clearInfoPlus(){
    this.clearInfoPlusPlanExtra = this.extrasServiceService.clearInfoPlusPlanExtra(); 
  }

  clearInfoPremium(){
    this.clearInfoPremiumPlanExtra = this.extrasServiceService.clearInfoPremiumPlanExtra(); 
  }


  /* extra funciones antes de modificacion  */


    //eliminar despues esta funcion
  /* delete extra information */
  deleteExtra(extraService:extraService){
    this.extrasServiceService.delete(extraService);
  }

  /* save extra information 
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
