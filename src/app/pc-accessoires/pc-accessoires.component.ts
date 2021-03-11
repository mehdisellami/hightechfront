import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-pc-accessoires',
  templateUrl: './pc-accessoires.component.html',
  styleUrls: ['./pc-accessoires.component.css']
})
export class PcAccessoiresComponent implements OnInit {

  articles: any=[];
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
delPcAccessoires(id):void{
  this.pcaccessoires.DeleteArticle(id)
  .subscribe( data => {
    alert("Accesoire PC supprimé " + id + " supprimée");

  },
  (err)=>{
  }
  );
}

updatePcAccessoire(id,categorie):void{
  this.pcaccessoires.UpdateArticle(id, categorie)
  .subscribe( data => {
    alert("Pc accessoire " + id + " modifié");

  },
  (err)=>{
  }
  );

}
}
