import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  employee!: Employee;
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    
  }
}
