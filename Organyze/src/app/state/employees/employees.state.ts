export interface EmployeesState {
  employeeList: Employee[];
}

export const initialEmployeeState = {
  employeeList: [],
};

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  positions: string[];
}
