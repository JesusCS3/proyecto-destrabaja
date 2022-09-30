import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../../../general-info/models/general-info.model';

@Component({
  selector: 'app-publish-service-card',
  templateUrl: './publish-service-card.component.html',
  styleUrls: ['./publish-service-card.component.css']
})
export class PublishServiceCardComponent implements OnInit {

  /* variables to receive general information to display on the service card and service table */
  @Input() gnralInfo!: generalInfo;

  img: any;
  title: string = 'Clases de diseño de logos';
  description: string = 'Te enseño a usar paginas web de logos gratuitas para que los cobres en una lana. Te enseño a usar paginas web de logos gratuitas si';
  price: number = 0.0;
  score: number = 4.8;

  constructor() { }

  ngOnInit(): void {
  }

}
