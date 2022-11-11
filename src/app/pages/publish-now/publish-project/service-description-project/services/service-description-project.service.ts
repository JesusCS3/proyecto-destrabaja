import { serviceDescription } from './../../../publish-service/service-description/models/service-description.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { serviceDescriptionProject } from '../models/service-description-project.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionProjectService {

  serviceDescriptionProject: serviceDescriptionProject [] = [];
 
  /* prueba comunicacion de componentes por servicio */
  mensajeOne: any;
  private enviarMensajeSubject = new Subject<any>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensajeOne: any){
    this.mensajeOne = mensajeOne;
    this.enviarMensajeSubject.next(mensajeOne);
  }

  mensajeTwo: any;
  private enviarMensajeTwoSubject = new Subject<any>();
  enviarMensajeTwoObservable = this.enviarMensajeTwoSubject.asObservable();

  enviarMensajeDos(mensajeTwo: any){
    this.mensajeTwo = mensajeTwo;
    this.enviarMensajeSubject.next(mensajeTwo);
  }

  /* send information from service description project */
  shortDescription: any;
  private shortDescriptionSubject = new Subject<any>();
  shortDescriptionObservable = this.shortDescriptionSubject.asObservable();

  shortDescriptionData(shortDescription: any){
    this.shortDescription = shortDescription;
    this.shortDescriptionSubject.next(shortDescription);
  }

  longDescription: any;
  private longDescriptionSubject = new Subject<any>();
  longDescriptionObservable = this.longDescriptionSubject.asObservable();

  longDescriptionData(longDescription: any){
    this.longDescription = longDescription;
    this.longDescriptionSubject.next(longDescription);
  }

  save(){
    let projectDescription = new serviceDescriptionProject(this.shortDescription, this.longDescription);
    this.serviceDescriptionProject.push(projectDescription);
  }

  delete(serviceDescriptionProject:serviceDescriptionProject){
    const aLength: number = this.serviceDescriptionProject.length;
    this.serviceDescriptionProject.splice(0, aLength);
  }

  constructor() { }
}
