import { Component, OnInit } from '@angular/core';
import { CatearticlesService } from '../services/catearticles.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  articles : any =[];

  constructor(public pcportable : CatearticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.pcportable.getarticles(1).subscribe(
      (data) =>{
        this.articles=data;
        console.log(data);

      }
    );
     
  }
}
