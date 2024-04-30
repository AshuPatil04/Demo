import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Patient } from './Models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private addPatientUrl = 'https://dev-api.evitalrx.in/v1/patient/patients/add';;

  private apiKey = "dwkoortGX8DVYzLP559sGJeWty4wX0de";
private getpatientUrl = 'https://dev-api.evitalrx.in/v1/patient/patients/view';
  private sendOtpUrl = 'https://dev-api.evitalrx.in/v1/patient/login/signup_sendotp';
  private signupUrl = 'https://dev-api.evitalrx.in/v1/patient/login/signup';


  constructor(private http: HttpClient) { }


 
  login(body: any): Observable<any> {
    return this.http.post(`https://dev-api.evitalrx.in/v1/patient/login`, body);
  }
  
  submitFormData(mobileNumber: string, password: string): Observable<any> {
    const body = {
      apikey: this.apiKey,
      mobile: mobileNumber,
      password: password
    };
    return this.http.post(`https://dev-api.evitalrx.in/v1/patient/login`, body);
  }
  
  addPatient(formData: any): Observable<any> {
    formData.apikey = this.apiKey;
    return this.http.post<any>(this.addPatientUrl, formData);
  }

  getPatientDetails(patientIdOrMobile?: string, mobile?: string): Observable<any> {
    const body = { apikey: this.apiKey };

    if (patientIdOrMobile && mobile) {
      body['patient_id'] = patientIdOrMobile;
      body['mobile'] = mobile;
    } else if (patientIdOrMobile) {
      body['patient_id'] = patientIdOrMobile;
    } else if (mobile) {
      body['mobile'] = mobile;
    } else {
      return throwError("Provide either Patient's Mobile or Patient ID");
    }

    return this.http.post(this.getpatientUrl, body);
  }
  
  private isValidPatientId(patientId: string): boolean {
  
    return true;
  }
  
  sendOtp(data: any): Observable<any> {
    const requestBody = {
      apikey: this.apiKey,
      mobile: data.mobile,
      firstname: data.firstname,
      lastname: data.lastname
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const request = this.http.post(this.sendOtpUrl, requestBody, httpOptions);
    
   
    return request;
  }
  registerPatient(data: any): Observable<any> {
    return this.http.post<any>(this.signupUrl, data);
  }
}
