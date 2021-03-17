import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatearticlesService } from '../services/catearticles.service';


@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {
  
idarticle: any;
articlerecup: any;

  constructor(private article: CatearticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.idarticle=this.route.snapshot.paramMap.get('id');
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

EditArticle()
{
  this.article.putarticles(this.articlerecup).subscribe(
    (data)=>{
      const type = 'success';
      alert("Modification effectuée !");
    return data;
  },
  (err)=>{alert("ERROR " + this.articlerecup.id + " " + this.articlerecup.libelle + " " + this.articlerecup.marque + " " + this.articlerecup.prix + " " + this.articlerecup.photo);}
  );
}

}
