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
  articlesparID: any=[];
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
  panier(id):void{
    window.open("/panier/"+id,"_self");
  
  }

  getArticleParID(idArticle){
    this.disquedurServ.getArticleByID(idArticle).subscribe(
      (data) =>{
        this.articlesparID=data;
        window.open("/articles/"+idArticle,"_self");
        console.log(this.articlesparID);
      }
    )
  }
  
}