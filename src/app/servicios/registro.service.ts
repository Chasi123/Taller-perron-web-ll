import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  private API_SPRING = "http://localhost:8080/registro";

  postUsuario(producto: any): Observable<any>{
    return this.http.post(`${this.API_SPRING}/guardar`, producto)
  }

  getUsuario(): Observable<any>{
    return this.http.get(`${this.API_SPRING}`);
  }
}
