import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../../../general-info/models/general-info.model';
import { serviceDescription } from '../../../service-description/models/service-description.model';
import { deliverables } from '../../../service-levels/models/deliverables/deliverables.model';
import { features, featuresPlus, featuresPremium } from '../../../service-levels/models/features/features.model';
import { planName } from '../../../service-levels/models/plan-name/plan-name.model';
import { DeliverablesService } from '../../../service-levels/services/deliverables/deliverables.service';

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.css']
})
export class ServiceScreenComponent implements OnInit {

    /* variable to receive preview image to display on the service card */
  @Input() previewImg: string = '';

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfo;
  @Input() serviceDescription!: serviceDescription;
  @Input() planName!: planName;
  deliverables:deliverables[] = [];
  @Input() features!: features;
  @Input() featuresPlus!: featuresPlus;
  @Input() featuresPremium!: featuresPremium;

  rowsDeliverables:number = this.deliverables.length;

  constructor(private deliverableService:DeliverablesService) { }

  ngOnInit(): void {
    this.deliverables = this.deliverableService.deliverables;
    //console.log(this.deliverables);
    console.log(this.rowsDeliverables);
  }

}
