import { Injectable } from '@angular/core';
import { features } from '../../models/features/features.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  features:features[]=[
    new features(5, "2 propuestas iniciales y máximo 2 revisiones",1200)
  ];

  constructor() { }
}
