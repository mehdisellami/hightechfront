import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StockageService } from 'src/app/services/stockage.service';

@Component({
  selector: 'app-disquedur',
  templateUrl: './disquedur.component.html',
  styleUrls: ['./disquedur.component.css']
})
export class DisquedurComponent implements OnInit {
disquedur: any=[];
  constructor(private disquedurServ: StockageService) { }

  ngOnInit(): void {
    this.GetDisqueDur();
  }

  GetDisqueDur(){
    this.disquedurServ.getStockage(7).subscribe(
      (data) =>{
        this.disquedur=data;
        console.log(this.disquedur);
    }
    );
  }
}
