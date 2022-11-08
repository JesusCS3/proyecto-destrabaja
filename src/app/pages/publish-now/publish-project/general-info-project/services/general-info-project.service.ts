import { Injectable } from '@angular/core';
import { generalInfoProject } from '../models/general-info-project.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoProjectService {

  generalInfoProject: generalInfoProject[] = [];

  delete(generalInfoProject:generalInfoProject){
    const aLength: number = this.generalInfoProject.length;
    this.generalInfoProject.splice(0, aLength);
  }


  constructor() { }
}
