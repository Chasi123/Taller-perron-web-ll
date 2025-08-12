import { Component } from '@angular/core';
import { AuutenticacionService } from '../../servicios/auutenticacion.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string='';
  password:string='';
  error:string='';

  constructor(private authServicio: AuutenticacionService,
    private router: Router
  ){}

  login=()=>{
    const sessionExitosa = this.authServicio.login(this.usuario, this.password)
    if(sessionExitosa){
      const redireccion = localStorage.getItem('redirectUrl') || '/login';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    }else{
      this.error='Usuario o contraseña incorrectos';
    }
  }
}
