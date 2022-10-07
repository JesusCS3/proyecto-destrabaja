import { planName } from './../../models/plan-name/plan-name.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanNameService {

  planName:planName[]=[];

  constructor() { }
}
