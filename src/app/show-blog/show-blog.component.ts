import { Component, OnInit } from '@angular/core';
import { BlogAppService } from '../Services/blog-app.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { CountService } from '../Services/count.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Blog } from '../models/blog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  // for pagination
  p:number = 1

  // for icon
  faUser = faUser

  blogList: Blog[] = []
  userlogged: boolean = false
  loggedUser?:string|null

  constructor(private _serv: BlogAppService,
    private _rout: Router,
    private _countServ: CountService,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {

    // for resolve the data
    this.blogList = this._route.snapshot.data['data']

    // for sort the blogs using the dates uploaded
    this.blogList.sort(function compare(obj1, obj2) { return <any|Date>new Date(obj2.date) - <any|Date>new Date(obj1.date) })

    // for add alternate image when the imgage is not uploaded
    this.blogList.forEach((element: Blog) => {
      if (element.image == "") {
        element.image = "https://www.kindpng.com/picc/m/320-3203444_blog-subscribe-widget-computer-icons-free-download-hd.png"
      }
    })



    if (localStorage.getItem('userLoggedIn')) {
      this.userlogged = true
      this.loggedUser = localStorage.getItem("userLoggedIn")
    }

    this._serv.getBlogs().subscribe((res:any) => {
      let count = res.length
      this._countServ.updateCount(count)
    })
    this._serv.getUsers().subscribe((res:any) => {
      let count = res.length
      this._countServ.updateUserCount(count)
    })
  }

  readMore(id:number):void {
    if (localStorage.getItem("userLoggedIn")) {
      this._rout.navigate(['userLogged/viewBlog', id])
    } else {
      this._snackBar.open("Please Login To Read More", "", { duration: 2 * 1000 })
      setTimeout(() => {
        this._rout.navigateByUrl("userLogin")
      }, 1000);
    }
  }
}
