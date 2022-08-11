import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogAppService } from 'src/app/core/Services/blog-app.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  loggedUserId:any
  loggedUser:any
  constructor(private serv:BlogAppService,private route:ActivatedRoute,private _http:BlogAppService) { }


  // addBlogForm = new FormGroup({
  //   name: new FormControl(''),
  //   content: new FormControl('')
  //   author:new FormControl(this.loggedUser.name)
  // })


  ngOnInit(): void {
    this.loggedUserId=this.route.snapshot.paramMap.get("id")
    console.log(this.loggedUserId);
    this._http.getUsers().subscribe((res:any)=>{
    this.loggedUser=res.find((element:any)=>element.id==this.loggedUserId)
    console.log(this.loggedUser.name);
    
    })
    
  }

  addBlog(formValues:any){
    formValues.authorUname=this.loggedUser.username
    formValues.author=this.loggedUser.name
    formValues.date=new Date()
    formValues.comments=[]
    console.log(formValues);
    
    this.serv.addBlog(formValues)
  }


}
