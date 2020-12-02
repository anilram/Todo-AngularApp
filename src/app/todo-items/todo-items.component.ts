import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {

  todos: Array<string>;
  todo: string;
  editMode: boolean;

  constructor(){
    this.todos = [];
    this.todo = '';
    this.editMode = false;
  }

  addTodo(): void{
    if ( !this.todo ){
      return;
    }
    this.todos.push(this.todo);
    this.todo = '';
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  allowEdit($event: any): void{
    $event.target.removeAttribute('readonly');
  }

  updateTodo($event: any, index: number): void{
    this.todos[index] = $event.target.value;
    $event.target.setAttribute('readonly', 'true');
    $event.target.setAttribute('size', $event.target.value.length);
  }

}
