import { Component, OnInit } from '@angular/core';
import {CatearticlesService} from '../services/catearticles.service';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {
  articles: any=[];
  constructor(private pcbureau: CatearticlesService) { }

  ngOnInit(): void {
    this.GetProduit()
  }

  GetProduit(){
    this.pcbureau.getarticles(2).subscribe(
      (data) => {
        this.articles=data;
        console.log(this.articles);
      }
    );
  }
}
