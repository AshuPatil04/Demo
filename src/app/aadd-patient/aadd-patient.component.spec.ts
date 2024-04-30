import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaddPatientComponent } from './aadd-patient.component';

describe('AaddPatientComponent', () => {
  let component: AaddPatientComponent;
  let fixture: ComponentFixture<AaddPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AaddPatientComponent]
    });
    fixture = TestBed.createComponent(AaddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
