import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEmployeeList } from './state/employees/employees.actions';
import { Employee } from './state/employees/employees.state';
import { selectEmployees } from './state/employees/employees.selectors';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public employees$: Observable<Employee[]>;
  public title = 'Zalu';

  constructor(private store: Store) {
    this.employees$ = store.select(selectEmployees);
    this.refresh();
  }

  public refresh(): void {
    this.store.dispatch(getEmployeeList());
  }

}
