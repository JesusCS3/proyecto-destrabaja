import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { extras } from '../../../extras/models/extras.model';
import { ExtrasService } from '../../../extras/services/extras.service';
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
  closeResult: string;

    /* variable to receive preview image to display on the service card */
  @Input() previewImg: string;
  @Input() previewImgTwo: string;
  @Input() previewImgThree: string;

  /* variable to receive preview video to display on the service card */
  @Input() previewVideo: string;

  /***** variables to receive information to display on the service card and service table *****/
  @Input() generalInfo!: generalInfo;
  @Input() serviceDescription!: serviceDescription;
  @Input() planName!: planName;
  deliverables:deliverables[] = [];
  @Input() features!: features;
  @Input() featuresPlus!: featuresPlus;
  @Input() featuresPremium!: featuresPremium;
  extras:extras[] = [];

  rowsDeliverables:number = this.deliverables.length;

  constructor(private deliverableService:DeliverablesService, private extrasService:ExtrasService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.deliverables = this.deliverableService.deliverables;
    this.extras = this.extrasService.extras;
  }

  /* modal scrollable */
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }


}
