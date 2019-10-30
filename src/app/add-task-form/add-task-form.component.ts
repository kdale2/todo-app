import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NewTodoItemComponent } from '../new-todo-item/new-todo-item.component';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  todoService: TodoServiceService;
  newTasks: NewTodoItemComponent[];

  constructor(todoService: TodoServiceService) {

    this.todoService = todoService;
    this.newTasks = todoService.populateList(); 

  }

  ngOnInit() {
  }

  addTask(formInput: String, IDinput: String) {

    alert("Adding task to list!");
    this.newTasks = this.todoService.addNewTask(new NewTodoItemComponent(IDinput, formInput));

  }

  buttonClickedUrgent(task: NewTodoItemComponent) {
    task.dueDate = 'urgent';
  }

  buttonClickedDays(task: NewTodoItemComponent) {
    task.dueDate = 'days';
  }

 buttonClickedWeek(task: NewTodoItemComponent) {
    task.dueDate = 'week';
  }
}
