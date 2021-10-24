import { Injectable } from '@angular/core';

const storageName = 'todo_list';

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private todoList: any;

  constructor() { 
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  getTodoList() {
    return [...this.todoList];
  }

  addElement(item) {
    this.todoList.push(item);
    return this.updateTodoList();
  }

  updateTodoList() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.getTodoList();
  }

}
