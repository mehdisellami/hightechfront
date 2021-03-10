import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './Articles.model';

@Injectable({
  providedIn: 'root'
})
export class OrdinateursService {
  url = 'http://localhost:8080/article';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
    }
}
