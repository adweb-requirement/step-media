import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
 
export class PostsListComponent implements OnInit {
   postimage='../../../assets/post.png';
  Posts:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetPosts().subscribe(res => {
      console.log(res)
      this.Posts =res;
    });
    AOS.init({
      duration: 1000,
    }); 
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Press OK to Confirm Delete')) {
      this.crudService.deletePost(id).subscribe((res) => {
        this.Posts.splice(i, 1);
      })
    }
  }
 
}