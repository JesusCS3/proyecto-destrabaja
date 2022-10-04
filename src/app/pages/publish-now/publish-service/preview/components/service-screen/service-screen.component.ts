import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../../../general-info/models/general-info.model';
import { serviceDescription } from '../../../service-description/models/service-description.model';
import { deliverables } from '../../../service-levels/models/deliverables/deliverables.model';
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
  deliverables:deliverables[] = [];

  constructor(private deliverableService:DeliverablesService) { }

  ngOnInit(): void {
    this.deliverables = this.deliverableService.deliverables;
    console.log(this.deliverables);
  }

}
