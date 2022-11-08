import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesProjectEditComponent } from './features-project-edit.component';

describe('FeaturesProjectEditComponent', () => {
  let component: FeaturesProjectEditComponent;
  let fixture: ComponentFixture<FeaturesProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesProjectEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
