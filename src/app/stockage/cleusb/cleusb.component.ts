import { Component, OnInit } from '@angular/core';
import { StockageService } from 'src/app/services/stockage.service';

@Component({
  selector: 'app-cleusb',
  templateUrl: './cleusb.component.html',
  styleUrls: ['./cleusb.component.css']
})
export class CleusbComponent implements OnInit {

cleUsb:any=[];

  constructor(private stockageService:StockageService) { }

  ngOnInit(): void {

   

  }

  geteUsb(){

    this.stockageService.getStockage(8).subscribe(
      (data) =>{
        this.cleUsb=data;
        console.log(this.cleUsb);

      }
    )
  }

}
