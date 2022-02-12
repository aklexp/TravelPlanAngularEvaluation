import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ReportService } from '../shared/report.service'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  // declare variables
  loggedUser : string;
  page:number=1;
  filter="";
  constructor(public reportService:ReportService, private route:ActivatedRoute,private authService:AuthService,private router : Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("USERNAME");

    // Get Report1
    this.reportService.bindAllReport1();

    // Get Report 2
    this.reportService.bindAllReport2();
    
  }

  // Logout function
  logOut()
  {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
    this.router.navigateByUrl('login');
  }
}
