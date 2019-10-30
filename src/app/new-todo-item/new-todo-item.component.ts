import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  id: String;
  description: String;
  dueDate: String;
  newItems: NewTodoItemComponent[];

  constructor(id: String, description: String, dueDate?: String) { 

    this.id = id;
    this.description = description;
    this.dueDate = dueDate;

  }

  ngOnInit() {
  }

}
