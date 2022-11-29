import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProfileSettingsService } from '../services/profile-settings.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  /* variables for profile settings */
  profileImg:any;
  name:string;
  fathersLastName:string;
  mothersLastName:string;
  gender:string;
  dateBirth:string;
  contry:string;
  city:string;
  resumeSummary:string;
  profileVideo:any;
  resumeSummaryFile:string;
  previousWork:string;

  /* variables for file capture */
  previewImg: string;
  files: any = [];

  url!: string | ArrayBuffer | null;
  format: string;

  firstPart = false;
  secondPart = false;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private profileSettingsService:ProfileSettingsService
  ) { }

  ngOnInit(): void {

    /* profile settings */
    this.profileSettingsService.profileImgObservable.subscribe(response => {
      this.profileImg = response;
    });

    this.profileSettingsService.nameObservable.subscribe(response => {
      this.name = response;
    });

    this.profileSettingsService.fathersLastNameObservable.subscribe(response => {
      this.fathersLastName = response;
    });

    this.profileSettingsService.mothersLastNameObservable.subscribe(response => {
      this.mothersLastName = response;
    });

    this.profileSettingsService.genderObservable.subscribe(response => {
      this.gender = response;
    });

    this.profileSettingsService.dateBirthObservable.subscribe(response => {
      this.dateBirth = response;
    });

    this.profileSettingsService.contryObservable.subscribe(response => {
      this.contry = response;
    });

    this.profileSettingsService.cityObservable.subscribe(response => {
      this.city = response;
    });
    
  }

  registerFirstPart(): void {
    const registerFirstPart = {
      profileImg: this.profileImg,
      name: this.name,
      fathersLastName: this.fathersLastName,
      mothersLastName: this.mothersLastName,
      gender: this.gender,
      dateBirth: this.dateBirth,
      contry: this.contry,
      city: this.city,
    }
    this.firstPart = true;
    console.log(this.firstPart);
    console.log(registerFirstPart);
  }

  registerSecondPart(): void {
    const registerSecondPart ={
      resumeSummary: this.resumeSummary
    }
    this.secondPart = true;
  }

  registerThirdPart(): void {
    this.router.navigate(['/profile']);
  }

}
