import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './Admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private route:Router) { }


  ConnectAdmin(admin){
    return this.http.post<Admin>("http://localhost:8080/Hightech/hightech/loginAdmin/Login",admin);
  }

  loggedIn(){
    return !!localStorage.getItem('username')
    
  }


}
