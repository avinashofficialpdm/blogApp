import { Component, OnInit } from '@angular/core';
import { BlogAppService } from '../core/Services/blog-app.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CountService } from '../core/Services/count.service';


@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  p = 1
  faUser = faUser
  blogList: any[] = []
  userlogged: boolean = false
  loggedUser: any

  constructor(private _serv: BlogAppService, private _rout: Router,private _countServ:CountService) { }

  ngOnInit(): void {
    this._serv.getBlogs().subscribe((res: any) => {
      this.blogList = res
      this.blogList.sort(function compare(obj1, obj2) { return <any> new Date(obj2.date) - <any> new Date(obj1.date) })
      this.blogList.forEach((element: any) => {
        if (element.image == "") {
          element.image = "https://www.kindpng.com/picc/m/320-3203444_blog-subscribe-widget-computer-icons-free-download-hd.png"
        }
      })
    })

    if (localStorage.getItem('userLoggedIn')) {
      this.userlogged = true
      this.loggedUser = localStorage.getItem("userLoggedIn")
    } 

    this._serv.getBlogs().subscribe((res:any)=>{
      let count=res.length
      this._countServ.updateCount(count)
    })
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
  
  addBlog() {
    this._rout.navigate(['userLogged/addBlog', this.loggedUser])
  }

  // clicked(event:any){
  //   if(event.id!=0){
  //     alert("Please Login To Read More")
  //     this._rout.navigateByUrl("userLogin")
  //   }
  // }

}
