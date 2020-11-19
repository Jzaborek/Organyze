import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EmployeesService } from './employees.service';
import { employeeListUpdated, createEmployee, deleteEmployee, getEmployeeList } from './employees.actions';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class EmployeesEffects {

  constructor(private actions$: Actions, private employeesService: EmployeesService, private store: Store) { }

  getEmployeeList$ = createEffect(() => this.actions$.pipe(
    ofType(getEmployeeList),
    mergeMap(() => this.employeesService.getEmployeeList().pipe(
      map(paginatedEmployees => employeeListUpdated({ employees: paginatedEmployees.results })),
      catchError(() => EMPTY),
    )),
  ));

  createEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(createEmployee),
    exhaustMap((action) => this.employeesService.createEmployee(action.newEmployee).pipe(
      map(() => getEmployeeList()),
      catchError(() => EMPTY),
    ))
  ));

  deleteEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(deleteEmployee),
    exhaustMap((action) => this.employeesService.deleteEmployee(action.employeeToDelete).pipe(
      map(() => getEmployeeList()),
      catchError(() => EMPTY),
    ))
  ));

}
