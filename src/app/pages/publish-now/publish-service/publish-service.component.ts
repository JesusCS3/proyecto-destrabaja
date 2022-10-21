import { serviceDescription } from './service-description/models/service-description.model';
import { generalInfo } from './general-info/models/general-info.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GeneralInfoService } from './general-info/services/general-info.service';
import { ServiceDescriptionService } from './service-description/services/service-description.service';
import { features, featuresPlus, featuresPremium } from './service-levels/models/features/features.model';
import { FeaturesService } from './service-levels/services/features/features.service';
import { planName } from './service-levels/models/plan-name/plan-name.model';
import { PlanNameService } from './service-levels/services/plan-name/plan-name.service';

@Component({
  selector: 'app-publish-service',
  templateUrl: './publish-service.component.html',
  styleUrls: ['./publish-service.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.my-custom-class .tooltip-inner {
				background-color: #fff;
				font-size: 0.8rem;
        font-weight: bold;
        color: #425CC7;
        text-align: justify;
        padding: 10px;
        margin: 5px;
        max-width: 310px !important;
        box-shadow: rgba(0, 0, 0, 0.301) 0px 2px 4px 0px, rgba(0, 0, 0, 0.301) 0px 2px 16px 0px !important;
			}
			.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
				border-right-color: #fff;
			}
			.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
				border-left-color: #fff;
			}
			.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
				border-top-color: #fff;
			}
			.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
				border-bottom-color: #fff;
			}
		`,
	]
})
export class PublishServiceComponent implements OnInit {

  /* variable for service preview */
  preview: boolean = false;

  /* variable for preview img service */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;

  /* variable for preview video service */
  previewVideo: string;

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

  /* variables to display the plans in the preview */
  checkboxPlus:any;
  checkboxPremium:any;

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
  }

  addPreviewImgTwo(previewImageTwo: any) {
    this.previewImgTwo = previewImageTwo;
  }

  addPreviewImgThree(previewImageThree: any) {
    this.previewImgThree = previewImageThree;
  }

  /* receive the preview video of the general info component */
  addPreviewVideo(previewVideo: any) {
    this.previewVideo = previewVideo;
  }

  /* receive information from service description component */
  addServiceDescription(serviceDescription: serviceDescription) {
    this.serviceDescriptionService.serviceDescription.push(serviceDescription);
    this.serviceDescrip = serviceDescription;
    //console.log("Esta es la informacion guardada en el servicio de descripcion de servicio" + JSON.stringify(this.serviceDescriptionService.serviceDescription));
    //console.log("Esta es la informacion para compartir con la vista previa" + JSON.stringify(this.serviceDescrip));
  }

  /* receive information from service levels component */

  receiveCheckboxPlus(checkboxPlus:any){
    this.checkboxPlus = checkboxPlus;
  }

  receiveCheckboxPremium(checkboxPremium:any){
    this.checkboxPremium = checkboxPremium;
  }

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
