import { Component, OnInit } from '@angular/core';
import { GeneralInfoProjectService } from '../../../general-info-project/services/general-info-project.service';
import { requirementsProject } from '../../../requirements-project/models/requirements-project.model';
import { RequirementsProjectService } from '../../../requirements-project/services/requirements-project.service';
import { ServiceDescriptionProjectService } from '../../../service-description-project/services/service-description-project.service';

@Component({
  selector: 'app-project-screen',
  templateUrl: './project-screen.component.html',
  styleUrls: ['./project-screen.component.css']
})
export class ProjectScreenComponent implements OnInit {

  /* *** project information to display on the project screen *** */

  /* *** general info service *** */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  previewVideo: string;
  nameService: string;
  /* *** description service *** */
  shortDescription: string;
  longDescription: string;

  /* *** requierements *** */
  requirementsProject:requirementsProject[] = [];

  constructor(
    private generalInfoProjectService:GeneralInfoProjectService,
    private serviceDescriptionProjectService:ServiceDescriptionProjectService,
    private requirementsProjectService:RequirementsProjectService
  ) { }

  ngOnInit(): void {
    this.receiveInfo();
    /* receive info on service requirements */
    this.requirementsProject = this.requirementsProjectService.requirementsProject;
  }

  /* *** receive info on services *** */
  receiveInfo(){
    /* *** general info *** */
    this.previewImg = this.generalInfoProjectService.previewImg;
    this.previewImgTwo = this.generalInfoProjectService.previewImgTwo;
    this.previewImgThree = this.generalInfoProjectService.previewImgThree;
    this.previewVideo = this.generalInfoProjectService.previewVideo;
    this.nameService = this.generalInfoProjectService.nameService;
    /* *** description service *** */
    this.shortDescription = this.serviceDescriptionProjectService.shortDescription;
    this.longDescription = this.serviceDescriptionProjectService.longDescription;

  }

}
