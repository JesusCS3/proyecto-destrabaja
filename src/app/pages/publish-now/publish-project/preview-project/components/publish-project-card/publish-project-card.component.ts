import { Component, Input, OnInit } from '@angular/core';
import { generalInfoProject } from '../../../general-info-project/models/general-info-project.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
