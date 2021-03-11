import { Component, OnInit } from '@angular/core';
import { StockageService } from 'src/app/services/stockage.service';
import { CatearticlesService } from 'src/app/services/catearticles.service';
@Component({
  selector: 'app-cleusb',
  templateUrl: './cleusb.component.html',
  styleUrls: ['./cleusb.component.css']
})
export class CleusbComponent implements OnInit {
  articles: any=[];
  constructor(private produit: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit();
  }

  GetProduit(){
    this.produit.getarticles(8).subscribe(
      (data) => {
        this.articles=data;
      console.log(data);  
  }
    );

}

}
