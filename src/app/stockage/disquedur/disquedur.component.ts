import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClesusbService } from 'src/app/services/clesusb.service';

@Component({
  selector: 'app-disquedur',
  templateUrl: './disquedur.component.html',
  styleUrls: ['./disquedur.component.css']
})
export class DisquedurComponent implements OnInit {
disquedur: any=[];
  constructor(private disquedurServ: ClesusbService) { }

  ngOnInit(): void {
    this.GetDisqueDur();
  }

  GetDisqueDur(){
    this.disquedurServ.getClesusb(7).subscribe(
      (data) =>{
        this.disquedur=data;
        console.log(this.disquedur);
    }
    );
  }
}
