import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
      next() { alert("success");},
      error() {
        console.log(Error);
        alert("Failed")
      }
    })
  }

  // addBlog(blog: any) {
  //  return this._http.post("http://localhost:3000/blogs", blog)
  // }

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
