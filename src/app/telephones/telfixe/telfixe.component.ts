import { Component, OnInit } from '@angular/core';
import {CatearticlesService} from 'src/app/services/catearticles.service';
@Component({
  selector: 'app-telfixe',
  templateUrl: './telfixe.component.html',
  styleUrls: ['./telfixe.component.css']
})
export class TelfixeComponent implements OnInit {

  articles: any=[];
  constructor(private telfixe: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit();
  }

  GetProduit(){
    this.telfixe.getarticles(5).subscribe(
      (data) => {
        this.articles=data;
      console.log(data);  
  }
    );

}
}
