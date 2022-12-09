import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { extraService } from '../models/extras-service.model';

@Injectable({
  providedIn: 'root'
})
export class ExtrasServiceService {

  extraService:extraService[]=[];

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
  initialPlanExtra:boolean = false;
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

  /* *** plus plan *** */
  plusPlanExtra:boolean = false;
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

  /* *** premium plan *** */
  premiumPlanExtra:boolean = false;
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

  /* *** save information *** */
  saveExtraService(){
    let extraServiceInfo = new extraService(this.nameExtra, this.initialPlanExtra, 
      this.deliveryTimeInitialPlanExtra, this.priceInitialPlanExtra, this.priceClientInitialPlanExtra,
      this.plusPlanExtra, this.deliveryTimePlusPlanExtra, this.pricePlusPlanExtra, 
      this.priceClientPlusPlanExtra, this.premiumPlanExtra, this.deliveryTimePremiumPlanExtra, 
      this.pricePremiumPlanExtra, this.priceClientPremiumPlanExtra);
    this.extraService.push(extraServiceInfo);
  }

  /* *** edit information *** */
  updateExtraService(extraServiceExtra:extraService){
    const index: number = this.extraService.indexOf(extraServiceExtra);

    let extraServiceNewExtra = new extraService(this.nameExtra, this.initialPlanExtra, 
      this.deliveryTimeInitialPlanExtra, this.priceInitialPlanExtra, this.priceClientInitialPlanExtra,
      this.plusPlanExtra, this.deliveryTimePlusPlanExtra, this.pricePlusPlanExtra, 
      this.priceClientPlusPlanExtra, this.premiumPlanExtra, this.deliveryTimePremiumPlanExtra, 
      this.pricePremiumPlanExtra, this.priceClientPremiumPlanExtra);
      
    this.extraService.splice(index, 1, extraServiceNewExtra);
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


  /* *** clear information *** */
    /* clear input and check box to add extra */
  clearInfo() {
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
  }

  /* *** delete information *** */
  deleteData(){
    const aLength: number = this.extraService.length;
    this.extraService.splice(0, aLength);
  }

}
