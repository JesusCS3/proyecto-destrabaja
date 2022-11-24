import { Component, OnInit, ViewChild } from '@angular/core';
import { DescriptionServiceService } from '../../../description-service/services/description-service.service';
import { GeneralInfoServiceService } from '../../../general-info-service/services/general-info-service.service';
import { LevelsServiceService } from '../../../levels-service/services/levels-service/levels-service.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-publish-service-card',
  templateUrl: './publish-service-card.component.html',
  styleUrls: ['./publish-service-card.component.css']
})
export class PublishServiceCardComponent implements OnInit {

  /* *** carousel *** */
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  /* *** service information to display on the service card *** */

  /* *** general info service *** */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  previewVideo: string;
  nameService: string;
  /* *** description service *** */
  shortDescription: string;
  /* *** levels service *** */
  /* initial plan */
  priceClientInitialPlan: number;

  score: number = 0.0;

  constructor(
    private generalInfoServiceService:GeneralInfoServiceService,
    private descriptionServiceService:DescriptionServiceService,
    private levelsServiceService:LevelsServiceService,
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
    /* *** levels service *** */
    /* initial plan */
    this.priceClientInitialPlan = this.levelsServiceService.priceClientInitialPlan;
  }

}
