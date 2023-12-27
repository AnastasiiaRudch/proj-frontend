export class Employee {
  constructor(
    name: string,
    occupation: string,
    age: number
  ) {
  }
}

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
