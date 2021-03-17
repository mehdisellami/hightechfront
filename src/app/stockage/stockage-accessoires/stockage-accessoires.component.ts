import { Component, OnInit } from '@angular/core';
import {CatearticlesService} from 'src/app/services/catearticles.service';
@Component({
  selector: 'app-stockage-accessoires',
  templateUrl: './stockage-accessoires.component.html',
  styleUrls: ['./stockage-accessoires.component.css']
})
export class StockageAccessoiresComponent implements OnInit {

  stockageAccessoire:any=[];

  constructor(private stockageServi:CatearticlesService) { }

  ngOnInit(): void {
    this.GetStockageAccesoires();
  }


  GetStockageAccesoires(){
    this.stockageServi.getarticles(9).subscribe(
      (data) =>{
        this.stockageAccessoire=data;
        console.log(this.stockageAccessoire);
    }
    );
  }
  panier(id):void{
    window.open("/panier/"+id,"_self");
  
  }
}
