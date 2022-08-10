import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { UserLoginComponent } from './userLogin/userLogin.component';

const routes: Routes = [
  {
    path:"",
    component:ShowBlogComponent
  },
  {
    path:'userLogin',
    component:UserLoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
