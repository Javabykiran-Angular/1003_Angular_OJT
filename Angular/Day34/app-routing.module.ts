import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardModule } from './dashboard/dashboard.module';


const routes: Routes = [
  {
    path:"",redirectTo:"/login",pathMatch:"full"
  },
  {
    path:"login",component:LoginComponent
  },

  {
    path:"dashboard",loadChildren:()=>import('./dashboard/dashboard.module').then(m=>DashboardModule)
  },
  
  {
    path:"**",component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
