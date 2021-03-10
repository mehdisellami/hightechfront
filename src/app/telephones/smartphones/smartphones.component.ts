import { Component, OnInit } from '@angular/core';
import { TelephonesService } from 'src/app/services/telephones.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  smartphones:any=[];

  constructor(private telServ:TelephonesService) { }

  ngOnInit(): void {
    this.getSmartphones();
  }

  getSmartphones(){
    this.telServ.getTelephones(4).subscribe(
      (data) =>{
        this.smartphones=data;
        console.log(this.smartphones);

      }
    )
  }
}
