import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  errormessage:string =''
  constructor() { }

  ngOnInit(): void {
  }


  connexion(f:any){
    let data=f.value;
    console.log(data);

  }

}
