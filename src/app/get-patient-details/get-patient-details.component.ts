import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-get-patient-details',
  templateUrl: './get-patient-details.component.html',
  styleUrls: ['./get-patient-details.component.css']
})
export class GetPatientDetailsComponent implements OnInit {
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
