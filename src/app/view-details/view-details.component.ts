import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{

  id!: number;
  employee!: Employee;
  constructor(private employeeService: EmployeeService,
    private route:ActivatedRoute){

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

}
