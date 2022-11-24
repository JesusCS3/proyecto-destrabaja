import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DescriptionServiceService } from '../../../description-service/services/description-service.service';
import { extraService } from '../../../extras-service/models/extras-service.model';
import { ExtrasServiceService } from '../../../extras-service/services/extras-service.service';
import { GeneralInfoServiceService } from '../../../general-info-service/services/general-info-service.service';
import { deliverables } from '../../../levels-service/models/deliverables/deliverables.model';
import { DeliverablesService } from '../../../levels-service/services/deliverables/deliverables.service';
import { LevelsServiceService } from '../../../levels-service/services/levels-service/levels-service.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
      .carousel-control-next, .carousel-control-prev {
        position: absolute;
        top: 61px;
        bottom: 61px;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15%;
        padding: 0;
        color: #fff;
        text-align: center;
        background: 0 0;
        border: 0;
        opacity: .5;
        transition: opacity .15s ease;
      }
		`,
	]
})
export class ServiceScreenComponent implements OnInit {

  /* *** carousel *** */
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

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

  constructor(
    private generalInfoServiceService:GeneralInfoServiceService,
    private descriptionServiceService:DescriptionServiceService,
    private levelsServiceService:LevelsServiceService,
    private deliverableService:DeliverablesService, 
    private extraServiceService:ExtrasServiceService,
    private modalService: NgbModal,
    config: NgbCarouselConfig
  ) {
    /* customize default values of carousels */
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
   }

  ngOnInit(): void {
    this.receiveInfo();
    this.carousel.pause();
  }

  /* *** modal scrollable *** */
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  /* *** receive info on services *** */
  receiveInfo(){
    /* *** general info *** */
    this.previewImg = this.generalInfoServiceService.previewImg;
    this.previewImgTwo = this.generalInfoServiceService.previewImgTwo;
    this.previewImgThree = this.generalInfoServiceService.previewImgThree;
    this.previewVideo = this.generalInfoServiceService.previewVideo;
    this.nameService = this.generalInfoServiceService.nameService;
    /* *** description service *** */
    this.shortDescription = this.descriptionServiceService.shortDescription;
    this.longDescription = this.descriptionServiceService.longDescription;
    /* *** levels service *** */
    /* initial plan */  
    this.initialPlanName = this.levelsServiceService.initialPlanName;
    this.deliveryTimeInitialPlan = this.levelsServiceService.deliveryTimeInitialPlan;
    this.commentInitialPlan = this.levelsServiceService.commentInitialPlan;
    this.priceInitialPlan = this.levelsServiceService.priceInitialPlan;
    this.priceClientInitialPlan = this.levelsServiceService.priceClientInitialPlan;
    /* plus plan */
    this.plusPlanName = this.levelsServiceService.plusPlanName;
    this.deliveryTimePlusPlan = this.levelsServiceService.deliveryTimePlusPlan;
    this.commentPlusPlan = this.levelsServiceService.commentPlusPlan;
    this.pricePlusPlan = this.levelsServiceService.pricePlusPlan;
    this.priceClientPlusPlan = this.levelsServiceService.priceClientPlusPlan;
    /* premium plan */
    this.premiumPlanName = this.levelsServiceService.premiumPlanName;
    this.deliveryTimePremiumPlan = this.levelsServiceService.deliveryTimePremiumPlan;
    this.commentPremiumPlan = this.levelsServiceService.commentPremiumPlan;
    this.pricePremiumPlan = this.levelsServiceService.pricePremiumPlan;
    this.priceClientPremiumPlan = this.levelsServiceService.priceClientPremiumPlan;
    /* *** deliverables *** */
    this.deliverables = this.deliverableService.deliverables;
    /* *** extras *** */
    this.extraService = this.extraServiceService.extraService;

  }
  
}
