import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';

//importing service 
import { BlogService } from '../blog.service';

//importing browser history
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit,OnDestroy {
  public currentBlog;
  constructor(private _route:ActivatedRoute, private router:Router,public blogService:BlogService,private location:Location) { 
    console.log('view component constructor is called');
  }

  ngOnInit() {
    console.log('view compomnent oninit called');
    //getting the blog id from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);


    //calling the function to get the blog with this blogId out of the over all array
    //this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog);       
    
   this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
   console.log(this.currentBlog)

  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

  ngOnDestroy() {
    console.log('view component destroyed');
  }

}
