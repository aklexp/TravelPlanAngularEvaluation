import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from './shared/auth.guard';
import { PlanscrudComponent } from './planscrud/planscrud.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AdminhomeComponent,canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'reports', component: ReportsComponent,canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'plan', component: PlanscrudComponent,canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'userHome', component: UserhomeComponent,canActivate:[AuthGuard],data:{role:'1'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
