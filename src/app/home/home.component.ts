import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../services/boutique.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabBoutique:any=[]

  constructor(private boutiqueService:BoutiqueService) { }

  ngOnInit(): void {
    this.getBoutique()
  }

  getBoutique(){
    this.boutiqueService.getBoutique().subscribe(
      (data)=>{
        this.tabBoutique=data
        console.log(this.tabBoutique)

      }
    )
    
  }
}
