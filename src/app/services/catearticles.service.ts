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
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/articlebycategorie/"+categorieID);
    }

  getAllarticles(){
    return this.http.get<object>("http://localhost:8080/Hightech/hightech/listearticle");

  }

<<<<<<< HEAD
  DeleteArticle(idCategorie){
    return this.http.delete("http://localhost:8080/Hightech/hightech/listearticle/"+idCategorie);

  }

  UpdateArticle(idCategorie, categorie){
    return this.http.put("http://localhost:8080/Hightech/hightech/listearticle/"+idCategorie,categorie);

  }
  AddArticle(idCategorie, categorie){
    return this.http.post("http://localhost:8080/Hightech/hightech/listearticle/"+idCategorie,categorie);
=======
  
  RecupMission(id){
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/listearticle/"+id);
  }

  postarticles(article){
    return this.http.post<Articles>("http://localhost:8080/Hightech/hightech/listearticle",article);
  }

  putarticles(idArticle,article){
    return this.http.put<Articles>("http://localhost8080/Hightech/hightech/listearticle/"+idArticle ,article);
  }

    DeleteArticle(idArticle){
    return this.http.delete("http://localhost:8080/Hightech/hightech/listearticle/"+idArticle);
>>>>>>> f88de70e229b2c0111ea08f60262c36af055ef1e

  }
/*
  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
    }*/
  }
