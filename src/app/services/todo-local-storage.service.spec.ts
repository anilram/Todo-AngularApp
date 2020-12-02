import { TestBed } from '@angular/core/testing';

import { TodoLocalStorageService } from './todo-local-storage.service';

describe('TodoLocalStorageService', () => {
  let service: TodoLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
