import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogAppService } from '../core/Services/blog-app.service';

@Component({
  selector: 'app-userSignUp',
  templateUrl: './userSignUp.component.html',
  styleUrls: ['./userSignUp.component.css']
})
export class UserSignUpComponent implements OnInit {

  constructor(private serv:BlogAppService) { }

  signupForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })

  signUp(){
    this.serv.signUpUser(this.signupForm.value)
  }
  ngOnInit() {
  }

}
