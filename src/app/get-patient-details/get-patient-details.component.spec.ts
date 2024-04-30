import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPatientDetailsComponent } from './get-patient-details.component';

describe('GetPatientDetailsComponent', () => {
  let component: GetPatientDetailsComponent;
  let fixture: ComponentFixture<GetPatientDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPatientDetailsComponent]
    });
    fixture = TestBed.createComponent(GetPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
