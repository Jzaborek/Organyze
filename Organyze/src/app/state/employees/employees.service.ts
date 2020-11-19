import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employees.state';
import { PaginatedResult } from '../common/paginated-result.model';

@Injectable()
export class EmployeesService {

  private static readonly BASE_URL = 'http://localhost:8000';
  private defaultHeaders = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) { }

  public getEmployeeList(): Observable<PaginatedResult<Employee>> {
    const url = `${EmployeesService.BASE_URL}/employees/`;
    return this.http.get<PaginatedResult<Employee>>(url);
  }

  public createEmployee(newEmployee: Employee): Observable<HttpResponse<any>> {
    const url = `${EmployeesService.BASE_URL}/employees/`;
    return this.http.post<any>(url, JSON.stringify(newEmployee), { headers: this.defaultHeaders });
  }

  public deleteEmployee(employeeToDelete: Employee): Observable<any> {
    const url = `${EmployeesService.BASE_URL}/employees/${employeeToDelete.id}`;
    return this.http.delete(url);
  }

}
