import { Component, Input, OnInit } from '@angular/core';
import { generalInfoProject } from '../general-info-project/models/general-info-project.model';
import { serviceDescriptionProject } from '../service-description-project/models/service-description-project.model';
import { ServiceDescriptionProjectService } from '../service-description-project/services/service-description-project.service';

@Component({
  selector: 'app-preview-project',
  templateUrl: './preview-project.component.html',
  styleUrls: ['./preview-project.component.css']
})
export class PreviewProjectComponent implements OnInit {

  /* variable to receive preview image to display on the service card and service table */
  @Input() previewImg: string;
  @Input() previewImgTwo: string;
  @Input() previewImgThree: string;

  /* variable to receive preview video to display on the service card and service table */
  @Input() previewVideo: string;

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfoProject;
  @Input() serviceDescription!: serviceDescriptionProject;

  constructor(public serviceDescriptionService: ServiceDescriptionProjectService) { }

  ngOnInit(): void {
  }

  /* prueba comunicacion */
  @Input() textoHijo2: string;

  mensaje: any;
  mensajeDos: any;
  descripcionCorta: any;

  recibirCambios(){
    this.mensaje = this.serviceDescriptionService.mensajeOne;
    this.mensajeDos = this.serviceDescriptionService.mensajeTwo;
    this.descripcionCorta = this.serviceDescriptionService.shortDescription;
  }

}
