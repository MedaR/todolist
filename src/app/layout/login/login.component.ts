import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const email = "dupond.paul@mail.fr";
const password = "azerty";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.loginForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  errorMessage() {
    this.toastr.error('email ou mot de passe invalide');
  }

  onSubmit() {
    const form = this.loginForm.value;
    if(this.loginForm.valid) {
      if(form.email === email && form.password === password) {
        this.router.navigateByUrl('/home');
      }
    }
    else {
      this.errorMessage();
    }

  }

}
