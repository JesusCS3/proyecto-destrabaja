import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { generalInfoProject } from '../models/general-info-project.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoProjectService {

  generalInfoProject: generalInfoProject[] = [];

  /* *** send information from general info project *** */
  nameService: string;
  private nameServiceSubject = new Subject<string>();
  nameServiceObservable = this.nameServiceSubject.asObservable();

  nameServiceData(nameService: string){
    this.nameService = nameService;
    this.nameServiceSubject.next(nameService);
  }
  
  hashtags: string;
  private hashtagsSubject = new Subject<string>();
  hashtagsObservable = this.hashtagsSubject.asObservable();

  hashtagsData(hashtags: string){
    this.hashtags = hashtags;
    this.hashtagsSubject.next(hashtags);
  }

  category: string;
  private categorySubject = new Subject<string>();
  categoryObservable = this.categorySubject.asObservable();

  categoryData(category: string){
    this.category = category;
    this.categorySubject.next(category);
  }

  subcategory: string;
  private subcategorySubject = new Subject<string>();
  subcategoryObservable = this.subcategorySubject.asObservable();

  subcategoryData(subcategory: string){
    this.subcategory = subcategory;
    this.subcategorySubject.next(subcategory);
  }

  videoFile: any;
  private videoFileSubject = new Subject<string>();
  videoFileObservable = this.videoFileSubject.asObservable();

  videoFileData(videoFile: string){
    this.videoFile = videoFile;
    this.videoFileSubject.next(videoFile);
  }

  imageFile: any;
  private imageFileSubject = new Subject<string>();
  imageFileObservable = this.imageFileSubject.asObservable();

  imageFileData(imageFile: string){
    this.imageFile = imageFile;
    this.imageFileSubject.next(imageFile);
  }
  
  filesProject: any;
  private filesProjectSubject = new Subject<string>();
  filesProjectObservable = this.filesProjectSubject.asObservable();

  filesProjectData(filesProject: string){
    this.filesProject = filesProject;
    this.filesProjectSubject.next(filesProject);
  }

  /* *** save images and video preview *** */
  previewImg: string;
  previewImgData(previewImg: string){
    this.previewImg = previewImg;
  }

  previewImgTwo: string;
  previewImgTwoData(previewImgTwo: string){
    this.previewImgTwo = previewImgTwo;
  }

  previewImgThree: string;
  previewImgThreeData(previewImgThree: string){
    this.previewImgThree = previewImgThree;
  }

  previewVideo: any;
  previewVideoData(previewVideo: any){
    this.previewVideo = previewVideo;
  }

  /* *** save information *** */
  save(){
    let generalInfo = new generalInfoProject(this.nameService, this.hashtags, this.category, this.subcategory,
      this.videoFile, this.imageFile, this.filesProject);
    this.generalInfoProject.push(generalInfo);
  }

  /* *** delete information *** */
  delete(generalInfoProject:generalInfoProject){
    const aLength: number = this.generalInfoProject.length;
    this.generalInfoProject.splice(0, aLength);
  }


  constructor() { }
}
