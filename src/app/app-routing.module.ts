import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateListComponent } from './layout/create-list/create-list.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { ShowListComponent } from './layout/show-list/show-list.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createList',
    component: CreateListComponent
  },
  {
    path: 'showList',
    component: ShowListComponent
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
