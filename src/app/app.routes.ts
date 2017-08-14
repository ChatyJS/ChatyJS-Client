import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./_components/login/login.component";
import { SignupComponent } from "./_components/signup/signup.component";
import { DashboardComponent } from "./_components/dashboard/dashboard.component";

import { AuthGuard } from "./_guard/auth.guard";

const routes: Routes = [
  { path: 'chaty', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(routes);
