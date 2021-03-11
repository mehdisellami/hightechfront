import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
articles: any=[];
  constructor(private produit: CatearticlesService) { }

  ngOnInit(): void {
  this.GetProduit();
  }

  GetProduit(){
    this.produit.getAllarticles().subscribe(
      (data) => {
        this.articles=data;
      console.log(data);  
  }
    );

}
}
