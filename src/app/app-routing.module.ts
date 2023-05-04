import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts-list', component: PostsListComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
  { path: 'view-post/:id', component: ViewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
