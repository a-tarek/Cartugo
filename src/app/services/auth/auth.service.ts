import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn$: BehaviorSubject<User> = new BehaviorSubject(null);
  users: User[];

  resp: LoginResponse = {
    success: false,
    user: null,
    errors: "Email and password do not match"
  };


  constructor() {
    localStorage.setItem('users', JSON.stringify([{
      email: "a.tarek.elsayed@gmail.com",
      password: "123456",
      firstName: "Ahmed",
      lastName: "Tarek"
    }]))
    this.users = JSON.parse(localStorage.getItem('users'))
    this.loggedIn$.next(JSON.parse(localStorage.getItem('loggedIn')));
  }


  logOut(){
    localStorage.removeItem('loggedIn');
    this.loggedIn$.next(JSON.parse(localStorage.getItem('loggedIn')));
  }


  login(email: string, password: string) {
    this.users.forEach(u => {
      if (u.email === email) {
        if (u.password === password) {
          this.resp = {
            success: true,
            user: u,
            errors: ''
          }
          let { password, ...user } = u; // removing password from user
          localStorage.setItem('loggedIn', JSON.stringify(user));
          this.loggedIn$.next(u);
        }
      }
    })
    return this.resp;
  }


  getLoggedIn(): Observable<User> {
    return this.loggedIn$.asObservable();
  }

  addToUsers(user: User) {
    this.users = { ...this.users, ...user }
    localStorage.setItem('users', JSON.stringify(this.users))
  }

}
