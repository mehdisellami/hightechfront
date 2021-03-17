import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from 'src/app/services/catearticles.service';
@Component({
  selector: 'app-cleusb',
  templateUrl: './cleusb.component.html',
  styleUrls: ['./cleusb.component.css']
})
export class CleusbComponent implements OnInit {
  articles: any=[];
  usb: any=[];
  constructor(private produit: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit();
  }

  GetProduit(){
    this.produit.getarticles(8).subscribe(
      (data) => {
        this.articles=data;
      console.log(data);  
  }
    );

}
panier(id):void{
  window.open("/panier/"+id,"_self");

}




}
