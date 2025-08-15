import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private API_SPRING="http://localhost:8080/clientes"

  postCliente(cliente: any): Observable<any>{
    return this.http.post(`${this.API_SPRING}/guardarCliente`, cliente)
  }

  getCliente(): Observable<any>{
    return this.http.get(`${this.API_SPRING}`);
  }

  actualizarCliente(id: string, cliente: any): Observable<any>{
    return this.http.put(`${this.API_SPRING}/actualizarCliente/${id}`, cliente);
  }
}
