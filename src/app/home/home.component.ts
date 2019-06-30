import { Component, OnInit, OnDestroy } from '@angular/core';

//import statement for service
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs;

  constructor(public blogService:BlogService) { 
    console.log('home component constructor is called');
  }

  ngOnInit() {
    console.log('home component oninit called');
    //this.allBlogs = this.blogHttpService.getAllBlogs();
    
    //for handling observables we use subscribe method
    this.allBlogs = this.blogService.getAllBlogs();
    console.log(this.allBlogs);
    return this.allBlogs;
  }

  ngOnDestroy() {
    console.log('home component destroyed');

  }

}
