import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Report1 } from './report1';
import { Report2 } from './report2';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  //declare variables
  report1: Report1[];
  formData:Report1=new Report1();
  report2: Report2[];
  formDataTwo:Report2=new Report2();
  constructor(private httpClient:HttpClient) { }
  

  // All Plans
  bindAllPlans(){
    this.httpClient.get(environment.apiUrl+'/api/Plans')
    .toPromise().then(
      response=>{
        this.report1=response as Report1[];
        console.log(this.report1);
      }
    );
  }
  // report 1
  bindAllReport1(){
    this.httpClient.get(environment.apiUrl+'/api/ViemModel/plandetails')
    .toPromise().then(
      response=>{
        this.report1=response as Report1[];
        console.log(this.report1);
      }
    );
  }

  // report 2
  bindAllReport2(){
    this.httpClient.get(environment.apiUrl+'/api/ViemModel/plansnotexceed2days')
    .toPromise().then(
      response=>{
        this.report2=response as Report2[];
        console.log(this.report2);
      }
    );
  }
}
