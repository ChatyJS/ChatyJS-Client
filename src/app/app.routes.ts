import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(routes);
