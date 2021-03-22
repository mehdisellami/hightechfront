import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-pc-accessoires',
  templateUrl: './pc-accessoires.component.html',
  styleUrls: ['./pc-accessoires.component.css']
})
export class PcAccessoiresComponent implements OnInit {

  articles: any=[];
  articlesparID:any=[];
  constructor(private pcaccessoires: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit();
  }

  GetProduit(){
    this.pcaccessoires.getarticles(3).subscribe(
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
  this.pcaccessoires.getArticleByID(idArticle).subscribe(
    (data) =>{
      this.articlesparID=data;
      window.open("/articles/"+idArticle,"_self");
      console.log(this.articlesparID);
    }
  )
}

}
