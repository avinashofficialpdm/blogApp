import { Component, OnInit } from '@angular/core';
import { Blog } from '../core/Models/blog';
import { BlogAppService } from '../core/Services/blog-app.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  faUser = faUser
  blogList: any[] = []
  userlogged: boolean = false

  constructor(private _serv: BlogAppService, private _rout: Router) { }

  ngOnInit(): void {
    this._serv.getBlogs().subscribe((res: any) => {
      this.blogList = res
      // this.blogList.sort(function(a,b){
      //   return new Date(b.date)- new Date(a.date)
      // })
      console.log(this.blogList);

    })

    if (localStorage.getItem('userLoggedIn')) {
      this.userlogged = true
    }
  }

  readMore(id: number) {
    if (localStorage.getItem("userLoggedIn")) {
      this._rout.navigate(['userLogged/viewBlog', id])
    } else {
      alert("Please Login To Read More")
      this._rout.navigateByUrl("userLogin")
    }
  }

  logout() {
    if (confirm("Are you sure you want to Logout")) {
      localStorage.removeItem("userLoggedIn")
      this._rout.navigateByUrl("")
      window.location.reload()
    }
  }

}
