import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogAppService } from '../core/Services/blog-app.service';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  loggedUsername:any
  constructor(private serv:BlogAppService,private _rout:Router) { }

  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })

  ngOnInit() {
  }

  login(){
    this.serv.getUsers().subscribe((res:any)=>{
      
      if(res.find((element:any)=>element.username==this.loginForm.value.username)){
        let currentUser = res.find((element:any)=>element.username==this.loginForm.value.username)
        if(currentUser.password==this.loginForm.value.password){
          this.loggedUsername=this.loginForm.value.username
          localStorage.setItem("userLoggedIn",this.loggedUsername)
          alert("Login success")
          this._rout.navigateByUrl("")

        }else{
          alert("Wrong password")
        }
      }else{
        alert("No user found")
      }
      
    })
  }
}
