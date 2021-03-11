import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatearticlesService {

  constructor(private http : HttpClient) { }

  
  getcatarticles(categorieID){
    this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/articlebycategorie/"+categorieID);
  }
}
