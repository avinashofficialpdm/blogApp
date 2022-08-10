import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { WordLimitterPipe } from './show-blog/wordLimitter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserLoginComponent} from './userLogin/userLogin.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowBlogComponent,
    WordLimitterPipe,
    HeaderComponent,
    UserLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
