import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as AOS from 'aos'; 

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
 
export class AddPostComponent implements OnInit {
 
  postForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.postForm = this.formBuilder.group({
      author: [''],
      title: [''],
      description: [''],
      content: ['']
    })
  }
 
  ngOnInit() {
    AOS.init({
      duration: 1000,
    });
   }
 
  onSubmit(): any {
    this.crudService.AddPost(this.postForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/posts-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}