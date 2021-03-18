import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from 'src/app/services/catearticles.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  smartphones:any=[];

  constructor(private telServ:CatearticlesService) { }

  ngOnInit(): void {
    this.getSmartphones();
  }

  getSmartphones(){
    this.telServ.getarticles(4).subscribe(
      (data) =>{
        this.smartphones=data;
        console.log(this.smartphones);

      }
    )
  }

}
