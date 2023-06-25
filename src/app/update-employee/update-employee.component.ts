import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route:ActivatedRoute,
    private router: Router){

  }
  ngOnInit() {
   this.id = this.route.snapshot.params['id'];

   this.employeeService.getEmployeeById(this.id).subscribe({next : (data) =>{
    this.employee = data;
   }, error: (error) => console.error(error)
  });
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({next :(data) => {
         this.goToEmployeeList();
    }, error: (error) => console.error(error)
  }); 
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
}
}
