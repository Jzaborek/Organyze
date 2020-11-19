import { createAction, props } from '@ngrx/store';
import { Employee } from './employees.state';

export const getEmployeeList = createAction('[Employee] Get List');
export const employeeListUpdated = createAction('[Employee] List Updated', props<{employees: Employee[]}>());
export const createEmployee = createAction('[Employee] Create', props<{newEmployee: Employee}>());
export const deleteEmployee = createAction('[Employee] Delete', props<{employeeToDelete: Employee}>());
