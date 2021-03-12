import { Component, OnInit } from '@angular/core';
//import { Articles } from '../services/Articles.model';
import { CatearticlesService } from '../services/catearticles.service';
import { Articles} from './Articles.model';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {

  articleInstance: Articles = new Articles();
  

  constructor(private article: CatearticlesService) { }

  ngOnInit(): void {
  }
  

  btnadd():void{    
    console.log(this.articleInstance);
    this.article.postarticles(this.articleInstance)
    .subscribe( data => {
      alert("article  créée");
     // window.open("/app-missions","_self");
      this.articleInstance=data;
      console.log(this.articleInstance);
      return this.articleInstance;
    },
    (err)=>{});  
 }

}
