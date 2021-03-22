import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;

  constructor(private route:Router, private authService:LoginService) { }

  ngOnInit(): void {
    if (this.loggedIn()) {
      this.isLoggedIn=true;

    }
    else{
      this.isLoggedIn=false
    }
  
    
  }


  loggedIn() {
    return !!localStorage.getItem('username')
   

  }

  connexion(){
    window.open("/Connexion","_self");
  }

  logOut(){
    window.localStorage.clear();
    this.isLoggedIn=false;
    alert("Utilisateur deconnecté");
    this.route.navigate(['/Connexion'])

  }

}
