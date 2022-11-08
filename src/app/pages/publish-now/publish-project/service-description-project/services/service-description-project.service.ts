import { Injectable } from '@angular/core';
import { serviceDescriptionProject } from '../models/service-description-project.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionProjectService {

  serviceDescriptionProject: serviceDescriptionProject [] = [];

  delete(serviceDescriptionProject:serviceDescriptionProject){
    const aLength: number = this.serviceDescriptionProject.length;
    this.serviceDescriptionProject.splice(0, aLength);
  }

  constructor() { }
}
