import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { DescriptionServiceService } from './description-service/services/description-service.service';
import { extraService } from './extras-service/models/extras-service.model';
import { ExtrasServiceService } from './extras-service/services/extras-service.service';
import { GeneralInfoServiceService } from './general-info-service/services/general-info-service.service';
import { deliverables } from './levels-service/models/deliverables/deliverables.model';
import { DeliverablesService } from './levels-service/services/deliverables/deliverables.service';
import { LevelsServiceService } from './levels-service/services/levels-service/levels-service.service';
import { requirementsService } from './requirements-service/models/requirements-service.model';
import { RequirementsServiceService } from './requirements-service/services/requirements-service.service';

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

    /* *** service information to display on the service screen *** */

  /* *** general info service *** */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  previewVideo: string;
  nameService: string;
  /* *** description service *** */
  shortDescription: string;
  longDescription: string;
  /* *** levels service *** */
  /* deliverables */
  deliverables:deliverables[] = [];
  /* initial plan */  
  initialPlanName:string;
  deliveryTimeInitialPlan: number;
  commentInitialPlan: string;
  priceInitialPlan: number;
  priceClientInitialPlan: number;
  /* plus plan */
  plusPlanName:string;
  deliveryTimePlusPlan: number;
  commentPlusPlan: string;
  pricePlusPlan: number;
  priceClientPlusPlan: number;
  /* premium plan */
  premiumPlanName:string;
  deliveryTimePremiumPlan: number;
  commentPremiumPlan: string;
  pricePremiumPlan: number;
  priceClientPremiumPlan: number;
  /* extras */
  extraService:extraService[] = [];
  /* requirements */
  requirementsService:requirementsService[] = [];

  /* variable for service preview */
  preview: boolean = false;

  /* variable to confirm publish a service */
  confirm: boolean = false;

  constructor(
    private generalInfoServiceService:GeneralInfoServiceService,
    private descriptionServiceService:DescriptionServiceService,
    private levelsServiceService:LevelsServiceService,
    private deliverableService:DeliverablesService, 
    private extraServiceService:ExtrasServiceService,
    private requirementsServiceService:RequirementsServiceService
  ) { }

  ngOnInit(): void {
    this.scrollTop();
    this.deliverables = this.deliverableService.deliverables;
    this.extraService = this.extraServiceService.extraService;
    this.requirementsService = this.requirementsServiceService.requirementsService;
  }

  /* *** scroll to top *** */
  @HostListener('window:scroll')
  checkScroll() {
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    console.log('[scroll]', scrollPosition);
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /* service preview */
  servicePreview() {
    this.preview = true;
  }

  /* edit service */
  editService() {
    this.preview = false;
  }

  /* confirm service */
  confirmService() {
    this.confirm = true;
  }

  /* delete  to add edited information */
deleteDeliverablesData(deliverables:deliverables){
  this.deliverableService.delete(deliverables);
}

  clearGeneralInfo:any;
  clearDeliverables:any;
  clearExtras: any;
  clearRequirements: any;

  clearData(){
    /* *** *** */
    this.clearGeneralInfo = this.generalInfoServiceService.clearInfo();
    /* *** deliverables *** */
    this.clearDeliverables = this.deliverableService.deleteData();
    /* *** extras *** */
    this.clearExtras = this.extraServiceService.deleteData();
    /* *** extras *** */
    this.clearRequirements = this.requirementsServiceService.deleteData();
  }

}
