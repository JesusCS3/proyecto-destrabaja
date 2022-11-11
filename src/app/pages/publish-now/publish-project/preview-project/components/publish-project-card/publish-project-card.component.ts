import { Component, Input, OnInit } from '@angular/core';
import { generalInfoProject } from '../../../general-info-project/models/general-info-project.model';
import { serviceDescriptionProject } from '../../../service-description-project/models/service-description-project.model';
import { ServiceDescriptionProjectService } from '../../../service-description-project/services/service-description-project.service';

@Component({
  selector: 'app-publish-project-card',
  templateUrl: './publish-project-card.component.html',
  styleUrls: ['./publish-project-card.component.css']
})
export class PublishProjectCardComponent implements OnInit {

  /* variable to receive preview image to display on the service card and service table */
  @Input() previewImg: string;
  @Input() previewImgTwo: string;
  @Input() previewImgThree: string;

  /* variable to receive preview video to display on the service card and service table */
  @Input() previewVideo: string;

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfoProject;
  @Input() serviceDescription!: serviceDescriptionProject;

  /* project description info */
  projectDescription: serviceDescriptionProject[] = [];
  shortDescription: any;

  constructor(public serviceDescriptionService: ServiceDescriptionProjectService) { }

  ngOnInit(): void {
    this.projectDescription = this.serviceDescriptionService.serviceDescriptionProject;
    this.shortDescription = this.serviceDescriptionService.shortDescription;
  }

}
