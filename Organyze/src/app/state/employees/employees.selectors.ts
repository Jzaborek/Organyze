import { AppState } from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState } from './employees.state';

export const featureKey = 'employees';

export const selectEmployeesFeature = createFeatureSelector<AppState, EmployeesState>(featureKey);

export const selectEmployees = createSelector(
  selectEmployeesFeature,
  (state: EmployeesState) => state.employeeList,
);
