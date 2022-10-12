import { Injectable } from '@angular/core';
import { extras } from '../models/extras.model';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  extras:extras[]=[];

  delete(extras:extras){
    const index: number = this.extras.indexOf(extras);
    this.extras.splice(index, 1);
  }

  constructor() { }
}
