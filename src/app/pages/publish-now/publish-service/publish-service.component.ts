import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  /* variable for service preview */
  preview: boolean = false;

  /* variable to confirm publish a service */
  confirm: boolean = false;

  constructor() { }

  ngOnInit(): void {
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

}
