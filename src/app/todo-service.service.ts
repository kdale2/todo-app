import { Injectable } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

/*
Add three functions to the service,

1. a function for adding a new todo item to the array of todo items
2. a function for updating the dueDate property of a todo item object
3.  [extra credit 2] a function for removing a todo item from the todo item array
    (in addition add a button to the todo item component that when clicked 
    removes it from the array) 
    
Store the todo list items in an array in the todo-service.
you can instantiate the array with some pre-built todo items.
be sure to inject the service into component(s) where needed.*/

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  tasks: TodoItemComponent[];
  newTasks: NewTodoItemComponent[];

  constructor() {

    this.tasks = [new TodoItemComponent('1', 'Clean the kitchen'), 
                  new TodoItemComponent('2', 'Finish homework'),
                  new TodoItemComponent('3', 'Take out garbage')]; 
                  
    this.newTasks = [];

   }

updateDueDate(task: TodoItemComponent, dueDate: String) {
  task.dueDate = dueDate;
}

  //The following two methods are for adding new todo items
populateList(): NewTodoItemComponent[] {
  return this.newTasks;
}
  
addNewTask(task: NewTodoItemComponent): NewTodoItemComponent[] {
    this.newTasks.push(task);
    return this.newTasks;
  }
}



