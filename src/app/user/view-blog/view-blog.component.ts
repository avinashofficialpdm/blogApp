import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogAppService } from 'src/app/core/Services/blog-app.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  currentBlogId:any
  currentBlog:any
  comments:any[]=[]
  constructor(private route:ActivatedRoute,private serv:BlogAppService) { }

  ngOnInit(): void {
    this.currentBlogId=this.route.snapshot.paramMap.get("id")
    this.serv.getBlogs().subscribe((res:any)=>{
      this.currentBlog=res.find((element:any)=>element.id==this.currentBlogId)
    })
  
    this.serv.getComments().subscribe((res:any)=>{
      res.forEach((comment:any) => {
        if(comment.blog==this.currentBlog.name){
          this.comments.push(comment)          
        }
      });
    })
   
    
    
    
  }

}
