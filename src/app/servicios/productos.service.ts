import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    constructor( private http: HttpClient) { }

  private API_SPRING = 'http://localhost:8080/productos';

  postProducto(producto: any): Observable<any>{
    return this.http.post(`${this.API_SPRING}/guardar`, producto)
  }

  getProductos(): Observable<any>{
    return this.http.get(`${this.API_SPRING}`);
  }
}
