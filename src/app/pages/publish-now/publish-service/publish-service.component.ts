import { serviceDescription } from './service-description/models/service-description.model';
import { generalInfo } from './general-info/models/general-info.model';
import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from './general-info/services/general-info.service';
import { ServiceDescriptionService } from './service-description/services/service-description.service';
import { features, featuresPlus, featuresPremium } from './service-levels/models/features/features.model';
import { FeaturesService } from './service-levels/services/features/features.service';
import { planName } from './service-levels/models/plan-name/plan-name.model';
import { PlanNameService } from './service-levels/services/plan-name/plan-name.service';

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

  generalInfo: generalInfo[] = [];
  serviceDescription: serviceDescription[] = [];
  planName: planName[] = [];
  features: features[] = [];
  featuresPlus: featuresPlus[] = [];
  featuresPremium: featuresPremium[] = [];

  /***** variables to share information for preview *****/

  gnralInfo: any;
  serviceDescrip: any;
  planNames:any;
  feature: any;
  featurePlus: any;
  featurePremium: any;

  constructor(private generalInfoService: GeneralInfoService,
    private serviceDescriptionService: ServiceDescriptionService,
    private featuresService: FeaturesService,
    private planNameService:PlanNameService) { }

  ngOnInit(): void {
    this.generalInfo = this.generalInfoService.generalInfo;
    this.serviceDescription = this.serviceDescriptionService.serviceDescription;
    this.features = this.featuresService.features;
    this.featurePlus = this.featuresService.featuresPlus;
    this.featuresPremium = this.featuresService.featuresPremium;
    this.planName = this.planNameService.planName;
  }

  /* receive information from general info component */
  addGeneralInfo(generalInfo: generalInfo) {
    this.generalInfoService.generalInfo.push(generalInfo);
    this.gnralInfo = generalInfo;
  }

  /* receive the preview image of the general info component */
  addPreviewImg(previewImage: any) {
    this.previewImg = previewImage;
    //console.log(this.previewImg);
  }

  /* receive information from service description component */
  addServiceDescription(serviceDescription: serviceDescription) {
    this.serviceDescriptionService.serviceDescription.push(serviceDescription);
    this.serviceDescrip = serviceDescription;
    //console.log("Esta es la informacion guardada en el servicio de descripcion de servicio" + JSON.stringify(this.serviceDescriptionService.serviceDescription));
    //console.log("Esta es la informacion para compartir con la vista previa" + JSON.stringify(this.serviceDescrip));
  }

  /* receive information from service levels component */

  addPlanName(planName: planName){
    this.planNameService.planName.push(planName);
    this.planNames = planName;
  }

  addFeatures(features: features) {
    this.featuresService.features.push(features);
    this.feature = features;
  }

  addFeaturesPlus(featuresPlus: featuresPlus) {
    this.featuresService.featuresPlus.push(featuresPlus);
    this.featurePlus = featuresPlus;
  }

  addFeaturesPremium(featuresPremium: featuresPremium) {
    this.featuresService.featuresPremium.push(featuresPremium);
    this.featurePremium = featuresPremium;
  }

  /* service preview */
  servicePreview() {
    this.preview = true;
  }

  /* edit service */
  editService() {
    this.preview = false;
  }

}