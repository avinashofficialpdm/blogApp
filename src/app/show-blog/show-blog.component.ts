import { Component, OnInit } from '@angular/core';
import { Blog } from '../core/Models/blog';
import { BlogAppService } from '../core/Services/blog-app.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

  faUser=faUser
  blogList:any[]=[]
  constructor(private _serv:BlogAppService) { }

  ngOnInit(): void {
    this._serv.getBlogs().subscribe((res:any)=>{
      this.blogList=res
      // this.blogList.sort(function(a,b){
      //   return new Date(b.date)- new Date(a.date)
      // })
      console.log(this.blogList);
      
    })
  }

}
