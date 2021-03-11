import { Component, OnInit } from '@angular/core';
import { StockageService } from 'src/app/services/stockage.service';

@Component({
  selector: 'app-stockage-accessoires',
  templateUrl: './stockage-accessoires.component.html',
  styleUrls: ['./stockage-accessoires.component.css']
})
export class StockageAccessoiresComponent implements OnInit {

  stockageAccessoire:any=[];

  constructor(private stockageServi:StockageService) { }

  ngOnInit(): void {
    this.GetStockageAccesoires();
  }


  GetStockageAccesoires(){
    this.stockageServi.getStockage(9).subscribe(
      (data) =>{
        this.stockageAccessoire=data;
        console.log(this.stockageAccessoire);
    }
    );
  }
}
