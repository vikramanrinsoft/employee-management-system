import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { VerifyComponent } from './page/verify/verify.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'verify', component: VerifyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
