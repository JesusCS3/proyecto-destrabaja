import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../general-info/models/general-info.model';
import { serviceDescription } from '../service-description/models/service-description.model';
import { features } from '../service-levels/models/features/features.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  /* variable to receive preview image to display on the service card and service table */
  @Input() previewImg: string;
  @Input() previewImgTwo: string;
  @Input() previewImgThree: string;

  /* variable to receive preview video to display on the service card and service table */
  @Input() previewVideo: string;

    /***** variables to receive information to display on the service card and service table *****/
    @Input() generalInfo!: generalInfo;
    @Input() serviceDescription!: serviceDescription;
    @Input() features!: features;

  constructor() { }

  ngOnInit(): void {
  }

}
