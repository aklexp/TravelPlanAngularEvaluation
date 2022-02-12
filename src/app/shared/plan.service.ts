import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destination } from './destination';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  // declare variables
  destination:Destination[];
  plan:Plan[];
  planData: Plan=new Plan();

  constructor(private httpClient:HttpClient) { }


  getAllplans():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/Plans");
  }
  insertPlan(plan:Plan):Observable<any>{
      return this.httpClient.post(environment.apiUrl+"/api/Plans",plan);
  }
  deletePlans(id:number){
    return this.httpClient.delete(environment.apiUrl+"/api/Plans/{id}")
  }

  bindListPlans(){
    this.httpClient.get(environment.apiUrl+'/api/Plans')
    .toPromise().then(
      response=>{
        this.plan= response as Plan[]
      }
    )
  }


  bindListDestination(){
    this.httpClient.get(environment.apiUrl+'/api/Destinations')
    .toPromise().then(
      response=>{
      this.destination=response as Destination[];
      }
    )
  }

}
