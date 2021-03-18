import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from 'src/app/services/catearticles.service';
@Component({
  selector: 'app-disquedur',
  templateUrl: './disquedur.component.html',
  styleUrls: ['./disquedur.component.css']
})
export class DisquedurComponent implements OnInit {
  articles: any=[];
  constructor(private disquedurServ: CatearticlesService) { }
  
  ngOnInit(): void {
    this.GetProduit();
  }
  
  GetProduit(){
    this.disquedurServ.getarticles(7).subscribe(
      (data) => {
        this.articles=data;
        console.log(data);  
      }
    );
  }
  
}