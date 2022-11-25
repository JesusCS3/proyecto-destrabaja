import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FeaturesProjectService } from '../../../features-project/services/features-project.service';
import { GeneralInfoProjectService } from '../../../general-info-project/services/general-info-project.service';
import { requirementsProject } from '../../../requirements-project/models/requirements-project.model';
import { RequirementsProjectService } from '../../../requirements-project/services/requirements-project.service';
import { ServiceDescriptionProjectService } from '../../../service-description-project/services/service-description-project.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-screen',
  templateUrl: './project-screen.component.html',
  styleUrls: ['./project-screen.component.css'],
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
export class ProjectScreenComponent implements OnInit {

  /* *** carousel *** */
  @ViewChild('carouselProjectScreen', { static: true }) carouselProjectScreen: NgbCarousel;

  /* *** project information to display on the project screen *** */

  /* *** general info service *** */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  previewVideo: string;
  nameProject: string;
  /* *** description service *** */
  shortDescription: string;
  longDescription: string;
  /* *** features project *** */
  budget: number;
  deliveryDate: string;
  /* *** requierements *** */
  requirementsProject:requirementsProject[] = [];

  constructor(
    private generalInfoProjectService:GeneralInfoProjectService,
    private serviceDescriptionProjectService:ServiceDescriptionProjectService,
    private featuresProjectService:FeaturesProjectService,
    private requirementsProjectService:RequirementsProjectService,
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
    this.carouselProjectScreen.pause();
  }

  /* *** receive info on services *** */
  receiveInfo(){
    /* *** general info *** */
    this.previewImg = this.generalInfoProjectService.previewImg;
    this.previewImgTwo = this.generalInfoProjectService.previewImgTwo;
    this.previewImgThree = this.generalInfoProjectService.previewImgThree;
    this.previewVideo = this.generalInfoProjectService.previewVideo;
    this.nameProject = this.generalInfoProjectService.nameProject;
    /* *** description service *** */
    this.shortDescription = this.serviceDescriptionProjectService.shortDescription;
    this.longDescription = this.serviceDescriptionProjectService.longDescription;
    /* *** features project *** */
    this.budget = this.featuresProjectService.budget;
    this.deliveryDate = this.featuresProjectService.deliveryDate;
    /* *** requirements project *** */
    this.requirementsProject = this.requirementsProjectService.requirementsProject;
  }

}
