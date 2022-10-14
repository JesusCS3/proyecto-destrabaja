import { Component, OnInit } from '@angular/core';
import { requirements } from './models/requirements.model';
import { RequirementsService } from './services/requirements.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  /***** variables for save information *****/
  requirements:requirements[] = [];

  /***** variables to share information for preview *****/

  /* variables for requirements */
  requirementInput:string;

  constructor(private requirementsService:RequirementsService) { }

  ngOnInit(): void {

    this.requirements = this.requirementsService.requirements;
  }

  /* delete requirements information */
  deleteRequirement(requirements:requirements){
    this.requirementsService.delete(requirements);
  }

  /* save deliverables information */
  addRequirement(){
    this.requirementsService.requirements.push(new requirements(this.requirementInput));
  }

  /* clear input and check box to add deliverable */
  clear() {
    this.requirementInput = '';
  }

}
