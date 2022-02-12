import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../shared/plan.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-planscrud',
  templateUrl: './planscrud.component.html',
  styleUrls: ['./planscrud.component.scss']
})
export class PlanscrudComponent implements OnInit {

  // declare variable
  loggedUser : string;
  planId:number;
  constructor(public planService:PlanService,private router:ActivatedRoute,
    private route : Router,private toasterservice: ToastrService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("USERNAME");
    this.planService.bindListPlans();
    this.planService.bindListDestination();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log("inserting.....");
    this.insertPlanRecord(form);
    // call reset form for clear
    this.resetForm(form);
    this.toasterservice.success('New Plan has been inserted', 'PlanApp v2022');


  }
  insertPlanRecord(form?: NgForm) {
    this.planService.insertPlan(form.value).subscribe(
      result=>{
        console.log(result);
      }
    )
  }
  logOut()
  {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
    this.route.navigateByUrl('login');
  }
  // clear all contents after submit
  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
  }
}
