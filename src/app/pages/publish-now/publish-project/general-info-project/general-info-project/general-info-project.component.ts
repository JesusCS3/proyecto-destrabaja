import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { generalInfoProject } from '../models/general-info-project.model';

@Component({
  selector: 'app-general-info-project',
  templateUrl: './general-info-project.component.html',
  styleUrls: ['./general-info-project.component.css']
})
export class GeneralInfoProjectComponent implements OnInit {

    /* share with the publish service component */
    @Output() shareGeneralInfo = new EventEmitter<generalInfoProject>();
    @Output() sharePreviewImg = new EventEmitter<any>();
    @Output() sharePreviewImgTwo = new EventEmitter<any>();
    @Output() sharePreviewImgThree = new EventEmitter<any>();
    @Output() sharePreviewVid = new EventEmitter<any>();
  
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
    public previewImg: string;
    public previewImgTwo: string;
    public previewImgThree: string;
    public files: any = [];
  
    /*variables de prueba preview image/video */
    url!: string | ArrayBuffer | null;
    format: string = '';

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  /* capture file general info */
  captureFileImg(event: any){
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then((img: any) => {
      this.previewImg = img.base;
    })

    const capturedFileTwo = event.target.files[1];
    this.extractBase64(capturedFileTwo).then((img: any) => {
      this.previewImgTwo = img.base;
    })

    const capturedFileThree = event.target.files[2];
    this.extractBase64(capturedFileThree).then((img: any) => {
      this.previewImgThree = img.base;
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
      }
    }
  }

  /* sharing the new general info object with the publish service component */
  shareAddGeneralInfo() {
    let shareGeneralInfo = new generalInfoProject(this.nameService, this.hashtags, 
    this.category, this.subcategory, this.videoFile, this.imageFile, this.filesProject);
    this.shareGeneralInfo.emit(shareGeneralInfo);
  }

  /* share the preview image with the publish service component */
  sharePreviewImage(){
    let sharePreviewImg = this.previewImg;
    this.sharePreviewImg.emit(sharePreviewImg);
  }

  sharePreviewImageTwo(){
    let sharePreviewImgTwo = this.previewImgTwo;
    this.sharePreviewImgTwo.emit(sharePreviewImgTwo);
  }

  sharePreviewImageThree(){
    let sharePreviewImgThree = this.previewImgThree;
    this.sharePreviewImgThree.emit(sharePreviewImgThree);
  }

  /* share the preview video with the publish service component */
  sharePreviewVideo(){
    let sharePreviewVid = this.url;
    this.sharePreviewVid.emit(sharePreviewVid);
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

}
