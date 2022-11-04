import { Injectable } from '@angular/core';
import { generalInfoProject } from '../models/general-info-project.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoProjectService {

  generalInfoProject: generalInfoProject[] = [];

  constructor() { }
}
