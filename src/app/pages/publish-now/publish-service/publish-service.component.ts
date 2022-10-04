import { serviceDescription } from './service-description/models/service-description.model';
import { generalInfo } from './general-info/models/general-info.model';
import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from './general-info/services/general-info.service';
import { ServiceDescriptionService } from './service-description/services/service-description.service';

@Component({
  selector: 'app-publish-service',
  templateUrl: './publish-service.component.html',
  styleUrls: ['./publish-service.component.css']
})
export class PublishServiceComponent implements OnInit {

  /* variable for service preview */
  preview: boolean = false;

  /* variable for preview img service */
  previewImg: string = '';

  /***** variables for save information *****/

  generalInfo:generalInfo[] = [];
  serviceDescription:serviceDescription[] = [];

  /***** variables to share information for preview *****/

  gnralInfo:any;
  serviceDescrip: any;

  constructor(private generalInfoService:GeneralInfoService, 
              private serviceDescriptionService:ServiceDescriptionService) { }

  ngOnInit(): void {
    this.generalInfo = this.generalInfoService.generalInfo;
    this.serviceDescription = this.serviceDescriptionService.serviceDescription;
  }

  /* receive information from general info component */
  addGeneralInfo(generalInfo:generalInfo) {
    this.generalInfoService.generalInfo.push(generalInfo);
    this.gnralInfo = generalInfo;
  }

  /* receive the preview image of the general info component */
  addPreviewImg(previewImage:any){
    this.previewImg = previewImage;
    //console.log(this.previewImg);
  }

  /* receive information from service description component */
  addServiceDescription(serviceDescription:serviceDescription){
    this.serviceDescriptionService.serviceDescription.push(serviceDescription);
    this.serviceDescrip = serviceDescription;
    //console.log("Esta es la informacion guardada en el servicio de descripcion de servicio" + JSON.stringify(this.serviceDescriptionService.serviceDescription));
    //console.log("Esta es la informacion para compartir con la vista previa" + JSON.stringify(this.serviceDescrip));
  }

  /* service preview */
  servicePreview(){
    this.preview = true;
  }

  /* edit service */
  editService(){
    this.preview = false;
  }

}
