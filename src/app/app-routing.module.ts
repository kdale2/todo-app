import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
    { path: 'page-not-found', component: PageNotFoundComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'todo-list', component: TodoListComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
