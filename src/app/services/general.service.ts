import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private jsonUrl = '../../../assets/jsons/carrusel.json';

  constructor(private http: HttpClient) { }

  getCarruselData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}