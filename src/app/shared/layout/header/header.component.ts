import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAppService } from 'src/app/core/Services/blog-app.service';
import { CountService } from 'src/app/core/Services/count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userlogged: boolean = false
  loggedUser: any
  nameOfloggedUser: any
  countOfBlogs: any
  countOfUsers:any
  constructor(private _rout: Router, private countServ: CountService,private blogServ:BlogAppService) { }

  ngOnInit() {
    if (localStorage.getItem('userLoggedIn')) {
      this.userlogged = true
      this.nameOfloggedUser = localStorage.getItem("loggedUser")
      this.loggedUser = localStorage.getItem("userLoggedIn")
      
    }
    this.countServ.countSubject.subscribe(number => { this.countOfBlogs = number })
    this.countServ.userCountSubject.subscribe(number => { this.countOfUsers = number })
  }

  logout() {
    if (confirm("Are you sure you want to Logout")) {
      localStorage.removeItem("userLoggedIn")
      this._rout.navigateByUrl("")
      window.location.reload()
    }
  }

  login() {
    this._rout.navigateByUrl("userLogin")
  }

  deleteAccount(){
    if(confirm("Are you sure you want to delete your Account")){
      this.blogServ.deleteUser(this.loggedUser).subscribe((res:any)=>{
        console.log(res);
        alert("Deleted Successfully")
        localStorage.clear()
        window.location.reload()
        // this._rout.navigateByUrl("")
      })
    }
  }
  addBlog() {
    this._rout.navigate(['userLogged/addBlog', this.loggedUser])
  }

  myBlog() {
    this._rout.navigate(['userLogged/myBlog', this.loggedUser])
  }

}
