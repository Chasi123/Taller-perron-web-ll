import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuutenticacionService } from '../../servicios/auutenticacion.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  password = '';
  error = '';

  constructor(private authServicio: AuutenticacionService, private router: Router) {}

  login() {
    this.authServicio.login(this.usuario, this.password).subscribe(exito => {
      if (exito) {
        localStorage.setItem('user', 'true');
        this.router.navigate(['/home']); 
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
  
}
