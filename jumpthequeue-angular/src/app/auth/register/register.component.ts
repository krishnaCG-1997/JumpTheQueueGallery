import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Visitor } from '../../shared/modals/visitor.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registeredUser: Visitor;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptedCommercial: [false, Validators.requiredTrue],
      acceptedTerms: [false, Validators.requiredTrue],
      userType: [false]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
  }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

  onSubmit() {
    const visitorObj: any = {};
    visitorObj.username = this.registerForm.controls.email.value;
    visitorObj.name = this.registerForm.controls.name.value;
    visitorObj.password = this.registerForm.controls.password.value;
    visitorObj.phoneNumber = this.registerForm.controls.phoneNumber.value;
    visitorObj.acceptedCommercial = this.registerForm.controls.acceptedCommercial.value;
    visitorObj.acceptedTerms = this.registerForm.controls.acceptedTerms.value;
    visitorObj.userType = false;
    this.authService.registerVisitor(visitorObj).subscribe(data =>
      {
        console.log(data);
        this.registeredUser = data;
        this.authService.login(this.registeredUser.id,this.registeredUser.username);
        this.openSnackBar(' Successfully Registred ', ' Moving to Login ');
      }
      );
      //console.log(this.registeredUser);
    
    // this.route.navigate(['auth/login']);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}


}
