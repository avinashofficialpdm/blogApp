import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogAppService {
  baseUrl="http://localhost:3000/"

  constructor(private _http: HttpClient, private _rout: Router) { }

  getBlogs():Observable<object> {
    return this._http.get(this.baseUrl+"blogs")
  }

  getUsers():Observable<object> {
    return this._http.get(this.baseUrl+"users")
  }

  
  signUpUser(user: any) {
    return this._http.post(this.baseUrl+"users", user)
  }

  addBlog(blog: any):void {
    this._http.post(this.baseUrl+"blogs", blog).subscribe({
      next() { alert("success");},
      error() {
        console.log(Error);
        alert("Failed")
      }
    })
  }

  addComment(id:number,updatedData:any){
    return this._http.put(this.baseUrl+"blogs/"+id,updatedData)
  }

  deleteBlog(i:number):Observable<object>{
    return this._http.delete(this.baseUrl+"blogs/"+i)
  }

  
  deleteUser(id:number):Observable<object>{
    return this._http.delete(this.baseUrl+"users/"+id)
  }
}
