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

  // for hide and show button of password
  hide = true;

  constructor(private serv: BlogAppService,private _rout:Router) { }

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]*$")]),
    username: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]*$")]),
    password: new FormControl('',[Validators.required])
  })

  // to get the controls of form for validation
  get signupFormControl() {
    return this.signupForm.controls;
  }

  // signup function when click the signup button
  signUp() {
    this.serv.signUpUser(this.signupForm.value)
    setTimeout(() => {
      this._rout.navigateByUrl("userLogin")
    }, 1000);
  }

  ngOnInit() {}

}
