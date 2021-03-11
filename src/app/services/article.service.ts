import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {



  constructor(private http: HttpClient) { }


  getArticle(categorieID) {
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/articlebycategorie/"+categorieID);
    }
}
