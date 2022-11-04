import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { generalInfoProject } from './general-info-project/models/general-info-project.model';
import { GeneralInfoProjectService } from './general-info-project/services/general-info-project.service';

@Component({
  selector: 'app-publish-project',
  templateUrl: './publish-project.component.html',
  styleUrls: ['./publish-project.component.css'],
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
export class PublishProjectComponent implements OnInit {

  /* variable for service preview */
  preview: boolean = false;

  /* variable to confirm publish a service */
  confirm: boolean = false;
  
  /* variable for preview img service */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  
  /* variable for preview video service */
  previewVideo: string;
  
  /***** variables for save information *****/
  
  generalInfo: generalInfoProject[] = [];

  /***** variables to share information for preview *****/

  gnralInfo: any;

  constructor(private generalInfoService: GeneralInfoProjectService ) { }

  ngOnInit(): void {
    this.generalInfo = this.generalInfoService.generalInfoProject;
  }

  /* receive information from general info component */
  addGeneralInfo(generalInfo: generalInfoProject) {
    this.generalInfoService.generalInfoProject.push(generalInfo);
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

}
