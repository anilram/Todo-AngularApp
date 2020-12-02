import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const LOCAL_STORAGE_TODO_KEY = 'local_todos';

@Injectable({
  providedIn: 'root'
})
export class TodoLocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService) {}

  public updateTodoLocalStorage(todos: Array<string>): void{
    this.storageService.set(LOCAL_STORAGE_TODO_KEY, todos);
  }

  public getTodosFromLocalStorage(): Array<string>{
    return this.storageService.get(LOCAL_STORAGE_TODO_KEY);
  }
}
