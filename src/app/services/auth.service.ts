import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any= [];

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean 

  | Observable<boolean>| Promise<boolean>

  {​​

  return( this.route.navigate(['/']));



  }​​}​​
  

