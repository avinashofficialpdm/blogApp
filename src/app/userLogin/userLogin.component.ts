import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogAppService } from '../core/Services/blog-app.service';


@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  loggedUsername:any
  hide = true;
  durationInSeconds = 5;

  constructor(private serv:BlogAppService,private _rout:Router) { }

  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  ngOnInit() {
  }

  login(){
    this.serv.getUsers().subscribe((res:any)=>{
      
      if(res.find((element:any)=>element.username==this.loginForm.value.username)){
        let currentUser = res.find((element:any)=>element.username==this.loginForm.value.username)
        if(currentUser.password==this.loginForm.value.password){
          this.loggedUsername=this.loginForm.value.username
          localStorage.setItem("userLoggedIn",currentUser.id)
          localStorage.setItem("loggedUser",currentUser.name)
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
