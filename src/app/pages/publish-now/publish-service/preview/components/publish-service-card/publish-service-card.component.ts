import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../../../general-info/models/general-info.model';
import { serviceDescription } from '../../../service-description/models/service-description.model';
import { features } from '../../../service-levels/models/features/features.model';

@Component({
  selector: 'app-publish-service-card',
  templateUrl: './publish-service-card.component.html',
  styleUrls: ['./publish-service-card.component.css']
})
export class PublishServiceCardComponent implements OnInit {

  /* variable to receive preview image to display on the service card */
  @Input() previewImg: string = '';

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfo;
  @Input() serviceDescription!: serviceDescription;
  @Input() features!: features;

  score: number = 4.8;

  constructor() { }

  ngOnInit(): void {
  }

}
