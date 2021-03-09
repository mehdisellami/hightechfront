import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthontificationGuardGuard implements CanActivate {
  constructor(private authService:AuthService , private route : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean 

  | Observable<boolean>| Promise<boolean>

  {​​​​

   return(new Promise(resolve=>{​​​​

     this.authService.user.subscribe(user=>{​​​​ 

       if (user)

               resolve(true);

       else {​​​​

         this.route.navigate(['/home']);

       resolve(false);

      }​​​​

     }​​​​)   

   }​​​​))

  }​​​​
  
}
