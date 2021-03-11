import { Component, OnInit } from '@angular/core';
import {CatearticlesService} from 'src/app/services/catearticles.service';

@Component({
  selector: 'app-telaccessoires',
  templateUrl: './telaccessoires.component.html',
  styleUrls: ['./telaccessoires.component.css']
})
export class TelaccessoiresComponent implements OnInit {

  articles: any=[];
  constructor(private telaccessoires: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit();
  }

  GetProduit(){
    this.telaccessoires.getarticles(6).subscribe(
      (data) => {
        this.articles=data;
      console.log(data);  
  }
    );

}


}
