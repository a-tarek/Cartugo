import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginResponse } from 'src/app/models/login-response';
import {Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlService } from 'src/app/services/url/url.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  submited:boolean = false;
  loginResponse:LoginResponse;
  redirectUrl: string;
  
  email:string;
  password:string;
  loginForm = new FormGroup({
    email: new FormControl(this.email, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(this.password,[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ])
  })

  constructor(private authService:AuthService, private location: Location,private route: ActivatedRoute,
    private router: Router, private urlService:UrlService) { 
  
      this.urlService.getRedirectUrl().subscribe( url=> this.redirectUrl = url)
    }

  ngOnInit() {
  }

  updateName() {
  }

  onSubmit(form){
    if(form.valid){
      this.loginResponse = this.authService.login(form.controls.email.value, form.controls.password.value)
      if(this.loginResponse.success){
          this.router.navigate([this.redirectUrl])
      }
    }
  }
  clicked(){
    this.submited= true;
  }

  log(value){
    console.log('value', value);
  }

}
