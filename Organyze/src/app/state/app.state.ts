import { EmployeesState } from './employees/employees.state';
import { LayoutState } from './layout/layout.state';

export interface AppState {
  employees: EmployeesState;
  layout: LayoutState;
}
