import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { serviceDescriptionProject } from '../models/service-description-project.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionProjectService {

  serviceDescriptionProject: serviceDescriptionProject [] = [];

  /* *** send information from service description project *** */
  shortDescription: string;
  private shortDescriptionSubject = new Subject<string>();
  shortDescriptionObservable = this.shortDescriptionSubject.asObservable();

  shortDescriptionData(shortDescription: string){
    this.shortDescription = shortDescription;
    this.shortDescriptionSubject.next(shortDescription);
  }

  longDescription: string;
  private longDescriptionSubject = new Subject<string>();
  longDescriptionObservable = this.longDescriptionSubject.asObservable();

  longDescriptionData(longDescription: string){
    this.longDescription = longDescription;
    this.longDescriptionSubject.next(longDescription);
  }

  /* *** save information *** */
  save(){
    let projectDescription = new serviceDescriptionProject(this.shortDescription, this.longDescription);
    this.serviceDescriptionProject.push(projectDescription);
    console.log('info. ' + this.serviceDescriptionProject);
  }

  /* *** delete information *** */
  delete(serviceDescriptionProject:serviceDescriptionProject){
    const aLength: number = this.serviceDescriptionProject.length;
    this.serviceDescriptionProject.splice(0, aLength);
    console.log('info. ' + this.serviceDescriptionProject);
  }

  constructor() { }
}
