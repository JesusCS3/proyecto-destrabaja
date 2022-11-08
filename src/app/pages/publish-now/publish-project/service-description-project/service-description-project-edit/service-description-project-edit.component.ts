import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { serviceDescriptionProject } from '../models/service-description-project.model';
import { ServiceDescriptionProjectService } from '../services/service-description-project.service';

@Component({
  selector: 'app-service-description-project-edit',
  templateUrl: './service-description-project-edit.component.html',
  styleUrls: ['./service-description-project-edit.component.css']
})
export class ServiceDescriptionProjectEditComponent implements OnInit {


  /* share with the publish service component */
  @Output() shareServiceDescription = new EventEmitter<serviceDescriptionProject>();


  /* variables for counting characters */
  counterShortDescription = 0;
  counterLongDescription = 0;

  /* variables for service description */
  shortDescription: string = '';
  longDescription: string = '';

  constructor(private serviceDescriptionService: ServiceDescriptionProjectService ) { }

  ngOnInit(): void {
  }

  /* delete  to add edited information */
  deleteGeneralInfo(serviceDescription:serviceDescriptionProject){
    this.serviceDescriptionService.delete(serviceDescription);
  }

  /* functions for counting characters */
  shortDescriptionCount(event: any) {
    this.counterShortDescription = event.target.value.length
  }

  longDescriptionCount(event: any) {
    this.counterLongDescription = event.target.value.length
  }

  /* sharing the new general info object with the publish service component */
  shareAddServiceDescription(){
    let shareServiceDescription = new serviceDescriptionProject(this.shortDescription, this.longDescription);
    this.shareServiceDescription.emit(shareServiceDescription);
  }

}
