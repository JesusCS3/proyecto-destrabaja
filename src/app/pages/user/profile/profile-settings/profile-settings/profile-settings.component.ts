import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProfileSettingsService } from '../services/profile-settings.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.my-custom-class .tooltip-inner {
				background-color: #fff;
				font-size: 0.8rem;
        font-weight: bold;
        color: #425CC7;
        text-align: justify;
        padding: 10px;
        margin: 5px;
        max-width: 310px !important;
        box-shadow: rgba(0, 0, 0, 0.301) 0px 2px 4px 0px, rgba(0, 0, 0, 0.301) 0px 2px 16px 0px !important;
			}
			.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
				border-right-color: #fff;
			}
			.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
				border-left-color: #fff;
			}
			.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
				border-top-color: #fff;
			}
			.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
				border-bottom-color: #fff;
			}
		`,
  ]
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

  /* variables for counting characters */
  counterResumeSummary = 0;

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

    this.profileSettingsService.resumeSummaryObservable.subscribe(response => {
      this.resumeSummary = response;
    });

    this.profileSettingsService.profileVideoObservable.subscribe(response => {
      this.profileVideo = response;
    });

    this.profileSettingsService.resumeSummaryFileObservable.subscribe(response => {
      this.resumeSummaryFile = response;
    });

    this.profileSettingsService.previousWorkObservable.subscribe(response => {
      this.previousWork = response;
    });
    
  }

  /* capture file general info */
  captureFileImg(event: any) {
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then((img: any) => {
      this.previewImg = img.base;
      this.profileSettingsService.previewImgProfileData(this.previewImg);
    })

    this.files.push(capturedFile);
  }

  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };
  })

  /* prueba para visualizar imagen y video */
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.profileSettingsService.previewVideoProfileData(this.url);
      }
    }
  }

  clearPreviewImgProfile: any;
  clearPreviewVideoProfile: any;
  /* delete preview video */
  deletePreviewVideo() {
    this.url = '';
    this.profileVideo = '';
    this.clearPreviewVideoProfile = this.profileSettingsService.clearPreviewVideoProfile();
  }

  /* delete preview images */
  deletePreviewImages() {
    this.previewImg = '';
    this.profileImg = '';
    this.clearPreviewImgProfile = this.profileSettingsService.clearPreviewImgProfile();
  }

  /* fill with previously saved values */
  receiveInfo(){
    this.profileImg = this.profileSettingsService.profileImg;
    this.name = this.profileSettingsService.name;
    this.fathersLastName = this.profileSettingsService.fathersLastName;
    this.mothersLastName = this.profileSettingsService.mothersLastName;
    this.gender = this.profileSettingsService.gender;
    this.dateBirth = this.profileSettingsService.dateBirth;
    this.contry = this.profileSettingsService.contry;
    this.city = this.profileSettingsService.city;
    this.resumeSummary = this.profileSettingsService.resumeSummary;
    this.profileVideo = this.profileSettingsService.profileVideo;
    this.resumeSummaryFile = this.profileSettingsService.resumeSummaryFile;
    this.previousWork = this.profileSettingsService.previousWork;

    /* preview */
    this.previewImg = this.profileSettingsService.previewImgProfile;
    this.url = this.profileSettingsService.previewVideoProfile;
  }

  /* functions for counting characters */
  resumeSummaryCount(event: any) {
    this.counterResumeSummary = event.target.value.length;
  }

  /* send new info */
  sendProfileImg(profileImg: any) {
    this.profileSettingsService.profileImgData(profileImg.target.value);
  }

  sendName(name: any) {
    this.profileSettingsService.nameData(name.target.value);
  }

  sendFathersLastName(fathersLastName: any) {
    this.profileSettingsService.fathersLastNameData(fathersLastName.target.value);
  }

  sendMothersLastName(mothersLastName: any) {
    this.profileSettingsService.mothersLastNameData(mothersLastName.target.value);
  }

  sendGender(gender: any) {
    this.profileSettingsService.genderData(gender.target.value);
  }

  sendDateBirth(dateBirth: any) {
    this.profileSettingsService.dateBirthData(dateBirth.target.value);
  }

  sendContry(contry: any) {
    this.profileSettingsService.contryData(contry.target.value);
  }

  sendCity(city: any) {
    this.profileSettingsService.cityData(city.target.value);
  }

  sendResumeSummary(resumeSummary: any) {
    this.profileSettingsService.resumeSummaryData(resumeSummary.target.value);
  }

  sendProfileVideo(profileVideo: any) {
    this.profileSettingsService.profileVideoData(profileVideo.target.value);
  }

  sendResumeSummaryFile(resumeSummaryFile: any) {
    this.profileSettingsService.resumeSummaryFileData(resumeSummaryFile.target.value);
  }

  sendPreviousWork(previousWork: any) {
    this.profileSettingsService.previousWorkData(previousWork.target.value);
  }

  /* *** save and proceed to the second part *** */
  firstPart = false;

  registerFirstPart(): void {
    this.firstPart = true;
  }

  /* *** save and proceed to the third part *** */
  secondPart = false;
  registerSecondPart(): void {
    this.secondPart = true;
  }

  /* back to first part */
  backFirstPart(): void {
    this.firstPart = false;
  }

  /* *** save and proceed to the profile *** */
  registerThirdPart(): void {
    this.router.navigate(['/profile']);
  }

  /* back to second part */
  backSecondPart(): void {
    this.secondPart = false;
  }

  clearProfileSettingsInfo:any;
  clearData(){
    /* *** profile settings *** */
    this.clearProfileSettingsInfo = this.profileSettingsService.clearInfo();
  }

}
