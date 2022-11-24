import { Injectable } from '@angular/core';
import { extraService } from '../models/extras-service.model';

@Injectable({
  providedIn: 'root'
})
export class ExtrasServiceService {
  extraService:extraService[]=[];

  /*  delete */
  delete(extraService:extraService){
    const index: number = this.extraService.indexOf(extraService);
    this.extraService.splice(index, 1);
  }

  /* *** delete information *** */
  deleteData(){
    const aLength: number = this.extraService.length;
    this.extraService.splice(0, aLength);
  }

}
