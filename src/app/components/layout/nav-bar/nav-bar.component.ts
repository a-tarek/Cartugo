import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import { UrlService } from 'src/app/services/url/url.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  user:User;
  redirectUrl:string;

  constructor(private authService:AuthService, private urlSerivce:UrlService,private router:Router) { 
    authService.getLoggedIn().subscribe( u =>this.user=u)

  }
  ngOnInit() { 
    
  }
  
  logIn(redirectUrl:string){
    this.urlSerivce.setRedirectUrl(this.router.url)
    this.router.navigate(['/login'])
   }

   logOut(){
     this.authService.logOut();
   }

}