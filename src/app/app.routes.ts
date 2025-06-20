import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AmbulanceDriverDetailsComponent } from './ambulance-driver-details/ambulance-driver-details.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    {path: "ambulance-driver-details", component:AmbulanceDriverDetailsComponent },
];
