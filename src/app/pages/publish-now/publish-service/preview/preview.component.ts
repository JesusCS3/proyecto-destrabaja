import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../general-info/models/general-info.model';
import { serviceDescription } from '../service-description/models/service-description.model';
import { features, featuresPlus, featuresPremium } from '../service-levels/models/features/features.model';
import { planName } from '../service-levels/models/plan-name/plan-name.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  /* variable to receive preview image to display on the service card and service table */
  @Input() previewImg: string;
  @Input() previewImgTwo: string;
  @Input() previewImgThree: string;

  /* variable to receive preview video to display on the service card and service table */
  @Input() previewVideo: string;

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfo;
  @Input() serviceDescription!: serviceDescription;
  @Input() planName!: planName;
  @Input() features!: features;
  @Input() featuresPlus!: featuresPlus;
  @Input() featuresPremium!: featuresPremium;

  constructor() { }

  ngOnInit(): void {
  }

}
