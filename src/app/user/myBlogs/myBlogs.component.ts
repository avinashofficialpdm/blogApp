import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogAppService } from 'src/app/core/Services/blog-app.service';

@Component({
  selector: 'app-myBlogs',
  templateUrl: './myBlogs.component.html',
  styleUrls: ['./myBlogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  curentUserId: any
  currentUser: any
  myBlogs: any[] = []
  loggedUser:any
  constructor(private serv: BlogAppService,private _rout:Router) { }

  ngOnInit() {
    this.loggedUser = localStorage.getItem("userLoggedIn")
    this.curentUserId= localStorage.getItem("userLoggedIn")
    this.serv.getUsers().subscribe((user:any)=>{
      this.currentUser= user.find((element:any)=>element.id==this.curentUserId)
      this.serv.getBlogs().subscribe((blogs:any)=>{
        blogs.forEach((blog:any) => {
          if(blog.author==this.currentUser.name){
            this.myBlogs.push(blog)
          }
        });
      })
    })
    this.myBlogs.sort(function compare(obj1, obj2) { return <any> new Date(obj2.date) - <any> new Date(obj1.date) }) 
  }

  deleteBlog(i:number){
    if(confirm("Are you sure ? ")){
      this.serv.deleteBlog(i).subscribe((res:any)=>{
        window.location.reload()
      })
    }
  }

  addBlog() {
    this._rout.navigate(['userLogged/addBlog', this.loggedUser])
  }

}
