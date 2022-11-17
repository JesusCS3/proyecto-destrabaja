import { Injectable } from '@angular/core';
import { deliverables } from '../../models/deliverables/deliverables.model';

@Injectable({
  providedIn: 'root'
})
export class DeliverablesService {

  deliverables:deliverables [] = [];

  /* delete */
  delete(deliverable:deliverables){
    const index: number = this.deliverables.indexOf(deliverable);
    this.deliverables.splice(index, 1);
  }

}
