import { Component, OnInit } from '@angular/core';
import {CatearticlesService} from 'src/app/services/catearticles.service';

@Component({
  selector: 'app-telaccessoires',
  templateUrl: './telaccessoires.component.html',
  styleUrls: ['./telaccessoires.component.css']
})
export class TelaccessoiresComponent implements OnInit {

  articles: any=[];
  articlesparID:any=[];
  constructor(private telaccessoires: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit();
  }

  GetProduit(){
    this.telaccessoires.getarticles(6).subscribe(
      (data) => {
        this.articles=data;
      console.log(data);  
  }
    );

}

getArticleParID(idArticle){
  this.telaccessoires.getArticleByID(idArticle).subscribe(
    (data) =>{
      this.articlesparID=data;
      window.open("/articles/"+idArticle,"_self");
      console.log(this.articlesparID);
    }
  )
}

panier(id):void{
  window.open("/panier/"+id,"_self");

}

}
