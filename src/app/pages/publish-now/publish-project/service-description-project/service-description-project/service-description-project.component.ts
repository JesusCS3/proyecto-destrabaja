import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { serviceDescriptionProject } from '../models/service-description-project.model';

@Component({
  selector: 'app-service-description-project',
  templateUrl: './service-description-project.component.html',
  styleUrls: ['./service-description-project.component.css']
})
export class ServiceDescriptionProjectComponent implements OnInit {

    /* share with the publish service component */
  @Output() shareServiceDescription = new EventEmitter<serviceDescriptionProject>();


  /* variables for counting characters */
  counterShortDescription = 0;
  counterLongDescription = 0;

  /* variables for service description */
  shortDescription: string = '';
  longDescription: string = '';

  constructor() { }

  ngOnInit(): void {
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
