import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  id: String;
  description: String;
  dueDate: String;

  constructor(id: String, description: String, dueDate?: String) {
      this.id = id;
      this.description = description;
      this.dueDate = dueDate;
   }

  ngOnInit() {
  }

}
