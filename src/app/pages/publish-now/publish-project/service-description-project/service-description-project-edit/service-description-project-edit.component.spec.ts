import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDescriptionProjectEditComponent } from './service-description-project-edit.component';

describe('ServiceDescriptionProjectEditComponent', () => {
  let component: ServiceDescriptionProjectEditComponent;
  let fixture: ComponentFixture<ServiceDescriptionProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDescriptionProjectEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDescriptionProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
