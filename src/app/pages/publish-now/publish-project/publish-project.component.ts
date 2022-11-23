import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { GeneralInfoProjectService } from './general-info-project/services/general-info-project.service';
import { ServiceDescriptionProjectService } from './service-description-project/services/service-description-project.service';

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
  
  /* variables for project preview */
  preview: boolean = false;

  /* variable to confirm publish a project */
  confirm: boolean = false;

  constructor(private generalInfoService: GeneralInfoProjectService,
              private serviceDescriptionService: ServiceDescriptionProjectService) { }

  ngOnInit(): void {
    this. scrollTop();
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

  saveGeneralInfo: any;
  saveProjectDescription: any;

  /* delete */
  deleteGeneralInfo: any;
  deleteProjectDescription: any;

  /* function to show the project preview */
  saveInfo(){
    this.saveGeneralInfo = this.generalInfoService.save;
    this.saveProjectDescription = this.serviceDescriptionService.save;
    this.preview = true;
  }

  /* preview project */
  previewProject() {
    this.preview = true;
  }

  /* edit project */
  editProject() {
    this.preview = false;
  }

  /* confirm project */
  confirmProject() {
    this.confirm = true;
  }

  delete()
  {
        /* delete  to add edited information */
      this.deleteGeneralInfo = this.generalInfoService.delete;
      this.deleteProjectDescription = this.serviceDescriptionService.delete;
  }

}
