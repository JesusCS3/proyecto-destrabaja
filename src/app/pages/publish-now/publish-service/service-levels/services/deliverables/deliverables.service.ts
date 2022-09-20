import { Injectable } from '@angular/core';
import { deliverable } from '../../models/deliverables/deliverables.model';

@Injectable({
  providedIn: 'root'
})
export class DeliverablesService {

  deliverable:deliverable[]=[
    new deliverable("Logo en formato editable", true, true, true),
    new deliverable("Logo en formato para redes sociales", false, true, true),
  ];

  constructor() { }
}
