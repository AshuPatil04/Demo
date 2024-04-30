import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AaddPatientComponent } from './aadd-patient/aadd-patient.component';
import { GetPatientDetailsComponent } from './get-patient-details/get-patient-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterwithotpComponent } from './registerwithotp/registerwithotp.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, 
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
{path:'add-patient',component:AaddPatientComponent},
  {path:'get-patient',component:GetPatientDetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:'register',component:RegisterwithotpComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
