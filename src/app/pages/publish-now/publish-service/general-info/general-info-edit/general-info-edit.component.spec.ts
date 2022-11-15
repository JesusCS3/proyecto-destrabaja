import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoEditComponent } from './general-info-edit.component';

describe('GeneralInfoEditComponent', () => {
  let component: GeneralInfoEditComponent;
  let fixture: ComponentFixture<GeneralInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
