import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';

import { PatientService } from '../patient.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patientForm: FormGroup;
  patients: any[] = [];
  displayedColumns: string[] = ['patient_id', 'firstname', 'lastname', 'mobile', 'zipcode'];
  @Input() mode: 'dark' | 'light' | any;
  @Output() toggleColorMode: EventEmitter<void> = new EventEmitter<void>();

  isSidebarOpen = true;

  toggleDrawer() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private formBuilder: FormBuilder, private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      patientId: [''],
      mobile: ['']
    });
  }
  getPatient() {
    const patientId = this.patientForm.value.patientId;
    const mobile = this.patientForm.value.mobile;

    console.log('Form Values - Patient ID:', patientId, 'Mobile:', mobile);

    this.patientService.getPatientDetails(patientId, mobile).subscribe(
      (response) => {
        console.log('Response:', response);
        this.patients = response.data;
        console.log(this.patients);
      },
      (error) => {
        console.error('Error:', error);

      }
    );
  }
}
