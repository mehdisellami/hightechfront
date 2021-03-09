import { Component, OnInit } from '@angular/core';
import { OrdinateursService } from '../services/ordinateurs.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  articles : any =[];

  constructor(public ordinateurService : OrdinateursService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.ordinateurService.getAll().subscribe(
      (data) =>{
        this.articles=data;
        console.log(data);

      }
    )
  }
}
