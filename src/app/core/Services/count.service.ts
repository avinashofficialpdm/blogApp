import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogAppService } from './blog-app.service';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  blogsCount: any
  userCount:any
  public countSubject = new BehaviorSubject<number>(0)
  
  public userCountSubject = new BehaviorSubject<number>(0)

  constructor(private blogServ: BlogAppService) {

  }

  ngOnInit() {
    this.blogServ.getBlogs().subscribe((res: any) => {
      this.blogsCount = res.length
    })
    this.blogServ.getUsers().subscribe((res: any) => {
      this.userCount = res.length
    })
  }

  updateCount(data: any) {
    this.countSubject.next(data)
  }

  updateUserCount(data: any) {
    this.userCountSubject.next(data)
  }

}
