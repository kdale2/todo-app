import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoItemComponent,
    TodoListComponent,
    PageNotFoundComponent,
    NewTodoItemComponent,
    AddTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
