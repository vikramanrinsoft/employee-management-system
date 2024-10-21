import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeInformation: this.fb.group({
        globalId: ['', Validators.required],
        unitId: ['', Validators.required],
        employeeType: ['', Validators.required],
        employeeID: ['', Validators.required],
        profileImage: ['', Validators.required],
        salute: ['', Validators.required],
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        mobileNo: ['', Validators.required],
        windowLoginID: ['', Validators.required],
        domainName: ['', Validators.required],
        directIndirect: ['', Validators.required],
        deputationSD: ['', Validators.required],
        deputationED: ['', Validators.required],
        deputationLocation: ['', Validators.required],
        shiftRule: ['', Validators.required],
        remarks: [''],
      }),
      joiningDetail: this.fb.group({
        interviewDate: ['', Validators.required],
        unitDOJ: ['', Validators.required],
        groupDOJ: ['', Validators.required],
        confirmed: ['', Validators.required],
        confirmationDate: ['', Validators.required],
        extendedMonth: [''],
        extendedDateReason: [''],
        currentGroupExperiences: [''],
      }),
      currentPosition: this.fb.group({
        department: ['', Validators.required],
        sectionCode: ['', Validators.required],
        designation: ['', Validators.required],
        grade: ['', Validators.required],
        location: ['', Validators.required],
      }),
      separationDetail: this.fb.group({
        dateOfResignation: [''],
        unitDOL: [''],
        groupDOL: [''],
        reasonForLeaving: [''],
        dateOfRetirement: [''],
      }),
    });
  }
}
