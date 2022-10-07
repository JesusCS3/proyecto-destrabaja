import { Injectable } from '@angular/core';
import { features, featuresPlus, featuresPremium } from '../../models/features/features.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  features:features[]=[];

  featuresPlus:featuresPlus[]=[];

  featuresPremium:featuresPremium[]=[];

  constructor() { }
}
