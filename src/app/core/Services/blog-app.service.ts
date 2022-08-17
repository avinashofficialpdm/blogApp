import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogAppService {
  baseUrl="http://localhost:3000/"

  constructor(private _http: HttpClient, private _rout: Router) { }

  getBlogs() {
    return this._http.get(this.baseUrl+"blogs")
  }

  getUsers() {
    return this._http.get(this.baseUrl+"users")
  }

  
  signUpUser(user: any) {
    this._http.post(this.baseUrl+"users", user).subscribe({
      next() { alert("success") },
      error() {
        console.log(Error);
      }
    })
  }

  addBlog(blog: any) {
    this._http.post(this.baseUrl+"blogs", blog).subscribe({
      next() { alert("success");},
      error() {
        console.log(Error);
        alert("Failed")
      }
    })
  }

  addComment(id:number,updatedData:any){
    this._http.put(this.baseUrl+"blogs/"+id,updatedData).subscribe({
      next() {
    window.location.reload() },
      error() {
        console.log(Error);
      }
    })
  }

  deleteBlog(i:number){
    return this._http.delete(this.baseUrl+"blogs/"+i)
  }

  deleteUser(id:number){
    return this._http.delete(this.baseUrl+"users/"+id)
  }
}
