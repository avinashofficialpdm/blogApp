import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogAppService } from 'src/app/core/Services/blog-app.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  loggedUserId: any
  loggedUser: any
  imageUrl: any
  constructor(
    private serv: BlogAppService,
    private route: ActivatedRoute,
    private _http: BlogAppService,
    private _rout: Router) { }

  ngOnInit(): void {
    this.loggedUserId = this.route.snapshot.paramMap.get("id")
    this._http.getUsers().subscribe((res: any) => {
      this.loggedUser = res.find((element: any) => element.id == this.loggedUserId)
    })

  }

  onselectFile(event: any) {
    if (event.target.files) {
      let reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result

      }
    }
  }

  addBlog(formValues: any) {
    formValues.authorUname = this.loggedUser.username
    formValues.author = this.loggedUser.name
    formValues.date = new Date()
    formValues.comments = []
    formValues.image = this.imageUrl
    this.serv.addBlog(formValues)
    setTimeout(() => {
      this._rout.navigateByUrl("")
    }, 1000);
  }


}
