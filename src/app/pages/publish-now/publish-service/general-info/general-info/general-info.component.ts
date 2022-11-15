import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralInfoProjectService } from '../../../publish-project/general-info-project/services/general-info-project.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  /* variables for general info */
  nameService: string;
  hashtags: string;
  category: string;
  subcategory: string;
  videoFile: any;
  imageFile: any;
  filesProject: any;
  
  /* variable for category */
  categoryList = [
    {
      id:'bie',
      name:'Bienestar'
    },
    {
      id:'cla',
      name:'Clases'
    },
    {
      id:'dis',
      name:'Diseño'
    },
    {
      id:'mus',
      name:'Música'
    },
    {
      id:'web',
      name:'Web'
    }
  ];
  
  /* variables for file capture */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  files: any = [];
  
  url!: string | ArrayBuffer | null;
  format: string;

  constructor(private formBuilder:FormBuilder, private sanitizer:DomSanitizer,
              private generalInfoProjectService: GeneralInfoProjectService) { }

  ngOnInit(): void {
    this.generalInfoProjectService.nameServiceObservable.subscribe(response => {
      this.nameService = response;
    });

    this.generalInfoProjectService.hashtagsObservable.subscribe(response => {
      this.hashtags = response;
    });

    this.generalInfoProjectService.categoryObservable.subscribe(response => {
      this.category = response;
    });

    this.generalInfoProjectService.subcategoryObservable.subscribe(response => {
      this.subcategory = response;
    });

    this.generalInfoProjectService.videoFileObservable.subscribe(response => {
      this.videoFile = response;
    });

    this.generalInfoProjectService.imageFileObservable.subscribe(response => {
      this.imageFile = response;
    });

    this.generalInfoProjectService.filesProjectObservable.subscribe(response => {
      this.filesProject = response;
    });

    
  }

  /* capture file general info */
  captureFileImg(event: any){
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then((img: any) => {
      this.previewImg = img.base;
      this.generalInfoProjectService.previewImgData(this.previewImg);
    })

    const capturedFileTwo = event.target.files[1];
    this.extractBase64(capturedFileTwo).then((img: any) => {
      this.previewImgTwo = img.base;
      this.generalInfoProjectService.previewImgTwoData(this.previewImgTwo);
    })

    const capturedFileThree = event.target.files[2];
    this.extractBase64(capturedFileThree).then((img: any) => {
      this.previewImgThree = img.base;
      this.generalInfoProjectService.previewImgThreeData(this.previewImgThree);
    })

    this.files.push(capturedFile);
    this.files.push(capturedFileTwo);
    this.files.push(capturedFileThree);
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
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.generalInfoProjectService.previewVideoData(this.url);
      }
    }
  }

  /* delete preview video */
  deletePreviewVideo(){
    this.url = '';
    this.videoFile = '';
  }

  /* delete preview images */
  deletePreviewImages(){
    this.previewImg = '';
    this.previewImgTwo = '';
    this.previewImgThree = '';
    this.imageFile = '';
  }

  /* send info */
  sendNameService(nameService:any){
    this.generalInfoProjectService.nameServiceData(nameService.target.value);
  }

  sendHashtags(hashtags:any){
    this.generalInfoProjectService.hashtagsData(hashtags.target.value);
  }

  sendCategory(category:any){
    this.generalInfoProjectService.categoryData(category.target.value);
  }

  sendSubcategory(subcategory:any){
    this.generalInfoProjectService.subcategoryData(subcategory.target.value);
  }

  sendVideoFile(videoFile:any){
    this.generalInfoProjectService.videoFileData(videoFile.target.value);
  }

  sendImageFile(imageFile:any){
    this.generalInfoProjectService.imageFileData(imageFile.target.value);
  }

  sendFilesProject(filesProject:any){
    this.generalInfoProjectService.filesProjectData(filesProject.target.value);
  }

}
