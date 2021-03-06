import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent, children: [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'tareas', component: TodosComponent },
    { path: 'albums', component: AlbumsComponent }
  ]  },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
