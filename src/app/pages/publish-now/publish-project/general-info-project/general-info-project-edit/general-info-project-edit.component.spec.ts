import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoProjectEditComponent } from './general-info-project-edit.component';

describe('GeneralInfoProjectEditComponent', () => {
  let component: GeneralInfoProjectEditComponent;
  let fixture: ComponentFixture<GeneralInfoProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoProjectEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
