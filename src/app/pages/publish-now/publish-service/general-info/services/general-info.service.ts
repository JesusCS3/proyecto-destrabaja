import { Injectable } from '@angular/core';
import { generalInfo } from '../models/general-info.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  generalInfo:generalInfo[] = []; 

  constructor() { }
}
