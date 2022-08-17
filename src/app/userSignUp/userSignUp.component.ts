import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogAppService } from '../core/Services/blog-app.service';

@Component({
  selector: 'app-userSignUp',
  templateUrl: './userSignUp.component.html',
  styleUrls: ['./userSignUp.component.css']
})
export class UserSignUpComponent implements OnInit {

  hide = true;

  constructor(private serv: BlogAppService,private _rout:Router) { }

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]*$")]),
    username: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]*$")]),
    password: new FormControl('',[Validators.required])
  })

  get signupFormControl() {
    return this.signupForm.controls;
  }

  signUp() {
    this.serv.signUpUser(this.signupForm.value)
    setTimeout(() => {
      this._rout.navigateByUrl("userLogin")
    }, 1000);
  }

  ngOnInit() {}

}
