import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from '../state/employees/employees.state';
import { deleteEmployee } from '../state/employees/employees.actions';

@Component({
  selector: 'org-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent {

  @Input() public employee: Employee;

  constructor(private store: Store) { }

  public deleteEmployee(): void {
    this.store.dispatch(deleteEmployee({ employeeToDelete: this.employee }));
  }

}
