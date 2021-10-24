import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  todoList: Array<any>;

  constructor(private storage_service: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.todoList = this.storage_service.getTodoList();
  }

  backHome() {
    this.router.navigateByUrl('/home');
  }

}
