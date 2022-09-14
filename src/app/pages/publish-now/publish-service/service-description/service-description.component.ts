import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent implements OnInit {

  // variables for counting characters
  counterShortDescription = 0;
  counterLongDescription = 0;
  
  constructor() { }

  // functions for counting characters
 shortDescriptionCount(event: any){
  this.counterShortDescription = event.target.value.length
 }

 longDescriptionCount(event: any){
  this.counterLongDescription = event.target.value.length
 }

  ngOnInit(): void {
  }

}
