import { Injectable } from '@angular/core';
import { extras } from '../../models/extras/extras.model';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  extras:extras[]=[
    new extras(true, 3, 1400)
  ];

  constructor() { }
}
