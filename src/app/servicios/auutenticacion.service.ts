import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuutenticacionService {
  private baseUrl =
    'https://app-fire-bf9d6-default-rtdb.firebaseio.com/usuario.json';

  constructor(private http: HttpClient) {}

  // Verifica usuario y contraseña
  login(usuario: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((data) => {
        if (!data) return false;
        const usuarios = Object.values(data);
        const encontrado = usuarios.find(
          (u: any) => u.usuario === usuario && u.password === password
        );
        if (encontrado) {
          localStorage.setItem('usuario', JSON.stringify(encontrado));
          return true;
        }
        return false;
      })
    );
  }
  sesionIniciada = () => {
    return localStorage.getItem('usuario') != null;
  };

  logout = () => {
    localStorage.removeItem('usuario');
  };
}
