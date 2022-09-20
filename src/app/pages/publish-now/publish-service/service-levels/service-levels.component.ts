import { Component, OnInit } from '@angular/core';
import { deliverable } from './models/deliverables/deliverables.model';
import { features } from './models/features/features.model';
import { extras } from './models/extras/extras.model';
import { plans } from './models/plans/plans.model';
import { DeliverablesService } from './services/deliverables/deliverables.service';
import { FeaturesService } from './services/features/features.service';
import { ExtrasService } from './services/extras/extras.service';
import { PlansService } from './services/plans/plans.service';

@Component({
  selector: 'app-service-levels',
  templateUrl: './service-levels.component.html',
  styleUrls: ['./service-levels.component.css']
})
export class ServiceLevelsComponent implements OnInit {

  deliverable:deliverable[] = [];
  features:features[] = [];
  extras:extras[] = [];

  plans:plans[] = [];

  constructor(private deliverableService:DeliverablesService, private featuresService:FeaturesService,
              private extrasService:ExtrasService, private plansService:PlansService) {
                this.deliverable = deliverableService.deliverable;
                this.features = featuresService.features;
                this.extras = extrasService.extras;
                this.plans = plansService.plans;
               }

  ngOnInit(): void {
  }

}
