import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetPost(id).subscribe(res => {
      this.post = res;
    });
    AOS.init({
      duration: 1000,
    });
  }

  delete(id: any) {
    console.log(id);
    if (window.confirm('Press OK to Confirm Delete')) {
      this.crudService.deletePost(id).subscribe(() => {
        window.alert('Post is successfully deleted.');
        this.router.navigate(['/posts-list']);
      });
    }
  }

}




