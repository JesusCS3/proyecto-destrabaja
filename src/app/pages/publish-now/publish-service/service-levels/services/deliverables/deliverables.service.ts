import { deliverables } from './../../models/deliverables/deliverables.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeliverablesService {

  deliverables:deliverables[]=[
    new deliverables("Logo en formato editable", true, true, true),
    new deliverables("Logo en formato para redes sociales", false, true, true),
  ];

  delete(deliverable:deliverables){
    const index: number = this.deliverables.indexOf(deliverable);
    this.deliverables.splice(index, 1);
  }

  constructor() { }
}
