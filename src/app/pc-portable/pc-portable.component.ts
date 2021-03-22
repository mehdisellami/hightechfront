import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  articles : any =[];
  articlesparID:any=[];

  constructor(public pcportable : CatearticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.pcportable.getarticles(1).subscribe(
      (data) =>{
        this.articles=data;
        console.log(data);
      }
    );
  }
  panier(id):void{
    window.open("/panier/"+id,"_self");
  
  }


  getArticleParID(idArticle){
    this.pcportable.getArticleByID(idArticle).subscribe(
      (data) =>{
        this.articlesparID=data;
        window.open("/articles/"+idArticle,"_self");
        console.log(this.articlesparID);
      }
    )
  }

}
