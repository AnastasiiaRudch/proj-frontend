import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
// import {Employee, EmployeeColumns} from "../../model/employee";

export const EmployeeColumns = [
  {
    key: "name",
    type: "text",
    label: "Full Name"
  },
  {
    key: "occupation",
    type: "text",
    label: "Occupation"
  },
  {
    key: "dateOfBirth",
    type: "date",
    label: "Date of Birth"
  },
  {
    key: "age",
    type: "number",
    label: "Age"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
];

@Component({
  providers: [DatePipe],
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees: any [] = [];
  displayedColumns: string[] = EmployeeColumns.map((col) => col.key);
  columnsSchema: any = EmployeeColumns;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.createEmployees();
  }

  createEmployees(){
    this.employees =[
      {"name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
      {"name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
      {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20},
      {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43},
    ]
  }

  saveRow(element: any) {
    if (element.dateOfBirth instanceof Date) {
      element.dateOfBirth = this.datePipe.transform(element.dateOfBirth, 'yyyy-MM-dd');
    }
    element.isEdit = false; // Здесь переключаем режим редактирования
    // Здесь можете добавить код для сохранения данных на сервере или локально
  }

}
