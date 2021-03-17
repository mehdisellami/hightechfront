import { Component, OnInit } from '@angular/core';
import {CatearticlesService} from '../services/catearticles.service';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {
article: any=[];
  constructor(private pcbureau: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit()
  }

  GetProduit(){
    this.pcbureau.getarticles(2).subscribe(
      (data) => {
        this.article=data;
        console.log(this.article);
      }
    );
  }

  delPcBureau(id):void{
    this.pcbureau.DeleteArticle(id)
    .subscribe( data => {
      alert("Pc bureau supprimé " + id + " supprimée");

    },
    (err)=>{
    }
    );
  }
  updatePcBureau(id,categorie):void{
    this.pcbureau.UpdateArticle(id, categorie)
    .subscribe( data => {
      alert("Pc bureau " + id + " modifié");

    },
    (err)=>{
    }
    );
}
addPcBureau(id,categorie):void{
    this.pcbureau.AddArticle(id, categorie)
    .subscribe( data => {
      alert("Pc bureau " + id + " ajouté");

    },
    (err)=>{
    }
    );
  }


}
