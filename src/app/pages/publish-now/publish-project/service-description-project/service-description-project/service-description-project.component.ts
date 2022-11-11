import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { serviceDescriptionProject } from '../models/service-description-project.model';
import { ServiceDescriptionProjectService } from '../services/service-description-project.service';

@Component({
  selector: 'app-service-description-project',
  templateUrl: './service-description-project.component.html',
  styleUrls: ['./service-description-project.component.css']
})
export class ServiceDescriptionProjectComponent implements OnInit {
  mensajeOne: any;
  mensajeTwo: any;

  projectDescription: serviceDescriptionProject[] = [];

    /* share with the publish service component */
  @Output() shareServiceDescription = new EventEmitter<serviceDescriptionProject>();


  /* variables for counting characters */
  counterShortDescription = 0;
  counterLongDescription = 0;

  /* variables for service description */
  shortDescription: any;
  longDescription: any;

  constructor(private serviceDescriptionProjectService: ServiceDescriptionProjectService) { }

  ngOnInit(): void {
    this.serviceDescriptionProjectService.enviarMensajeObservable.subscribe(mensaje => {
      this.mensajeOne = mensaje;
    });

    this.serviceDescriptionProjectService.enviarMensajeTwoObservable.subscribe(mensaje => {
      this.mensajeTwo = mensaje;
    });

    this.serviceDescriptionProjectService.shortDescriptionObservable.subscribe(response => {
      this.shortDescription = response;
    });

    this.serviceDescriptionProjectService.longDescriptionObservable.subscribe(response => {
      this.longDescription = response;
    });

    this.projectDescription = this.serviceDescriptionProjectService.serviceDescriptionProject;
  }

    /* functions for counting characters */
  shortDescriptionCount(event: any) {
    this.counterShortDescription = event.target.value.length
  }

  longDescriptionCount(event: any) {
    this.counterLongDescription = event.target.value.length
  }

  /* sharing the new general info object with the publish service component */
  shareAddServiceDescription(){
    let shareServiceDescription = new serviceDescriptionProject(this.shortDescription, this.longDescription);
    this.shareServiceDescription.emit(shareServiceDescription);
  }

  /* prueba comunicacion entre componentes */
  @Output() textoCambiado: EventEmitter<any> = new EventEmitter<any>();

  cambioTexto(texto:any){
    this.textoCambiado.emit(texto.target.value);
  }

  /* prueba enviar informacion por servicio */


  cambiarMensaje(mensaje:any){
    this.serviceDescriptionProjectService.enviarMensaje(mensaje.target.value);
  }

  cambiarMensajeDos(mensajeDos:any){
    this.serviceDescriptionProjectService.enviarMensajeDos(mensajeDos.target.value);
  }

  /* send info */
  sendShortDescription(shortDescription:any){
    this.serviceDescriptionProjectService.shortDescriptionData(shortDescription.target.value);
  }

  sendLongDescription(longDescription:any){
    this.serviceDescriptionProjectService.longDescriptionData(longDescription.target.value);
  }
}
