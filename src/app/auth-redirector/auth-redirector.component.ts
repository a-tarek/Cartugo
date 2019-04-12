import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-auth-redirector',
  templateUrl: './auth-redirector.component.html',
  styleUrls: ['./auth-redirector.component.scss']
})
export class AuthRedirectorComponent implements OnInit {

  logged:boolean;
  @Input() url;
  constructor(private authService:AuthService, private route:Router) {
    
    this.authService.loggedIn$.subscribe(data=> this.logged = (data)? true:false)
    
   }

  ngOnInit() {
    if(this.route.url=== this.url && this.logged)
    {
      this.route.navigate(['/'])
    }
  }

}
