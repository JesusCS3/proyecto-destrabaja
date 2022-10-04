import { Injectable } from '@angular/core';
import { serviceDescription } from '../models/service-description.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionService {

  serviceDescription:serviceDescription[]=[];

  constructor() { }
}
