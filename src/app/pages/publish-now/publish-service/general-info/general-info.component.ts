import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { generalInfo } from './models/general-info.model';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  /* share with the publish service component */
  @Output() shareGeneralInfo = new EventEmitter<generalInfo>();

  /* variables for general info */
  nameService: string = '';
  hashtags: string = '';
  category: string = '';
  subcategory: string = '';
  videoFile: any;
  imageFile: any;

  /* variables for file capture */
  public previewImg: string = '';
  public files: any = [];

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
      console.log(img);
    })
    this.files.push(capturedFile);
    //console.log(event.target.files);
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

  shareAddGeneralInfo() {
    let shareGeneralInfo = new generalInfo(this.nameService, this.hashtags, 
    this.category, this.subcategory, this.videoFile, this.imageFile);
    this.shareGeneralInfo.emit(shareGeneralInfo);
  }

}
