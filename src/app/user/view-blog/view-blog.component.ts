import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { identity } from 'rxjs';
import { BlogAppService } from 'src/app/core/Services/blog-app.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  currentBlogId: any
  currentBlog: any
  comments: any[] = []
  currentUser: any
  faUser = faUser
  constructor(private route: ActivatedRoute, private serv: BlogAppService) { }

  addCommentForm = new FormGroup({
    review: new FormControl(''),
    username: new FormControl(''),
    id:new FormControl('')
  })

  ngOnInit(): void {
    this.currentBlogId = this.route.snapshot.paramMap.get("id")
    this.serv.getBlogs().subscribe((res: any) => {
      this.currentBlog = res.find((element: any) => element.id == this.currentBlogId)
      this.comments = this.currentBlog.comments

    })
    this.serv.getUsers().subscribe((res: any) => {
      this.currentUser = res.find((user: any) => user.id == localStorage.getItem("userLoggedIn"))
    })

  }

  addComment() {
    this.serv.getBlogs().subscribe((res: any) => {
      let newId:any=1
      let clickedBlog = res.find((blog: any) => blog.name == this.currentBlog.name)
      this.addCommentForm.value.username=this.currentUser.username
      if(clickedBlog.comments.length>0){
        newId=clickedBlog.comments[clickedBlog.comments.length-1].id+1
      }
      // let newId = clickedBlog.comments[clickedBlog.comments.length-1].id?clickedBlog.comments[clickedBlog.comments.length-1].id+1:1
      console.log(newId);
      
      this.addCommentForm.value.id=newId
      clickedBlog.comments.push(this.addCommentForm.value)
      this.serv.addComment(this.currentBlogId, clickedBlog)
    })
  }


}
