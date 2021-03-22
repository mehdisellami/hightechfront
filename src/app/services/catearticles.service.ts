import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../ajouter-article/Articles.model';



@Injectable({
  providedIn: 'root'
})
export class CatearticlesService {
  constructor(private http: HttpClient) { }


  getarticles(categorieID) {
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/articlebycategorie/" + categorieID);
  }

  getArticleByID(IDarticle){
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle/"+IDarticle);
  }

  getAllarticles() {
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle");

  }
  RecupArticles(id) {
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/" + id);
  }

  postarticles(article) {
    return this.http.post<Articles>("http://localhost:8080/Hightech/hightech/listearticle", article);
  }

  putarticles(article) {
    return this.http.put<Articles>("http://localhost:8080/Hightech/hightech/listearticle", article);
  }

  DeleteArticle(idArticle) {
    return this.http.delete("http://localhost:8080/Hightech/hightech/listearticle/" + idArticle);

  }

  getCategorie(){
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle/categories");

  }
/*
  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
    }*/
  }
