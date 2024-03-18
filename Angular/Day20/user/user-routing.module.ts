import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdduseComponent } from './adduse/adduse.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

const routes: Routes = [
  {
    path:"",component:UserComponent
  },
  {
    path:"adduser",component:AdduseComponent
  },
  {
    path:"updateuser",component:UpdateuserComponent
  },
  {
    path:"deleteuser",component:DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
