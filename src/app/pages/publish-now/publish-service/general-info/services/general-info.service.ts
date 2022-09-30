import { Injectable } from '@angular/core';
import { generalInfo } from '../models/general-info.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  generalInfo:generalInfo[] = [
    new generalInfo("Logotipos para empresas en méxico","#logos","Diseño","Logotipos", "video", "imagenes")
  ]; 

  constructor() { }
}
