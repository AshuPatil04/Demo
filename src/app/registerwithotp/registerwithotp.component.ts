import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-registerwithotp',
  templateUrl: './registerwithotp.component.html',
  styleUrls: ['./registerwithotp.component.css']
})
export class RegisterwithotpComponent {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {
    this.registerForm = this.formBuilder.group({
      apikey: ['dwkoortGX8DVYzLP559sGJeWty4wX0de'], 
      mobile: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: [''],
      otp: ['', [Validators.required]],
      password: ['', [Validators.required]],
      os: ['android'],
      zipcode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  registerWithOTP() {
    if (this.registerForm.valid) {
      
      this.patientService.registerPatient(this.registerForm.value).subscribe(
        response => {
          console.log('Registration successful:', response);
        
        },
        error => {
          console.error('Registration error:', error);
         
        }
      );
    } else {
    
    }
  }
}
