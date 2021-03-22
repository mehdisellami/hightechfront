import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private http: HttpClient) { }

  getBoutique(){
    return this.http.get<Object>("http://localhost:8080/Hightech/hightech/boutique");

  }
}
