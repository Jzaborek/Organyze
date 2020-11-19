import { employeesReducer } from './employees/employees.reducer';
import { layoutReducer } from './layout/layout.reducer';

export const AppReducer = {
  employees: employeesReducer,
  layout: layoutReducer,
};
