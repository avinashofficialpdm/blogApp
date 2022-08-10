import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginGuard } from './login.guard';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {
    path:'addBlog',
    component:AddBlogComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'viewBlog/:id',
    component:ViewBlogComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
