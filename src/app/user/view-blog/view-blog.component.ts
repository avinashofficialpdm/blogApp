import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private serv: BlogAppService) { }

  commentText = ""
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
      let clickedBlog = res.find((blog: any) => blog.name == this.currentBlog.name)
      clickedBlog.comments.push({ "username": this.currentUser.username, "review": this.commentText })
      this.serv.addComment(this.currentBlogId, clickedBlog)

    })
  }


}
