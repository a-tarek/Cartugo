import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../../models/response';
import { LoadedRouterConfig } from '@angular/router/src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn$: BehaviorSubject<User> = new BehaviorSubject(null);
  users: User[];

  resp: Response ;

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || []
    this.loggedIn$.next(JSON.parse(localStorage.getItem('loggedIn')));
  }


  logOut(){
    localStorage.removeItem('loggedIn');
    this.loggedIn$.next(JSON.parse(localStorage.getItem('loggedIn')));
  }


  attempt(email: string, password: string):Response {
    this.resp={
      success: false,
      user: null,
      errors: "Email or password is incorrect"
    };
    this.users.forEach(user => {
      if (user.email === email) {
        if (user.password === password) {
          this.resp = {
            success: true,
            user: user,
            errors: ''
          }
          this.login(user)
        }
      }
    })
    console.log('this.resp', this.resp);
    return this.resp;
  }

login(u){
  let { password, ...user } = u; // removing password from user
  localStorage.setItem('loggedIn', JSON.stringify(user));
  this.loggedIn$.next(u);
}

  register(user:User):Response{
      this.resp = this.canAdd(user)
      if(this.resp.success){
      this.users = [...this.users, user]
      localStorage.setItem('users', JSON.stringify(this.users))
      this.login(user)
    }
    return this.resp
  }

  private canAdd(user):Response{
    return !(this.users.filter(value=> value.email === user.email).length)
    ? {
      success:true, 
      user:user,
      errors:''
    }:{
      success: false,
      user: null,
      errors: "Email already exists"
    };
  }



  getLoggedIn(): Observable<User> {
    return this.loggedIn$.asObservable();
  }

  addToUsers(user: User) {
    this.users = { ...this.users, ...user }
    localStorage.setItem('users', JSON.stringify(this.users))
  }

}
