// ...existing code...
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuutenticacionService } from '../../servicios/auutenticacion.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
// ...existing code...

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private authServicio: AuutenticacionService,
    private router: Router,
    private http: HttpClient 
  ) {}

  login = () => {
    this.http.get<{ [key: string]: { usuario: string; password: string } }>('https://app-fire-bf9d6-default-rtdb.firebaseio.com/usuario.json')
      .subscribe(data => {
        const usuarios = Object.values(data || {});
        const encontrado = usuarios.find(u => u.usuario === this.usuario && u.password === this.password);
        if (encontrado) {
          const redireccion = localStorage.getItem('redirectUrl') || '/lista';
          localStorage.removeItem('redirectUrl');
          this.router.navigateByUrl(redireccion);
        } else {
          this.error = 'Usuario o contraseña incorrectos';
        }
      }, err => {
        this.error = 'Error de conexión';
      });
  }
}
// ...existing code...