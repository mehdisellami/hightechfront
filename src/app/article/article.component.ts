import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  idarticle: any;
  articlerecup: any = [];
  constructor(private route:ActivatedRoute , private article : CatearticlesService ) { }

  ngOnInit(): void {
    this.idarticle=this.route.snapshot.paramMap.get('id');
    console.log(this.idarticle)

    this.recupArticles(this.idarticle)
  }


  recupArticles(id){
    this.article.RecupArticles(id).subscribe(
      (data) => {
        this.articlerecup=data;
        console.log(this.articlerecup);
      },
    );
  }


}
