import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {
articles: any=[];

  constructor(private article: CatearticlesService) { }

  ngOnInit(): void {
    this.GetAllArticle();
  }
   GetAllArticle(){
     this.article.getAllarticles().subscribe(
       (data) =>{
        this.articles=data;
        console.log(data);
       }
     );
   }


  delArticle(id):void{
    this.article.DeleteArticle(id)
    .subscribe( data => {
      alert("Article supprimé " + id + " supprimée");

    },
    (err)=>{
    }
    );
  }
  editArticle():void{
  window.open("editarticle","_self");
  }

}
