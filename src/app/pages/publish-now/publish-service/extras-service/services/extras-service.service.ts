import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { extraService, extraServicePlus, extraServicePremium } from '../models/extras-service.model';

@Injectable({
  providedIn: 'root'
})
export class ExtrasServiceService {

  extraService:extraService[]=[];
  extraServicePlus:extraServicePlus[]=[];
  extraServicePremium:extraServicePremium[]=[];

  /* *** send information from extras service *** */

  /* *** all plans *** */
  nameExtra:string;
  private nameExtraSubject = new Subject<string>();
  nameExtraObservable = this.nameExtraSubject.asObservable();

  nameExtraData(nameExtra: string){
    this.nameExtra = nameExtra;
    this.nameExtraSubject.next(nameExtra);
  }

  /* *** initial plan *** */
  initialPlanExtra:boolean;
  private initialPlanExtraSubject = new Subject<boolean>();
  initialPlanExtraObservable = this.initialPlanExtraSubject.asObservable();

  initialPlanExtraData(initialPlanExtra: boolean){
    this.initialPlanExtra = initialPlanExtra;
    this.initialPlanExtraSubject.next(initialPlanExtra);
  }

  deliveryTimeInitialPlanExtra: number;
  private deliveryTimeInitialPlanExtraSubject = new Subject<number>();
  deliveryTimeInitialPlanExtraObservable = this.deliveryTimeInitialPlanExtraSubject.asObservable();

  deliveryTimeInitialPlanExtraData(deliveryTimeInitialPlanExtra: number){
    this.deliveryTimeInitialPlanExtra = deliveryTimeInitialPlanExtra;
    this.deliveryTimeInitialPlanExtraSubject.next(deliveryTimeInitialPlanExtra);
  }

  priceInitialPlanExtra: number;
  private priceInitialPlanExtraSubject = new Subject<number>();
  priceInitialPlanExtraObservable = this.priceInitialPlanExtraSubject.asObservable();

  priceInitialPlanExtraData(priceInitialPlanExtra: number){
    this.priceInitialPlanExtra = priceInitialPlanExtra;
    this.priceInitialPlanExtraSubject.next(priceInitialPlanExtra);
  }

  priceClientInitialPlanExtra: number;
  private priceClientInitialPlanExtraSubject = new Subject<number>();
  priceClientInitialPlanExtraObservable = this.priceClientInitialPlanExtraSubject.asObservable();

  priceClientInitialPlanExtraData(priceClientInitialPlanExtra: number){
    this.priceClientInitialPlanExtra = priceClientInitialPlanExtra;
    this.priceClientInitialPlanExtraSubject.next(priceClientInitialPlanExtra);
  }

  /* *** save information initial plan *** */
  saveExtraService(){
    let extraServiceInitial = new extraService(this.nameExtra, this.initialPlanExtra, 
      this.deliveryTimeInitialPlanExtra, this.priceInitialPlanExtra, this.priceClientInitialPlanExtra);
    this.extraService.push(extraServiceInitial);
  }

  /* *** delete information *** */
  deleteExtraService(){
    const aLength: number = this.extraService.length;
    this.extraService.splice(0, aLength);
  }

  /*  delete */
  delete(extraService:extraService){
    const index: number = this.extraService.indexOf(extraService);
    this.extraService.splice(index, 1);
  }

  /* *** plus plan *** */
  plusPlanExtra:boolean;
  private plusPlanExtraSubject = new Subject<boolean>();
  plusPlanExtraObservable = this.plusPlanExtraSubject.asObservable();

  plusPlanExtraData(plusPlanExtra: boolean){
    this.plusPlanExtra = plusPlanExtra;
    this.plusPlanExtraSubject.next(plusPlanExtra);
  }

  deliveryTimePlusPlanExtra: number;
  private deliveryTimePlusPlanExtraSubject = new Subject<number>();
  deliveryTimePlusPlanExtraObservable = this.deliveryTimePlusPlanExtraSubject.asObservable();

  deliveryTimePlusPlanExtraData(deliveryTimePlusPlanExtra: number){
    this.deliveryTimePlusPlanExtra = deliveryTimePlusPlanExtra;
    this.deliveryTimePlusPlanExtraSubject.next(deliveryTimePlusPlanExtra);
  }

  pricePlusPlanExtra: number;
  private pricePlusPlanExtraSubject = new Subject<number>();
  pricePlusPlanExtraObservable = this.pricePlusPlanExtraSubject.asObservable();

  pricePlusPlanExtraData(pricePlusPlanExtra: number){
    this.pricePlusPlanExtra = pricePlusPlanExtra;
    this.pricePlusPlanExtraSubject.next(pricePlusPlanExtra);
  }

  priceClientPlusPlanExtra: number;
  private priceClientPlusPlanExtraSubject = new Subject<number>();
  priceClientPlusPlanExtraObservable = this.priceClientPlusPlanExtraSubject.asObservable();

  priceClientPlusPlanExtraData(priceClientPlusPlanExtra: number){
    this.priceClientPlusPlanExtra = priceClientPlusPlanExtra;
    this.priceClientPlusPlanExtraSubject.next(priceClientPlusPlanExtra);
  }

  /* *** save information plus plan *** */
   saveExtraServicePlus(){
    let extraServicePlusPlan = new extraServicePlus(this.nameExtra, this.plusPlanExtra, 
      this.deliveryTimePlusPlanExtra, this.pricePlusPlanExtra, this.priceClientPlusPlanExtra);
    this.extraServicePlus.push(extraServicePlusPlan);
  }

  /* *** delete information *** */
  deleteExtraServicePlus(){
    const aLength: number = this.extraServicePlus.length;
    this.extraServicePlus.splice(0, aLength);
  }

  /*  delete */
  deletePlus(extraServicePlus:extraServicePlus){
    const index: number = this.extraServicePlus.indexOf(extraServicePlus);
    this.extraServicePlus.splice(index, 1);
  }


  /* *** premium plan *** */
  premiumPlanExtra:boolean;
  private premiumPlanExtraSubject = new Subject<boolean>();
  premiumPlanExtraObservable = this.premiumPlanExtraSubject.asObservable();

  premiumPlanExtraData(premiumPlanExtra: boolean){
    this.premiumPlanExtra = premiumPlanExtra;
    this.premiumPlanExtraSubject.next(premiumPlanExtra);
  }

  deliveryTimePremiumPlanExtra: number;
  private deliveryTimePremiumPlanExtraSubject = new Subject<number>();
  deliveryTimePremiumPlanExtraObservable = this.deliveryTimePremiumPlanExtraSubject.asObservable();

  deliveryTimePremiumPlanExtraData(deliveryTimePremiumPlanExtra: number){
    this.deliveryTimePremiumPlanExtra = deliveryTimePremiumPlanExtra;
    this.deliveryTimePremiumPlanExtraSubject.next(deliveryTimePremiumPlanExtra);
  }

  pricePremiumPlanExtra: number;
  private pricePremiumPlanExtraSubject = new Subject<number>();
  pricePremiumPlanExtraObservable = this.pricePremiumPlanExtraSubject.asObservable();

  pricePremiumPlanExtraData(pricePremiumPlanExtra: number){
    this.pricePremiumPlanExtra = pricePremiumPlanExtra;
    this.pricePremiumPlanExtraSubject.next(pricePremiumPlanExtra);
  }

  priceClientPremiumPlanExtra: number;
  private priceClientPremiumPlanExtraSubject = new Subject<number>();
  priceClientPremiumPlanExtraObservable = this.priceClientPremiumPlanExtraSubject.asObservable();

  priceClientPremiumPlanExtraData(priceClientPremiumPlanExtra: number){
    this.priceClientPremiumPlanExtra = priceClientPremiumPlanExtra;
    this.priceClientPremiumPlanExtraSubject.next(priceClientPremiumPlanExtra);
  }

  /* *** save information plus plan *** */
  saveExtraServicePremium(){
    let extraServicePremiumPlan = new extraServicePremium(this.nameExtra, this.premiumPlanExtra, 
      this.deliveryTimePremiumPlanExtra, this.pricePremiumPlanExtra, this.priceClientPremiumPlanExtra);
    this.extraServicePremium.push(extraServicePremiumPlan);
  }

  /* *** delete information *** */
  deleteExtraServicePremium(){
    const aLength: number = this.extraServicePremium.length;
    this.extraServicePremium.splice(0, aLength);
  }

  /*  delete */
  deletePremium(extraServicePremium:extraServicePremium){
    const index: number = this.extraServicePremium.indexOf(extraServicePremium);
    this.extraServicePremium.splice(index, 1);
  }

  /* *** clear information *** */
  clearInfoInitialPlanExtra(){
    this.initialPlanExtra = false;
    this.deliveryTimeInitialPlanExtra = 0;
    this.priceInitialPlanExtra = 0;
    this.priceClientInitialPlanExtra = 0;
  }

  clearInfoPlusPlanExtra(){
    /* plus plan */
    this.plusPlanExtra = false;
    this.deliveryTimePlusPlanExtra = 0;
    this.pricePlusPlanExtra = 0;
    this.priceClientPlusPlanExtra = 0;
  }

  clearInfoPremiumPlanExtra(){
    /* premium plan */
    this.premiumPlanExtra = false;
    this.deliveryTimePremiumPlanExtra = 0;
    this.pricePremiumPlanExtra = 0;
    this.priceClientPremiumPlanExtra = 0;
  }

  /* *** delete information *** */
  deleteData(){
    const aLength: number = this.extraService.length;
    this.extraService.splice(0, aLength);
  }

}
