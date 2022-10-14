import { requirements } from './../models/requirements.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  requirements:requirements[]=[];

  delete(requirements:requirements){
    const index: number = this.requirements.indexOf(requirements);
    this.requirements.splice(index, 1);
  }

  constructor() { }
}
