import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UrlService } from 'src/app/services/url/url.service';
import { Router } from '@angular/router';
import { Response } from '../../models/response';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  submited: boolean;
  redirectUrl: string;
  response: Response;

  registerForm = new FormGroup({
    firstName: new FormControl(this.user.firstName, [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl(this.user.lastName, [
      Validators.required,
    ]),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ])
  })

  constructor(private authService: AuthService, private urlService: UrlService, private snackBar: MatSnackBar, private router: Router) {
    this.urlService.getRedirectUrl().subscribe(data => this.redirectUrl = data)
  }

  onSubmit() {

    if (this.registerForm.valid) {
      this.user = {
        firstName: this.registerForm.controls.firstName.value,
        lastName: this.registerForm.controls.lastName.value,
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value,
      }
      this.response = this.authService.register(this.user)

      if (this.response.success) {
        this.router.navigate([this.redirectUrl])
        this.openSnackBar('User created successfully', '');

      }


    }

  }
  clicked() {
    this.submited = true;
  }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    })
  }
}
