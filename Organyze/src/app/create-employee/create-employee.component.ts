import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createEmployee } from '../state/employees/employees.actions';
import { Store } from '@ngrx/store';
import { Employee } from '../state/employees/employees.state';

@Component({
  selector: 'org-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent {

  public newEmployeeForm: FormGroup;

  constructor(formBuilder: FormBuilder, private store: Store) {
    this.newEmployeeForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  public saveNewEmployee(): void {
    const newEmployee: Employee = {
      id: undefined,
      firstName: this.newEmployeeForm.value.firstName,
      lastName: this.newEmployeeForm.value.lastName,
      email: this.newEmployeeForm.value.email,
      positions: [], // TODO: add positions
    };
    this.store.dispatch(createEmployee({ newEmployee }));
    this.newEmployeeForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

}
