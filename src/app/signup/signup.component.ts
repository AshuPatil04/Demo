import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {
    this.signupForm = this.formBuilder.group({
      mobile: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]]
    });
  }

  signupotp() {
    if (this.signupForm.valid) {
      console.log('Form Values:', this.signupForm.value);

      this.patientService.sendOtp(this.signupForm.value).subscribe(
        response => {
          console.log('API Response:', response);
 
        },
        error => {
          console.error('Error:', error);
         
        }
      );
    } else {
      
    }
  }
 
}
