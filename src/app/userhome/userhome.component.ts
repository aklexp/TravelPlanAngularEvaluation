import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from '../shared/plan.service';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  //declare variable
  // declare variables
  loggedUser : string;
  page:number=1;
  filter="";

  constructor(public reportService:ReportService,public planService:PlanService,private router : Router) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");

    // Plan Details
    this.reportService.bindAllReport1();
  }
  logOut()
  {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
    this.router.navigateByUrl('login');
  }

}
