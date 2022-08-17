import { Component, OnInit } from '@angular/core';
import { BlogAppService } from '../core/Services/blog-app.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { CountService } from '../core/Services/count.service';


import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  // for pagination
  p = 1

  // for icon
  faUser = faUser

  blogList: any[] = []
  userlogged: boolean = false
  loggedUser:any

  constructor(private _serv: BlogAppService,
    private _rout: Router,
    private _countServ: CountService,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {

    // for resolve the data
    this.blogList = this._route.snapshot.data['data']

    // for sort the blogs using the dates uploaded
    this.blogList.sort(function compare(obj1, obj2) { return <any>new Date(obj2.date) - <any>new Date(obj1.date) })

    // for add alternate image when the imgage is not uploaded
    this.blogList.forEach((element: any) => {
      if (element.image == "") {
        element.image = "https://www.kindpng.com/picc/m/320-3203444_blog-subscribe-widget-computer-icons-free-download-hd.png"
      }
    })



    if (localStorage.getItem('userLoggedIn')) {
      this.userlogged = true
      this.loggedUser = localStorage.getItem("userLoggedIn")
    }

    this._serv.getBlogs().subscribe((res: any) => {
      let count = res.length
      this._countServ.updateCount(count)
    })
    this._serv.getUsers().subscribe((res: any) => {
      let count = res.length
      this._countServ.updateUserCount(count)
    })
  }

  readMore(id: number) {
    if (localStorage.getItem("userLoggedIn")) {
      this._rout.navigate(['userLogged/viewBlog', id])
    } else {
      this._snackBar.open("Please Login To Read More", "", { duration: 2 * 1000 })
      setTimeout(() => {
        this._rout.navigateByUrl("userLogin")
      }, 1000);
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
}
