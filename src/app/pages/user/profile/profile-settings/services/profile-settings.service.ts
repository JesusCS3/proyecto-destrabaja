import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { profileSettings } from '../models/profile-settings.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsService {

  profileSettings:profileSettings [] = [];

  /* *** send information from profile settings*** */
  profileImg: any;
  private  profileImgSubject = new Subject<string>();
   profileImgObservable = this. profileImgSubject.asObservable();

   profileImgData( profileImg: string){
    this. profileImg =  profileImg;
    this. profileImgSubject.next( profileImg);
  }

  name: string;
  private nameSubject = new Subject<string>();
  nameObservable = this.nameSubject.asObservable();

  nameData(name: string){
    this.name = name;
    this.nameSubject.next(name);
  }

  fathersLastName: string;
  private fathersLastNameSubject = new Subject<string>();
  fathersLastNameObservable = this.fathersLastNameSubject.asObservable();

  fathersLastNameData(fathersLastName: string){
    this.fathersLastName = fathersLastName;
    this.fathersLastNameSubject.next(fathersLastName);
  }

  mothersLastName: string;
  private mothersLastNameSubject = new Subject<string>();
  mothersLastNameObservable = this.mothersLastNameSubject.asObservable();

  mothersLastNameData(mothersLastName: string){
    this.mothersLastName = mothersLastName;
    this.mothersLastNameSubject.next(mothersLastName);
  }

  gender: string;
  private genderSubject = new Subject<string>();
  genderObservable = this.genderSubject.asObservable();

  genderData(gender: string){
    this.gender = gender;
    this.genderSubject.next(gender);
  }

  dateBirth: string;
  private dateBirthSubject = new Subject<string>();
  dateBirthObservable = this.dateBirthSubject.asObservable();

  dateBirthData(dateBirth: string){
    this.dateBirth = dateBirth;
    this.dateBirthSubject.next(dateBirth);
  }

  contry: string;
  private contrySubject = new Subject<string>();
  contryObservable = this.contrySubject.asObservable();

  contryData(contry: string){
    this.contry = contry;
    this.contrySubject.next(contry);
  }

  city: string;
  private citySubject = new Subject<string>();
  cityObservable = this.citySubject.asObservable();

  cityData(city: string){
    this.city = city;
    this.citySubject.next(city);
  }

  resumeSummary: string;
  private resumeSummarySubject = new Subject<string>();
  resumeSummaryObservable = this.resumeSummarySubject.asObservable();

  resumeSummaryData(resumeSummary: string){
    this.resumeSummary = resumeSummary;
    this.resumeSummarySubject.next(resumeSummary);
  }

  profileVideo: any;
  private  profileVideoSubject = new Subject<string>();
   profileVideoObservable = this. profileVideoSubject.asObservable();

   profileVideoData( profileVideo: string){
    this. profileVideo =  profileVideo;
    this. profileVideoSubject.next( profileVideo);
  }

  resumeSummaryFile: string;
  private resumeSummaryFileSubject = new Subject<string>();
  resumeSummaryFileObservable = this.resumeSummaryFileSubject.asObservable();

  resumeSummaryFileData(resumeSummaryFile: string){
    this.resumeSummaryFile = resumeSummaryFile;
    this.resumeSummaryFileSubject.next(resumeSummaryFile);
  }

  previousWork: string;
  private previousWorkSubject = new Subject<string>();
  previousWorkObservable = this.previousWorkSubject.asObservable();

  previousWorkData(previousWork: string){
    this.previousWork = previousWork;
    this.previousWorkSubject.next(previousWork);
  }

  /* *** save images and video preview *** */
  previewImgProfile: string;
  previewImgProfileData(previewImgProfile: string){
    this.previewImgProfile = previewImgProfile;
  }

  previewVideoProfile: any;
  previewVideoProfileData(previewVideoProfile: any){
    this.previewVideoProfile = previewVideoProfile;
  }

  /* *** save information *** */
  save(){
    let profileSettingsInfo = new profileSettings(this.profileImg, this.name,this.fathersLastName,
      this.mothersLastName, this.gender, this.dateBirth, this.contry, this.city, this.resumeSummary,
      this.profileVideo, this.resumeSummaryFile, this.previousWork);
    this.profileSettings.push(profileSettingsInfo);
  }

  /* *** delete information *** */
  delete(){
    const aLength: number = this.profileSettings.length;
    this.profileSettings.splice(0, aLength);
  }

  /* *** clear information *** */
  clearInfo(){
    this.profileImg = '';
    this.name = '';
    this.fathersLastName = '';
    this.mothersLastName = '';
    this.gender = '';
    this.dateBirth = '';
    this.contry = '';
    this.city = '';
    this.resumeSummary = '';
    this.profileVideo = '';
    this.resumeSummaryFile = '';
    this.previousWork = '';
    this.previewImgProfile = '';
    this.previewVideoProfile = '';
  }

  clearPreviewImgProfile(){
    this.previewImgProfile = '';
    this.profileImg = '';
  }

  clearPreviewVideoProfile(){
    this.previewVideoProfile = '';
    this.profileVideo = '';
  }

  clearResumeSummaryFile(){
    this.resumeSummaryFile = '';
  }

  clearPreviousWork(){
    this.previousWork = '';
  }

}
