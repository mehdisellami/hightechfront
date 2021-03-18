import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthontificationGuardGuard implements CanActivate {
  
  constructor(private authService : LoginService , private route : Router){}
  
  
  canActivate():boolean{
    if (this.authService.loggedIn()){
      return true
    }
    else {
      this.route.navigate(['/Connexion'])
      return false
    }
  }
}
