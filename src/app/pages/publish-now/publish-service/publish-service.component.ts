import { generalInfo } from './general-info/models/general-info.model';
import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from './general-info/services/general-info.service';

@Component({
  selector: 'app-publish-service',
  templateUrl: './publish-service.component.html',
  styleUrls: ['./publish-service.component.css']
})
export class PublishServiceComponent implements OnInit {

  /* variable for service preview */
  preview: boolean = false;

  /* object general info */
  generalInfo:generalInfo[] = [];

  nameService: string = 'Esta información viene desde publish service';

  constructor(private generalInfoService:GeneralInfoService) { }

  ngOnInit(): void {
    this.generalInfo = this.generalInfoService.generalInfo;
  }

  /* add general info */
  addGeneralInfo(generalInfo:generalInfo) {
    this.generalInfoService.generalInfo.push(generalInfo)
  }

  /* service preview */
  servicePreview(){
    this.preview = true;
  }

  /* edit service */
  editService(){
    this.preview = false;
  }

}
