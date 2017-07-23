import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  { path: 'chaty', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(routes);
