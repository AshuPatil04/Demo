// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
     
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      const mobile = this.loginForm.value.mobileNumber;
      const password = this.loginForm.value.password;
      const apiKey = "dwkoortGX8DVYzLP559sGJeWty4wX0de";
      
   
      const body = {
        mobile: mobile,
        password: password,
        apikey: apiKey 
      };
  
      this.patientService.login(body).subscribe(
        (response) => {
          console.log('Login response:', response);
          this.loading = false;
          
       
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
          this.loading = false;
          this.loginError = 'An error occurred while logging in. Please try again later.';
        }
      );
    }
  }
 
}
