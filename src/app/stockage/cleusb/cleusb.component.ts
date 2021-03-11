import { Component, OnInit } from '@angular/core';
import { ClesusbService } from 'src/app/services/clesusb.service';

@Component({
  selector: 'app-cleusb',
  templateUrl: './cleusb.component.html',
  styleUrls: ['./cleusb.component.css']
})
export class CleusbComponent implements OnInit {

  clesusb : any=[];
  constructor(private clesusbServ:ClesusbService) { }

  ngOnInit(): void {
    this.GetClesusb();
  }

  GetClesusb(){
    this.clesusbServ.getClesusb(8).subscribe(
      (data) =>{
        this.clesusb=data;
        console.log(this.clesusb);

      }
    )
  }

}
