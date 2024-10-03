import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
