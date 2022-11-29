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

  /* variables for test */

  /* *** general info service *** */

  /* *** description service *** */

  /* *** levels service *** */
  /* deliverables */
  deliverables:deliverables[] = [];
  /* initial plan */  

  /* plus plan */

  /* premium plan */

  /* extras */
  extraService:extraService[] = [];
  /* requirements */
  requirementsService:requirementsService[] = [];

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
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  
  /* variable for service preview */
  preview: boolean = false;

  /* service preview */
  servicePreview() {
    this.preview = true;
  }

  /* edit service */
  editService() {
    this.preview = false;
  }

  /* variable to confirm publish a service */
  confirm: boolean = false;

  /* confirm service */
  confirmService() {
    this.confirm = true;
  }

  clearGeneralInfo:any;
  clearDescriptionService: any;
  clearInitialPlan: any;
  clearPlusPlan: any;
  clearPremiumPlan: any;
  clearDeliverables:any;
  clearExtras: any;
  clearRequirements: any;

  clearData(){
    /* *** general info *** */
    this.clearGeneralInfo = this.generalInfoServiceService.clearInfo();
    /* *** description service *** */
    this.clearDescriptionService = this.descriptionServiceService.clearInfo();
    /* *** levels service *** */
    this.clearInitialPlan = this.levelsServiceService.clearInfoInitialPlan();
    this.clearPlusPlan = this.levelsServiceService.clearInfoPlusPlan(); 
    this.clearPremiumPlan = this.levelsServiceService.clearInfoPremiumPlan();   
    /* *** deliverables *** */
    this.clearDeliverables = this.deliverableService.deleteData();
    /* *** extras *** */
    this.clearExtras = this.extraServiceService.deleteData();
    /* *** requirements *** */
    this.clearRequirements = this.requirementsServiceService.deleteData();
  }

}
