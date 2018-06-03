import { IEmployeeType } from "./employee-type";

export interface IEmployee {
  employeeId: number;
  employeeFirstName: string;
  employeeMiddleName: string;
  employeeLastName: string;
  employeeType: IEmployeeType;
}
