import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsProjectEditComponent } from './requirements-project-edit.component';

describe('RequirementsProjectEditComponent', () => {
  let component: RequirementsProjectEditComponent;
  let fixture: ComponentFixture<RequirementsProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementsProjectEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementsProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
