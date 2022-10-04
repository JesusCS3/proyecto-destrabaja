import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { serviceDescription } from './models/service-description.model';

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent implements OnInit {

  /* share with the publish service component */
  @Output() shareServiceDescription = new EventEmitter<serviceDescription>();


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
    let shareServiceDescription = new serviceDescription(this.shortDescription, this.longDescription);
    this.shareServiceDescription.emit(shareServiceDescription);
  }

}
