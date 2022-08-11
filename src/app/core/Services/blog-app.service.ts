import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';
import { user } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class BlogAppService {

  constructor(private _http: HttpClient, private _rout: Router) { }

  getBlogs() {
    return this._http.get("http://localhost:3000/blogs")
  }

  getUsers() {
    return this._http.get("http://localhost:3000/users")
  }

  signUpUser(user: any) {
    this._http.post("http://localhost:3000/users", user).subscribe({
      next() { alert("success") },
      error() {
        console.log(Error);
      }
    })
  }

  addBlog(blog: any) {
    this._http.post("http://localhost:3000/blogs", blog).subscribe({
      next() { alert("success") },
      error() {
        console.log(Error);
      }
    })
  }
  addComment(id:number,updatedData:any){
    this._http.put("http://localhost:3000/blogs/"+id,updatedData).subscribe({
      next() { alert("success");
    window.location.reload() },
      error() {
        console.log(Error);
      }
    })
  }
}
