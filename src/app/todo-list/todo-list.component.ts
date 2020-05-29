import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoServiceService } from '../todo-service.service';
import { NewTodoItemComponent } from '../new-todo-item/new-todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoService: TodoServiceService;
  tasks: TodoItemComponent[];
  task: TodoItemComponent;
  urgentClicked: boolean = false;
  daysClicked: boolean = false;
  weekClicked: boolean = false;


  constructor(todoService: TodoServiceService) {

    this.todoService = todoService;

    // tasks in list unpon loading the app 
     this.tasks = [new TodoItemComponent('1', 'clean kitchen', 'week'), 
                  new TodoItemComponent('2', 'complete homework', 'urgent'),
                  new TodoItemComponent('3', 'make dinner')];  

  }

  ngOnInit() {
  }

  buttonClickedUrgent(task: TodoItemComponent) {
      //task.dueDate = 'urgent';
      this.todoService.updateDueDate(task, 'urgent');
  }

  buttonClickedDays(task: TodoItemComponent) {
      //task.dueDate = 'days';
      this.todoService.updateDueDate(task, 'days');

  }

  buttonClickedWeek(task: TodoItemComponent) {
      //task.dueDate = 'week';
      this.todoService.updateDueDate(task, 'week');

  }


  deleteButtonClicked(task: TodoItemComponent) {
    const index: number = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  addTask(formInput: String, IDinput: String) {

    alert("Adding task to list!");
    this.task = new NewTodoItemComponent(IDinput, formInput);
    this.tasks.push(this.task);

  }
}
