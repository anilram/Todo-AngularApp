import { Component, OnInit } from '@angular/core';
import { TodoLocalStorageService } from '../services/todo-local-storage.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit{

  todos: Array<string>;
  todo: string;
  editMode: boolean;

  constructor(private localStorageService: TodoLocalStorageService){
    this.todos = [];
    this.todo = '';
    this.editMode = false;
  }

  ngOnInit(): void {
    this.todos = this.localStorageService.getTodosFromLocalStorage() || [];
  }

  addTodo(): void{
    if ( !this.todo ){
      return;
    }
    this.todos.push(this.todo);
    this.todo = '';
    this.localStorageService.updateTodoLocalStorage(this.todos);
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.localStorageService.updateTodoLocalStorage(this.todos);
  }

  allowEdit($event: any): void{
    $event.target.removeAttribute('readonly');
  }

  updateTodo($event: any, index: number): void{
    this.todos[index] = $event.target.value;
    this.localStorageService.updateTodoLocalStorage(this.todos);
    $event.target.setAttribute('readonly', 'true');
    $event.target.setAttribute('size', $event.target.value.length);
  }

}
