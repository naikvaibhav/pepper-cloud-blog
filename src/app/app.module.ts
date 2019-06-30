import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/*import routers modules*/
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

//import statement for service
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'blog/:blogId', component: ViewBlogComponent}
    ])

  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
