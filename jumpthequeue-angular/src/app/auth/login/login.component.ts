import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor(private fb: FormBuilder, private route: Router, private _snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

  onSubmit() {
  
    this.authService.visitorLogin(this.loginForm.controls.email.value,this.loginForm.controls.password.value);

  }

  onRegisterClick() {
    this.route.navigate(['register']);
  }

}
