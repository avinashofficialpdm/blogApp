import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';
import { user } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class BlogAppService {

  constructor(private _http: HttpClient) { }

  getBlogs(){
    return this._http.get("http://localhost:3000/blogs")
  }

  getUsers(){
    return this._http.get("http://localhost:3000/users")
  }

  getComments(){
    return this._http.get("http://localhost:3000/comments")
  }

  signUpUser(user:any){
    this._http.post("http://localhost:3000/users",user).subscribe({
      next(){alert("success")},
      error(){console.log(Error);
      }
    })
  }
}
