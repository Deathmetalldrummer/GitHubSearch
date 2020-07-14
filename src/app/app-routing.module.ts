import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './pages/user/user.component';
import {RepoComponent} from './pages/repo/repo.component';
import {MainComponent} from './pages/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'repository/:owner/:repo',
    component: RepoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
