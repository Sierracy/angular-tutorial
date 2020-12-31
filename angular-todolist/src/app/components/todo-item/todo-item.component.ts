import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set dynamic class binding
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo){
    console.log('toggle');
    //toggle in the UI
    todo.completed = !todo.completed;

    //toggle in the server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));

  }

  onDelete(todo){
    console.log('delete');
  }

}
