import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuutenticacionService {

  constructor() { }
  private UsuarioValido={
  usuario:'admin',
  password:'1234',
  }

  login=(usuario:string, password:string)=>{
    if(usuario==this.UsuarioValido.usuario && password==this.UsuarioValido.password){
      localStorage.setItem('user', usuario)
      return true;
    }
      return false;
  }
  sesionIniciada = ()=>{
    return localStorage.getItem('user') !=null;
  }

  logout=()=>{
    localStorage.removeItem('user');
  }
}
