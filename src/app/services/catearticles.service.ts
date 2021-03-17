import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './Articles.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CatearticlesService {
  constructor(private http: HttpClient) { }


  getarticles(categorieID) {
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/articlebycategorie/" + categorieID);
  }

  getAllarticles() {
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle");

  }

<<<<<<< HEAD
  
  RecupArticles(id){
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/"+id);
=======
  RecupArticles(id) {
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/" + id);
  }

  postarticles(article) {
    return this.http.post<Articles>("http://localhost:8080/Hightech/hightech/listearticle", article);
>>>>>>> 8281b4d4885f01fe2dfa0758be9248c657d93484
  }

  putarticles(article) {
    return this.http.put<Articles>("http://localhost:8080/Hightech/hightech/listearticle", article);
  }

<<<<<<< HEAD
  putarticles(idArticle,article){
    return this.http.put<Articles>("http://localhost:8080/Hightech/hightech/listearticle/"+idArticle ,article);
=======
  DeleteArticle(idArticle) {
    return this.http.delete("http://localhost:8080/Hightech/hightech/listearticle/" + idArticle);

>>>>>>> 8281b4d4885f01fe2dfa0758be9248c657d93484
  }

  getCategorie(){
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle/categories");

  }
/*
  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
    }*/
  }
