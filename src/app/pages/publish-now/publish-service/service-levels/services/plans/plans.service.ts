import { Injectable } from '@angular/core';
import { plans } from '../../models/plans/plans.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  plans:plans[]=[
    new plans("Logo Básico", "Logo en formato editable", 5, 5)
  ];

  constructor() { }
}
