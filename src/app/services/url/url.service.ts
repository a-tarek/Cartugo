import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  redirectUrl$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }


  setRedirectUrl(string){
    this.redirectUrl$.next(string)
  } 

  getRedirectUrl():Observable<string>{
    return this.redirectUrl$.asObservable();
  }
}
