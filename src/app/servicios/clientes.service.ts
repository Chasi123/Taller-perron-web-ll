import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private API_CLIENTES="https://app-fire-bf9d6-default-rtdb.firebaseio.com"

  guardarCliente(cliente:any):Observable<any> {
    return this.http.post(`${this.API_CLIENTES}/clientes.json`, cliente);
  }

  getCliente():Observable<any>{
      return this.http.get(`${this.API_CLIENTES}/clientes.json`);
  }

  buscarCliente(id:string):Observable<any>{
    return this.http.get(`${this.API_CLIENTES}/clientes/${id}.json`);
  }
  eliminarCliente(id:string):Observable<any>{
    return this.http.delete(`${this.API_CLIENTES}/clientes/${id}.json`);
  }

  editarCliente(id:string, cliente:any):Observable<any>{
    return this.http.put(`${this.API_CLIENTES}/clientes/${id}.json`, cliente);
  }
}
