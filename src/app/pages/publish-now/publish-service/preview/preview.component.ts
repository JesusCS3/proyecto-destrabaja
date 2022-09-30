import { Component, Input, OnInit } from '@angular/core';
import { generalInfo } from '../general-info/models/general-info.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() preview:any;

  /* variables to receive general information to display on the service card and service table */
  @Input() gnralInfo!: generalInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
