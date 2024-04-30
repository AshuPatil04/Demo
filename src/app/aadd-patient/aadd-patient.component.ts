import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aadd-patient',
  templateUrl: './aadd-patient.component.html',
  styleUrls: ['./aadd-patient.component.css']
})
export class AaddPatientComponent {
  patientForm: FormGroup;
  showSuccessMessage = false;
  localStoragePatients: any[] = [];
  @Input() mode: 'dark' | 'light' | any;
  @Output() toggleColorMode: EventEmitter<void> = new EventEmitter<void>();

  isSidebarOpen = true;

  toggleDrawer() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: [''],
      mobile: ['', Validators.required],
      zipcode: [''],
      dob: [''],
      gender: [''],
      blood_group: ['']
    });


    this.retrieveLocalStoragePatients();
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const formData = this.patientForm.value;
      console.log('Form Data:', formData);

      this.patientService.addPatient(formData).subscribe(
        (response) => {
          console.log('Response:', response);


          const patientDataString = JSON.stringify(formData);
          localStorage.setItem('addedPatient', patientDataString);


          console.log('Patient Data saved in LocalStorage:', patientDataString);


          this._snackBar.open('Patient registered successfully!', 'Close', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });


          this.retrieveLocalStoragePatients();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  private retrieveLocalStoragePatients(): void {
    this.localStoragePatients = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith('addedPatient')) {

        const patientDataString = localStorage.getItem(key);

        const patientData = JSON.parse(patientDataString);

        this.localStoragePatients.push(patientData);
      }
    }
  }
}
