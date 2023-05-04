import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as AOS from 'aos'; 
 
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
 
export class EditPostComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.GetPost(this.getId).subscribe(res => {
      this.updateForm.setValue({
        author: res['author'],
        title: res['title'],
        description: res['description'],
        content: res['content']
      });
    });
 
    this.updateForm = this.formBuilder.group({
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
 
  onUpdate(): any {
    this.crudService.updatePost(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/posts-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}