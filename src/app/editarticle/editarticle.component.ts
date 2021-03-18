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
categorie:any=[];

constructor(private article: CatearticlesService, private route: ActivatedRoute) { }

ngOnInit(): void {
  this.idarticle=this.route.snapshot.paramMap.get('id');
  this.recupArticles(this.idarticle);
  this.recupererCategorie();
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
      window.open("/listearticle","_self");
    return data;
  },
  (err)=>{alert("ERROR");}
  );
}

recupererCategorie(){
  this.article.getCategorie().subscribe(
    (data)=>{
     this.categorie=data
     console.log(this.categorie)
    }
  )
}

}