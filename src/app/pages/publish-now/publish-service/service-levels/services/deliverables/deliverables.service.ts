import { deliverables } from './../../models/deliverables/deliverables.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeliverablesService {

  deliverables:deliverables[]=[
  ];

  delete(deliverable:deliverables){
    const index: number = this.deliverables.indexOf(deliverable);
    this.deliverables.splice(index, 1);
  }

  constructor() { }
}
