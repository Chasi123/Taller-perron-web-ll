import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuutenticacionService } from '../../servicios/auutenticacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authServicio: AuutenticacionService, private router: Router) {}
  menuAbierto: boolean = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
  logout() {
    this.authServicio.logout();
    this.router.navigate(['/login']);
     localStorage.removeItem('user'); 
  }
}
