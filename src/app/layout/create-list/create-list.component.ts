import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  name: String;

  constructor(private storage_service: StorageService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  successMessage() {
    this.toastr.success('nouvel élément ajouté à la TodoList');
  }

  insertElement() {
    const obj = {
      title: this.name
    }
    this.successMessage();
    return this.storage_service.addElement(obj);

  }

  backHome() {
    this.router.navigateByUrl('/home');
  }

}
