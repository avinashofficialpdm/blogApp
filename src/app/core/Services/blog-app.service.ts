import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogAppService {

  constructor(private _http: HttpClient) { }

  getBlogs(){
    return this._http.get("http://localhost:3000/blogs")
  }
}
