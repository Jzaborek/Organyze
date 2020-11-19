import { createReducer, on } from '@ngrx/store';
import { employeeListUpdated } from './employees.actions';
import { EmployeesState, initialEmployeeState } from './employees.state';

const employeeListReducer = createReducer(
  initialEmployeeState,
  on(employeeListUpdated, (state, { employees }) => ({
    ...state,
    employeeList: employees,
  })),
);

export function employeesReducer(state, action): EmployeesState {
  return {
    ...employeeListReducer(state, action),
  };
}
