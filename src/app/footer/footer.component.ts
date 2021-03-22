import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../services/boutique.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  tabBoutique:any=[];

  constructor(private boutiqueService : BoutiqueService) { }

  ngOnInit(): void {
    this.getBoutique();
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
