import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../services/Admin.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  isLoggedin=false;
  admin: Admin = new Admin();
  errormessage: string = ''
  constructor(private connectService: LoginService, private route : Router) { }

  ngOnInit(): void {
  }


  connexion(f: any) {

    this.connectService.ConnectAdmin(this.admin).subscribe(
      data => {
        alert("utilisateur connecté avec success !");
        this.admin = data;
      localStorage.setItem('username',this.admin[0]?.username)
      this.isLoggedin=true;
      window.location.reload();

        window.open("/","_self");
        console.log(this.admin);
        return this.admin

      },
      (err) => { }
    );

  }

}
