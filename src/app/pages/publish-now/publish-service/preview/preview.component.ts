import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../general-info/models/general-info.model';
import { serviceDescription } from '../service-description/models/service-description.model';
import { deliverables } from '../service-levels/models/deliverables/deliverables.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() preview:any;

  /* variable to receive preview image to display on the service card */
  @Input() previewImg: string = '';

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfo;
  @Input() serviceDescription!: serviceDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
