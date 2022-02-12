import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { PlanService } from '../shared/plan.service';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  // declare variables
  loggedUser : string;
  page:number=1;
  filter="";

  constructor(private route:ActivatedRoute,private authService:AuthService,private router : Router,
    public reportService:ReportService,public planService:PlanService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("USERNAME");

    // Plan Details
    this.reportService.bindAllReport1();

  }

  // Delete a Plan
  Deleteplan(planId:number){
    if(confirm("Are you sure to DELETE this Record ?"+planId)){
      this.planService.deletePlans(planId).subscribe(
        response=>{
          alert('deleted');
          this.reportService.bindAllPlans();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
  logOut()
  {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
    this.router.navigateByUrl('login');
  }

}
