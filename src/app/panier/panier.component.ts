import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  idarticle: any;
  articlerecup: any;
  constructor(private article : CatearticlesService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.idarticle=this.route.snapshot.paramMap.get('id');
    console.log(this.idarticle);
    this.recupArticles(this.idarticle);




  }
  recupArticles(id){
    this.article.RecupArticles(id).subscribe(
      (data) => {
        this.articlerecup=data;
        console.log(this.article);
      },
    );
  }
  
  /*EditArticle(){
    this.article.RecupArticles(this.articlerecup).subscribe(
      (data)=> {
        this.articlerecup=data;
        console.log(this.articlerecup);
      },
    );
  }*/
  
  



}
