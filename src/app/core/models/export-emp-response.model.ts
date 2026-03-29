import { Employee } from "./employee.model";

export interface ExportEmpResponse {
    totalEmployees:number;
    employees:Employee[];
}
